const sections = [
  { id: "hero", label: "Home" },
  { id: "mission", label: "Mission" },
  { id: "capabilities", label: "What We Do" },
  { id: "audio-intelligence", label: "Intelligence Layer" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" }
];

interface ProgressDotsProps {
  activeIndex?: number;
}

export const ProgressDots = ({ activeIndex = 0 }: ProgressDotsProps) => {

  const scrollToSection = (index: number) => {
    // Use the exposed slideGoTo function from GSAP hook
    if ((window as any).slideGoTo) {
      (window as any).slideGoTo(index);
    }
  };

  return (
    <nav 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
      aria-label="Section navigation"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className="group relative"
          aria-label={`Go to ${section.label}`}
          aria-current={activeIndex === index ? "true" : "false"}
        >
          <div
            className={`rounded-full border-2 transition-all duration-300 ${
              activeIndex === index
                ? 'w-5 h-2.5 border-white bg-white/90'
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
