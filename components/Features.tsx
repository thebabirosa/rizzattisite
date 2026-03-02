
import React from 'react';
import { Home, Armchair, Key, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-rizzatti-gold" />,
      title: 'Móveis Sob Medida',
      description: 'Fabricação própria com tecnologia de ponta e materiais selecionados para máxima durabilidade e sofisticação em cada detalhe.',
      items: ['Cozinhas Planejadas', 'Dormitórios', 'Home Office', 'Banheiros']
    },
    {
      icon: <Armchair className="w-10 h-10 text-rizzatti-gold" />,
      title: 'Móveis Soltos & Decoração',
      description: 'Curadoria exclusiva de peças que complementam sua marcenaria, trazendo personalidade, design assinado e conforto imediato.',
      items: ['Mobiliário Solto', 'Quadros e Objetos', 'Papéis de Parede', 'Tapetes e Cortinas']
    },
    {
      icon: <Key className="w-10 h-10 text-rizzatti-gold" />,
      title: 'Chaves na Mão',
      description: 'Cuidamos de tudo, da marcenaria à iluminação, para que você receba seu lar pronto para morar ou investir, sem preocupações com obra.',
      items: ['Projetos Luminotécnicos', 'Projetos Elétricos', 'Projetos Hidráulicos', 'Gestão de Fornecedores']
    }
  ];

  return (
    <section id="solucao" className="py-24 bg-rizzatti-paper">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-rizzatti-gold font-bold text-xs uppercase tracking-widest mb-4 block">Especialidades</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Tudo o que seu espaço precisa</h2>
          <p className="text-rizzatti-text-soft">
            Da marcenaria fina a decoração, cuidaremos de cada detalhe para que você não precise se preocupar com múltiplos fornecedores e desgastes de obra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-10 bg-white rounded-rizzatti border border-rizzatti-paper-darker hover:border-rizzatti-gold/30 hover:shadow-2xl hover:shadow-rizzatti-gold/5 transition-all duration-500"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-rizzatti-text-soft text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-rizzatti-text opacity-70">
                    <CheckCircle2 size={16} className="text-rizzatti-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
