import React from 'react';
import { GYM_DATA } from '../data/gym';
import { Award, TrendingUp, Clock3, Users2, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Emblem Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 glass-card shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80"
                alt="BBC Pro Gym Training Atmosphere"
                loading="lazy"
                decoding="async"
                className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060609] via-transparent to-transparent opacity-85" />

              {/* Floating Lucidity Glass Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border-white/20 shadow-2xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#ffd000]/25 to-[#ff9800]/25 border border-[#ffd000]/40 flex items-center justify-center text-[#ffd000] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Aurangabad&apos;s Strength Sanctuary</h4>
                    <p className="text-xs text-white/70">Gayatri Nagar · Mission School Road</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Funky Gold Accent Element */}
            <div className="absolute -top-3 -left-3 w-28 h-28 border-t-2 border-l-2 border-[#ffd000]/50 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            {/* Clean Cylinder Badge without yellow dot */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-5">
              <span>ABOUT BBC PRO GYM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
              Forged with Grit. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd000] to-[#d49a00]">
                Built for Real Transformation.
              </span>
            </h2>

            <div className="space-y-4 text-white/75 text-base sm:text-lg font-normal leading-relaxed mb-8">
              <p>
                Located on Mission School Road in Ratanua, Aurangabad, <strong className="text-white font-semibold">BBC Pro Gym</strong> was 
                established to give fitness enthusiasts, beginners, and serious lifters a high-standard training sanctuary 
                free from distractions.
              </p>
              <p>
                Our gold-and-black emblem embeds an architectural brick-wall motif — a nod to the enduring heritage of the Bajrang Bali 
                Bricks Company, symbolizing an unbreakable foundation, progressive resilience, and disciplined physical craft.
              </p>
              <p>
                Whether your target is muscular hypertrophy, athletic power, or shedding stubborn weight, our comprehensive 
                free-weight setup, plate-loaded machines, and structured guidance keep you accountable from day one.
              </p>
            </div>

            {/* Value Pillars Grid in Lucidity Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-card">
                <div className="p-2.5 rounded-xl bg-[#ffd000]/10 border border-[#ffd000]/30 text-[#ffd000] shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Targeted Progressive Overload</h4>
                  <p className="text-xs text-white/60 mt-0.5">Heavy barbells, multiple power stations, and complete dumbbell sets.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-card">
                <div className="p-2.5 rounded-xl bg-[#ffd000]/10 border border-[#ffd000]/30 text-[#ffd000] shrink-0">
                  <Clock3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Early 05:00 AM Shifts</h4>
                  <p className="text-xs text-white/60 mt-0.5">Convenient morning and evening hours fitting demanding work schedules.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-card">
                <div className="p-2.5 rounded-xl bg-[#ffd000]/10 border border-[#ffd000]/30 text-[#ffd000] shrink-0">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Supportive Brotherhood</h4>
                  <p className="text-xs text-white/60 mt-0.5">Motivating atmosphere where every member pushes with disciplined intent.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-card">
                <div className="p-2.5 rounded-xl bg-[#ffd000]/10 border border-[#ffd000]/30 text-[#ffd000] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">4.5★ Verified Rating</h4>
                  <p className="text-xs text-white/60 mt-0.5">Backed by 174+ member reviews on Google Maps business listing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
