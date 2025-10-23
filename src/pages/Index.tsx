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
    <div id="scroll-container" className="scroll-container min-h-screen bg-background text-foreground snap-y snap-mandatory overflow-y-scroll h-screen">
      <ScrollNavigation />
      
      <section id="hero" className="snap-start snap-always min-h-screen">
        <Hero />
      </section>
      
      <section id="mission" className="snap-start snap-always min-h-screen flex items-center justify-center px-6">
        <Mission />
      </section>
      
      <section id="capabilities" className="snap-start snap-always min-h-screen flex items-start justify-center px-6 py-16 overflow-y-auto">
        <Capabilities />
      </section>
      
      <section id="audio-intelligence" className="snap-start snap-always min-h-screen flex items-start justify-center px-6 py-16 overflow-y-auto">
        <AudioIntelligenceLayer />
      </section>
      
      <section id="vision" className="snap-start snap-always min-h-screen flex items-center justify-center px-6">
        <Vision />
      </section>
      
      <section id="contact" className="snap-start snap-always min-h-screen flex items-center justify-center px-6">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
