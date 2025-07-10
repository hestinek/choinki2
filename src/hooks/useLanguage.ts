import { createContext, useContext, useState } from 'react';

export type Language = 'pl' | 'en' | 'lt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  pl: {
    // Navbar
    'nav.home': 'Strona główna',
    'nav.varieties': 'Odmiany',
    'nav.about': 'O nas',
    'nav.seasons': 'Sezony',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Plantacja Choinek Giżycko',
    'hero.subtitle': 'Najpiękniejsze choinki z Mazur',
    'hero.description': 'Rodzinna plantacja z tradycjami. Oferujemy świerki pospolite, srebrne oraz drzewka w donicach. Zapraszamy do naszej plantacji w Sołdanach koło Giżycka.',
    'hero.button': 'Zobacz nasze choinki',
    
    // Tree Varieties
    'varieties.title': 'Nasze Odmiany Choinek',
    'varieties.common.title': 'Świerk Pospolity',
    'varieties.common.description': 'Tradycyjna choinka o gęstych, ciemnozielonych igłach. Doskonała na święta.',
    'varieties.silver.title': 'Świerk Srebrny',
    'varieties.silver.description': 'Elegancka odmiana o srebrzystych igłach. Bardzo popularna.',
    'varieties.potted.title': 'Choinki w Donicach',
    'varieties.potted.description': 'Żywe drzewka w donicach, które można posadzić po świętach.',
    
    // About Farm
    'about.title': 'O Naszej Plantacji',
    'about.description': 'Rodzinna plantacja choinek z tradycjami. Oferujemy najwyższej jakości świerki pospolite, srebrne oraz w donicach. Hodowane w Mazurskiej miejscowości Sołdany koło Giżycka.',
    'about.hectares': '15+ Hektarów choinek',
    'about.years': '20+ Lat doświadczenia',
    'about.quality': 'Najwyższa jakość',
    
    // Seasonal Info
    'seasonal.title': 'Kalendarz Plantacji',
    'seasonal.march': 'Marzec- Kwiecień',
    'seasonal.march.desc': 'Pielęgnacja, przycinanie i kształtowanie drzewek',
    'seasonal.may': 'Maj - Sierpień',
    'seasonal.may.desc': 'Pielęgnacja i nawożenie drzewek',
    'seasonal.september': 'Wrzesień - Listopad',
    'seasonal.september.desc': 'Przygotowanie do sezonu świątecznego',
    'seasonal.december': 'Grudzień',
    'seasonal.december.desc': 'Główny sezon sprzedaży choinek na święta',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.hours': 'Godziny otwarcia',
    'contact.hours.weekdays': 'Pon-Pt: 8:00-16:00',
    'contact.hours.saturday': 'Sob: 8:00-14:00',
    'contact.hours.sunday': 'Nie: Zamknięte',
    
    // Footer
    'footer.description': 'Rodzinna plantacja choinek z tradycjami. Oferujemy najwyższej jakości świerki pospolite, srebrne oraz w donicach. Hodowane w Mazurskiej miejscowości Sołdany koło Giżycka.',
    'footer.links': 'Szybkie linki',
    'footer.contact.title': 'Kontakt',
    'footer.follow': 'Śledź nas',
    'footer.copyright': '© 2025 Choinki Giżycko - Plantacja Choinek Soldany. Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka prywatności',
    
    // Privacy Policy
    'privacy.title': 'Polityka Prywatności'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.varieties': 'Varieties',
    'nav.about': 'About',
    'nav.seasons': 'Seasons',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Christmas Tree Plantation Giżycko',
    'hero.subtitle': 'The Most Beautiful Christmas Trees from Masuria',
    'hero.description': 'Family plantation with traditions. We offer common spruces, silver spruces and potted trees. Visit our plantation in Sołdany near Giżycko.',
    'hero.button': 'See our Christmas trees',
    
    // Tree Varieties
    'varieties.title': 'Our Christmas Tree Varieties',
    'varieties.common.title': 'Common Spruce',
    'varieties.common.description': 'Traditional Christmas tree with dense, dark green needles. Perfect for holidays.',
    'varieties.silver.title': 'Silver Spruce',
    'varieties.silver.description': 'Elegant variety with silvery needles. Very popular.',
    'varieties.potted.title': 'Potted Christmas Trees',
    'varieties.potted.description': 'Living trees in pots that can be planted after the holidays.',
    
    // About Farm
    'about.title': 'About Our Plantation',
    'about.description': 'Family Christmas tree plantation with traditions. We offer the highest quality common and silver spruces as well as potted trees. Grown in the Masurian village of Sołdany near Giżycko.',
    'about.hectares': '15+ Hectares of Christmas trees',
    'about.years': '20+ Years of experience',
    'about.quality': 'Highest quality',
    
    // Seasonal Info
    'seasonal.title': 'Plantation Calendar',
    'seasonal.march': 'March - April',
    'seasonal.march.desc': 'Care, pruning and shaping of trees',
    'seasonal.may': 'May - August',
    'seasonal.may.desc': 'Care and fertilization of trees',
    'seasonal.september': 'September - November',
    'seasonal.september.desc': 'Preparation for the Christmas season',
    'seasonal.december': 'December',
    'seasonal.december.desc': 'Main Christmas tree sales season',
    
    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Opening hours',
    'contact.hours.weekdays': 'Mon-Fri: 8:00-16:00',
    'contact.hours.saturday': 'Sat: 8:00-14:00',
    'contact.hours.sunday': 'Sun: Closed',
    
    // Footer
    'footer.description': 'Family Christmas tree plantation with traditions. We offer the highest quality common and silver spruces as well as potted trees. Grown in the Masurian village of Sołdany near Giżycko.',
    'footer.links': 'Quick links',
    'footer.contact.title': 'Contact',
    'footer.follow': 'Follow us',
    'footer.copyright': '© 2025 Choinki Giżycko - Christmas Tree Plantation Soldany. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy'
  },
  lt: {
    // Navbar
    'nav.home': 'Pagrindinis',
    'nav.varieties': 'Rūšys',
    'nav.about': 'Apie mus',
    'nav.seasons': 'Sezonai',
    'nav.contact': 'Kontaktai',
    
    // Hero
    'hero.title': 'Kalėdų eglučių plantacija Giżycko',
    'hero.subtitle': 'Gražiausios Kalėdų eglutės iš Mazūrijos',
    'hero.description': 'Šeimos plantacija su tradicijomis. Siūlome paprastąsias egles, sidabrines egles ir egles vazonuose. Aplankykite mūsų plantaciją Sołdany netoli Giżycko.',
    'hero.button': 'Žiūrėti mūsų Kalėdų egles',
    
    // Tree Varieties
    'varieties.title': 'Mūsų Kalėdų eglučių rūšys',
    'varieties.common.title': 'Paprastoji eglė',
    'varieties.common.description': 'Tradicinė Kalėdų eglė su tankiais, tamsiai žaliais spygliais. Tobula šventėms.',
    'varieties.silver.title': 'Sidabrinė eglė',
    'varieties.silver.description': 'Elegantiška rūšis su sidabriniais spygliais. Labai populiari.',
    'varieties.potted.title': 'Kalėdų eglės vazonuose',
    'varieties.potted.description': 'Gyvi medžiai vazonuose, kuriuos galima pasodinti po švenčių.',
    
    // About Farm
    'about.title': 'Apie mūsų plantaciją',
    'about.description': 'Šeimos Kalėdų eglučių plantacija su tradicijomis. Siūlome aukščiausios kokybės paprastąsias ir sidabrines egles bei egles vazonuose. Auginamos Mazūrijos kaime Sołdany netoli Giżycko.',
    'about.hectares': '15+ hektarų Kalėdų eglių',
    'about.years': '20+ metų patirtis',
    'about.quality': 'Aukščiausia kokybė',
    
    // Seasonal Info
    'seasonal.title': 'Plantacijos kalendorius',
    'seasonal.march': 'Kovas - Balandis',
    'seasonal.march.desc': 'Priežiūra, genėjimas ir medžių formavimas',
    'seasonal.may': 'Gegužė - Rugpjūtis',
    'seasonal.may.desc': 'Medžių priežiūra ir tręšimas',
    'seasonal.september': 'Rugsėjis - Lapkritis',
    'seasonal.september.desc': 'Pasiruošimas Kalėdų sezonui',
    'seasonal.december': 'Gruodis',
    'seasonal.december.desc': 'Pagrindinis Kalėdų eglių pardavimo sezonas',
    
    // Contact
    'contact.title': 'Kontaktai',
    'contact.address': 'Adresas',
    'contact.phone': 'Telefonas',
    'contact.email': 'El. paštas',
    'contact.hours': 'Darbo laikas',
    'contact.hours.weekdays': 'Pr-Pn: 8:00-16:00',
    'contact.hours.saturday': 'Šeš: 8:00-14:00',
    'contact.hours.sunday': 'Sek: Uždaryta',
    
    // Footer
    'footer.description': 'Šeimos Kalėdų eglučių plantacija su tradicijomis. Siūlome aukščiausios kokybės paprastąsias ir sidabrines egles bei egles vazonuose. Auginamos Mazūrijos kaime Sołdany netoli Giżycko.',
    'footer.links': 'Greitos nuorodos',
    'footer.contact.title': 'Kontaktai',
    'footer.follow': 'Sekite mus',
    'footer.copyright': '© 2025 Choinki Giżycko - Kalėdų eglių plantacija Soldany. Visos teisės saugomos.',
    'footer.privacy': 'Privatumo politika',
    
    // Privacy Policy
    'privacy.title': 'Privatumo politika'
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageState = () => {
  const [language, setLanguage] = useState<Language>('pl');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return { language, setLanguage, t };
};