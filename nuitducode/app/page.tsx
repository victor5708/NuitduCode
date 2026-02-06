export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* --- Barre de navigation --- */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Simulation Logo */}
            <div className="text-ca-green-dark font-bold text-2xl leading-tight">
              CRÉDIT<br/>AGRICOLE
            </div>
            <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <li className="hover:text-ca-green-primary cursor-pointer">Comptes & Cartes</li>
              <li className="hover:text-ca-green-primary cursor-pointer">Épargne</li>
              <li className="hover:text-ca-green-primary cursor-pointer">Assurances</li>
              <li className="hover:text-ca-green-primary cursor-pointer">Crédits</li>
            </ul>
          </div>
          <button className="bg-ca-green-dark text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all">
            <span>Me connecter</span>
          </button>
        </div>
      </nav>

      {/* --- Section Héro --- */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
              Crédit Agricole Banque et Assurances
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Offre Premium - Jusqu'à <span className="text-ca-green-dark">80€ offerts*</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Pour tout nouveau client après souscription à une offre Premium avant le 29/04/2026.
            </p>
            <div className="space-y-2">
              <p className="font-bold flex items-center gap-2">
                <span className="text-ca-green-primary">✓</span> Sans conditions d'utilisation et de revenus !
              </p>
              <p className="font-bold flex items-center gap-2">
                <span className="text-ca-green-primary">✓</span> Ouverture de compte sécurisée et 100% en ligne.
              </p>
            </div>
            <button className="bg-ca-green-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
              Ouvrir un compte
            </button>
          </div>

          {/* Illustration Carte */}
          <div className="flex-1 relative">
            <div className="w-full h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl flex items-end p-8 transform rotate-3">
              <div className="bg-white/20 w-12 h-8 rounded opacity-50"></div>
            </div>
            {/* Badge Promo */}
            <div className="absolute -top-6 -right-6 bg-red-600 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold border-4 border-white shadow-xl animate-bounce">
              <span className="text-xs">JUSQU'À</span>
              <span className="text-xl">80€</span>
              <span className="text-[10px]">OFFERTS*</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Bas de page (le bloc vert) --- */}
      <section className="bg-ca-green-dark py-12 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Besoin d'une assurance ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white text-gray-800 p-6 rounded-lg flex items-center justify-between hover:shadow-xl cursor-pointer transition-shadow">
              <span className="font-bold text-lg">Devis assurance habitation</span>
              <span className="text-ca-green-primary">→</span>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg flex items-center justify-between hover:shadow-xl cursor-pointer transition-shadow">
              <span className="font-bold text-lg">Devis assurance auto</span>
              <span className="text-ca-green-primary">→</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}