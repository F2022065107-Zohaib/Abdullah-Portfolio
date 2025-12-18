
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, TrendingUp } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Video' | 'Thumbnail'>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Selected Work</h3>
          
          <div className="flex justify-center gap-4">
            {['All', 'Video', 'Thumbnail'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 glass border-white/5">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="p-4 rounded-full bg-white text-black translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                   </div>
                </div>
                {project.stats && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    {project.stats}
                  </div>
                )}
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-zinc-400 transition-colors">{project.title}</h4>
              <p className="text-zinc-500 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
