
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border-white/10">
             <img 
               src="https://picsum.photos/seed/abdullah/800/1000" 
               alt="Abdullah Pervaiz"
               className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 rounded-2xl glass border-white/10 glow-border hidden md:block">
            <div className="text-4xl font-bold mb-1">5Y+</div>
            <div className="text-zinc-500 text-sm font-bold tracking-widest uppercase">Experience</div>
          </div>
        </div>
        
        <div>
          <h2 className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4">The Persona</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            The Digital Edge Your <span className="italic">Content</span> Needs.
          </h3>
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
            Hey, I'm <span className="text-white font-bold">Abdullah Pervaiz</span>. I thrive at the intersection of psychology and cinematography. In an era where attention is the new currency, I specialize in ensuring your viewers never look away.
          </p>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Based in the fast-paced world of digital freelancing, I've partnered with creators globally to scale their presence through high-impact visual storytelling and conversion-optimized design.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-2xl font-bold mb-1">200+</div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Videos Edited</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">50M+</div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Total Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">12%</div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Avg. CTR Boost</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
