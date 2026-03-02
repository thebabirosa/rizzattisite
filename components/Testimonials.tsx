
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Simone Mattos",
    location: "Florianópolis",
    content: "Sempre fui muito bem atendida por todos os funcionários, fiz móveis sob medidas, entregue em tempo hábil, montagem perfeita e manutenção também. Comprei móveis soltos, onde foi tudo entregue no prazo. Loja maravilhosa, onde a proprietária é uma pessoa acessível, atenciosa, com muito bom gosto e sente a necessidade do cliente, tem feeling. Super indico esta loja. Sou fã de carteirinha!👏🏻👏🏻👏🏻👏🏻👏🏻",
    rating: 5
  },
  {
    name: "Márcia Bifano",
    location: "Florianópolis",
    content: "Empresa nota 1000!!! Já fiz 7 projetos de móveis com essa empresa! Os projetos são incríveis, eles conseguem superar as nossas expectativas em todos os quesitos! Qualidade, design, prazo, montagem, seriedade, pós venda, simplesmente tudo perfeito!!! Já fiz closet, cozinha, roupeiros, portas, armários , e o último projeto foi uma cama alta com escritório e ateliê embaixo para o quarto da minha filha que gosta de arte, ficou incrível: lindo, espaçoso e muito organizado, gerando muito espaço no quarto dela! Super recomendo A Rizzatti móveis! Equipe super profissional!",
    rating: 5
  },
  {
    name: "Mayara Hashimoto",
    location: "Florianópolis",
    content: "Essa loja é simplesmente um sonho! Aliás, vc entra nela com um sonho e sai realizada. Atendimento excepcional desde a vendedora até a entrega. São cuidados e muito atenciosos. Sou cliente e virei fã! Parabéns pelo sucesso!",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-rizzatti-paper-darker">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rizzatti-gold font-bold text-xs uppercase tracking-widest mb-4 block">Depoimentos</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">O que nossos clientes dizem</h2>
          <p className="text-rizzatti-text-soft">
            A maior prova de nossa qualidade é a satisfação de quem vive nos ambientes que criamos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-rizzatti shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-rizzatti-gold/20 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, starI) => (
                  <Star key={starI} size={16} className="fill-rizzatti-gold text-rizzatti-gold" />
                ))}
              </div>
              
              <Quote className="text-rizzatti-gold/20 mb-4" size={40} />
              
              <p className="text-rizzatti-text-soft italic mb-8 flex-1 leading-relaxed text-sm">
                "{t.content}"
              </p>
              
              <div className="pt-6 border-t border-rizzatti-paper-darker">
                <div className="font-bold text-rizzatti-text">{t.name}</div>
                <div className="text-xs text-rizzatti-gold uppercase tracking-wider font-medium">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
