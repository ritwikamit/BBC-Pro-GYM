import React, { useState } from 'react';
import { X, Send, PhoneCall, CheckCircle2 } from 'lucide-react';
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
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fade">
      <div 
        className="relative w-full max-w-lg glass-panel border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimalist Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffd000] to-transparent shadow-[0_0_12px_#ffd000]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-btn text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <CheckCircle2 className="w-14 h-14 text-[#ffd000] mb-4 animate-bounce" />
            <h3 className="text-2xl font-display font-black text-white mb-2">Connecting to WhatsApp...</h3>
            <p className="text-sm font-light text-[#a7a6b5] max-w-sm">
              Your message is formatted and ready. Connect directly with the BBC Pro Gym desk.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-1 rounded-full glass-card border-white/15 text-[11px] font-mono uppercase tracking-[0.18em] text-[#ffd000] mb-3">
                <span>OFFICIAL ENQUIRY · AURANGABAD</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-white mt-1">Start Your Training Journey</h2>
              <p className="text-sm font-normal text-white/70 mt-1">
                Reach out to schedule a visit or ask about membership plans at Mission School Road.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#121217]/70 border border-white/15 focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000]/50 focus:outline-none rounded-2xl px-4 py-2.5 text-sm text-white placeholder-white/40 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                  Mobile Number (Calling or WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#121217]/70 border border-white/15 focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000]/50 focus:outline-none rounded-2xl px-4 py-2.5 text-sm text-white placeholder-white/40 transition-colors font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-[#121217]/80 border border-white/15 focus:border-[#ffd000] focus:outline-none rounded-2xl px-3 py-2.5 text-xs text-white transition-colors font-sans"
                  >
                    <option value="Strength & Muscle Gain" className="bg-[#121217] text-white">Strength & Muscle Gain</option>
                    <option value="Fat Loss & Conditioning" className="bg-[#121217] text-white">Fat Loss & Conditioning</option>
                    <option value="Personal Training" className="bg-[#121217] text-white">Personal Training</option>
                    <option value="General Fitness" className="bg-[#121217] text-white">General Fitness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Preferred Batch
                  </label>
                  <select
                    value={timePreference}
                    onChange={(e) => setTimePreference(e.target.value)}
                    className="w-full bg-[#121217]/80 border border-white/15 focus:border-[#ffd000] focus:outline-none rounded-2xl px-3 py-2.5 text-xs text-white transition-colors font-sans"
                  >
                    <option value="Morning (5:00 AM - 9:00 AM)" className="bg-[#121217] text-white">Morning (05:00 AM – 09:00 AM)</option>
                    <option value="Evening (5:00 PM - 10:00 PM)" className="bg-[#121217] text-white">Evening (05:00 PM – 10:00 PM)</option>
                    <option value="Flexible / Afternoon" className="bg-[#121217] text-white">Flexible / Afternoon</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                  Message / Special Request (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about batches, equipment, or schedule a walkthrough..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#121217]/70 border border-white/15 focus:border-[#ffd000] focus:ring-1 focus:ring-[#ffd000]/50 focus:outline-none rounded-2xl px-4 py-2.5 text-xs text-white placeholder-white/40 transition-colors resize-none font-sans"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 glass-btn-funky font-sans font-bold text-xs uppercase tracking-[0.16em] py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send WhatsApp</span>
                </button>

                <a
                  href={`tel:${GYM_DATA.phone}`}
                  className="inline-flex items-center justify-center gap-2 glass-btn text-white text-xs font-sans font-semibold uppercase tracking-[0.16em] py-3.5 px-5 rounded-2xl transition-colors hover:text-[#ffd000]"
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
