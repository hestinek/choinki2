
import { Calendar, Check } from 'lucide-react';

const seasonTimeline = [
  { month: "Marzec - Kwiecień", activity: "Przygotowanie gleby i sadzenie nowych drzewek", icon: "🌱" },
  { month: "Maj - Sierpień", activity: "Pielęgnacja, przycinanie i kształtowanie drzewek", icon: "✂️" },
  { month: "Wrzesień - Listopad", activity: "Przygotowanie do sezonu świątecznego", icon: "🍂" },
  { month: "Grudzień", activity: "Główny sezon sprzedaży choinek na święta", icon: "🎄" },
];

const perks = [
  "Możliwość samodzielnego wyboru oraz ścięcia drzewka na plantacji",
  "Profesjonalne cięcie dostosowane do Twoich potrzeb",
  "Świeże drzewka, ścięte maksymalnie 48h przed odbiorem",
  "Pakowanie i zabezpieczenie choinki na czas transportu",
  "Porady dotyczące pielęgnacji i utrzymania świeżości"
];

const SeasonalInfo = () => {
  return (
    <section id="sezony" className="bg-forest-50 section-padding">
      <div className="text-center mb-16">
        <p className="text-forest-600 uppercase tracking-wider font-medium opacity-0 animate-fade-in">Sezony i dostępność</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-forest-900 font-bold mt-2 opacity-0 animate-fade-in-delay-1">
          Kalendarz naszej plantacji
        </h2>
        <p className="mt-4 text-lg text-forest-700/80 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
          Przez cały rok dbamy o nasze drzewka, aby w okresie świątecznym mogły zachwycać w Twoim domu.
          Sprawdź, co dzieje się na plantacji w różnych porach roku.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-16 relative">
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-forest-300 transform -translate-x-1/2 hidden md:block" />
        
        {seasonTimeline.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-16 relative opacity-0 ${
              index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
            }`}
          >
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
              <div className={`p-6 bg-white rounded-xl shadow-md inline-block card-hover ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                <h3 className="text-xl font-semibold text-forest-800 font-serif">{item.month}</h3>
                <p className="mt-2 text-forest-700">{item.activity}</p>
              </div>
            </div>
            
            <div className="hidden md:block w-2/12 text-center">
              <div className="w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center mx-auto z-10 relative">
                <span>{item.icon}</span>
              </div>
            </div>
            
            <div className={`w-full md:w-5/12 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:order-2' : 'md:text-right'}`}>
              {index === 1 && (
                <div className={`p-6 bg-gold-50 rounded-xl shadow-md inline-block ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  <h4 className="text-lg font-semibold text-forest-800 font-serif flex items-center justify-center md:justify-end gap-2">
                    <Calendar size={18} className="text-gold-600" />
                    <span>Ważne daty</span>
                  </h4>
                  <p className="mt-2 text-forest-700">
                    Sprzedaż choinek rozpoczyna się 1 grudnia i trwa do Wigilii
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 bg-white rounded-xl p-8 shadow-md opacity-0 animate-fade-in">
        <h3 className="text-2xl font-bold text-forest-800 font-serif mb-6">Dodatkowe usługi i korzyści</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-3">
              {perks.map((perk, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-forest-600">
                    <Check size={18} />
                  </span>
                  <span className="text-forest-700 text-justify">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-forest-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-forest-800 font-serif mb-3">Odbiór osobisty</h4>
            <p className="text-forest-700 mb-4 text-justify">
              W grudniu zapraszamy do odwiedzenia naszej plantacji całymi rodzinami wraz z 4 nożnymi przyjaciółmi. To doskonała okazja, by spędzić rodzinny dzień wybierając idealną choinkę i cieszyć się świąteczną atmosferą oraz mazurską naturą!
            </p>
            <p className="text-forest-800 font-medium">
              Godziny otwarcia w sezonie świątecznym (1-23 grudnia):
            </p>
            <p className="text-forest-700">Poniedziałek - Niedziela: 8:00 - 17:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalInfo;
