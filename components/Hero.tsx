
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center bg-rizzatti-bg text-white overflow-hidden pt-20">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://github.com/thebabirosa/images/blob/main/cozinha%20planejada.jpg?raw=true" 
          alt="Cozinha Planejada Rizzatti" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rizzatti-bg/60 via-rizzatti-bg/40 to-rizzatti-bg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(199,165,107,0.15),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-rizzatti-gold/10 border border-rizzatti-gold/30 text-rizzatti-gold text-xs font-bold uppercase tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-2">
            30 Anos de Tradição em Florianópolis
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Design que inspira, <br />
            <span className="text-rizzatti-gold italic">qualidade</span> que permanece.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Com fabricação própria, instalação especializada e curadoria de fornecedores, entregamos seu lar no modelo chave na mão e qualidade alto padrão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <a 
              href="#contato" 
              className="inline-flex items-center justify-center gap-3 bg-rizzatti-gold hover:bg-rizzatti-gold-dark text-black font-bold py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-rizzatti-gold/20"
            >
              Solicitar Orçamento <ArrowRight size={20} />
            </a>
            <a 
              href="#portfolio" 
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm"
            >
              Conhecer Projetos
            </a>
          </div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-px h-12 bg-white/20"></div>
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
      </div>
    </header>
  );
};
