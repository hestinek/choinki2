import { useLanguage } from '../hooks/useLanguage';

const AboutFarm = () => {
  const { t } = useLanguage();
  return <section id="o-nas" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative opacity-0 animate-fade-in-left">
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" alt="Nasza plantacja choinek" className="w-full h-[500px] object-cover" loading="lazy" width="600" height="500" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg w-full max-w-xs opacity-0 animate-fade-in-delay-2">
            <p className="text-forest-600 font-serif text-xl">20+ lat</p>
            <p className="text-forest-700 mt-1">doświadczenia w uprawie choinek</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="opacity-0 animate-fade-in-right">
          <p className="text-forest-600 uppercase tracking-wider font-medium">{t('nav.about')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-forest-900 font-bold mt-3 max-w-md">
            {t('about.title')}
          </h2>
          
          <div className="mt-6 space-y-4 text-forest-700">
            <p className="text-justify font-normal">
              {t('about.description')}
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[{
            figure: '15+',
            label: t('about.hectares')
          }, {
            figure: '20+',
            label: t('about.years')
          }, {
            figure: '100%',
            label: t('about.quality')
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