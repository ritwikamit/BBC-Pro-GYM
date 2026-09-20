import React from 'react';
import { ArrowUpRight, Dumbbell, Users, MapPin, Compass } from 'lucide-react';

interface ExplorationGatewayProps {
  onNavigate: (page: string, hash?: string) => void;
}

export const ExplorationGateway: React.FC<ExplorationGatewayProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-14 sm:py-18 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-3">
            <span>EXPLORE BBC PRO GYM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Dive Deeper into BBC Pro Gym
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-2 font-normal">
            Explore detailed specifications, coach credentials, and local Aurangabad directions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Facilities & Equipment Gateway */}
          <div 
            onClick={() => onNavigate('facilities')}
            className="group cursor-pointer relative rounded-3xl p-6 sm:p-7 glass-card border-white/12 hover:border-[#ffd000]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ffd000]/10 rounded-full blur-2xl group-hover:bg-[#ffd000]/20 transition-all" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ffd000]/10 border border-[#ffd000]/30 flex items-center justify-center text-[#ffd000] mb-5 group-hover:scale-110 transition-transform">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#ffd000] font-bold uppercase tracking-widest block mb-1">
                EQUIPMENT & GEAR
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-[#ffd000] transition-colors">
                The Training Grounds & Gear
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-2.5 leading-relaxed font-sans">
                Full breakdown of Olympic free weight stations, plate-loaded matrix, dumbbells up to 50kg+, and photo tour.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-white/90 group-hover:text-[#ffd000] transition-colors">
                View Facilities & Gear
              </span>
              <div className="w-8 h-8 rounded-full glass-btn flex items-center justify-center text-white group-hover:text-[#ffd000] group-hover:scale-110 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Trainers & Coaching Gateway */}
          <div 
            onClick={() => onNavigate('trainers')}
            className="group cursor-pointer relative rounded-3xl p-6 sm:p-7 glass-card border-white/12 hover:border-[#ffd000]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">
                CERTIFIED COACHES
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-[#ffd000] transition-colors">
                Certified Coaches & Mentors
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-2.5 leading-relaxed font-sans">
                Meet our certified strength and hypertrophy coaches, view bios, specialty focus, and schedule a 1-on-1 consult.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-white/90 group-hover:text-[#ffd000] transition-colors">
                Meet Coaches
              </span>
              <div className="w-8 h-8 rounded-full glass-btn flex items-center justify-center text-white group-hover:text-[#ffd000] group-hover:scale-110 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 3: Location & Route Guide Gateway */}
          <div 
            onClick={() => onNavigate('location')}
            className="group cursor-pointer relative rounded-3xl p-6 sm:p-7 glass-card border-white/12 hover:border-[#ffd000]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#ffd000] mb-5 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-[#ffd000] font-bold uppercase tracking-widest block mb-1">
                LOCATION & TIMINGS
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-[#ffd000] transition-colors">
                Location, Maps & Timings
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-2.5 leading-relaxed font-sans">
                Full interactive map, operational shifts, and step-by-step route directions from Aurangabad Station & Ramesh Chowk.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-white/90 group-hover:text-[#ffd000] transition-colors">
                View Location & Maps
              </span>
              <div className="w-8 h-8 rounded-full glass-btn flex items-center justify-center text-white group-hover:text-[#ffd000] group-hover:scale-110 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
