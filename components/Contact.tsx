
import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-rizzatti-bg text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Pronto para começar seu projeto?</h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Receba um atendimento personalizado de nossos consultores e transforme sua casa ou investimento com quem entende do assunto há 30 anos.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="https://wa.me/5548984036090" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-rizzatti-gold hover:bg-rizzatti-gold-dark text-black font-bold py-5 px-12 rounded-full w-full max-w-md transition-all text-xl shadow-xl shadow-rizzatti-gold/10 hover:scale-105"
            >
              <MessageCircle className="group-hover:rotate-12 transition-transform" />
              Chamar no WhatsApp
            </a>

            <div className="flex gap-6 mt-8">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-rizzatti-gold hover:text-black hover:border-rizzatti-gold transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-rizzatti-gold hover:text-black hover:border-rizzatti-gold transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
