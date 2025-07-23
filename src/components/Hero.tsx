import { ArrowDownCircle } from 'lucide-react';
import BlurText from './ui/blur-text';

const Hero = () => {
  return (
    <section id="strona-główna" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/e086ccdf-8897-40f8-8eeb-643228b8dbca.png" 
          alt="Plantacja choinek" 
          className="w-full h-full object-cover" 
          loading="eager" 
          width="1920" 
          height="1080" 
        />
      </div>
      
      {/* Light black mask overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <BlurText 
          text="Mazurskie choinki Plantacja Choinek Soldany"
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight"
          animateBy="words"
          delay={100}
          direction="top"
        />
        <BlurText 
          text="Tradycja, jakość i szacunek do natury od ponad 20 lat"
          className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          animateBy="words"
          delay={80}
          direction="top"
          stepDuration={0.25}
        />
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
      <a href="#odmiany" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white opacity-0 animate-fade-in-delay-3 animate-float">
        <ArrowDownCircle size={36} className="opacity-70 hover:opacity-100 transition-opacity" />
      </a>
    </section>
  );
};

export default Hero;