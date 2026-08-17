const WA = '243812402652';

// Unified social icon color: navy on white background, consistent across all 3
const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: `https://wa.me/${WA}`,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export function Presentation() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">

      {/* Hero */}
      <div className="bg-[#1B2A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#C9A84C] flex-shrink-0 bg-white">
              <img src="/images/branding/logo.jpeg" alt="Logo Solola Business" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">À propos</p>
              <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide leading-tight">
                SOLOLA BUSINESS
              </h1>
              <p className="text-[#C9A84C] text-sm tracking-widest mt-1 mb-4">
                COMMUNICATION · ORGANISATION · RÉSULTATS
              </p>
              <p className="text-blue-100 text-base leading-relaxed max-w-2xl">
                Plateforme qui met en relation des clients avec de jeunes professionnels compétents,
                qualifiés et passionnés, capables de fournir des prestations de qualité dans de nombreux secteurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left: main info */}
          <div className="lg:col-span-2 space-y-6">

            {/* Qui sommes-nous */}
            <div className="bg-white rounded border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 border-b-2 border-[#C9A84C]" />
                <h2 className="text-[#1B2A4A] font-bold text-base uppercase tracking-wide">Qui sommes-nous</h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                <strong>Solola Business</strong> est une plateforme basée en <strong>République Démocratique du Congo</strong>,
                qui connecte des clients avec un réseau de jeunes talents qualifiés et passionnés.
                Nous opérons dans de nombreux secteurs : informatique, commerce, mode, alimentation,
                médias, formation, agriculture, beauté et bien d'autres.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                En parallèle, nous gérons une boutique proposant une sélection d'articles tendance
                et de qualité : iPhones, AirPods, chaussures de marque (Nike, New Balance, J.M. Weston),
                casquettes New Era, parfums, vêtements et plus encore.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 border-b-2 border-[#C9A84C]" />
                <h2 className="text-[#1B2A4A] font-bold text-base uppercase tracking-wide">Notre Mission</h2>
              </div>
              <ul className="space-y-3">
                {[
                  'Valoriser le savoir-faire des jeunes professionnels de la RDC',
                  'Offrir aux clients des prestations fiables et de qualité',
                  'Fournir des produits authentiques à des prix accessibles',
                  "Contribuer à l'autonomisation des jeunes grâce à l'entrepreneuriat",
                  'Connecter les talents aux opportunités du marché',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1B2A4A] text-[#C9A84C] flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white rounded border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 border-b-2 border-[#C9A84C]" />
                <h2 className="text-[#1B2A4A] font-bold text-base uppercase tracking-wide">Notre Vision</h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Devenir la <strong>référence incontournable en RDC</strong> qui connecte les talents
                de la jeunesse aux opportunités du marché, tout en développant un commerce accessible,
                moderne et ancré dans les réalités locales.
              </p>
            </div>

            {/* Domaines */}
            <div className="bg-white rounded border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 border-b-2 border-[#C9A84C]" />
                <h2 className="text-[#1B2A4A] font-bold text-base uppercase tracking-wide">Domaines d'Intervention</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  ['Mode', 'Vente de vêtements, cravates, vestes'],
                  ['Informatique', 'Création de sites web, design graphique'],
                  ['Technologie', 'Applications mobiles, logiciels'],
                  ['Commerce', 'Achat et revente, import/export'],
                  ['Véhicules', 'Location, achat et vente de voitures'],
                  ['Alimentation', 'Fast-food, snacks, traiteur'],
                  ['Beauté', 'Coiffure, cosmétiques, soins'],
                  ['Création de contenu', 'YouTube, TikTok, réseaux sociaux'],
                  ['Médias', 'Photographie, vidéo, reportage'],
                  ['Formation', 'Cours particuliers, formations professionnelles'],
                  ['Services', 'Livraison, nettoyage, réparation'],
                  ['Agriculture', 'Élevage, maraîchage, produits locaux'],
                  ['Divertissement', 'Gaming, événements, animation'],
                ].map(([label, desc]) => (
                  <div key={label} className="flex items-start gap-2 py-1.5 border-b border-gray-100 last:border-0">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C9A84C] mt-1.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#1B2A4A]">{label}</span>
                      <span className="text-gray-400 text-xs"> · {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-5">

            {/* Contact card */}
            <div className="bg-[#1B2A4A] rounded p-5 text-white">
              <h3 className="font-bold text-sm mb-1">Contactez-nous</h3>
              <p className="text-blue-200 text-xs mb-4 leading-relaxed">
                Vous avez un besoin ou souhaitez en savoir plus sur nos services ?
                Écrivez-nous directement sur WhatsApp.
              </p>
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943a] text-[#1B2A4A] font-bold text-sm py-2.5 rounded transition-colors w-full"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <div className="mt-3 pt-3 border-t border-[#2a3d5e] text-xs text-blue-200">
                <p className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Kinshasa, RDC
                </p>
              </div>
            </div>

            {/* Slogan */}
            <div className="bg-white rounded border border-gray-200 p-5 text-center">
              <p className="text-[#1B2A4A] font-serif font-bold text-lg leading-snug">
                "Les talents au service de vos besoins."
              </p>
              <div className="w-12 border-b-2 border-[#C9A84C] mx-auto mt-3" />
            </div>

            {/* Réseaux sociaux — couleurs unifiées */}
            <div className="bg-white rounded border border-gray-200 p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B2A4A] mb-3">Suivez-nous</h3>
              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-[#1B2A4A] hover:text-[#C9A84C] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center flex-shrink-0
                      group-hover:bg-[#C9A84C]">
                      {icon}
                    </span>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
