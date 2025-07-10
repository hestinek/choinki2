import { useLanguage, Language } from '../hooks/useLanguage';
import ukFlag from '../assets/uk-flag.png';
import lithuaniaFlag from '../assets/lithuania-flag.png';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: ukFlag },
    { code: 'lt' as Language, name: 'Lietuvių', flag: lithuaniaFlag },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-200 hover:scale-110 ${
            language === lang.code ? 'border-forest-600 ring-2 ring-forest-300' : 'border-gray-300'
          }`}
          title={lang.name}
        >
          <img 
            src={lang.flag} 
            alt={`${lang.name} flag`} 
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;