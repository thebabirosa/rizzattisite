
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/5 text-white/30">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <img 
            src="https://github.com/thebabirosa/images/blob/main/LOGO%20RIZZATTI_Prancheta%201%20co%CC%81pia%203.png?raw=true" 
            alt="Rizzatti Móveis & Decorações" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <p className="text-xs font-medium max-w-lg mx-auto leading-relaxed">
          &copy; {currentYear} Rizzatti Móveis e Decorações. Todos os direitos reservados. 
          <br /> 
          Desenvolvido com excelência para transformar ambientes em experiências de vida.
        </p>

        <div className="flex justify-center gap-8 mt-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};
