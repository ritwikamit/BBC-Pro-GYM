import React from 'react';
import { MEMBERSHIP_PLANS, GYM_DATA } from '../data/gym';
import { Check, Send, ShieldCheck, Zap, Flame, Crown } from 'lucide-react';

interface MembershipSectionProps {
  onOpenEnquiry?: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenEnquiry }) => {
  const getBadgeComponent = (badge: string, planId: string) => {
    if (planId === 'plan-3months') {
      return (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ffd000] via-[#ffbe00] to-[#e59f00] border border-[#ffe680] text-[#050507] text-[10.5px] font-sans font-extrabold tracking-[0.10em] uppercase shadow-[0_4px_16px_rgba(255,208,0,0.45)] flex items-center gap-1.5 whitespace-nowrap z-20 select-none">
          <Flame className="w-3.5 h-3.5 text-[#050507] fill-[#050507]" />
          <span>{badge}</span>
        </div>
      );
    }
    if (planId === 'plan-6months') {
      return (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ffbe00] via-[#ffd000] to-[#f59e0b] border border-[#ffe680] text-[#050507] text-[10.5px] font-sans font-extrabold tracking-[0.10em] uppercase shadow-[0_4px_14px_rgba(255,190,0,0.4)] flex items-center gap-1.5 whitespace-nowrap z-20 select-none">
          <Zap className="w-3.5 h-3.5 text-[#050507] fill-[#050507]" />
          <span>{badge}</span>
        </div>
      );
    }
    if (planId === 'plan-12months') {
      return (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ffd000] via-[#fff4a8] to-[#e5a400] border border-white/70 text-[#050507] text-[10.5px] font-sans font-extrabold tracking-[0.10em] uppercase shadow-[0_4px_18px_rgba(255,208,0,0.5)] flex items-center gap-1.5 whitespace-nowrap z-20 select-none">
          <Crown className="w-3.5 h-3.5 text-[#050507] fill-[#050507]" />
          <span>{badge}</span>
          <span className="ml-0.5 px-1.5 py-0.5 rounded-full bg-black/25 text-[9px] font-black tracking-normal text-[#050507]">
            SAVE 30%
          </span>
        </div>
      );
    }
    return (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ffd000] to-[#e5a400] border border-[#ffe680] text-[#050507] text-[10px] font-sans font-extrabold tracking-[0.10em] uppercase shadow-md flex items-center gap-1 whitespace-nowrap z-20 select-none">
        <span>{badge}</span>
      </div>
    );
  };

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
            Straightforward pricing with full gym floor access, zero hidden maintenance charges, and flexible morning &amp; evening training shifts.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                plan.id === 'plan-3months'
                  ? 'bg-gradient-to-b from-[#ffd000]/12 via-[#0d0d14]/95 to-[#06060a] border-2 border-[#ffd000] shadow-[0_15px_45px_rgba(255,208,0,0.20)]'
                  : plan.id === 'plan-6months'
                  ? 'bg-gradient-to-b from-[#ffbe00]/10 via-[#0d0d14]/95 to-[#06060a] border border-[#ffd000]/45 shadow-[0_12px_35px_rgba(255,208,0,0.14)] hover:border-[#ffd000]'
                  : plan.id === 'plan-12months'
                  ? 'bg-gradient-to-b from-[#ffd000]/14 via-[#0d0d14]/95 to-[#06060a] border border-[#ffd000]/60 shadow-[0_18px_50px_rgba(255,208,0,0.22)] hover:border-[#ffd000]'
                  : 'bg-[#0c0c14]/90 border border-white/15 hover:border-white/30'
              }`}
            >
              {/* Badge if available */}
              {plan.badge && getBadgeComponent(plan.badge, plan.id)}

              <div className="flex flex-col flex-1">
                {/* Plan Title & Duration (Calibrated min-height for horizontal plane alignment) */}
                <div className="border-b border-white/10 pb-5 mb-5 min-h-[70px] flex flex-col justify-center">
                  <h3 className="text-xl font-display font-bold text-white tracking-tight mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    {plan.duration}
                  </p>
                </div>

                {/* Price Display (Uniform min-height) */}
                <div className="mb-6 min-h-[74px] flex flex-col justify-center">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-white/50">/ commitment</span>
                  </div>
                  {plan.effectiveMonthly && (
                    <p className="text-xs font-mono text-[#ffd000] mt-1.5 font-semibold">
                      {plan.effectiveMonthly}
                    </p>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-white/80 mb-8 font-normal flex-1">
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
              <div className="pt-2 mt-auto">
                <a
                  href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=${encodeURIComponent(
                    plan.whatsappMessage || `Hi BBC Pro Gym, I am interested in the ${plan.title} (${plan.duration}) plan.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-12 rounded-2xl font-sans text-xs uppercase tracking-[0.14em] font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.badge
                      ? 'glass-btn-funky shadow-lg hover:scale-[1.02] active:scale-[0.98]'
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
            className="glass-btn font-sans font-semibold text-xs uppercase tracking-[0.16em] px-5 py-2.5 rounded-2xl hover:text-[#ffd000] shrink-0 cursor-pointer"
          >
            <span>Ask Front Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
