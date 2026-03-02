
import React, { useState } from 'react';
import { MapPin, Clock, Navigation, Phone, MessageCircle, Building2 } from 'lucide-react';

export const Location: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState<'floripa' | 'picarras'>('floripa');

  const units = {
    floripa: {
      name: "Matriz - Florianópolis",
      address: "Rod. João Gualberto Soares, 835",
      district: "Ingleses do Rio Vermelho",
      city: "Florianópolis - SC",
      cep: "CEP: 88058-300",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.835158656111!2d-48.40428572454199!3d-27.458794876326176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2759e99a7b97b%3A0x6b1c1e576e8a4a5b!2sRod.%20Jo%C3%A3o%20Gualberto%20Soares%2C%20835%20-%20Ingleses%20do%20Rio%20Vermelho%2C%20Florian%C3%B3polis%20-%20SC%2C%2088058-300!5e0!3m2!1spt-BR!2sbr!4v1709123456789!5m2!1spt-BR!2sbr",
      gpsLink: "https://www.google.com/maps/dir//Rod.+Jo%C3%A3o+Gualberto+Soares,+835+-+Ingleses+do+Rio+Vermelho,+Florian%C3%B3polis+-+SC,+88058-300",
      renderHours: () => (
        <div className="text-rizzatti-text-soft text-sm grid grid-cols-[auto_1fr] gap-x-8 gap-y-1">
          <span>Segunda a Sexta:</span>
          <span className="font-medium text-rizzatti-text text-right">08:00–12:00, 13:30–18:00</span>
          <span>Sábado:</span>
          <span className="font-medium text-rizzatti-text text-right">09:00–13:00</span>
          <span>Domingo:</span>
          <span className="font-medium text-rizzatti-text text-right">Fechado</span>
        </div>
      )
    },
    picarras: {
      name: "Showroom - Balneário Piçarras",
      address: "Av. Emanoel Pinto, 2528 - Sala 06",
      district: "Bairro Centro",
      city: "Balneário Piçarras - SC",
      cep: "CEP: 88380-000",
      mapUrl: "https://maps.google.com/maps?q=Av.+Emanoel+Pinto,+2528+-+Sala+06+-+Bairro+Centro,+Balne%C3%A1rio+Pi%C3%A7arras+-+SC,+88380-000&t=&z=15&ie=UTF8&iwloc=&output=embed",
      gpsLink: "https://www.google.com/maps/dir//Av.+Emanoel+Pinto,+2528+-+Sala+06+-+Bairro+Centro,+Balne%C3%A1rio+Pi%C3%A7arras+-+SC,+88380-000",
      renderHours: () => (
        <div className="text-rizzatti-text-soft text-sm">
          <span className="font-medium text-rizzatti-text block mb-1 text-lg">Somente com horário marcado</span>
          <span>Entre em contato para agendar sua visita exclusiva.</span>
        </div>
      )
    }
  };

  const current = units[activeUnit];

  return (
    <section id="localizacao" className="py-24 bg-rizzatti-paper-darker">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Card */}
          <div className="reveal-on-scroll reveal">
            <span className="text-rizzatti-gold font-bold text-xs uppercase tracking-widest mb-4 block">Onde nos encontrar</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Nossas Unidades</h2>
            
            {/* Unit Selector */}
            <div className="flex gap-4 mb-10 p-1 bg-white/50 rounded-full w-fit">
              <button
                onClick={() => setActiveUnit('floripa')}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeUnit === 'floripa'
                    ? 'bg-rizzatti-gold text-black shadow-lg'
                    : 'text-rizzatti-text-soft hover:bg-white'
                }`}
              >
                Florianópolis
              </button>
              <button
                onClick={() => setActiveUnit('picarras')}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeUnit === 'picarras'
                    ? 'bg-rizzatti-gold text-black shadow-lg'
                    : 'text-rizzatti-text-soft hover:bg-white'
                }`}
              >
                Balneário Piçarras
              </button>
            </div>
            
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500 key={activeUnit}">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-rizzatti-gold/10 flex items-center justify-center text-rizzatti-gold shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rizzatti-text mb-1 text-lg">{current.name}</h4>
                  <p className="text-rizzatti-text-soft text-sm leading-relaxed">
                    {current.address}<br />
                    {current.district}<br />
                    {current.city}<br />
                    {current.cep}
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-rizzatti-gold/10 flex items-center justify-center text-rizzatti-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rizzatti-text mb-1">Horário de Atendimento</h4>
                  {current.renderHours()}
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-rizzatti-gold/10 flex items-center justify-center text-rizzatti-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rizzatti-text mb-1">Contato</h4>
                  <p className="text-rizzatti-text-soft text-sm">
                    (48) 98403-6090
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-rizzatti-gold/10 flex items-center justify-center text-rizzatti-gold shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rizzatti-text mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/5548984036090" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-rizzatti-gold text-sm font-bold hover:underline"
                  >
                    Falar com a equipe
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href={current.gpsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-rizzatti-bg text-white hover:bg-rizzatti-gold hover:text-black font-bold py-4 px-10 rounded-full transition-all shadow-xl shadow-black/10 group"
              >
                <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Como Chegar no Showroom
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[500px] w-full rounded-rizzatti-lg overflow-hidden shadow-2xl border-4 border-white reveal-on-scroll reveal relative">
            <iframe 
              key={activeUnit} // Force re-render on change
              src={current.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização ${current.name}`}
              className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md py-2 px-4 rounded-lg shadow-lg text-xs font-bold uppercase tracking-wider border border-rizzatti-gold/20">
              {activeUnit === 'floripa' ? 'Florianópolis' : 'Balneário Piçarras'}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
