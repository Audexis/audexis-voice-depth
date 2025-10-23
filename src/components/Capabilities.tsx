import { Sparkles, Brain, Radio, Zap, Palette, Building2 } from "lucide-react";

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
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-20 text-center text-gradient">
          What We Do.
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
