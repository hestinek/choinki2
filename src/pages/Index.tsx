
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
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    const hiddenElements = document.querySelectorAll('.opacity-0');
    hiddenElements.forEach(element => observer.observe(element));

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-forest-50 overflow-x-hidden">
      <Navbar />
      <div className="section-transition section-enter">
        <Hero />
      </div>
      <div className="section-transition section-enter">
        <TreeVarieties />
      </div>
      <div className="section-transition section-enter">
        <AboutFarm />
      </div>
      <div className="section-transition section-enter">
        <Gallery />
      </div>
      <div className="section-transition section-enter">
        <SeasonalInfo />
      </div>
      <div className="section-transition section-enter">
        <Contact />
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
