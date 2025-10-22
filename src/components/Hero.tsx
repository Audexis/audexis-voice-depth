import { Button } from "@/components/ui/button";
import { WaveformAnimation } from "./WaveformAnimation";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20">
        <WaveformAnimation />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 animate-fade-in-up text-gradient">
          Intelligence That Listens.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 animate-fade-in-up [animation-delay:200ms] max-w-3xl mx-auto">
          Transforming voice into understanding, in real time.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="glass-button text-lg px-12 py-6 rounded-full animate-fade-in-up [animation-delay:400ms] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          Book a Call
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/40 rounded-full animate-pulse" />
        </div>
        <span className="text-white/40 text-sm font-light tracking-widest">SCROLL ↓</span>
      </div>
    </section>
  );
};
