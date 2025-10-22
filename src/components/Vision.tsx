export const Vision = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative blur elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <blockquote className="text-4xl md:text-6xl font-light leading-tight mb-8 text-gradient">
          "The future doesn't just speak — it listens."
        </blockquote>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
          Audexis is where technology learns to understand the human voice at its depth.
        </p>
      </div>
    </section>
  );
};
