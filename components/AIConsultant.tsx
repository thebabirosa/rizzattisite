
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { getDecorConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Olá! Sou o Consultor de IA da Rizzatti. Como posso ajudar a transformar seu ambiente hoje? Pode me perguntar sobre cores, materiais ou layouts!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getDecorConsultation(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="consultor" className="py-24 bg-rizzatti-bg relative overflow-hidden">
      {/* Abstract decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rizzatti-gold/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rizzatti-gold/5 blur-[80px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-rizzatti-gold/10 border border-rizzatti-gold/20 text-rizzatti-gold text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Inteligência Artificial
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Planeje sua <span className="text-rizzatti-gold">renovação</span> agora mesmo.
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Dúvidas sobre o que combina com seu espaço? Nosso assistente treinado pela equipe Rizzatti está pronto para te dar sugestões instantâneas baseadas nas melhores tendências de design.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-rizzatti-gold/20 flex items-center justify-center text-rizzatti-gold">
                  1
                </div>
                <p className="text-sm font-medium">Pergunte sobre combinações de cores e texturas.</p>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-rizzatti-gold/20 flex items-center justify-center text-rizzatti-gold">
                  2
                </div>
                <p className="text-sm font-medium">Receba dicas de curadoria para móveis soltos.</p>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-10 h-10 rounded-full bg-rizzatti-gold/20 flex items-center justify-center text-rizzatti-gold">
                  3
                </div>
                <p className="text-sm font-medium">Entenda como a iluminação pode mudar seu ambiente.</p>
              </div>
            </div>
          </div>

          <div className="bg-rizzatti-bg-soft border border-white/10 rounded-rizzatti-lg h-[550px] flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rizzatti-gold flex items-center justify-center text-black">
                <Bot size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Assistente Rizzatti</div>
                <div className="text-[10px] text-rizzatti-gold flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-rizzatti-gold animate-pulse"></div>
                  Online agora
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                    msg.role === 'assistant' ? 'bg-rizzatti-gold text-black' : 'bg-white/10 text-white'
                  }`}>
                    {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'assistant' 
                      ? 'bg-white/5 text-white/90 rounded-tl-none' 
                      : 'bg-rizzatti-gold text-black font-medium rounded-tr-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-rizzatti-gold flex items-center justify-center text-black">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none">
                    <Loader2 size={18} className="text-rizzatti-gold animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Qual poltrona combina com marcenaria em carvalho?"
                className="flex-1 bg-white/10 border border-white/10 rounded-full px-5 py-3 text-white text-sm focus:outline-none focus:border-rizzatti-gold/50 transition-colors"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 rounded-full bg-rizzatti-gold hover:bg-rizzatti-gold-dark text-black flex items-center justify-center transition-all active:scale-90 disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
