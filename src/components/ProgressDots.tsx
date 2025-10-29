import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "mission", label: "Mission" },
  { id: "capabilities", label: "What We Do" },
  { id: "audio-intelligence", label: "Intelligence Layer" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" }
];

export const ProgressDots = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          aria-current={activeSection === index ? "true" : "false"}
        >
          <div
            className={`rounded-full border-2 transition-all duration-300 ${
              activeSection === index
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
