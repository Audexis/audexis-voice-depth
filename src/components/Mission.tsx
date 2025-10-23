import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Mission = () => {
  const { elementRef, scrollProgress } = useScrollAnimation();
  
  const scale = 0.95 + scrollProgress * 0.05;
  const opacity = Math.min(1, scrollProgress * 2);
  const blur = Math.max(0, 8 - scrollProgress * 8);

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        transform: `scale(${scale})`,
        opacity,
        filter: `blur(${blur}px)`,
        transition: 'filter 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Glassmorphic background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl" 
           style={{ transform: `translateY(${scrollProgress * -50}px)` }} />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-12 text-gradient"
            style={{ 
              transform: `translateY(${(1 - scrollProgress) * 30}px)`,
              opacity: opacity 
            }}>
          Reimagining What Machines Can Hear.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
           style={{ 
             transform: `translateY(${(1 - scrollProgress) * 40}px)`,
             opacity: opacity 
           }}>
          At Audexis, we're building systems that truly listen — understanding not just what's said, but how it's said. 
          We bring together advanced AI and acoustic intelligence to power the next generation of human-machine communication.
        </p>
      </div>
    </section>
  );
};
