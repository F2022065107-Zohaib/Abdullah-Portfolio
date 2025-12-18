
import React from 'react';
import { Video, Layout, Smartphone, Layers, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

// Use a component map instead of an element map to avoid React.cloneElement typing issues.
// We store the icon components directly and render them with props in the JSX.
const IconMap: Record<string, React.ElementType> = {
  Video: Video,
  Layout: Layout,
  Smartphone: Smartphone,
  Layers: Layers
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase mb-4">Service Suite</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              High-Value Solutions for <br />the <span className="gradient-text">Modern Creator.</span>
            </h3>
          </div>
          <p className="text-zinc-400 max-w-sm">
            Tailored packages designed to handle everything from production to distribution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="p-8 rounded-3xl glass border-white/5 hover:border-white/20 transition-all group hover:bg-white/5"
              >
                <div className="mb-8 p-4 bg-white/5 rounded-2xl inline-block group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                  {/* Render the icon component directly with the desired classes, fixing the TS className error */}
                  {Icon && (
                    <Icon className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                  )}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  <Zap className="w-3 h-3 text-yellow-500" />
                  Premium Quality
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
