
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm text-zinc-500 font-medium">
          © 2025 Abdullah Pervaiz. All rights reserved.
        </div>
        
        <div className="flex gap-12 text-sm text-zinc-500 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
        
        <div className="text-sm text-zinc-600 italic">
          High Impact. No Exceptions.
        </div>
      </div>
    </footer>
  );
};
