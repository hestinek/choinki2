
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-forest-900 text-white pt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center">
              Choinki<span className="text-forest-400">Giżycko</span>
            </h3>
            <p className="text-forest-200 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/plantacjasoldany/?locale=pl_PL" className="text-white hover:text-forest-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/plantacja.soldany/?hl=en-gb" className="text-white hover:text-forest-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-serif">{t('footer.links')}</h4>
            <ul className="space-y-3">
              {[
                { key: 'nav.home', href: '/' },
                { key: 'nav.varieties', href: '/#odmiany' },
                { key: 'nav.about', href: '/#o-nas' },
                { key: 'nav.seasons', href: '/#sezony' },
                { key: 'nav.contact', href: '/#kontakt' }
              ].map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-serif">{t('footer.contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-forest-400 mt-1" />
                <span className="text-forest-200">
                  Sołdany 28<br />
                  11-500 Sołdany<br />
                  woj. Warmińsko-Mazurskie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-forest-400" />
                <span className="text-forest-200">+48 796 214 778</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-forest-400" />
                <span className="text-forest-200">plantacjasoldany@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-serif">{t('contact.hours')}</h4>
            <p className="text-forest-200 mb-2">Poza sezonem świątecznym:</p>
            <p className="text-forest-200 mb-4">
              Poniedziałek - Niedziela: 9:00 - 16:00
            </p>
            <p className="text-forest-200 mb-2">Sezon świąteczny (1-24 grudnia):</p>
            <p className="text-forest-200">
              Poniedziałek - Niedziela: 8:00 - 17:00
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-forest-800 py-6 text-center text-forest-400 text-sm">
          <p>
            {t('footer.copyright')} <a href="/polityka-prywatnosci" className="font-bold hover:text-white transition-colors">{t('footer.privacy')}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
