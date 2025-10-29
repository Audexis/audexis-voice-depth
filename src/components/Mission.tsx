export const Mission = () => {
  return (
    <section className="relative w-full px-6 overflow-hidden section-container">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
      </div>
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 opacity-60" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      <div className="section-glow" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-12 text-gradient premium-text-shadow animate-fade-in-up">
          Reimagining What Machines Can Hear.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          At Audexis, we're building systems that truly listen — understanding not just what's said, but how it's said. 
          We bring together advanced AI and acoustic intelligence to power the next generation of human-machine communication.
        </p>
      </div>
    </section>
  );
};
