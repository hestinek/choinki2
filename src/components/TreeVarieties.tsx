import { useState } from 'react';
const treeVarieties = [{
  id: 1,
  name: 'Świerk pospolity',
  description: 'Kwintesencja polskich świąt. Intensywny zapach, gęste gałęzie i tradycyjny wygląd.',
  height: '1.5m - 3m',
  characteristics: ['Intensywny zapach', 'Gęste igły', 'Klasyczny wybór'],
  image: '/lovable-uploads/5fcd4a52-d9bf-4cf6-94bd-bb4574290e3d.png'
}, {
  id: 2,
  name: 'Świerk w donicy',
  description: 'Praktyczne rozwiązanie, drzewko z systemem korzeniowym. Po świętach idealne do ogrodu.',
  height: '1m – 1.7m',
  characteristics: ['Możliwość posadzenia po świętach', 'Zachowana świeżość', 'Ekologiczny wybór'],
  image: '/lovable-uploads/6ca30e93-1b8b-411a-87a7-521e5f9c140a.png'
}, {
  id: 3,
  name: 'Świerk srebrny',
  description: 'Wyjątkowy niebieskawy odcień igieł, sztywne gałęzie, idealny do ciężkich ozdób.',
  height: '1.5m - 3m',
  characteristics: ['Subtelny zapach', 'Srebrzyste igły', 'Większa trwałość'],
  image: '/lovable-uploads/57dda738-0b4f-42a7-9e01-86960103fda2.png'
}];
const TreeVarieties = () => {
  const [selectedTree, setSelectedTree] = useState<number | null>(null);
  return <section id="odmiany" className="bg-forest-50 section-padding">
      <div className="text-center mb-16">
        <p className="text-forest-600 uppercase tracking-wider font-medium opacity-0 animate-fade-in">Nasze choinki</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-forest-900 font-bold mt-2 opacity-0 animate-fade-in-delay-1">
          Wybierz idealną choinkę
        </h2>
        <p className="mt-4 text-lg text-forest-700/80 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">Każda z naszych choinek jest starannie pielęgnowana, aby zapewnić najwyższą jakość i wyjątkowe doznania w Twoim domu podczas świąt. <strong>Drzewka wycinamy przy klientach!</strong></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {treeVarieties.map((tree, index) => <div key={tree.id} className={`bg-white rounded-xl overflow-hidden shadow-md card-hover opacity-0 ${index === 0 ? 'animate-fade-in' : index === 1 ? 'animate-fade-in-delay-1' : 'animate-fade-in-delay-2'}`}>
            <div className="h-80 overflow-hidden">
              <img src={tree.image} alt={tree.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" width="400" height="320" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-forest-800 font-serif">{tree.name}</h3>
              <p className="mt-2 text-forest-700/80 text-justify">{tree.description}</p>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-forest-600">Wysokość: {tree.height}</p>
                </div>
                <button className="text-forest-600 hover:text-forest-800 font-bold text-sm" onClick={() => setSelectedTree(selectedTree === tree.id ? null : tree.id)}>
                  {selectedTree === tree.id ? 'Mniej info' : 'Więcej info'}
                </button>
              </div>
              
              {selectedTree === tree.id && <div className="mt-4 bg-forest-50 p-4 rounded-lg animate-fade-in">
                  <p className="text-sm font-medium mb-2 text-forest-700">Charakterystyka:</p>
                  <ul className="space-y-1">
                    {tree.characteristics.map((char, i) => <li key={i} className="flex items-center text-sm text-forest-700/80">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-forest-500"></span>
                        {char}
                      </li>)}
                  </ul>
                </div>}
            </div>
          </div>)}
      </div>
    </section>;
};
export default TreeVarieties;