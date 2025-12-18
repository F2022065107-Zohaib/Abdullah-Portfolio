
import React from 'react';
import { PlayCircle, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] z-10" />
        <img 
          src="https://picsum.photos/seed/creative/1920/1080?grayscale" 
          alt="Abstract Creative Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[10px] tracking-widest font-bold text-zinc-400 uppercase">Available for freelance</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
          CRAFTING <span className="gradient-text italic">SENSATIONS</span> <br />
          FROM RAW PIXELS.
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
          Professional video editor & thumbnail designer for high-growth creators. 
          I don't just edit videos; I build retention loops and high-CTR growth machines.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all transform hover:translate-y-[-2px]"
          >
            <PlayCircle className="w-5 h-5" />
            VIEW SHOWREEL
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border-white/10 text-white font-bold hover:bg-white/5 transition-all"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <ArrowDown className="text-zinc-500" />
      </div>
    </section>
  );
};
