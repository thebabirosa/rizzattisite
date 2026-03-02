
import React, { useState } from 'react';

const projects = [
  {
    id: '7',
    title: 'Cozinha Gourmet',
    category: 'Cozinha',
    image: 'https://github.com/thebabirosa/images/blob/main/portfolio.png?raw=true'
  },
  {
    id: '1',
    title: 'Cozinha Moderna',
    category: 'Cozinha',
    image: 'https://github.com/thebabirosa/images/blob/main/portfolio%20(1).png?raw=true'
  },
  {
    id: '2',
    title: 'Quarto Casal',
    category: 'Dormitório',
    image: 'https://github.com/thebabirosa/images/blob/main/portfolio%20(9).png?raw=true'
  },
  {
    id: '9',
    title: 'Quarto',
    category: 'Dormitório',
    image: 'https://github.com/thebabirosa/images/blob/main/portfolio%20(8).png?raw=true'
  },
  {
    id: '3',
    title: 'Painel de TV',
    category: 'Sala',
    image: 'https://github.com/thebabirosa/images/blob/main/portfolio%20(10).png?raw=true'
  },
  {
    id: '4',
    title: 'Mobiliário',
    category: 'Móveis Soltos',
    image: 'https://github.com/thebabirosa/images/blob/main/Crivo_Mesa%20Lateral%20(Carvalho%20Ame%CC%82ndoa,%20Haste%20Bronze,%20Base%20Concreto%20Corda)%20(1.2).jpg?raw=true'
  },
  {
    id: '5',
    title: 'Escritório Corporativo',
    category: 'Comercial',
    image: 'https://github.com/thebabirosa/images/blob/main/portfolio%20(4).png?raw=true'
  },
  {
    id: '8',
    title: 'Recepção Escritório',
    category: 'Comercial',
    image: 'https://github.com/thebabirosa/images/blob/main/portfolio%20(5).png?raw=true'
  }
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Cozinha', 'Dormitório', 'Sala', 'Móveis Soltos', 'Comercial'];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-rizzatti-paper">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-rizzatti-gold font-bold text-xs uppercase tracking-widest mb-4 block">Portfólio</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Transformações reais</h2>
            <p className="text-rizzatti-text-soft">
              Explore uma seleção de projetos onde a estética encontra a funcionalidade em sua forma mais pura.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'bg-rizzatti-gold text-black shadow-lg shadow-rizzatti-gold/20' 
                    : 'bg-white border border-rizzatti-paper-darker text-rizzatti-text-soft hover:border-rizzatti-gold/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[450px] overflow-hidden rounded-rizzatti-lg bg-rizzatti-bg animate-in fade-in zoom-in-95"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-rizzatti-gold text-[10px] uppercase font-bold tracking-widest mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h4 className="font-serif text-white text-2xl mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h4>
                <a 
                  href="#contato" 
                  className="text-white text-xs font-bold underline underline-offset-4 decoration-rizzatti-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150"
                >
                  Desejo algo assim
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
