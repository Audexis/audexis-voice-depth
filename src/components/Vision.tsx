import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Vision = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="ambient-orb ambient-orb-1" style={{ animationDelay: '1s' }} />
        <div className="ambient-orb ambient-orb-2" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <blockquote className="section-heading text-4xl md:text-6xl font-light leading-tight mb-8 text-gradient premium-text-shadow">
          "The future doesn't just speak — it listens."
        </blockquote>
        
        <p className="section-content text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
          Audexis is where technology learns to understand the human voice at its depth.
        </p>
      </div>
    </section>
  );
};
