import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Vision = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" 
           style={{ transform: `translateX(${scrollProgress * -80}px)` }} />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '5s', transform: `translateX(${scrollProgress * 80}px)` }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <blockquote 
          className="text-4xl md:text-6xl font-light leading-tight mb-8 text-gradient"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
            opacity: opacity 
          }}
        >
          "The future doesn't just speak — it listens."
        </blockquote>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 40}px)`,
            opacity: opacity 
          }}
        >
          Audexis is where technology learns to understand the human voice at its depth.
        </p>
      </div>
    </section>
  );
};
