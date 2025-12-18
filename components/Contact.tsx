
import React from 'react';
import { Mail, ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto rounded-[3rem] glass border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent" />
        
        <div className="p-12 md:p-20 text-center">
          <h2 className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase mb-8">Ready to grow?</h2>
          <h3 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter leading-tight">
            LET’S CREATE SOMETHING <br />
            <span className="italic gradient-text">UNFORGETTABLE.</span>
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:contact@abdullahpervaiz.com"
              className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-bold hover:bg-zinc-200 transition-all group w-full md:w-auto text-lg"
            >
              <Mail className="w-6 h-6" />
              SEND AN EMAIL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <button 
                  key={i}
                  className="p-5 rounded-2xl glass border-white/10 hover:border-white/30 transition-all"
                >
                  <Icon className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <p className="text-zinc-500 font-medium">
            Currently booking for <span className="text-white">Q3 2025</span> projects.
          </p>
        </div>
      </div>
    </section>
  );
};
