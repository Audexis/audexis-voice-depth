import { Waves, MessageSquare, Zap, Phone, Bot, Shield, Headphones, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const coreCapabilities = [
  {
    icon: Waves,
    title: "Signal to Meaning",
    description: "From raw audio to structured understanding — words, tone, context, intent."
  },
  {
    icon: MessageSquare,
    title: "Context for LLMs",
    description: "We provide clean, privacy-aware metadata that gives large language models awareness and continuity."
  },
  {
    icon: Zap,
    title: "Real-Time Decisions",
    description: "The layer enables intelligent reactions, safety cues, and adaptive workflows — instantly, without repeated input."
  }
];

const possibilities = [
  {
    icon: Phone,
    text: "Ambient intelligence for calls, support, and dispatch"
  },
  {
    icon: Bot,
    text: "Copilot agents that detect urgency and emotion"
  },
  {
    icon: TrendingUp,
    text: "Operational awareness with actionable highlights"
  },
  {
    icon: Shield,
    text: "Compliance and safety signals in real time"
  },
  {
    icon: Headphones,
    text: "Assistants that remember and evolve with context"
  }
];

export const AudioIntelligenceLayer = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" 
           style={{ transform: `rotate(${scrollProgress * 45}deg)` }} />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 
          className="text-5xl md:text-6xl font-light mb-8 text-center text-gradient"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
            opacity: opacity 
          }}
        >
          The Audio Intelligence Layer
        </h2>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground font-light text-center mb-20 max-w-4xl mx-auto"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 35}px)`,
            opacity: opacity 
          }}
        >
          A unifying layer that listens, understands, and shares meaning with the systems around it.
        </p>
        
        {/* Core Capabilities Grid */}
        <div 
          className="grid md:grid-cols-3 gap-8 mb-24"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 40}px)`,
            opacity: opacity 
          }}
        >
          {coreCapabilities.map((capability, index) => (
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
        
        {/* What Becomes Possible */}
        <div 
          className="glass-card p-12 rounded-3xl bg-gradient-to-br from-card/60 to-card/40"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 50}px)`,
            opacity: opacity 
          }}
        >
          <h3 className="text-3xl font-light mb-12 text-center text-gradient">
            What Becomes Possible
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {possibilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
              >
                <item.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                <p className="text-lg font-light text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-2xl font-light text-center text-gradient mt-8">
            Give your systems ears, context, and presence.
          </p>
        </div>
      </div>
    </section>
  );
};
