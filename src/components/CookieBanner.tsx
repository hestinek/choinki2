import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gray-200/40 backdrop-blur-sm rounded-3xl shadow-sm px-6 py-4 max-w-sm animate-slide-up">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm text-forest-700 mb-3 font-medium">
              Ta strona używa plików cookies aby zapewnić najlepsze doświadczenia. 
              Kontynuując korzystanie z witryny, wyrażasz zgodę na ich użycie.
            </p>
            <div className="flex gap-2">
              <Button 
                onClick={acceptCookies}
                size="sm"
                className="bg-forest-600 hover:bg-forest-700 text-white font-bold"
              >
                Akceptuj
              </Button>
            </div>
          </div>
          <button
            onClick={closeBanner}
            className="text-forest-600 hover:text-forest-800 transition-colors"
            aria-label="Zamknij baner cookies"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;