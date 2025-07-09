import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 to-forest-100">
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-8 text-center">
            Polityka Prywatności dla witryny choinkigizycko.pl
          </h1>
          
          <div className="prose prose-lg max-w-none text-forest-800 space-y-6">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-4">§ 1. Postanowienia ogólne</h2>
              <p className="text-justify leading-relaxed">
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych Użytkowników w związku z korzystaniem z witryny internetowej choinkigizycko.pl (zwanej dalej „Witryną").
              </p>
              <p className="text-justify leading-relaxed">
                Dbamy o prywatność naszych Użytkowników, dlatego dokładamy wszelkich starań, aby ich dane były bezpieczne. Dane osobowe są przetwarzane zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), zwanym dalej „RODO".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-4">§ 2. Jakie dane zbieramy, w jakim celu i na jakiej podstawie prawnej?</h2>
              <p className="text-justify leading-relaxed">
                Jako prosta strona informacyjna, zbieramy dane osobowe w minimalnym zakresie, niezbędnym do jej funkcjonowania.
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Dane zbierane automatycznie (logi serwera):</strong>
              </p>
              <p className="text-justify leading-relaxed">
                Podczas każdej wizyty w Witrynie, nasz serwer automatycznie zapisuje tzw. logi serwera. Obejmują one m.in. Twój adres IP, datę i godzinę wizyty, informacje o przeglądarce internetowej.
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Cel:</strong> Administracja serwerem, zapewnienie bezpieczeństwa Witryny oraz tworzenie anonimowych statystyk, które pomagają nam zrozumieć, jak Użytkownicy korzystają z naszej strony.
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes Administratora, polegający na zapewnieniu prawidłowego i bezpiecznego działania Witryny).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-4">§ 3. Pliki cookies (ciasteczka)</h2>
              <p className="text-justify leading-relaxed">
                Witryna korzysta z plików cookies. Są to małe pliki tekstowe wysyłane przez serwer i zapisywane na Twoim urządzeniu (komputerze, telefonie).
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Wykorzystujemy pliki cookies w celu:</strong>
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Technicznym:</strong> Zapewnienia poprawnego działania Witryny.
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Analitycznym</strong> (opcjonalnie, jeśli korzystasz np. z Google Analytics): Zbierania anonimowych danych statystycznych o ruchu na stronie, co pozwala nam ją ulepszać.
              </p>
              <p className="text-justify leading-relaxed">
                Masz możliwość samodzielnego zarządzania plikami cookies z poziomu swojej przeglądarki internetowej. Możesz je blokować lub usuwać. Pamiętaj jednak, że wyłączenie plików cookies może wpłynąć na prawidłowe funkcjonowanie niektórych elementów Witryny.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-4">§ 4. Okres przechowywania danych</h2>
              <p className="text-justify leading-relaxed">
                Twoje dane osobowe przechowujemy tylko tak długo, jak jest to konieczne do realizacji celów, dla których zostały zebrane:
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Dane z logów serwera</strong> – przez okres niezbędny do zapewnienia bezpieczeństwa i administrowania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-4">§ 5. Komu udostępniamy Twoje dane?</h2>
              <p className="text-justify leading-relaxed">
                Twoje dane osobowe mogą być powierzone do przetwarzania podmiotom trzecim, z którymi współpracujemy, wyłącznie w celu prawidłowego świadczenia usług. Są to:
              </p>
              <p className="text-justify leading-relaxed">
                Dostawca usług hostingowych, na którego serwerach przechowywana jest nasza Witryna.
              </p>
              <p className="text-justify leading-relaxed">
                Dostawcy narzędzi analitycznych (np. Google LLC w przypadku Google Analytics), jeśli z nich korzystamy.
              </p>
              <p className="text-justify leading-relaxed">
                Podmioty te działają na nasze zlecenie i są zobowiązane do zapewnienia odpowiedniego poziomu ochrony danych. Nie udostępniamy Twoich danych podmiotom trzecim w celach marketingowych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-4">§ 6. Zabezpieczenie danych</h2>
              <p className="text-justify leading-relaxed">
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych przed utratą, zniszczeniem lub nieuprawnionym dostępem. Nasza Witryna korzysta z szyfrowanego połączenia za pomocą certyfikatu SSL, co chroni dane przesyłane między Twoją przeglądarką a naszym serwerem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-4">§ 7. Zmiany w polityce prywatności</h2>
              <p className="text-justify leading-relaxed">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Wszelkie zmiany będą publikowane na tej stronie. Zalecamy regularne sprawdzanie jej treści.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;