import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useGSAPScroll = (onIndexChange?: (index: number) => void) => {
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const slidesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Get all slide sections
    const slides = gsap.utils.toArray<HTMLElement>(".cinematic-slide");
    slidesRef.current = slides;

    if (slides.length === 0) return;

    // Initialize: only first slide visible and interactive
    slides.forEach((slide, i) => {
      if (i === 0) {
        gsap.set(slide, { 
          scale: 1, 
          opacity: 1, 
          filter: 'blur(0px)',
          zIndex: 1,
          pointerEvents: 'auto'
        });
      } else {
        gsap.set(slide, { 
          scale: 0.90, 
          opacity: 0, 
          filter: 'blur(12px)',
          z: 80,
          zIndex: 0,
          pointerEvents: 'none'
        });
      }

      // Initialize vignette overlay
      const vignette = slide.querySelector('.slide-vignette') as HTMLElement;
      if (vignette) {
        gsap.set(vignette, { opacity: 0.18 });
      }
    });

    /**
     * EXACT ZOOM TRANSITION
     * goTo(index) - Builds master timeline with outgoing and incoming child timelines
     */
    const goTo = (targetIndex: number) => {
      if (targetIndex < 0 || targetIndex >= slides.length) return;
      if (targetIndex === activeIndexRef.current) return;
      if (isAnimatingRef.current) return; // Input guard during animation

      isAnimatingRef.current = true;
      const currentIndex = activeIndexRef.current;
      const currentSlide = slides[currentIndex];
      const nextSlide = slides[targetIndex];

      // Get text elements for parallax
      const currentTexts = currentSlide.querySelectorAll('h1, h2, h3, p, button, a');
      const nextTexts = nextSlide.querySelectorAll('h1, h2, h3, p, button, a');
      
      const currentVignette = currentSlide.querySelector('.slide-vignette') as HTMLElement;
      const nextVignette = nextSlide.querySelector('.slide-vignette') as HTMLElement;

      // Master timeline
      const masterTL = gsap.timeline({
        onComplete: () => {
          // Cleanup: ensure only active slide is interactive
          slides.forEach((slide, i) => {
            if (i === targetIndex) {
              slide.style.pointerEvents = 'auto';
              slide.style.zIndex = '1';
            } else {
              slide.style.pointerEvents = 'none';
              slide.style.zIndex = '0';
            }
          });
          activeIndexRef.current = targetIndex;
          isAnimatingRef.current = false;
          onIndexChange?.(targetIndex);
        }
      });

      if (prefersReducedMotion) {
        // Simple crossfade for reduced motion
        masterTL
          .to(currentSlide, { opacity: 0, duration: 0.22, ease: 'power2.inOut' }, 0)
          .to(nextSlide, { opacity: 1, duration: 0.22, ease: 'power2.inOut' }, 0);
      } else {
        // Set next slide to starting position
        gsap.set(nextSlide, { 
          scale: 0.90, 
          opacity: 0, 
          filter: 'blur(12px)',
          z: 80,
          zIndex: 1
        });

        /**
         * OUTGOING TIMELINE (TL A)
         * Current slide scales up to 1.16, blurs to 6px, fades to 0, slight Z push
         * Timing: ease in for first 65%, linger final 35% while opacity finishes
         */
        const outgoingTL = gsap.timeline();
        outgoingTL
          .to(currentSlide, {
            scale: 1.16,
            z: -60,
            filter: 'blur(6px)',
            duration: 0.65,
            ease: 'power3.in'
          }, 0)
          .to(currentSlide, {
            opacity: 0,
            duration: 1.0,
            ease: 'power3.inOut'
          }, 0);

        // Outgoing text parallax: translateY(18px) and fade over 420ms
        outgoingTL.to(currentTexts, {
          y: 18,
          opacity: 0,
          duration: 0.42,
          ease: 'power3.in',
          stagger: 0.02
        }, 0);

        // Vignette peak during transition
        if (currentVignette) {
          outgoingTL.to(currentVignette, {
            opacity: 0.25,
            duration: 0.5,
            ease: 'power2.inOut'
          }, 0);
        }

        /**
         * INCOMING TIMELINE (TL B)
         * Next slide starts at 0.90 scale and 12px blur behind, sharpens to 0px, ends at scale 1.00
         * Timing: start at 120ms, end at 1000ms
         */
        const incomingTL = gsap.timeline();
        incomingTL
          .to(nextSlide, {
            scale: 1.0,
            opacity: 1,
            filter: 'blur(0px)',
            z: 0,
            duration: 0.88,
            ease: 'power3.inOut'
          }, 0.12);

        // Incoming text parallax: translateY(14px) to 0 and fade between 320ms and 920ms
        gsap.set(nextTexts, { y: 14, opacity: 0 });
        incomingTL.to(nextTexts, {
          y: 0,
          opacity: 1,
          duration: 0.60,
          ease: 'power3.out',
          stagger: 0.02
        }, 0.32);

        // Vignette returns to idle
        if (nextVignette) {
          incomingTL.fromTo(nextVignette, 
            { opacity: 0.25 },
            {
              opacity: 0.18,
              duration: 0.5,
              ease: 'power2.inOut'
            }, 
            0.5
          );
        }

        // Add both timelines to master
        masterTL.add(outgoingTL, 0);
        masterTL.add(incomingTL, 0);
      }
    };

    /**
     * INPUT HANDLERS - Debounced and blocked during animation
     * One input = one slide change
     */
    
    // Wheel and trackpad
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimatingRef.current) return;
      
      if (e.deltaY > 0) {
        // Scroll down
        goTo(activeIndexRef.current + 1);
      } else if (e.deltaY < 0) {
        // Scroll up
        goTo(activeIndexRef.current - 1);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement?.tagName === 'INPUT' || 
          activeElement?.tagName === 'TEXTAREA' || 
          activeElement?.tagName === 'SELECT') {
        return;
      }

      if (isAnimatingRef.current) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          goTo(activeIndexRef.current + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          goTo(activeIndexRef.current - 1);
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(slides.length - 1);
          break;
      }
    };

    // Touch swipe support
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goTo(activeIndexRef.current + 1);
        } else {
          goTo(activeIndexRef.current - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    // Expose goTo for external navigation (e.g., dot nav)
    (window as any).slideGoTo = goTo;

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      delete (window as any).slideGoTo;
    };
  }, [onIndexChange]);
};
