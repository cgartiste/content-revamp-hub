import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden rounded-xl mb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-muted to-background z-[1]" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-[2]"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[3]" />
      
      {/* Content */}
      <motion.div 
        className="relative z-[4] text-center px-4 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-accent/15 text-accent uppercase tracking-wider mb-6">
          Guide Scientifique Complet
        </span>
        
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-6 mb-4">
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Ashwagandha
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-4">
          La Plante Adaptogène Anti-Stress par Excellence
        </p>
        
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez comment cette plante millénaire de la médecine ayurvédique peut réduire le stress,
          améliorer votre sommeil et optimiser vos performances physiques et mentales.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">300-600mg</div>
            <div className="text-sm text-muted-foreground font-semibold">Dosage optimal/jour</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-green">-28%</div>
            <div className="text-sm text-muted-foreground font-semibold">Réduction du cortisol</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-accent">5000 ans</div>
            <div className="text-sm text-muted-foreground font-semibold">Tradition ayurvédique</div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
