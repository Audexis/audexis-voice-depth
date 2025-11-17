import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Mission = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
      </div>
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 opacity-60" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="section-heading text-5xl md:text-6xl font-light mb-12 text-gradient premium-text-shadow">
          Reimagining What Machines Can Hear.
        </h2>
        
        <p className="section-content text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
          At Audexis, we're building systems that truly listen — understanding not just what's said, but how it's said. 
          We bring together advanced AI and acoustic intelligence to power the next generation of human-machine communication.
        </p>
      </div>
    </section>
  );
};
