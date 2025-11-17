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
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="mission" className="min-h-screen">
        <Mission />
      </section>
      
      <section id="capabilities" className="min-h-screen py-16">
        <Capabilities />
      </section>
      
      <section id="audio-intelligence" className="min-h-screen py-16">
        <AudioIntelligenceLayer />
      </section>
      
      <section id="vision" className="min-h-screen">
        <Vision />
      </section>
      
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
