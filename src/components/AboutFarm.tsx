const AboutFarm = () => {
  return <section id="o-nas" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative opacity-0 animate-slide-in-left">
          <div className="rounded-2xl overflow-hidden">
            <img src="/lovable-uploads/40aa1e67-5cef-43c2-887e-841874b2b521.png" alt="Nasza plantacja choinek" className="w-full h-[500px] object-cover" loading="lazy" width="600" height="500" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg w-full max-w-xs opacity-0 animate-rotate-in">
            <p className="text-forest-600 font-serif text-xl">25+</p>
            <p className="text-forest-700 mt-1">Lat Doświadczenia</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="opacity-0 animate-slide-in-right">
          <p className="text-forest-600 uppercase tracking-wider font-medium">O naszej plantacji</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-forest-900 font-bold mt-3 max-w-md">
            Tradycja uprawy od pokoleń
          </h2>
          
          <div className="mt-6 space-y-4 text-forest-700">
            <p className="text-justify">
              Nasza rodzinna <strong>Plantacja Choinek Soldany</strong>, położona w malowniczych <strong>okolicach Giżycka na Mazurach</strong>, to miejsce, gdzie z pasją i zaangażowaniem uprawiamy najwyższej jakości choinki. Specjalizujemy się przede wszystkim w gatunku świerka, który od lat cieszy się ogromnym uznaniem wśród naszych klientów.
            </p>
            <p className="text-justify">
              <strong>Nasze choinki wyróżniają się pięknymi, intensywnymi barwami i klasycznym stożkowym kształtem.</strong>
            </p>
            <p className="text-justify">Oferujemy <strong>sprzedaż choinek ciętych oraz w donicach</strong> z całym systemem korzeniowym – idealnych na święta Bożego Narodzenia, do biur, ogrodów, domów i przestrzeni komercyjnych. Obsługujemy zarówno klientów indywidualnych, jak i firmy oraz dystrybutorów.</p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[{
            figure: '15+',
            label: 'Hektarów choinek'
          }, {
            figure: '3',
            label: 'Warianty choinek'
          }, {
            figure: '1000+',
            label: 'Zadowolonych klientów'
          }].map((stat, index) => <div key={index} className="bg-forest-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-forest-700 font-serif">{stat.figure}</p>
                <p className="text-forest-600 text-sm">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutFarm;