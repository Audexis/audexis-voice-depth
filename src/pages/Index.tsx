import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Capabilities } from "@/components/Capabilities";
import { AudioIntelligenceLayer } from "@/components/AudioIntelligenceLayer";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section id="hero" className="animate-section">
        <Hero />
      </section>
      
      <section id="mission" className="animate-section">
        <Mission />
      </section>
      
      <section id="capabilities" className="animate-section">
        <Capabilities />
      </section>
      
      <section id="audio-intelligence" className="animate-section">
        <AudioIntelligenceLayer />
      </section>
      
      <section id="vision" className="animate-section">
        <Vision />
      </section>
      
      <section id="contact" className="animate-section">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
