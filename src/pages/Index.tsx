
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
          const animation = entry.target.getAttribute('data-animation') || 'animate-fade-in';
          entry.target.classList.add(animation);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    const hiddenElements = document.querySelectorAll('.section-transition');
    hiddenElements.forEach(element => observer.observe(element));

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-forest-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TreeVarieties />
      <AboutFarm />
      <div className="section-transition section-hidden" data-animation="animate-zoom-in">
        <Gallery />
      </div>
      <div className="section-transition section-hidden" data-animation="animate-slide-in-left">
        <SeasonalInfo />
      </div>
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
