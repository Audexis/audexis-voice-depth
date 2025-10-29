import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "mission", label: "Mission" },
  { id: "capabilities", label: "What We Do" },
  { id: "audio-intelligence", label: "Intelligence Layer" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" }
];

export const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const isAnimating = useRef(false);
  const lastWheelTime = useRef(0);
  const touchStartY = useRef(0);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(s => s.id === entry.target.id);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    if (isAnimating.current || index < 0 || index >= sections.length) return;
    
    const element = document.getElementById(sections[index].id);
    const container = document.getElementById('scroll-container');
    if (!element || !container) return;

    isAnimating.current = true;

    const targetPosition = element.offsetTop;
    const startPosition = container.scrollTop;
    const distance = targetPosition - startPosition;
    const duration = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 800 : 1000);
    const startTime = performance.now();

    // Premium easing function: cubic-bezier(0.22, 1, 0.36, 1)
    const easeOutExpo = (t: number) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      container.scrollTop = startPosition + distance * eased;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isAnimating.current = false;
      }
    };

    if (duration > 0) {
      requestAnimationFrame(animate);
    } else {
      container.scrollTop = targetPosition;
      isAnimating.current = false;
    }
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = document.getElementById('scroll-container');
    if (!container) return;

    // Throttled wheel handler
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if scrolling inside a scrollable element
      if (target.closest('[data-scrollable]') || 
          target.closest('input') || 
          target.closest('textarea') || 
          target.closest('select')) {
        return;
      }

      const now = Date.now();
      if (now - lastWheelTime.current < 950 || isAnimating.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 10) return; // Ignore tiny movements

      e.preventDefault();
      lastWheelTime.current = now;

      if (delta > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1);
      } else if (delta < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    };

    // Debounced touch handler
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('[data-scrollable]') || 
          target.closest('input') || 
          target.closest('textarea') || 
          target.closest('select')) {
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      // Minimum 60px vertical travel
      if (Math.abs(deltaY) < 60 || isAnimating.current) return;

      if (deltaY > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1);
      } else if (deltaY < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating.current) return;

      const activeElement = document.activeElement;
      if (activeElement?.tagName === 'INPUT' || 
          activeElement?.tagName === 'TEXTAREA' || 
          activeElement?.tagName === 'SELECT') {
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          if (activeSection < sections.length - 1) {
            e.preventDefault();
            scrollToSection(activeSection + 1);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          if (activeSection > 0) {
            e.preventDefault();
            scrollToSection(activeSection - 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, prefersReducedMotion]);

  return (
    <nav 
      className="fixed top-1/2 -translate-y-1/2 z-40 hidden min-[360px]:lg:flex flex-col gap-4"
      style={{
        right: 'max(24px, calc(env(safe-area-inset-right, 0px) + 16px))'
      }}
      aria-label="Section navigation"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className="group relative"
          aria-label={`Go to ${section.label}`}
          aria-current={activeSection === index ? 'true' : 'false'}
        >
          <div
            className={`rounded-full border-2 transition-all duration-500 ${
              activeSection === index
                ? 'w-5 h-2.5 border-white bg-white/90 backdrop-blur-sm'
                : 'w-2.5 h-2.5 border-white/40 bg-transparent hover:border-white/80 hover:scale-125'
            }`}
          />
          <span className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
