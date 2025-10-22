import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Capabilities } from "@/components/Capabilities";
import { AudioIntelligenceLayer } from "@/components/AudioIntelligenceLayer";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollNavigation } from "@/components/ScrollNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
      <ScrollNavigation />
      
      <section id="hero" className="snap-start snap-always min-h-screen">
        <Hero />
      </section>
      
      <section id="mission" className="snap-start snap-always min-h-screen flex items-center">
        <Mission />
      </section>
      
      <section id="capabilities" className="snap-start snap-always min-h-screen flex items-center">
        <Capabilities />
      </section>
      
      <section id="audio-intelligence" className="snap-start snap-always min-h-screen flex items-center">
        <AudioIntelligenceLayer />
      </section>
      
      <section id="vision" className="snap-start snap-always min-h-screen flex items-center">
        <Vision />
      </section>
      
      <section id="contact" className="snap-start snap-always min-h-screen flex items-center">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
