import React, { useState } from 'react';
import { X, Send, PhoneCall, CheckCircle2, User, Phone, Target, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { GYM_DATA } from '../data/gym';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Strength & Muscle Gain');
  const [timePreference, setTimePreference] = useState('Morning (5:00 AM - 9:00 AM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const message = `Hi BBC Pro Gym! My name is ${name || 'Fitness Enthusiast'}. I would like to enquire about joining the gym.\n\n*Goal:* ${goal}\n*Preferred Slot:* ${timePreference}\n*Contact:* ${phone || 'Not specified'}${notes ? `\n*Note:* ${notes}` : ''}`;
    const url = `https://wa.me/${GYM_DATA.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#0c0c12] border border-[#ffd000]/30 rounded-3xl p-4 sm:p-7 md:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(255,208,0,0.12)] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimalist Gold Glowing Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffd000] to-transparent shadow-[0_0_16px_#ffd000]" />

        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ffd000]/10 rounded-full blur-[50px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all hover:scale-105"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center animate-fade">
            <CheckCircle2 className="w-16 h-16 text-[#ffd000] mb-4 animate-bounce" />
            <h3 className="text-2xl font-display font-bold text-white mb-2">Connecting to WhatsApp...</h3>
            <p className="text-sm text-white/70 max-w-sm">
              Your message is formatted and ready. Connecting you directly with the BBC Pro Gym desk.
            </p>
          </div>
        ) : (
          <>
            {/* Modal Header with Official Logo */}
            <div className="flex flex-col items-center text-center mb-6">
              <picture className="mb-2.5">
                <source srcSet="/bbc-logo-emblem.webp" type="image/webp" />
                <img
                  src="/bbc-logo-emblem.png"
                  alt="BBC Pro Gym"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_4px_16px_rgba(255,208,0,0.4)]"
                />
              </picture>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd000]/10 border border-[#ffd000]/25 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#ffd000] mb-2">
                <span>OFFICIAL ENQUIRY · AURANGABAD</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff4a8] via-[#ffd000] to-[#e5a400]">BBC PRO GYM</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-sm">
                Schedule your free facility walkthrough &amp; membership consultation at Mission School Road.
              </p>
            </div>

            {/* Aesthetic Form with Aligned Inputs */}
            <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
              {/* Full Name */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  <User className="w-3.5 h-3.5 text-[#ffd000]" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 sm:h-12 bg-[#101016] border border-[#ffd000]/25 focus:border-[#ffd000] focus:ring-2 focus:ring-[#ffd000]/20 focus:outline-none rounded-xl px-3.5 sm:px-4 text-xs sm:text-sm text-white placeholder-white/30 transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#ffd000]" />
                  <span>WhatsApp / Phone Number</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 sm:h-12 bg-[#101016] border border-[#ffd000]/25 focus:border-[#ffd000] focus:ring-2 focus:ring-[#ffd000]/20 focus:outline-none rounded-xl px-3.5 sm:px-4 text-xs sm:text-sm text-white placeholder-white/30 transition-all"
                />
              </div>

              {/* 2-Column Responsive Grid: Goal & Batch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    <Target className="w-3.5 h-3.5 text-[#ffd000]" />
                    <span>Primary Goal</span>
                  </label>
                  <div className="relative">
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full h-11 sm:h-12 appearance-none bg-[#101016] border border-[#ffd000]/25 focus:border-[#ffd000] focus:ring-2 focus:ring-[#ffd000]/20 focus:outline-none rounded-xl pl-3.5 pr-9 text-xs sm:text-sm text-white transition-all cursor-pointer"
                    >
                      <option value="Strength & Muscle Gain" className="bg-[#101016] text-white">Strength &amp; Muscle Gain</option>
                      <option value="Fat Loss & Conditioning" className="bg-[#101016] text-white">Fat Loss &amp; Conditioning</option>
                      <option value="Personal Training" className="bg-[#101016] text-white">Personal Training</option>
                      <option value="General Fitness" className="bg-[#101016] text-white">General Fitness</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ffd000]/80" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#ffd000]" />
                    <span>Preferred Batch</span>
                  </label>
                  <div className="relative">
                    <select
                      value={timePreference}
                      onChange={(e) => setTimePreference(e.target.value)}
                      className="w-full h-11 sm:h-12 appearance-none bg-[#101016] border border-[#ffd000]/25 focus:border-[#ffd000] focus:ring-2 focus:ring-[#ffd000]/20 focus:outline-none rounded-xl pl-3.5 pr-9 text-xs sm:text-sm text-white transition-all cursor-pointer"
                    >
                      <option value="Morning (5:00 AM - 9:00 AM)" className="bg-[#101016] text-white">Morning (05:00 AM – 09:00 AM)</option>
                      <option value="Evening (5:00 PM - 10:00 PM)" className="bg-[#101016] text-white">Evening (05:00 PM – 10:00 PM)</option>
                      <option value="Flexible / Afternoon" className="bg-[#101016] text-white">Flexible / Afternoon</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ffd000]/80" />
                  </div>
                </div>
              </div>

              {/* Special Request */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#ffd000]" />
                  <span>Message / Special Request (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about membership pricing, batch timings, or equipment..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#101016] border border-[#ffd000]/25 focus:border-[#ffd000] focus:ring-2 focus:ring-[#ffd000]/20 focus:outline-none rounded-xl p-3 sm:p-3.5 text-xs sm:text-sm text-white placeholder-white/30 transition-all resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  type="submit"
                  className="flex-1 glass-btn-funky h-11 sm:h-12 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </button>

                <a
                  href={`tel:${GYM_DATA.phone}`}
                  className="h-11 sm:h-12 px-5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#ffd000]/40 text-white text-xs font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all hover:text-[#ffd000]"
                >
                  <PhoneCall className="w-4 h-4 text-[#ffd000]" />
                  <span>Call Direct</span>
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
