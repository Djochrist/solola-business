import { useState, useMemo, useRef } from 'react';
import type { Page } from '../App';

const WHATSAPP_NUMBER = '243812402652';

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  badge: 'Nouveau' | 'Disponible' | 'Populaire';
  location: string;
}

const PRODUCTS: Product[] = [
  // AirPods
  { id: 1, name: 'AirPods 3ème Génération', category: 'Électronique', subcategory: 'AirPods', image: '/images/electronique/airpods-1.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 2, name: 'AirPods Pro', category: 'Électronique', subcategory: 'AirPods', image: '/images/electronique/airpods-2.jpeg', badge: 'Populaire', location: 'Kinshasa' },
  { id: 3, name: 'AirPods & AirPods Pro - Collection', category: 'Électronique', subcategory: 'AirPods', image: '/images/electronique/airpods-3.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  // iPhones
  { id: 4, name: 'iPhone 17 - Toutes Couleurs', category: 'Électronique', subcategory: 'iPhone', image: '/images/electronique/iphone-17.jpeg', badge: 'Nouveau', location: 'Kinshasa' },
  { id: 5, name: 'Récentes Versions iPhone', category: 'Électronique', subcategory: 'iPhone', image: '/images/electronique/iphone-recents.jpeg', badge: 'Nouveau', location: 'Kinshasa' },
  { id: 6, name: 'Collection Téléphones', category: 'Électronique', subcategory: 'Téléphone', image: '/images/electronique/telephones-collection.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 7, name: 'iPhone 12 - Bleu', category: 'Électronique', subcategory: 'iPhone', image: '/images/electronique/iphone-bleu.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 8, name: 'iPhone 12 PRODUCT RED', category: 'Électronique', subcategory: 'iPhone', image: '/images/electronique/iphone-rouge.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  // Baskets
  { id: 9, name: 'Nike Air Force 1 Blanc / Bleu', category: 'Chaussures', subcategory: 'Baskets', image: '/images/chaussures/basket-af1-bleu.jpeg', badge: 'Nouveau', location: 'Kinshasa' },
  { id: 10, name: 'Nike Dunk Low Bordeaux / Beige', category: 'Chaussures', subcategory: 'Baskets', image: '/images/chaussures/basket-01.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 11, name: 'New Balance 1906R Gris / Marine', category: 'Chaussures', subcategory: 'Baskets', image: '/images/chaussures/basket-02.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 12, name: 'Nike Air Max 95 Noir / Rouge', category: 'Chaussures', subcategory: 'Baskets', image: '/images/chaussures/basket-03.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 13, name: 'Baskets Sport', category: 'Chaussures', subcategory: 'Baskets', image: '/images/chaussures/basket-4.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 14, name: 'Paire de Baskets', category: 'Chaussures', subcategory: 'Baskets', image: '/images/chaussures/basket-5.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  // Mocassins
  { id: 15, name: 'Mocassin J.M. Weston Suède Bordeaux', category: 'Chaussures', subcategory: 'Mocassins', image: '/images/chaussures/mocassin-01.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 16, name: 'Mocassin J.M. Weston Suède Bleu', category: 'Chaussures', subcategory: 'Mocassins', image: '/images/chaussures/mocassin-02.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 17, name: 'Mocassins Suède Multicolore', category: 'Chaussures', subcategory: 'Mocassins', image: '/images/chaussures/mocassin-03.jpeg', badge: 'Populaire', location: 'Kinshasa' },
  { id: 18, name: 'Mocassin J.M. Weston Suède Violet', category: 'Chaussures', subcategory: 'Mocassins', image: '/images/chaussures/mocassin-04.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  // Derby & Oxford
  { id: 19, name: 'Oxford Wholecut Cuir Marron', category: 'Chaussures', subcategory: 'Derby & Oxford', image: '/images/chaussures/derby-01.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 20, name: 'Oxford Cuir Verni Noir', category: 'Chaussures', subcategory: 'Derby & Oxford', image: '/images/chaussures/derby-02.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  // Casquettes
  { id: 21, name: 'Casquettes New Era 9FORTY MLB', category: 'Casquettes', subcategory: 'Snapbacks', image: '/images/casquettes/collection-01.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 22, name: 'New Era MLB - NY, LA, Angels', category: 'Casquettes', subcategory: 'Snapbacks', image: '/images/casquettes/collection-02.jpeg', badge: 'Populaire', location: 'Kinshasa' },
  { id: 23, name: 'New Era 59FIFTY LA Dodgers Rose', category: 'Casquettes', subcategory: 'Fitted', image: '/images/casquettes/collection-03.jpeg', badge: 'Nouveau', location: 'Kinshasa' },
  { id: 24, name: 'Casquettes Colorées - Collection', category: 'Casquettes', subcategory: 'Snapbacks', image: '/images/casquettes/collection-04.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 25, name: 'New Era - Collection Mixte', category: 'Casquettes', subcategory: 'Snapbacks', image: '/images/casquettes/collection-05.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  // Parfums
  { id: 26, name: 'Sultan Al Sahra EDP', category: 'Parfums', subcategory: 'Parfums', image: '/images/parfums/parfum-01.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 27, name: 'Imperial Secret Women EDP 100ml', category: 'Parfums', subcategory: 'Parfums', image: '/images/parfums/parfum-02.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 28, name: 'Jack Paro Paradise EDP', category: 'Parfums', subcategory: 'Parfums', image: '/images/parfums/parfum-03.jpeg', badge: 'Nouveau', location: 'Kinshasa' },
  { id: 29, name: 'Hayaak Florence EDT 100ml', category: 'Parfums', subcategory: 'Parfums', image: '/images/parfums/parfum-04.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 30, name: 'Crazy Blue For Men EDP 100ml', category: 'Parfums', subcategory: 'Parfums', image: '/images/parfums/parfum-05.jpeg', badge: 'Disponible', location: 'Kinshasa' },
  { id: 31, name: 'Zara Maison Elite Collection EDP', category: 'Parfums', subcategory: 'Parfums', image: '/images/parfums/parfum-06.jpeg', badge: 'Disponible', location: 'Kinshasa' },
];

const CATEGORIES = [
  { label: 'Toutes les catégories', value: 'all' },
  { label: 'Électronique', value: 'Électronique', sub: ['iPhone', 'AirPods', 'Téléphone'] },
  { label: 'Chaussures', value: 'Chaussures', sub: ['Baskets', 'Mocassins', 'Derby & Oxford'] },
  { label: 'Casquettes', value: 'Casquettes', sub: ['Snapbacks', 'Fitted'] },
  { label: 'Parfums', value: 'Parfums', sub: [] },
  { label: 'Vêtements', value: 'Vêtements', sub: ['Cravates', 'Vestes'] },
  { label: 'Véhicules', value: 'Véhicules', sub: [] },
];

function badgeStyle(badge: Product['badge']) {
  if (badge === 'Nouveau') return 'bg-[#1B2A4A] text-white';
  if (badge === 'Populaire') return 'bg-[#C9A84C] text-[#1B2A4A]';
  return 'bg-green-100 text-green-800';
}

// ── Magnetic "EN SAVOIR PLUS SUR NOUS" button (Codrops-inspired) ──────────────
function MagneticButton({ onClick }: { onClick: () => void }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * 0.38,
      y: (e.clientY - cy) * 0.38,
    });
    setActive(true);
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
    setActive(false);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      aria-label="En savoir plus sur Solola Business"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: active
          ? 'transform 0.12s ease-out'
          : 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
      className="group relative inline-flex items-center gap-3 cursor-pointer select-none"
    >
      {/* Outer ring */}
      <span
        className="absolute inset-0 rounded-full border-2 border-[#C9A84C] opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100"
        style={{ transition: 'opacity 0.3s ease, transform 0.3s ease' }}
      />
      {/* Button pill */}
      <span className="relative flex items-center gap-3 bg-[#1B2A4A] group-hover:bg-[#C9A84C] text-white group-hover:text-[#1B2A4A] font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full"
        style={{ transition: 'background-color 0.35s ease, color 0.35s ease' }}>
        {/* Arrow icon */}
        <svg className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-1"
          style={{ transition: 'transform 0.3s ease' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        EN SAVOIR PLUS SUR NOUS
      </span>
    </button>
  );
}

function ProductCard({ product }: { product: Product }) {
  const msg = encodeURIComponent(`Bonjour, je suis intéressé(e) par : ${product.name}`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </a>
      <div className="p-3 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="text-[#1B2A4A] text-xs font-medium hover:text-[#C9A84C] cursor-default">
            {product.category}
          </span>
          <span className="text-gray-400 text-xs">&rsaquo;</span>
          <span className="text-gray-500 text-xs">{product.subcategory}</span>
        </div>
        <div className="flex items-start justify-between gap-2 mb-3 flex-1">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
            {product.name}
          </h3>
          <span className={`flex-shrink-0 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${badgeStyle(product.badge)}`}>
            {product.badge}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {product.location}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Solola Business
          </span>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#1B2A4A] hover:bg-[#243860] text-white text-xs font-semibold py-2 rounded transition-colors"
        >
          Contacter via WhatsApp
        </a>
      </div>
    </div>
  );
}

function NoImageCategoryCard({ title, category }: { title: string; category: string }) {
  const msg = encodeURIComponent(`Bonjour, je suis intéressé(e) par votre offre : ${title}`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="w-full h-48 bg-[#f0f2f5] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-2">
          <svg className="w-8 h-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs text-gray-500">Photo sur demande</p>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <div className="text-[#1B2A4A] text-xs font-medium mb-2">{category}</div>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3 flex-1">{title}</h3>
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            Kinshasa
          </span>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#1B2A4A] hover:bg-[#243860] text-white text-xs font-semibold py-2 rounded transition-colors"
        >
          Renseignements
        </a>
      </div>
    </div>
  );
}

const EXTRA_ITEMS = [
  { id: 'v1', title: 'Cravates - Collection', category: 'Vêtements' },
  { id: 'v2', title: 'Vestes Homme', category: 'Vêtements' },
  { id: 'v3', title: 'Véhicules à vendre', category: 'Véhicules' },
  { id: 'v4', title: "Véhicules d'occasion", category: 'Véhicules' },
];

interface BoutiqueProps {
  setPage: (p: Page) => void;
}

export function Boutique({ setPage }: BoutiqueProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSub, setActiveSub] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS.length };
    PRODUCTS.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    let result = PRODUCTS;
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (activeSub) {
      result = result.filter(p => p.subcategory === activeSub);
    }
    return result;
  }, [activeCategory, activeSub]);

  const showExtras = (activeCategory === 'all' || activeCategory === 'Vêtements' || activeCategory === 'Véhicules') && !activeSub;
  const extrasFiltered = activeCategory === 'all'
    ? EXTRA_ITEMS
    : EXTRA_ITEMS.filter(e => e.category === activeCategory);

  const totalCount = filtered.length + (showExtras ? extrasFiltered.length : 0);

  return (
    <section id="boutique" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* ── Discovery banner + Magnetic CTA ──────────────────────────── */}
      <div className="mb-8 bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-6 px-6 py-7">
          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-1">À savoir</p>
            <h2 className="text-[#1B2A4A] font-bold text-lg leading-snug mb-2">
              La boutique n'est qu'un aperçu de ce que nous faisons
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              Solola Business intervient dans plus de 13 domaines : informatique, mode, création de contenu,
              formation, alimentation, agriculture et bien d'autres. Découvrez l'ensemble de nos expertises
              et comment nos jeunes talents peuvent vous accompagner.
            </p>
          </div>
          {/* Magnetic button side */}
          <div className="flex-shrink-0 flex items-center justify-center py-2">
            <MagneticButton onClick={() => setPage('presentation')} />
          </div>
        </div>
      </div>

      <div className="flex gap-6">

        {/* Sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0">

          {/* Category Filter */}
          <div className="bg-white rounded border border-gray-200 mb-4">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-semibold text-sm text-gray-800">Catégorie</h2>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="w-8 border-b-2 border-[#C9A84C] mb-3" />
              <button
                onClick={() => { setActiveCategory('all'); setActiveSub(''); }}
                className={`block w-full text-left text-sm py-0.5 ${activeCategory === 'all' ? 'text-[#C9A84C] font-semibold' : 'text-gray-600 hover:text-[#1B2A4A]'}`}
              >
                Toutes les catégories
              </button>
            </div>
            <div className="px-4 py-3 space-y-1">
              {CATEGORIES.filter(c => c.value !== 'all').map(cat => (
                <div key={cat.value}>
                  <button
                    onClick={() => { setActiveCategory(cat.value); setActiveSub(''); }}
                    className={`flex items-center gap-2 w-full text-left text-sm py-1 ${
                      activeCategory === cat.value ? 'text-[#C9A84C] font-semibold' : 'text-gray-600 hover:text-[#1B2A4A]'
                    }`}
                  >
                    <svg className={`w-3 h-3 flex-shrink-0 ${activeCategory === cat.value ? 'text-[#C9A84C]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{cat.label}</span>
                    {categoryCounts[cat.value] && (
                      <span className="ml-auto text-xs text-gray-400">({categoryCounts[cat.value]})</span>
                    )}
                  </button>
                  {activeCategory === cat.value && cat.sub && cat.sub.length > 0 && (
                    <div className="ml-5 mt-1 space-y-1">
                      {cat.sub.map(sub => (
                        <button
                          key={sub}
                          onClick={() => setActiveSub(activeSub === sub ? '' : sub)}
                          className={`block w-full text-left text-xs py-0.5 ${
                            activeSub === sub ? 'text-[#C9A84C] font-semibold' : 'text-gray-500 hover:text-[#1B2A4A]'
                          }`}
                        >
                          &rsaquo; {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="bg-white rounded border border-gray-200 mb-4">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-semibold text-sm text-gray-800">Localisation</h2>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <div className="px-4 py-3 space-y-1 text-sm text-gray-600">
              <div className="w-8 border-b-2 border-[#C9A84C] mb-3" />
              <p className="hover:text-[#1B2A4A] cursor-default">Toutes les localisations</p>
              <p className="text-[#C9A84C] font-semibold cursor-default">Kinshasa</p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#1B2A4A] rounded p-4 text-white text-sm">
            <p className="font-semibold mb-1">Vous cherchez un article ?</p>
            <p className="text-blue-200 text-xs mb-3">Contactez-nous sur WhatsApp, nous pouvons vous aider à le trouver.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943a] text-[#1B2A4A] font-bold text-xs py-2 rounded transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb + title */}
          <div className="bg-white rounded border border-gray-200 px-4 py-3 mb-4">
            <nav className="text-xs text-gray-500 flex items-center gap-1 mb-1">
              <button onClick={() => { setActiveCategory('all'); setActiveSub(''); }} className="hover:text-[#1B2A4A]">Boutique</button>
              {activeCategory !== 'all' && (
                <>
                  <span>&rsaquo;</span>
                  <button onClick={() => setActiveSub('')} className="hover:text-[#1B2A4A]">{activeCategory}</button>
                </>
              )}
              {activeSub && (
                <>
                  <span>&rsaquo;</span>
                  <span className="text-[#1B2A4A] font-medium">{activeSub}</span>
                </>
              )}
            </nav>
            <p className="text-sm font-semibold text-gray-700">
              {activeSub || (activeCategory !== 'all' ? activeCategory : 'Tous les articles')} · Kinshasa
            </p>
          </div>

          {/* Results bar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{totalCount}</span> article{totalCount !== 1 ? 's' : ''} trouvé{totalCount !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2">
              <select
                className="lg:hidden text-xs border border-gray-200 rounded px-2 py-1 text-gray-700"
                value={activeCategory}
                onChange={e => { setActiveCategory(e.target.value); setActiveSub(''); }}
              >
                {CATEGORIES.map(c => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded border transition-colors ${viewMode === 'grid' ? 'border-[#1B2A4A] text-[#1B2A4A]' : 'border-gray-200 text-gray-400 hover:text-gray-600'}`}
                aria-label="Vue grille"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded border transition-colors ${viewMode === 'list' ? 'border-[#1B2A4A] text-[#1B2A4A]' : 'border-gray-200 text-gray-400 hover:text-gray-600'}`}
                aria-label="Vue liste"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid gap-4 ${
            viewMode === 'grid'
              ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filtered.map(product =>
              viewMode === 'grid'
                ? <ProductCard key={product.id} product={product} />
                : <ListCard key={product.id} product={product} />
            )}
            {showExtras && extrasFiltered.map(item => (
              <NoImageCategoryCard key={item.id} title={item.title} category={item.category} />
            ))}
          </div>

          {filtered.length === 0 && !showExtras && (
            <div className="bg-white rounded border border-gray-200 p-12 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-500 text-sm">Aucun article dans cette catégorie pour le moment.</p>
              <p className="text-gray-400 text-xs mt-1">Contactez-nous pour plus d'informations.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ListCard({ product }: { product: Product }) {
  const msg = encodeURIComponent(`Bonjour, je suis intéressé(e) par : ${product.name}`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex">
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-36 sm:w-44 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </a>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex flex-wrap gap-1 mb-1">
            <span className="text-[#1B2A4A] text-xs font-medium">{product.category}</span>
            <span className="text-gray-400 text-xs">&rsaquo;</span>
            <span className="text-gray-500 text-xs">{product.subcategory}</span>
          </div>
          <div className="flex items-start gap-2">
            <h3 className="text-sm font-semibold text-gray-900 leading-snug">{product.name}</h3>
            <span className={`flex-shrink-0 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${badgeStyle(product.badge)}`}>
              {product.badge}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {product.location}
            </span>
            <span>Solola Business</span>
          </div>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white text-xs font-semibold px-4 py-2 rounded transition-colors self-start"
        >
          Contacter via WhatsApp
        </a>
      </div>
    </div>
  );
}
