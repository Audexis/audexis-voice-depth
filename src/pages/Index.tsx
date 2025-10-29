import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Capabilities } from "@/components/Capabilities";
import { AudioIntelligenceLayer } from "@/components/AudioIntelligenceLayer";
import { Vision } from "@/components/Vision";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ProgressDots } from "@/components/ProgressDots";
import { useGSAPScroll } from "@/hooks/useGSAPScroll";

const Index = () => {
  useGSAPScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProgressDots />
      
      <section id="hero" className="cinematic-section relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%231a1a1a' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/09/138195-768981543_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10">
          <Hero />
        </div>
      </section>
      
      <section id="mission" className="cinematic-section relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2023/05/10/162262-824852214_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10">
          <Mission />
        </div>
      </section>
      
      <section id="capabilities" className="cinematic-section relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2021/03/28/69550-532639366_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
        <div className="relative z-10 overflow-y-auto max-h-screen">
          <Capabilities />
        </div>
      </section>
      
      <section id="audio-intelligence" className="cinematic-section relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2022/02/01/106368-671982176_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
        <div className="relative z-10 overflow-y-auto max-h-screen">
          <AudioIntelligenceLayer />
        </div>
      </section>
      
      <section id="vision" className="cinematic-section relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2020/03/26/35387-404276365_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10">
          <Vision />
        </div>
      </section>
      
      <section id="contact" className="cinematic-section relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/28/141203-776967306_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10">
          <Contact />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
