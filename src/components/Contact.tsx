
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="opacity-0 animate-fade-in">
          <p className="text-forest-600 uppercase tracking-wider font-medium">Skontaktuj się z nami</p>
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
                  ul. Leśna 123<br />
                  05-600 Zielonka<br />
                  woj. mazowieckie
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
                  +48 123 456 789
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
                  kontakt@naturagreen.pl
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
                  Poniedziałek - Sobota: 9:00 - 18:00<br />
                  Niedziela: 10:00 - 16:00
                </p>
                <p className="text-forest-500 text-sm italic mt-1">
                  * Godziny w sezonie świątecznym (1-24 grudnia)
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8 opacity-0 animate-fade-in-delay-1">
          <h3 className="text-2xl font-bold text-forest-800 font-serif mb-6">
            Wyślij wiadomość
          </h3>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-1">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-1">
                  Adres email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                  placeholder="jan@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-forest-700 mb-1">
                Numer telefonu
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                placeholder="+48 123 456 789"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-forest-700 mb-1">
                Temat wiadomości
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
              >
                <option value="order">Zamówienie choinki</option>
                <option value="info">Zapytanie o produkt</option>
                <option value="visit">Wizyta na plantacji</option>
                <option value="other">Inne</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-1">
                Wiadomość
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all"
                placeholder="Twoja wiadomość..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="w-4 h-4 text-forest-600 border-forest-300 rounded focus:ring-forest-500"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-forest-700">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na moje zapytanie.
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
