import { Sparkles, Brain, Radio, Zap, Palette, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const capabilities = [
  {
    icon: Brain,
    title: "AI-Driven Voice Intelligence",
    description: "Systems that understand speech in real time — the meaning, tone, and emotion behind every word."
  },
  {
    icon: Sparkles,
    title: "Contextual Speech Understanding",
    description: "Technology that deciphers intent and nuance across conversations, enabling deeper human-AI interaction."
  },
  {
    icon: Radio,
    title: "Acoustic Signal Analysis",
    description: "Interpreting sound beyond speech — environment, background, and emotion — in real-world conditions."
  },
  {
    icon: Zap,
    title: "Real-Time Decision Systems",
    description: "Responsive intelligence that can act immediately, bridging awareness with action."
  },
  {
    icon: Palette,
    title: "AI Studio (VoiceTech Creation)",
    description: "A creative and technical lab where we design and build next-generation products powered by our voice technology — from intelligent call systems to emotion-aware assistants and real-time conversational interfaces. Each creation begins with sound, and ends with understanding."
  },
  {
    icon: Building2,
    title: "Enterprise Voice Solutions",
    description: "Tailored implementations of our systems for businesses. We deploy and adapt our voice intelligence layer to enterprise needs — powering analytics, operations, and decision systems that listen and respond with context."
  }
];

export const Capabilities = () => {
  const { elementRef, scrollProgress } = useScrollAnimation();
  
  const scale = 0.95 + scrollProgress * 0.05;
  const opacity = Math.min(1, scrollProgress * 2);
  const blur = Math.max(0, 8 - scrollProgress * 8);

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
      style={{
        transform: `scale(${scale})`,
        opacity,
        filter: `blur(${blur}px)`,
        transition: 'filter 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Glassmorphic background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
           style={{ transform: `translate(-50%, -50%) scale(${0.8 + scrollProgress * 0.2})` }} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '5s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 
          className="text-5xl md:text-6xl font-light mb-20 text-center text-gradient"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
            opacity: opacity 
          }}
        >
          What We Do.
        </h2>
        
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 40}px)`,
            opacity: opacity 
          }}
        >
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="glass-card p-10 rounded-3xl group hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-[1.02] cursor-default"
            >
              <capability.icon className="w-12 h-12 mb-6 text-white/80 group-hover:text-white transition-colors" />
              
              <h3 className="text-2xl font-medium mb-4">
                {capability.title}
              </h3>
              
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
