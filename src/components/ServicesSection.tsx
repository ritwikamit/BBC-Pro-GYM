import React from 'react';
import { SERVICES } from '../data/gym';
import { Check, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
              <span>PROGRAMS & DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Built for Every Fitness Stage
            </h2>
          </div>
          <p className="text-sm sm:text-base font-normal text-white/70 max-w-md leading-relaxed">
            Whether starting your fitness journey or advancing towards elite athletic milestones, our structured training delivers verifiable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#ffd000] bg-[#ffd000]/10 px-3 py-1 rounded-full border border-[#ffd000]/30">
                  {service.category}
                </span>
                <span className="text-xs font-mono text-white/40">
                  0{index + 1}
                </span>
              </div>

              {/* Service Details */}
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-[#ffd000] transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-normal text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                      <div className="w-4 h-4 rounded-full bg-[#ffd000]/20 text-[#ffd000] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lucid Glass CTA */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-3.5 px-6 rounded-2xl glass-btn font-sans text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 group-hover:border-[#ffd000]/50 group-hover:text-white transition-all"
              >
                <span>Select Program</span>
                <ArrowUpRight className="w-4 h-4 text-[#ffd000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
