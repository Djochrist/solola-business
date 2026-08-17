import { useState } from 'react';
import type { Page } from '../App';

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
}

export function Navbar({ page, setPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">

          {/* Logo */}
          <button
            onClick={() => setPage('boutique')}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="bg-[#1B2A4A] rounded-full w-10 h-10 overflow-hidden flex items-center justify-center">
              <img
                src="/images/branding/logo.jpeg"
                alt="Solola Business"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:block font-bold text-[#1B2A4A] text-lg tracking-wide leading-tight">
              SOLOLA<br />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-widest">BUSINESS</span>
            </span>
          </button>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setPage('boutique')}
              className={`px-4 py-2 rounded transition-colors ${
                page === 'boutique'
                  ? 'bg-[#1B2A4A] text-white'
                  : 'text-gray-600 hover:text-[#1B2A4A] hover:bg-gray-100'
              }`}
            >
              Boutique
            </button>
            <button
              onClick={() => setPage('presentation')}
              className={`px-4 py-2 rounded transition-colors ${
                page === 'presentation'
                  ? 'bg-[#1B2A4A] text-white'
                  : 'text-gray-600 hover:text-[#1B2A4A] hover:bg-gray-100'
              }`}
            >
              Présentation
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/243812402652"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden sm:inline">Contacter</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-2 flex flex-col">
            <button
              onClick={() => { setPage('boutique'); setMenuOpen(false); }}
              className={`text-left px-4 py-2.5 text-sm font-medium rounded mx-2 mb-1 transition-colors ${
                page === 'boutique' ? 'bg-[#1B2A4A] text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Boutique
            </button>
            <button
              onClick={() => { setPage('presentation'); setMenuOpen(false); }}
              className={`text-left px-4 py-2.5 text-sm font-medium rounded mx-2 transition-colors ${
                page === 'presentation' ? 'bg-[#1B2A4A] text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Présentation
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
