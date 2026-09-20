import React from 'react';
import { TRAINERS, GYM_DATA } from '../data/gym';
import { Award, Target, Send, BadgeCheck } from 'lucide-react';

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
            <BadgeCheck className="w-3.5 h-3.5 text-[#ffd000]" />
            <span>CERTIFIED GUIDANCE · AURANGABAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            COACHES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd000] to-[#d49a00]">STRENGTH MENTORS</span>
          </h2>

          <p className="text-base sm:text-lg font-normal text-white/70 leading-relaxed">
            Train under certified professionals who prioritize joint safety, proper lifting biomechanics, and structured milestone tracking.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group glass-card rounded-3xl overflow-hidden border border-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0a0a0e]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent opacity-90" />

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full glass-panel border-white/20 text-[11px] font-mono font-medium text-white shadow-lg flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#ffd000]" />
                    <span>{trainer.experience}</span>
                  </div>

                  {/* Name overlay on bottom of photo */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-mono text-[#ffd000] mt-0.5 tracking-wide">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                {/* Trainer Body details */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm font-normal text-white/70 leading-relaxed mb-5">
                    {trainer.bio}
                  </p>

                  {/* Specialties chips */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-white/50">
                      <Target className="w-3.5 h-3.5 text-[#ffd000]" />
                      <span>Key Specialties</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.speciality.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-white/85 tracking-wide"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20BBC%20Pro%20Gym%2C%20I%20would%20like%20to%20consult%20with%20coach%20${encodeURIComponent(
                    trainer.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl glass-btn font-sans text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 hover:border-[#ffd000]/50 hover:text-white transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#ffd000]" />
                  <span>Request Coach Session</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
