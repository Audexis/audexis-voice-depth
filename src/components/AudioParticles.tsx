import { useParallax } from "@/hooks/useParallax";

interface AudioParticlesProps {
  density?: 'low' | 'medium' | 'high';
}

export const AudioParticles = ({ density = 'medium' }: AudioParticlesProps) => {
  const slowParallax = useParallax(0.1);
  const mediumParallax = useParallax(0.2);
  const fastParallax = useParallax(0.35);

  const particleCount = density === 'low' ? 8 : density === 'medium' ? 12 : 18;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating frequency bars - slow parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${slowParallax}px)` }}
      >
        {Array.from({ length: Math.floor(particleCount / 3) }).map((_, i) => (
          <div
            key={`bar-${i}`}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse-slow"
            style={{
              left: `${(i * 100) / Math.floor(particleCount / 3) + 10}%`,
              top: `${20 + (i * 15) % 50}%`,
              height: `${80 + (i * 40) % 120}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Sound wave circles - medium parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${mediumParallax}px)` }}
      >
        {Array.from({ length: Math.floor(particleCount / 4) }).map((_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute rounded-full border border-white/3"
            style={{
              left: `${(i * 80) % 90}%`,
              top: `${(i * 60) % 80}%`,
              width: `${100 + (i * 80) % 200}px`,
              height: `${100 + (i * 80) % 200}px`,
              animation: `pulse ${4 + (i % 3)}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating dots - fast parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${fastParallax}px)` }}
      >
        {Array.from({ length: Math.floor(particleCount / 2) }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white/8 animate-float-slow"
            style={{
              left: `${(i * 40) % 95}%`,
              top: `${(i * 35) % 90}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
