import { Waves, MessageSquare, Zap, Phone, Bot, Shield, Headphones, TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AudioParticles } from "./AudioParticles";
import { SoundWaves } from "./SoundWaves";

const coreCapabilities = [
  {
    icon: Waves,
    title: "Signal to Meaning",
    description: "From raw audio to structured understanding: words, tone, context, intent."
  },
  {
    icon: MessageSquare,
    title: "Context for LLMs",
    description: "We provide clean, privacy-aware metadata that gives large language models awareness and continuity."
  },
  {
    icon: Zap,
    title: "Real-Time Decisions",
    description: "The layer enables intelligent reactions, safety cues, and adaptive workflows instantly, without repeated input."
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
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section ref={sectionRef} className="animate-section relative py-32 px-6 section-container overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Parallax audio effects */}
      <AudioParticles density="medium" />
      <SoundWaves />
      
      {/* Enhanced ambient effects */}
      <div className="absolute inset-0">
        <div className="ambient-orb ambient-orb-1" style={{ top: '30%', left: '15%', animationDelay: '0.5s' }} />
        <div className="ambient-orb ambient-orb-2" style={{ bottom: '30%', right: '20%', animationDelay: '2.5s' }} />
      </div>
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 opacity-50" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Radial focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      <div className="section-glow" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="section-heading text-5xl md:text-6xl font-light mb-8 text-center text-gradient premium-text-shadow">
          The Audio Intelligence Layer
        </h2>
        
        <p className="section-content text-xl md:text-2xl text-muted-foreground font-light text-center mb-20 max-w-4xl mx-auto">
          A unifying layer that listens, understands, and shares meaning with the systems around it.
        </p>
        
        {/* Core Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {coreCapabilities.map((capability, index) => (
            <div
              key={index}
              className="section-card glass-card p-10 rounded-3xl group hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] hover:scale-[1.02] cursor-default relative overflow-hidden"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <capability.icon className="relative z-10 w-12 h-12 mb-6 text-white/80 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              
              <h3 className="relative z-10 text-2xl font-medium mb-4">
                {capability.title}
              </h3>
              
              <p className="relative z-10 text-muted-foreground text-lg font-light leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* What Becomes Possible */}
        <div className="section-card glass-card p-12 rounded-3xl bg-gradient-to-br from-card/60 to-card/40 relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
          <h3 className="relative z-10 text-3xl font-light mb-12 text-center text-gradient premium-text-shadow">
            What Becomes Possible
          </h3>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-6 mb-12">
            {possibilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:scale-[1.02]"
              >
                <item.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-all duration-300 flex-shrink-0 mt-1 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <p className="text-lg font-light text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
          <p className="relative z-10 text-2xl font-light text-center text-gradient mt-8 premium-text-shadow">
            Give your systems ears, context, and presence.
          </p>
        </div>
      </div>
    </section>
  );
};
