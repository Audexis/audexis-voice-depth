import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAPScroll = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Get all sections
    const sections = gsap.utils.toArray<HTMLElement>(".cinematic-section");
    
    if (prefersReducedMotion) {
      // Simple fade transitions for reduced motion preference
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      return;
    }

    // Cinematic zoom transitions using GSAP + ScrollTrigger
    sections.forEach((section, index) => {
      // Zoom in current section as it leaves
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          // Current section scales up to 1.12 and fades/blurs as user scrolls away
          gsap.to(section, {
            scale: 1 + progress * 0.12,
            opacity: 1 - progress * 0.3,
            filter: `blur(${progress * 8}px)`,
            duration: 0.1,
            ease: "power2.inOut"
          });
        }
      });

      // Zoom out next section as it enters
      if (index < sections.length - 1) {
        const nextSection = sections[index + 1];
        ScrollTrigger.create({
          trigger: nextSection,
          start: "top bottom",
          end: "top top",
          scrub: 1.2,
          onUpdate: (self) => {
            const progress = self.progress;
            // Next section scales from 0.92 to 1.0 and sharpens to full clarity
            gsap.to(nextSection, {
              scale: 0.92 + progress * 0.08,
              opacity: 0.7 + progress * 0.3,
              filter: `blur(${(1 - progress) * 8}px)`,
              duration: 0.1,
              ease: "power2.inOut"
            });
          }
        });
      }

      // Snap to section boundaries
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: 1,
          duration: { min: 0.9, max: 1.2 },
          ease: "power2.inOut"
        }
      });
    });

    // Keyboard navigation - arrow keys and PageUp/PageDown
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (activeElement?.tagName === 'INPUT' || 
          activeElement?.tagName === 'TEXTAREA' || 
          activeElement?.tagName === 'SELECT') {
        return;
      }

      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          window.scrollBy({ top: windowHeight, behavior: 'smooth' });
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          window.scrollBy({ top: -windowHeight, behavior: 'smooth' });
          break;
        case 'Home':
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'End':
          e.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
