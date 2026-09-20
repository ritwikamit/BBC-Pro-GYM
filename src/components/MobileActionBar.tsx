import React from 'react';
import { PhoneCall, Send, Compass } from 'lucide-react';
import { GYM_DATA } from '../data/gym';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-panel border-t border-white/15 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-10px_35px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${GYM_DATA.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl glass-btn text-white transition-all active:scale-95"
          aria-label="Call BBC Pro Gym"
        >
          <PhoneCall className="w-4 h-4 text-[#ffd000] mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-bold">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={GYM_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl glass-btn text-[#ffd000] hover:text-white transition-all active:scale-95 shadow-[0_0_15px_rgba(255,208,0,0.15)]"
          aria-label="Chat on WhatsApp"
        >
          <Send className="w-4 h-4 text-[#ffd000] mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={GYM_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl glass-btn-funky text-[#050505] font-bold shadow-lg transition-transform active:scale-95"
          aria-label="Get Directions in Google Maps"
        >
          <Compass className="w-4 h-4 mb-1" />
          <span className="text-[10px] uppercase tracking-wider font-bold">Directions</span>
        </a>
      </div>
    </div>
  );
};
