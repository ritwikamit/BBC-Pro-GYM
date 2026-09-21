import React, { useState } from 'react';
import { ArrowUpRight, Dumbbell, Users, Compass, Trophy, Clock3, MapPin, Flame, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExplorationGatewayProps {
  onNavigate: (page: string, hash?: string) => void;
}

interface TabContent {
  id: 'facilities' | 'trainers' | 'location';
  label: string;
  subLabel: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageCaption: string;
  stats: { label: string; value: string; icon: React.ElementType }[];
  ctaLabel: string;
}

const TABS: TabContent[] = [
  {
    id: 'facilities',
    label: 'Equipment & Floor',
    subLabel: 'Free Weights & Matrix',
    icon: Dumbbell,
    badge: 'OLYMPIC FLOOR MATRIX',
    title: 'The Training Grounds &',
    highlight: 'Competition Gear',
    description:
      'Engineered for maximum progressive overload and hypertrophy. Explore our Olympic power cages, competition barbells, calibrated iron plates, and heavy dumbbell pairs reaching 50kg+.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    imageCaption: 'Heavy Free-Weight Deck & Dumbbell Bay',
    stats: [
      { label: 'Free Weights', value: '50kg+ Pairs', icon: Dumbbell },
      { label: 'Squat Platforms', value: 'Power Racks', icon: Trophy },
      { label: 'Selectorized', value: 'Cable Matrix', icon: Flame },
    ],
    ctaLabel: 'Explore Full Equipment Deck',
  },
  {
    id: 'trainers',
    label: 'Coaches & Mentors',
    subLabel: 'Strength & Biomechanics',
    icon: Users,
    badge: 'CERTIFIED EXPERT MENTORS',
    title: 'Form Mastery &',
    highlight: 'Certified Coaching',
    description:
      'Meet Coach Vikram, Coach Rajesh, and Coach Amit. Certified specialists in powerlifting biomechanics, hypertrophy volume splits, and athletic conditioning ready to guide your journey.',
    image:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=85',
    imageCaption: 'Head Coach Vikram Singh · Strength Specialist',
    stats: [
      { label: 'Experience', value: '10+ Years', icon: Trophy },
      { label: 'Methodology', value: 'Biomechanics', icon: ShieldCheck },
      { label: 'Supervision', value: '1-on-1 Guidance', icon: CheckCircle2 },
    ],
    ctaLabel: 'Meet Coaches & View Credentials',
  },
  {
    id: 'location',
    label: 'Location & Transit',
    subLabel: 'Mission School Rd · Shifts',
    icon: Compass,
    badge: 'CONVENIENT AURANGABAD ACCESS',
    title: 'HQ Location, Routes &',
    highlight: 'Training Shifts',
    description:
      'Conveniently located at Gayatri Nagar on Mission School Road, Ratanua. Accessible in 10 minutes from Aurangabad Railway Station and Ramesh Chowk, with morning & evening hours.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    imageCaption: 'BBC Pro Gym · Mission School Road HQ',
    stats: [
      { label: 'Early Doors', value: '05:00 AM', icon: Clock3 },
      { label: 'Location', value: 'Mission School Rd', icon: MapPin },
      { label: 'Verified Rating', value: '4.5★ (174+ Reviews)', icon: Trophy },
    ],
    ctaLabel: 'View Interactive Map & Directions',
  },
];

export const ExplorationGateway: React.FC<ExplorationGatewayProps> = ({ onNavigate }) => {
  const [activeTabId, setActiveTabId] = useState<'facilities' | 'trainers' | 'location'>('facilities');
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd000]/10 border border-[#ffd000]/30 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#ffd000]" />
            <span>EXPLORATION PORTAL · DEEP DIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            DIVE DEEPER INTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd000] to-[#e5a400]">BBC PRO GYM</span>
          </h2>

          <p className="text-base sm:text-lg font-normal text-white/70 leading-relaxed">
            Switch between interactive tabs below to examine floor specifications, trainer credentials, and local transit routes.
          </p>
        </div>

        {/* ── 1. Sleek Interactive Tab Switcher Capsule ── */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-3xl bg-[#0c0c14]/90 border border-white/15 shadow-2xl max-w-full overflow-x-auto no-scrollbar">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-sans font-bold transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ffd000] via-[#ffbe00] to-[#e59f00] text-[#050507] shadow-[0_4px_20px_rgba(255,208,0,0.4)] scale-[1.02]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#050507]' : 'text-[#ffd000]'}`} />
                  <span className="uppercase tracking-wider">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 2. Cinematic Active Tab Showcase Console ── */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#101018]/95 via-[#0a0a10]/95 to-[#06060a] border border-[#ffd000]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(255,208,0,0.08)] overflow-hidden p-6 sm:p-8 lg:p-10 mb-12">
          
          {/* Top glowing gold accent beam */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffd000] to-transparent shadow-[0_0_16px_#ffd000]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Key Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd000]/10 border border-[#ffd000]/25 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#ffd000] mb-3">
                  <Flame className="w-3.5 h-3.5 text-[#ffd000]" />
                  <span>{activeTab.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-snug">
                  {activeTab.title}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff4a8] via-[#ffd000] to-[#e5a400]">
                    {activeTab.highlight}
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-white/75 mt-3 leading-relaxed font-sans">
                  {activeTab.description}
                </p>
              </div>

              {/* 3 Metric Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activeTab.stats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#141420]/80 border border-white/10 flex flex-col justify-center"
                    >
                      <div className="flex items-center gap-1.5 text-[#ffd000] mb-1">
                        <StatIcon className="w-4 h-4" />
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-display font-bold text-white tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Primary Action Button */}
              <div className="pt-3">
                <button
                  onClick={() => onNavigate(activeTab.id)}
                  className="glass-btn-funky h-12 px-6 sm:px-8 rounded-2xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>{activeTab.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#050507]" />
                </button>
              </div>
            </div>

            {/* Right Column: Photography Showcase with Floating Badge */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => onNavigate(activeTab.id)}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/20 shadow-2xl">
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Vignette Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060a]/90 via-transparent to-black/30" />

                {/* Bottom Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0c0c14]/85 border border-white/15 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#ffd000] block">
                      FEATURED PREVIEW
                    </span>
                    <span className="text-xs font-semibold text-white truncate block">
                      {activeTab.imageCaption}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#ffd000] text-[#050507] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 3. Synchronized Exploration Cards (Quick Jump) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isCurrent = tab.id === activeTabId;
            return (
              <div
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  onNavigate(tab.id);
                }}
                className={`group cursor-pointer relative rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${
                  isCurrent
                    ? 'bg-[#12121c]/90 border-2 border-[#ffd000] shadow-[0_10px_30px_rgba(255,208,0,0.15)]'
                    : 'bg-[#0c0c14]/80 border border-white/12 hover:border-[#ffd000]/50 hover:bg-[#101018]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isCurrent
                      ? 'bg-[#ffd000] text-[#050507]'
                      : 'bg-[#ffd000]/10 border border-[#ffd000]/25 text-[#ffd000]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50 group-hover:text-[#ffd000] uppercase tracking-wider flex items-center gap-1">
                    <span>VIEW PAGE</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#ffd000] transition-colors">
                    {tab.label}
                  </h4>
                  <p className="text-xs text-white/60 mt-1 font-sans">
                    {tab.subLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
