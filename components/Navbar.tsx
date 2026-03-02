
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#solucao' },
    { name: 'Processos', href: '#processo' },
    { name: 'Ambientes', href: '#portfolio' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'História', href: '#sobre' },
    { name: 'Consultoria IA', href: '#consultor' },
  ];

  return (
    <nav className="fixed top-5 left-0 right-0 z-[100] px-4">
      <div className={`max-w-7xl mx-auto transition-all duration-300 ${
        scrolled ? 'bg-rizzatti-bg/80 backdrop-blur-lg border-white/10 shadow-2xl' : 'bg-rizzatti-bg/40 backdrop-blur-md border-white/5'
      } border rounded-full py-2 px-6 flex items-center justify-between`}>
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 text-white group">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/LOGO%20RIZZATTI_Prancheta%201%20co%CC%81pia%203.png?raw=true" 
            alt="Rizzatti Móveis & Decorações" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-rizzatti-paper/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full text-xs font-medium transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden sm:inline-flex bg-rizzatti-gold hover:bg-rizzatti-gold-dark text-black text-xs font-bold py-2.5 px-6 rounded-full transition-transform active:scale-95"
          >
            Falar com Consultor
          </a>
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-rizzatti-bg border border-white/10 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-rizzatti-gold py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full bg-rizzatti-gold text-black text-center py-3 rounded-xl font-bold"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
