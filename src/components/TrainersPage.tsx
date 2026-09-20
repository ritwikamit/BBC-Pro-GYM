import React, { useEffect } from 'react';
import { BbcLogo } from './BbcLogo';
import { TrainersSection } from './TrainersSection';
import { GYM_DATA } from '../data/gym';
import { ArrowLeft, ArrowUpRight, BadgeCheck, ShieldCheck, Dumbbell, Award, PhoneCall, Send, Target } from 'lucide-react';

interface TrainersPageProps {
  onBackToHome: () => void;
  onOpenEnquiry: () => void;
  onNavigate: (page: string, hash?: string) => void;
}

export const TrainersPage: React.FC<TrainersPageProps> = ({
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
              <span className="text-white font-medium">COACHES & MENTORS</span>
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
          <BadgeCheck className="w-3.5 h-3.5 text-[#ffd000]" />
          <span>CERTIFIED GUIDANCE · AURANGABAD</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              COACHES & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd000] to-[#d49a00]">
                STRENGTH MENTORS
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/75 mt-3 max-w-2xl font-normal leading-relaxed">
              Every trainer at BBC Pro Gym is dedicated to lifting biomechanics, joint longevity, structured progress, and real body transformations.
            </p>
          </div>

          {/* Quick Credential Badges */}
          <div className="flex flex-wrap gap-2.5 font-mono text-xs text-white/80 shrink-0">
            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ffd000]" />
              <span>Certified Biomechanics</span>
            </div>
            <div className="px-3.5 py-2 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#ffd000]" />
              <span>Custom Diet & Macros</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <main className="relative z-10 flex-1">
        <TrainersSection />

        {/* Coaching Principles Grid */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6">
            The BBC Pro Coaching Standard
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 rounded-3xl glass-card border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#ffd000]/10 border border-[#ffd000]/30 flex items-center justify-center text-[#ffd000]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Injury Prevention & Form</h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Before increasing weights on squats, deadlifts, or presses, trainers verify spine stability, knee tracking, and shoulder retraction.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#ffd000]/10 border border-[#ffd000]/30 flex items-center justify-center text-[#ffd000]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Progressive Overload Tracking</h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Workouts are planned with deliberate volume curves and weight progressions so you never plateau or waste training sessions.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-card border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#ffd000]/10 border border-[#ffd000]/30 flex items-center justify-center text-[#ffd000]">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Milestone Body Audits</h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Track body fat percentage, muscular girth, and 1RM lifts every 4 weeks to guarantee continuous forward momentum.
              </p>
            </div>
          </div>
        </section>

        {/* Free Assessment Consultation Banner */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0d0d14] via-[#141420] to-[#0d0d14] border border-[#ffd000]/30 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffd000]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-mono text-[#ffd000] uppercase tracking-widest font-bold">
                  1-ON-1 COACHING SESSION
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Need a tailored workout & nutrition split?
                </h3>
                <p className="text-sm text-white/70">
                  Book a direct assessment session with a head trainer to review your goals, injuries, and nutrition history.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto glass-btn-funky h-12 px-6 rounded-2xl flex items-center justify-center gap-2 text-xs font-sans font-bold uppercase tracking-wider shadow-lg"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={GYM_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto glass-btn h-12 px-5 rounded-2xl flex items-center justify-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-white hover:text-[#ffd000]"
                >
                  <Send className="w-4 h-4 text-[#ffd000]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
