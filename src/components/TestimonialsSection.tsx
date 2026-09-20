import React from 'react';
import { TESTIMONIALS, GYM_DATA } from '../data/gym';
import { Star, Quote, ExternalLink } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-[#ffd000]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
              <span>MEMBER WORD & REPUTATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Real Experiences. Real Discipline.
            </h2>
          </div>

          <a
            href={GYM_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-white hover:text-[#ffd000] glass-btn px-5 py-3 rounded-2xl shadow-lg transition-colors"
          >
            <span>Read 174+ Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ffd000]" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="relative p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between hover:border-[#ffd000]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#ffd000]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffd000] drop-shadow-[0_0_6px_rgba(255,208,0,0.4)]" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-white/20" />
                </div>

                <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-6 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-display font-bold text-white">{review.name}</h4>
                  <span className="text-xs font-mono text-white/50">{review.tag}</span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-[#ffd000] uppercase tracking-wider bg-[#ffd000]/10 border border-[#ffd000]/30 px-3 py-1 rounded-full">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
