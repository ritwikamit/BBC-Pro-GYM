import React from 'react';
import { FACILITIES } from '../data/gym';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
            <span>THE TRAINING GROUNDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Facilities Engineered for Hard Work
          </h2>
          <p className="text-sm sm:text-base font-normal text-white/70">
            Every corner of BBC Pro Gym is dedicated to proper training mechanics, safety, and focused intensity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group relative rounded-3xl overflow-hidden glass-card border-white/10 hover:border-[#ffd000]/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent" />
                
                {/* Minimalist Yellow Tag */}
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[#ffd000] glass-card px-3 py-1 rounded-full border border-[#ffd000]/40 shadow-lg">
                  {facility.tag}
                </span>
              </div>

              <div className="p-6 sm:p-7 relative glass-panel border-t border-white/10">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#ffd000] transition-colors tracking-tight">
                  {facility.title}
                </h3>
                <p className="text-sm font-normal text-white/70 leading-relaxed">
                  {facility.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
