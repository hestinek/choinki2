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
    <div className="fixed bottom-6 left-6 right-6 z-50 flex justify-center">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg max-w-md p-4 animate-slide-up">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-3">
              Ta strona używa plików cookies aby zapewnić najlepsze doświadczenia. 
              Kontynuując korzystanie z witryny, wyrażasz zgodę na ich użycie.
            </p>
            <div className="flex gap-2">
              <Button 
                onClick={acceptCookies}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Akceptuj
              </Button>
            </div>
          </div>
          <button 
            onClick={closeBanner}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;