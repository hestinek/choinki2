
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
          entry.target.classList.remove('section-hidden');
          entry.target.classList.add('section-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.15,
    });

    const hiddenElements = document.querySelectorAll('.section-transition');
    hiddenElements.forEach(element => observer.observe(element));

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-forest-50">
      <Navbar />
      <Hero />
      <div className="section-transition section-hidden">
        <TreeVarieties />
      </div>
      <div className="section-transition section-hidden">
        <AboutFarm />
      </div>
      <div className="section-transition section-hidden">
        <Gallery />
      </div>
      <div className="section-transition section-hidden">
        <SeasonalInfo />
      </div>
      <div className="section-transition section-hidden">
        <Contact />
      </div>
      <div className="section-transition section-hidden">
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};

export default Index;
