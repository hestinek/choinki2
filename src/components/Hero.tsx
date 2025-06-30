
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="strona-główna" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/b75bda7b-ee26-4295-90c5-881448864d70.png)',
            filter: 'brightness(0.75)' 
          }}
        />
      </div>
      
      {/* Overlay Gradient - lighter at top for navbar visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-forest-950/40 to-forest-950/70 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white opacity-0 animate-fade-in max-w-4xl mx-auto leading-tight">
          Naturalne choinki prosto z naszej plantacji
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white/90 opacity-0 animate-fade-in-delay-1 max-w-2xl mx-auto">
          Tradycja, jakość i szacunek do natury od ponad 20 lat
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-2">
          <a href="#odmiany" className="btn-primary">
            Odkryj nasze odmiany
          </a>
          <a href="#kontakt" className="btn-secondary text-white border-white hover:bg-white/10">
            Skontaktuj się
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <a 
        href="#odmiany" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white opacity-0 animate-fade-in-delay-3 animate-float"
      >
        <ArrowDownCircle size={36} className="opacity-70 hover:opacity-100 transition-opacity" />
      </a>
    </section>
  );
};

export default Hero;
