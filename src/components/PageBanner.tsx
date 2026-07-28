export function PageBanner() {
  return (
    <div className="bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs text-blue-200 mb-2">
          <a href="/" className="hover:text-white transition-colors">Accueil</a>
          <span>&rsaquo;</span>
          <span className="text-white font-medium">Boutique</span>
        </nav>
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Boutique Solola Business
        </h1>
        <p className="text-blue-200 text-sm mt-1">
          Kinshasa, RDC · Les talents au service de vos besoins
        </p>
      </div>
    </div>
  );
}
