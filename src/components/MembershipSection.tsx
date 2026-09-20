import React from 'react';
import { MEMBERSHIP_PLANS, GYM_DATA } from '../data/gym';
import { Check, Sparkles, Send, ShieldCheck, Zap } from 'lucide-react';

interface MembershipSectionProps {
  onOpenEnquiry?: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="memberships" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
            <Zap className="w-3.5 h-3.5 text-[#ffd000]" />
            <span>MEMBERSHIP TIERS · NO ADMISSION FEE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            MEMBERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd000] to-[#d49a00]">TIERS & PLANS</span>
          </h2>

          <p className="text-base sm:text-lg font-normal text-white/70 leading-relaxed">
            Straightforward pricing with full gym floor access, zero hidden maintenance charges, and flexible morning & evening training shifts.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-xl ${
                plan.isPopular
                  ? 'glass-panel border-[#ffd000]/40 shadow-[0_15px_45px_rgba(255,208,0,0.15)] bg-gradient-to-b from-[#ffd000]/10 via-black/40 to-transparent'
                  : 'glass-card border-white/15 hover:border-white/30'
              }`}
            >
              {/* Badge if available */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ffd000] to-[#d49a00] text-[#050507] text-[10px] font-mono font-bold tracking-[0.18em] uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Title & Duration */}
                <div className="border-b border-white/10 pb-5 mb-6">
                  <h3 className="text-xl font-display font-bold text-white tracking-tight mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    {plan.duration}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-white/50">/ commitment</span>
                  </div>
                  {plan.effectiveMonthly && (
                    <p className="text-xs font-mono text-[#ffd000] mt-1 font-semibold">
                      Equivalent to {plan.effectiveMonthly}
                    </p>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-white/80 mb-8 font-normal">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#ffd000]/20 text-[#ffd000] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=${encodeURIComponent(
                    plan.whatsappMessage || `Hi BBC Pro Gym, I am interested in the ${plan.title} (${plan.duration}) plan.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-2xl font-sans text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular
                      ? 'glass-btn-funky shadow-lg hover:brightness-105'
                      : 'glass-btn hover:border-[#ffd000]/50 hover:text-white'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enrol on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-3xl glass-card border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#ffd000]/10 border border-[#ffd000]/30 text-[#ffd000] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-white">Direct On-Floor Walk-In Consultation</h4>
              <p className="text-xs font-mono text-white/60">Visit anytime between 05:00 AM – 11:30 AM or 04:00 PM – 10:00 PM</p>
            </div>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="glass-btn font-sans font-semibold text-xs uppercase tracking-[0.16em] px-5 py-2.5 rounded-2xl hover:text-[#ffd000] shrink-0"
          >
            <span>Ask Front Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
