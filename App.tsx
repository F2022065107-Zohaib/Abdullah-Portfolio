
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-white selection:text-black">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-zinc-800/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-zinc-700/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] bg-zinc-900/40 blur-[120px] rounded-full" />
      </div>

      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating Action Button for AI Consultation */}
      <AIChat />
    </div>
  );
};

export default App;
