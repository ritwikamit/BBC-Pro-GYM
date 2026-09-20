import React, { useEffect } from 'react';
import { BbcLogo } from './BbcLogo';
import { FacilitiesSection } from './FacilitiesSection';
import { GallerySection } from './GallerySection';
import { GYM_DATA } from '../data/gym';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Dumbbell, Shield, Sparkles, MapPin, PhoneCall } from 'lucide-react';

interface FacilitiesPageProps {
  onBackToHome: () => void;
  onOpenEnquiry: () => void;
  onNavigate: (page: string, hash?: string) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onBackToHome,
  onOpenEnquiry,
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen text-white flex flex-col justify-between overflow-hidden selection:bg-[#ffd000] selection:text-black">
      {/* Top Floating Glass Navigation Bar */}
      <header className="sticky top-0 z-50 w-full glass-nav-bar py-3 px-4 sm:px-8 border-b border-white/10 shadow-2xl backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="glass-btn h-10 px-3.5 rounded-2xl flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:text-[#ffd000] transition-colors"
              aria-label="Return to Main Overview"
            >
              <ArrowLeft className="w-4 h-4 text-[#ffd000]" />
              <span className="hidden sm:inline">Back to Home</span>
            </button>

            <button onClick={onBackToHome} className="flex items-center gap-2 focus:outline-none">
              <BbcLogo size={34} showWordmark={true} />
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70">
              <span className="text-white font-medium">FACILITIES & GEAR</span>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="glass-btn-funky h-10 px-4 rounded-2xl flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider shadow-lg"
            >
              <span>Join Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Page Hero Header */}
      <section className="relative z-10 pt-12 sm:pt-16 pb-8 px-5 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
          <Dumbbell className="w-3.5 h-3.5 text-[#ffd000]" />
          <span>FACILITY ARCHITECTURE · AURANGABAD</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              THE TRAINING <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd000] to-[#d49a00]">
                GROUNDS & MATRIX
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/75 mt-3 max-w-2xl font-normal leading-relaxed">
              Explore the exact heavy iron setup, Olympic grade platforms, plate-loaded cable apparatus, and climate-controlled floors on Mission School Road.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono shrink-0">
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-bold text-[#ffd000] block">50KG+</span>
              <span className="text-[10px] text-white/60 tracking-wider uppercase">Heavy Free Weights</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-bold text-white block">100%</span>
              <span className="text-[10px] text-white/60 tracking-wider uppercase">AC Floor Vent</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center col-span-2 sm:col-span-1">
              <span className="text-xl sm:text-2xl font-bold text-[#ffd000] block">4.5★</span>
              <span className="text-[10px] text-white/60 tracking-wider uppercase">174+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Equipment Cards */}
      <main className="relative z-10 flex-1">
        <FacilitiesSection />
        <GallerySection />

        {/* Free Pass Invitation Callout Banner */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0d0d14] via-[#141420] to-[#0d0d14] border border-[#ffd000]/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffd000]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-mono text-[#ffd000] uppercase tracking-widest font-bold">
                  EXPERIENCE BEFORE JOINING
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Want to inspect the machines in person?
                </h3>
                <p className="text-sm text-white/70">
                  Walk in during open hours for a free guided tour of the facility and test our Olympic equipment on Mission School Road.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto glass-btn-funky h-12 px-6 rounded-2xl flex items-center justify-center gap-2 text-xs font-sans font-bold uppercase tracking-wider shadow-lg"
                >
                  <span>Book Free Day Pass</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${GYM_DATA.phone}`}
                  className="w-full sm:w-auto glass-btn h-12 px-5 rounded-2xl flex items-center justify-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-white hover:text-[#ffd000]"
                >
                  <PhoneCall className="w-4 h-4 text-[#ffd000]" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
