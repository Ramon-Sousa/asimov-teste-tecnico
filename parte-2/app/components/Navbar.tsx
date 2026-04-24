"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";

// Constantes fora do componente evitam re-renderizações desnecessárias
const NAV_ITEMS = [
  { label: "Formações", hasChevron: true },
  { label: "Trilhas", hasChevron: true },
  { label: "Cursos", hasChevron: false },
  { label: "Projetos", hasChevron: false },
  { label: "Conteúdos gratuitos", hasChevron: true },
];

function NavItem({ label, hasChevron }: { label: string; hasChevron: boolean }) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center gap-1.5 text-[15px] text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85E8EA] rounded-sm"
        aria-haspopup={hasChevron ? "menu" : undefined}
      >
        {label}
        {hasChevron && <ChevronDown size={16} aria-hidden="true" />}
      </a>
    </li>
  );
}

function Actions({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 ${
        isMobile ? "flex-col w-full mt-6 pt-6 border-t border-white/10" : ""
      }`}
    >
      <button
        type="button"
        className={`flex items-center justify-center gap-2.5 h-[44px] px-6 rounded-full border border-[#85E8EA] text-[#85E8EA] text-[14px] font-medium hover:bg-[#85E8EA]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85E8EA] ${
          isMobile ? "w-full" : ""
        }`}
      >
        <User size={16} aria-hidden="true" />
        Entrar
      </button>

      <button
        type="button"
        className={`flex items-center justify-center h-[44px] px-10 rounded-full bg-[#85E8EA] text-black text-[14px] font-medium hover:bg-[#70d4d6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
          isMobile ? "w-full" : ""
        }`}
      >
        Matricule-se
      </button>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Previne o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function para garantir que o scroll volte ao normal caso o componente desmonte
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="flex justify-center w-full border-b border-white/10 bg-black">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <nav className="flex items-center justify-between h-[72px]" aria-label="Navegação principal">
          
          {/* Logo */}
          <a 
            href="/" 
            className="text-white text-[20px] tracking-[0.15em] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85E8EA] rounded-sm"
            aria-label="Página inicial da Asimov"
          >
            ASIMOV
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:block">
            <Actions />
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 -mr-2 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85E8EA] rounded-md"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[72px] bg-black/80 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Menu Content Panel */}
        <div
          className={`w-full bg-black border-b border-white/10 px-5 py-6 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do painel
        >
          <ul className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
          <Actions isMobile />
        </div>
      </div>
    </header>
  );
}