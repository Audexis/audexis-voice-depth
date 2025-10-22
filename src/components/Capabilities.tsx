import { Sparkles, Brain, Radio, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI-Driven Voice Intelligence",
    description: "Advanced systems that process and understand vocal patterns with unprecedented accuracy."
  },
  {
    icon: Sparkles,
    title: "Contextual Speech Understanding",
    description: "Deep comprehension of meaning, emotion, and intent beyond mere transcription."
  },
  {
    icon: Radio,
    title: "Acoustic Signal Analysis",
    description: "Sophisticated processing of audio data to extract insights invisible to traditional systems."
  },
  {
    icon: Zap,
    title: "Real-Time Decision Systems",
    description: "Instantaneous processing and response, enabling seamless human-machine interaction."
  }
];

export const Capabilities = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-20 text-center text-gradient">
          What We Do.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="glass-card p-10 rounded-3xl group hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] cursor-default"
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
