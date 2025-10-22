export const Mission = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-12 text-gradient">
          Reimagining What Machines Can Hear.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
          At Audexis, we're building systems that truly listen — understanding not just what's said, but how it's said. 
          We bring together advanced AI and acoustic intelligence to power the next generation of human-machine communication.
        </p>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};
