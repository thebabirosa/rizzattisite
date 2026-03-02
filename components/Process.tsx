
import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Briefing & Medição',
      desc: 'Entendemos seu estilo de vida e necessidades reais através de uma medição técnica rigorosa antes de qualquer desenho.'
    },
    {
      num: '02',
      title: 'Projeto Personalizado',
      desc: 'Apresentamos soluções inteligentes em 3D, otimizando cada centímetro do seu imóvel com foco em ergonomia e estética.'
    },
    {
      num: '03',
      title: 'Produção & Entrega',
      desc: 'Com fábrica própria de última geração, garantimos que o prazo acordado seja cumprido com rigor e transparência.'
    },
    {
      num: '04',
      title: 'Montagem Especializada',
      desc: 'Nossa equipe interna de montadores garante limpeza, precisão cirúrgica e o acabamento impecável que sua casa merece.'
    }
  ];

  return (
    <section id="processo" className="py-24 bg-rizzatti-paper-darker">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-rizzatti-gold font-bold text-xs uppercase tracking-widest mb-4 block">Método Rizzatti</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">O caminho da sua transformação</h2>
          <p className="text-rizzatti-text-soft">
            Criamos uma jornada sem estresse, onde cada etapa é planejada para que você apenas desfrute da evolução do seu novo lar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-10 bg-white rounded-rizzatti shadow-sm hover:shadow-xl transition-all duration-500 group">
              <span className="absolute top-4 right-8 text-6xl font-bold text-rizzatti-paper-darker transition-colors group-hover:text-rizzatti-gold/10">
                {step.num}
              </span>
              <div className="relative z-10">
                <h4 className="font-serif text-xl mb-4 group-hover:text-rizzatti-gold transition-colors">{step.title}</h4>
                <p className="text-sm text-rizzatti-text-soft leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
