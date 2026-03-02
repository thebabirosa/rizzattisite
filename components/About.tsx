
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-rizzatti-paper overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Column - Sticky only on Desktop */}
          <div className="relative lg:sticky lg:top-24">
            <div className="rounded-rizzatti-lg overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" 
                alt="Showroom Rizzatti Móveis e Decorações" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-6 md:right-10 bg-rizzatti-gold p-8 rounded-rizzatti shadow-2xl text-black z-10">
              <div className="text-4xl font-bold mb-1">+30</div>
              <div className="text-xs uppercase font-bold tracking-widest">Anos de Histórias</div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
            <span className="text-rizzatti-gold font-bold text-xs uppercase tracking-widest mb-4 block">Nossa História</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Uma empresa de família, movida por detalhes.</h2>
            
            <div className="space-y-6 text-rizzatti-text-soft leading-relaxed text-base text-justify">
              <p>
                Nós, da Rizzatti Móveis, estamos no mercado há mais de trinta anos; somos uma empresa especializada no ramo de móveis sob medida, oferecendo um produto com qualidade e excelente padrão de acabamento. Trabalhamos também com peças de decoração, papel de parede, estofados e salas de jantar, favorecendo o cliente na hora de mudar ou reformar o ambiente.
              </p>
              <p>
                Tendo conquistado excelência em nosso campo, estamos certos de poder contribuir para a realização dos seus móveis sob medida, com oferta de produtos em convergência com rigorosas normas de qualidade, o que prezamos dentro da nossa organização, incluindo garantia em todos os serviços prestados. Buscamos estabelecer uma relação transparente com os nossos clientes, oferecendo suporte por meio de um atendimento diferenciado.
              </p>

              <div className="w-full h-px bg-rizzatti-gold/20 my-8"></div>
              
              <h3 className="font-serif text-2xl text-rizzatti-text mb-2">Um legado de gerações</h3>

              <p>
                Hoje já consolidada em Florianópolis há mais de 30 anos, a trajetória da família Rizzatti iniciou muito antes de nossa fundação, com a chegada da família ao Brasil que, como muitas famílias italianas naquela época, desembarcaram por aqui com promessa de uma vida melhor em terras novas.
              </p>
              <p>
                A família se estabeleceu em Frederico Westphalen/RS, onde trabalhou na construção de casas e moinhos, colaborando muito com o desenvolvimento da cidade. Em 1971, Antonio Guilherme Rizzatti realiza um sonho antigo e inaugura a sua própria marcenaria. Assim nascia a Rizzatti Móveis. Uma empresa que atravessa gerações empreendendo e trazendo o melhor para sua região.
              </p>
              <p>
                Em 1976, Seu Antônio encerra um ciclo e inicia outro, começando então uma nova sociedade formada pelos seus filhos, dando origem à Marcenaria Rizzatti. Continuou situada no mesmo local e atuando na mesma linha de produção.
              </p>
              <p>
                Em 2000, junto a sua família, Ivanor José Rizzatti fundou a Rizzatti Móveis em Florianópolis junto a sua esposa e filhas, onde se encontra até os dias de hoje.
              </p>
              <p className="font-medium text-rizzatti-text border-l-4 border-rizzatti-gold pl-4 py-1">
                Em 2018, seu Ivanor José Rizzatti se ausenta e sua filha Kathi Rizzatti continua dando continuidade ao trabalho executado sempre com excelência pela Família Rizzatti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
