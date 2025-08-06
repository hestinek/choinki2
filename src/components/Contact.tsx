import { MapPin, Phone, Mail, Clock } from 'lucide-react';
const Contact = () => {
  return <section id="kontakt" className="w-full bg-forest-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="opacity-0 animate-slide-in-left">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-forest-900 font-bold mt-3">
            Jesteśmy do Twojej dyspozycji
          </h2>
          
          <p className="mt-6 text-forest-700">
            Masz pytania dotyczące naszych choinek, dostępności lub chcesz złożyć zamówienie?
            Skontaktuj się z nami telefonicznie lub odwiedź naszą plantację osobiście.
          </p>
          
          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-forest-100 p-3 rounded-full text-forest-600">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-medium text-forest-800 text-lg">Adres plantacji</h3>
                <p className="text-forest-700 mt-1">
                  Sołdany 28<br />
                  11-500 Sołdany<br />
                  woj. Warmińsko-Mazurskie
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-forest-100 p-3 rounded-full text-forest-600">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-medium text-forest-800 text-lg">Telefon</h3>
                <p className="text-forest-700 mt-1">
                  +48 796 214 778
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-forest-100 p-3 rounded-full text-forest-600">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-medium text-forest-800 text-lg">Email</h3>
                <p className="text-forest-700 mt-1">
                  plantacjasoldany@gmail.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-forest-100 p-3 rounded-full text-forest-600">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-medium text-forest-800 text-lg">Godziny otwarcia</h3>
                <p className="text-forest-700 mt-1">
                  Poza sezonem świątecznym:<br />
                  Poniedziałek - Niedziela: 9:00 - 16:00
                </p>
                <p className="text-forest-700 mt-2">
                  Sezon świąteczny (1-23 grudnia):<br />
                  Poniedziałek - Niedziela: 8:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="bg-white rounded-xl shadow-md p-8 opacity-0 animate-slide-in-right">
          <h3 className="text-2xl font-bold text-forest-800 font-serif mb-6">
            Jak do nas dojechać
          </h3>
          
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.123456789!2d21.234567!3d54.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSo%C5%82dany+28%2C+11-500+So%C5%82dany!5e0!3m2!1spl!2spl!4v1234567890" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa dojazdu do plantacji choinek"></iframe>
          </div>
          
          <div className="mt-4 text-forest-600 text-sm space-y-3">
            <p className="text-justify">
              📍 <strong>Lokalizacja Plantacji Choinek Soldany</strong><br />
              Nasza <strong>Plantacja Choinek Soldany</strong> mieści się w malowniczej miejscowości Sołdany, zaledwie kilka kilometrów od Giżycka, w sercu województwa warmińsko-mazurskiego.
            </p>
            <p className="text-justify">
              🎄 <strong>Zaplanuj swoją wizytę i wybierz choinkę prosto z plantacji</strong><br />
              Kliknij na mapę, aby uzyskać wskazówki dojazdu i odwiedź nas osobiście. Jesteśmy otwarci w sezonie przedświątecznym oraz przez cały rok dla klientów poszukujących drzewek z systemem korzeniowym.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>;
};
export default Contact;