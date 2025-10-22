import { useEffect, useState } from "react";

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          aria-label={`Go to ${section.label}`}
        >
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index
                ? 'border-white bg-white scale-125'
                : 'border-white/40 bg-transparent hover:border-white/80 hover:scale-110'
            }`}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
