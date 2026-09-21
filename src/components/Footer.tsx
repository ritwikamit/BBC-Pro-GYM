import React from 'react';
import { BbcLogo } from './BbcLogo';
import { GYM_DATA } from '../data/gym';
import { ACCustomLabsLogo } from './ACCustomLabsLogo';
import { Instagram, Compass, PhoneCall, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, page: string, hash?: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="relative bg-[#000000] border-t border-white/10 pt-16 pb-28 md:pb-16 text-white/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Col 1: Brand & Identity with official emblem */}
          <div className="md:col-span-5 space-y-4">
            <BbcLogo size={48} showWordmark={true} />
            <p className="text-sm font-normal text-white/70 max-w-sm leading-relaxed mt-3">
              Premium strength, bodybuilding, and body transformation center in Aurangabad, Bihar. 
              Equipped with Olympic free weights, plate-loaded stations, and structured guidance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl glass-btn flex items-center justify-center text-white/75 hover:text-[#ffd000] transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={GYM_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl glass-btn flex items-center justify-center text-white/75 hover:text-[#ffd000] transition-colors"
                aria-label="Google Maps Location"
              >
                <Compass className="w-4 h-4" />
              </a>

              <a
                href={`tel:${GYM_DATA.phone}`}
                className="w-10 h-10 rounded-2xl glass-btn flex items-center justify-center text-white/75 hover:text-[#ffd000] transition-colors"
                aria-label="Call Front Desk"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li><a href="#about" onClick={(e) => handleNav(e, 'home', '#about')} className="hover:text-[#ffd000] transition-colors">About Gym</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'home', '#services')} className="hover:text-[#ffd000] transition-colors">Programs</a></li>
              <li><a href="#facilities" onClick={(e) => handleNav(e, 'facilities')} className="hover:text-[#ffd000] transition-colors">Facilities & Gear</a></li>
              <li><a href="#memberships" onClick={(e) => handleNav(e, 'home', '#memberships')} className="hover:text-[#ffd000] transition-colors">Memberships</a></li>
              <li><a href="#trainers" onClick={(e) => handleNav(e, 'trainers')} className="hover:text-[#ffd000] transition-colors">Coaches & Trainers</a></li>
              <li><a href="#gallery" onClick={(e) => handleNav(e, 'facilities')} className="hover:text-[#ffd000] transition-colors">Ambience & Tour</a></li>
              <li><a href="#location" onClick={(e) => handleNav(e, 'location')} className="hover:text-[#ffd000] transition-colors">Location & Timings</a></li>
            </ul>
          </div>

          {/* Col 3: Operations & Location */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Operations
            </h4>
            <div className="space-y-2 tracking-wide text-white/70">
              {GYM_DATA.hours.map((h, i) => (
                <p key={i} className="flex justify-between gap-2">
                  <span className="text-white/50">{h.days}:</span>
                  <span className="text-white font-medium">{h.time}</span>
                </p>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] text-white/50">
              <p>{GYM_DATA.address}, {GYM_DATA.city}, Bihar {GYM_DATA.pincode}</p>
              <p className="mt-1 text-[#ffd000]">Coordinates: 24.74° N, 84.36° E</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright, Credits & To Top Button */}
        <div className="pt-8 border-t border-white/10 relative flex flex-col items-center justify-center gap-2.5 text-xs text-white/50 text-center">
          <p className="font-mono text-xs text-white/50">
            © {new Date().getFullYear()} BBC PRO GYM. All rights reserved. Train with purpose.
          </p>

          {/* Designed and Developed By ACCustom Labs - Centered & Aligned */}
          <div className="flex items-center justify-center gap-2 text-xs font-sans text-white/60 hover:text-white/80 transition-colors">
            <span className="whitespace-nowrap">Designed and developed by</span>
            <ACCustomLabsLogo
              size="default"
              className="inline-flex items-center translate-y-[1px] transition-transform duration-200 hover:scale-[1.04]"
            />
          </div>

          <button
            onClick={scrollToTop}
            className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-2 md:mt-0 flex items-center gap-2 hover:text-white transition-colors glass-btn px-4 py-2 rounded-2xl text-xs font-sans font-semibold"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ffd000]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
