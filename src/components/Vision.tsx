import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AudioParticles } from "./AudioParticles";
import { SoundWaves } from "./SoundWaves";

export const Vision = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="animate-section relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax audio particles */}
      <AudioParticles density="low" />
      <SoundWaves />
      
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="ambient-orb ambient-orb-1" style={{ animationDelay: '1s' }} />
        <div className="ambient-orb ambient-orb-2" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      <div className="section-glow" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
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
