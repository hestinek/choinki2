
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TreeVarieties from '../components/TreeVarieties';
import AboutFarm from '../components/AboutFarm';
import Gallery from '../components/Gallery';
import SeasonalInfo from '../components/SeasonalInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target as HTMLElement;
          const animationType = section.dataset.animation || 'fade-in';
          section.classList.add(`animate-${animationType}`);
          section.classList.remove('section-hidden');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.15,
      rootMargin: '-50px 0px',
    });

    const sections = document.querySelectorAll('.section-transition');
    sections.forEach(element => observer.observe(element));

    return () => {
      sections.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-forest-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="section-transition section-hidden" data-animation="slide-up">
        <TreeVarieties />
      </div>
      <div className="section-transition section-hidden" data-animation="fade-in">
        <AboutFarm />
      </div>
      <div className="section-transition section-hidden" data-animation="zoom-in">
        <Gallery />
      </div>
      <div className="section-transition section-hidden" data-animation="slide-in-left">
        <SeasonalInfo />
      </div>
      <div className="section-transition section-hidden" data-animation="fade-in">
        <Contact />
      </div>
      <div className="section-transition section-hidden" data-animation="slide-up">
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};

export default Index;
