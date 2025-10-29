import React from "react";
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  useGSAPScroll((index) => setActiveIndex(index));

  return (
    <div className="slide-wrapper">
      <ProgressDots activeIndex={activeIndex} />
      
      {/* Hero Slide */}
      <section id="hero" className="cinematic-slide">
        <div className="slide-vignette" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="slide-video"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%231a1a1a' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/09/138195-768981543_large.mp4" type="video/mp4" />
        </video>
        <div className="slide-overlay" />
        <div className="slide-content">
          <Hero />
        </div>
      </section>
      
      {/* Mission Slide */}
      <section id="mission" className="cinematic-slide">
        <div className="slide-vignette" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="slide-video"
        >
          <source src="https://cdn.pixabay.com/video/2023/05/10/162262-824852214_large.mp4" type="video/mp4" />
        </video>
        <div className="slide-overlay" />
        <div className="slide-content">
          <Mission />
        </div>
      </section>
      
      {/* Capabilities Slide */}
      <section id="capabilities" className="cinematic-slide">
        <div className="slide-vignette" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="slide-video"
        >
          <source src="https://cdn.pixabay.com/video/2021/03/28/69550-532639366_large.mp4" type="video/mp4" />
        </video>
        <div className="slide-overlay" />
        <div className="slide-content">
          <Capabilities />
        </div>
      </section>
      
      {/* Audio Intelligence Slide */}
      <section id="audio-intelligence" className="cinematic-slide">
        <div className="slide-vignette" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="slide-video"
        >
          <source src="https://cdn.pixabay.com/video/2022/02/01/106368-671982176_large.mp4" type="video/mp4" />
        </video>
        <div className="slide-overlay" />
        <div className="slide-content">
          <AudioIntelligenceLayer />
        </div>
      </section>
      
      {/* Vision Slide */}
      <section id="vision" className="cinematic-slide">
        <div className="slide-vignette" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="slide-video"
        >
          <source src="https://cdn.pixabay.com/video/2020/03/26/35387-404276365_large.mp4" type="video/mp4" />
        </video>
        <div className="slide-overlay" />
        <div className="slide-content">
          <Vision />
        </div>
      </section>
      
      {/* Contact Slide */}
      <section id="contact" className="cinematic-slide">
        <div className="slide-vignette" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="slide-video"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/28/141203-776967306_large.mp4" type="video/mp4" />
        </video>
        <div className="slide-overlay" />
        <div className="slide-content">
          <Contact />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
