import React, { useState } from 'react';
import { GYM_DATA } from '../data/gym';
import { MapPin, PhoneCall, Send, Clock3, Compass, Copy, Check, ExternalLink } from 'lucide-react';

interface LocationSectionProps {
  onOpenEnquiry: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenEnquiry }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${GYM_DATA.address}, ${GYM_DATA.city}, ${GYM_DATA.state} ${GYM_DATA.pincode}, India`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border-white/15 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-4">
            <span>VISIT & CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Location, Hours & Contact
          </h2>
          <p className="text-sm sm:text-base font-normal text-white/70 mt-2 max-w-xl">
            Easy to locate on Mission School Road. Walk in during operational hours or connect directly with our front desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Hours Cards in Glass */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card relative backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ffd000]/15 to-[#d49a00]/15 border border-[#ffd000]/30 flex items-center justify-center text-[#ffd000] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#ffd000]">
                    Physical Address
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mt-1">BBC Pro Gym</h3>
                  <p className="text-sm font-normal text-white/75 mt-1 leading-relaxed">
                    {GYM_DATA.address}, {GYM_DATA.city}, {GYM_DATA.state} — {GYM_DATA.pincode}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-5">
                    <a
                      href={GYM_DATA.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn-funky text-xs uppercase tracking-[0.16em] font-bold px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Directions</span>
                    </a>

                    <button
                      onClick={handleCopyAddress}
                      className="glass-btn text-xs uppercase tracking-[0.16em] font-semibold px-4 py-2.5 rounded-2xl flex items-center gap-2 text-white hover:text-[#ffd000] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#ffd000]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card backdrop-blur-xl">
              <div className="flex items-center gap-3.5 mb-6 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#ffd000]/10 border border-[#ffd000]/30 flex items-center justify-center text-[#ffd000]">
                  <Clock3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-white">Daily Operational Shifts</h3>
                  <p className="text-xs font-mono text-white/50">Open 6 Days a Week (Monday – Saturday)</p>
                </div>
              </div>

              <div className="space-y-3 font-mono">
                {GYM_DATA.hours.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:border-[#ffd000]/30 transition-colors">
                    <div>
                      <span className="text-[11px] text-[#ffd000] uppercase tracking-[0.18em] block font-bold">
                        {item.days}
                      </span>
                      {item.note && (
                        <span className="text-[10px] text-white/50 block mt-0.5">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-bold text-white tracking-wider">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Instant Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${GYM_DATA.phone}`}
                className="p-4 rounded-2xl glass-btn flex items-center gap-3.5 hover:text-[#ffd000] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ffd000]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">Call Direct</span>
                  <span className="text-xs font-bold text-white tracking-wider">{GYM_DATA.displayPhone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20BBC%20Pro%20Gym%2C%20I%20have%20an%20enquiry%20about%20joining.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-btn flex items-center gap-3.5 hover:text-[#ffd000] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffd000]/10 text-[#ffd000] flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider block">WhatsApp Desk</span>
                  <span className="text-xs font-bold text-white tracking-wider">Chat Immediately</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map in Glass Frame */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden glass-panel border-white/15 p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full rounded-2xl overflow-hidden bg-[#0d0d12]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.361406859341!2d84.36440057582522!3d24.747108978000495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cdb9d99db82a1%3A0xe54ef02eb9ba1fec!2sBBC%20PRO%20GYM!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BBC Pro Gym Location on Google Maps"
                />

                {/* Floating Directions Action Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border-white/20 backdrop-blur-2xl flex items-center justify-between shadow-2xl">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      BBC PRO GYM · AURANGABAD
                    </h4>
                    <p className="text-[11px] font-mono text-white/60 mt-0.5">
                      24.74° N, 84.36° E · Verified Business
                    </p>
                  </div>

                  <a
                    href={GYM_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-funky text-[11px] font-mono font-bold uppercase tracking-[0.16em] px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg shrink-0"
                  >
                    <span>Open Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
