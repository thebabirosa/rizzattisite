
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const team = [
  {
    name: "Roberto Rizzatti",
    role: "Fundador & Diretor de Produção",
    description: "Mestre marceneiro com mais de 35 anos de experiência. Roberto lidera nossa fábrica com precisão artesanal.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Letícia Rizzatti",
    role: "Diretora Criativa & Arquiteta",
    description: "Especialista em design de interiores de luxo. Une a visão técnica da arquitetura com a sofisticação Rizzatti.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Gabriel Rizzatti",
    role: "Gestor de Projetos & Inovação",
    description: "Responsável por trazer as últimas tendências em mobiliário solto e automação residencial para nossos clientes em Florianópolis.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Márcia Santos",
    role: "Consultora de Decoração",
    description: "Especialista em curadoria de iluminação e acabamentos, garantindo que cada entrega seja impecável.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  }
];

export const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-24 bg-rizzatti-paper">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rizzatti-gold font-bold text-xs uppercase tracking-widest mb-4 block">Equipe</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Nossa Equipe de Especialistas</h2>
          <p className="text-rizzatti-text-soft">
            Unimos a tradição de uma empresa familiar com o talento dos melhores profissionais de design e execução do mercado catarinense.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-rizzatti-lg mb-6 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-rizzatti-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-rizzatti-gold transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-rizzatti-gold transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-1 text-rizzatti-text">{member.name}</h3>
              <div className="text-rizzatti-gold text-xs font-bold uppercase tracking-wider mb-3">{member.role}</div>
              <p className="text-rizzatti-text-soft text-[13px] leading-relaxed px-2">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
