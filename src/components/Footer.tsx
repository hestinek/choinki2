
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-forest-900 text-white pt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center">
              Natura<span className="text-forest-400">Green</span>
            </h3>
            <p className="text-forest-200 mb-6">
              Rodzinna plantacja choinek z tradycjami. Oferujemy najwyższej jakości 
              naturalne drzewka świąteczne, hodowane z poszanowaniem środowiska.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-forest-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-forest-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-serif">Szybkie linki</h4>
            <ul className="space-y-3">
              {['Strona główna', 'Odmiany choinek', 'O naszej plantacji', 'Sezony i dostępność', 'Kontakt'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-forest-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-serif">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-forest-400 mt-1" />
                <span className="text-forest-200">
                  ul. Leśna 123<br />
                  05-600 Zielonka<br />
                  woj. mazowieckie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-forest-400" />
                <span className="text-forest-200">+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-forest-400" />
                <span className="text-forest-200">kontakt@naturagreen.pl</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-serif">Godziny otwarcia</h4>
            <p className="text-forest-200 mb-2">Poza sezonem świątecznym:</p>
            <p className="text-forest-200 mb-4">
              Poniedziałek - Piątek: 9:00 - 17:00<br />
              Sobota: 10:00 - 15:00<br />
              Niedziela: Zamknięte
            </p>
            <p className="text-forest-200 mb-2">Sezon świąteczny (1-24 grudnia):</p>
            <p className="text-forest-200">
              Poniedziałek - Sobota: 9:00 - 18:00<br />
              Niedziela: 10:00 - 16:00
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-forest-800 py-6 text-center text-forest-400 text-sm">
          <p>
            &copy; {currentYear} NaturaGreen - Plantacja Choinek. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
