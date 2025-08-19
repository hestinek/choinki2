
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-gray-200/40 backdrop-blur-sm shadow-sm rounded-3xl px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-serif text-2xl font-bold text-forest-800 flex items-center">
            Choinki<span className="text-forest-600">Giżycko</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Strona główna', 'Odmiany', 'O nas', 'Drzewka', 'Sezony', 'Kontakt'].map((item) => (
              <a 
                key={item} 
                href={`/${item.toLowerCase().replace(' ', '-') === 'strona-główna' ? '' : `#${item.toLowerCase().replace(' ', '-')}`}`}
                className="text-forest-700 hover:text-forest-500 transition-colors font-bold"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-forest-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-200/40 backdrop-blur-sm rounded-3xl shadow-md mt-2 px-4 py-3">
            {['Strona główna', 'Odmiany', 'O nas', 'Drzewka', 'Sezony', 'Kontakt'].map((item) => (
              <a 
                key={item} 
                href={`/${item.toLowerCase().replace(' ', '-') === 'strona-główna' ? '' : `#${item.toLowerCase().replace(' ', '-')}`}`}
                className="block text-forest-700 hover:text-forest-500 transition-colors font-bold py-2 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
