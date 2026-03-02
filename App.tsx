
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { AIConsultant } from './components/AIConsultant';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  // Intersection Observer for Reveal Animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-rizzatti-gold/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="reveal-on-scroll reveal">
          <Features />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Process />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Portfolio />
        </div>

        <div className="reveal-on-scroll reveal">
          <Testimonials />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <About />
        </div>

        <div className="reveal-on-scroll reveal">
          <Location />
        </div>
        
        <div className="reveal-on-scroll reveal">
          <Contact />
        </div>

        <div className="reveal-on-scroll reveal">
          <AIConsultant />
        </div>
      </main>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5548984036090" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-90 animate-in fade-in zoom-in duration-500"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="white" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
          1
        </span>
      </a>
    </div>
  );
};

export default App;
