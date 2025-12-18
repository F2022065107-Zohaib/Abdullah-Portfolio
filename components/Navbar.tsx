
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navItems = ['About', 'Services', 'Work', 'Contact'];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
          ABDULLAH<span className="text-zinc-500 italic font-medium ml-1">PERVAIZ</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('Contact')}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95"
          >
            LET'S TALK
          </button>
        </div>

        {/* Mobile menu could go here if needed */}
      </div>
    </nav>
  );
};
