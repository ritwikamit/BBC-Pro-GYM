import React, { useEffect } from 'react';
import { BbcLogo } from './BbcLogo';
import { LocationSection } from './LocationSection';
import { GYM_DATA } from '../data/gym';
import { ArrowLeft, ArrowUpRight, MapPin, Compass, Navigation, PhoneCall, Clock3, Car, Train, Bike } from 'lucide-react';

interface LocationPageProps {
  onBackToHome: () => void;
  onOpenEnquiry: () => void;
  onNavigate: (page: string, hash?: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({
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
              <span className="text-white font-medium">LOCATION & DIRECTIONS</span>
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
          <MapPin className="w-3.5 h-3.5 text-[#ffd000]" />
          <span>VISIT & CONNECT · AURANGABAD HQ</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              LOCATION, TIMINGS <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd000] to-[#d49a00]">
                & ROUTE DIRECTIONS
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/75 mt-3 max-w-2xl font-normal leading-relaxed">
              Find us in Gayatri Nagar, Mission School Road, Ratanua, Aurangabad, Bihar 824101. Easily accessible by bike, car, or walking.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 font-mono text-xs text-white/80 shrink-0">
            <a
              href={GYM_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-funky px-4 py-3 rounded-2xl flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section with Map, Hours & Info */}
      <main className="relative z-10 flex-1">
        <LocationSection onOpenEnquiry={onOpenEnquiry} />

        {/* Aurangabad Landmark Directions Guide */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6">
            Landmark Navigation in Aurangabad
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 rounded-3xl glass-card border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#ffd000] font-bold text-sm uppercase">
                <Train className="w-4 h-4" />
                <span>From Railway Station (Anugrah Narayan Rd)</span>
              </div>
              <p className="text-white/70 font-sans leading-relaxed">
                Approx 2.5 km. Take an auto/rickshaw towards Mission School Road via Gayatri Nagar. You will spot the BBC Pro Gym branding on the main lane.
              </p>
              <span className="text-[#ffd000] block text-[11px]">Drive time: ~7 minutes</span>
            </div>

            <div className="p-6 rounded-3xl glass-card border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#ffd000] font-bold text-sm uppercase">
                <Car className="w-4 h-4" />
                <span>From Ramesh Chowk / Main Market</span>
              </div>
              <p className="text-white/70 font-sans leading-relaxed">
                Approx 1.8 km. Head south towards Ratanua / Gayatri Nagar along Mission School Road. Convenient parking space available for bikes and cars outside.
              </p>
              <span className="text-[#ffd000] block text-[11px]">Drive time: ~5 minutes</span>
            </div>

            <div className="p-6 rounded-3xl glass-card border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#ffd000] font-bold text-sm uppercase">
                <Bike className="w-4 h-4" />
                <span>From Old GT Road Junction</span>
              </div>
              <p className="text-white/70 font-sans leading-relaxed">
                Approx 1.2 km. Turn onto Mission School approach road. Direct straight connectivity with wide street access.
              </p>
              <span className="text-[#ffd000] block text-[11px]">Drive time: ~4 minutes</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
