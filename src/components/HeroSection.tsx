import React, { useState, useEffect, useRef } from 'react';
import { BbcLogo } from './BbcLogo';
import { SeamlessHeroBackground } from './SeamlessHeroBackground';
import { GYM_DATA } from '../data/gym';
import {
  PhoneCall,
  Send,
  Compass,
  Clock3,
  Star,
  ShieldCheck,
  Flame,
  Layers,
  Trophy,
  ArrowUpRight,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  MapPin,
  Radio,
  CheckCircle2,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  currentPage?: string;
  onNavigate?: (page: string, hash?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEnquiry,
  currentPage = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // High-performance Intersection Observer to pause cinematic background video when off-screen
  // and resume instantly with requestAnimationFrame sync upon scrolling back
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    let rafId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        // Coordinate state update inside requestAnimationFrame to lock with display refresh
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        // Anticipatory margin ensures seamless playback resume before the section is visible
        rootMargin: '100px 0px 100px 0px',
        threshold: 0,
      }
    );

    observer.observe(heroEl);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isPast = window.scrollY > 40;
          setScrolled((prev) => (prev !== isPast ? isPast : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Primary compact nav links directly visible in desktop header capsule
  const primaryNavLinks = [
    { label: 'About', href: '#about', page: 'home' },
    { label: 'Programs', href: '#services', page: 'home' },
    { label: 'Memberships', href: '#memberships', page: 'home' },
    { label: 'Facilities', href: '#facilities', page: 'facilities' },
  ];

  // Secondary nav links housed in the sleek "More" dropdown
  const moreNavLinks = [
    { label: 'Trainers', href: '#trainers', desc: 'Certified elite coaches', page: 'trainers' },
    { label: 'Location', href: '#location', desc: 'Directions & timings in Aurangabad', page: 'location' },
  ];

  // Combined for mobile drawer
  const allNavLinks = [...primaryNavLinks, ...moreNavLinks];

  const handleNavClick = (e: React.MouseEvent, page: string, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, href);
      setMobileMenuOpen(false);
      setMoreMenuOpen(false);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between bg-[#000000] text-white overflow-hidden"
    >
      {/* ═════════════════════════════════════════════════
          SEAMLESS INFINITELY CONTINUOUS HERO BACKGROUND
          - Dual-buffer cross-dissolve eliminates hard replay cuts
          - Continuous 28s camera drift prevents loop pattern detection
          - High-performance IntersectionObserver with requestAnimationFrame sync
          - 60fps ambient golden embers provide real-time living motion
          ═════════════════════════════════════════════════ */}
      <SeamlessHeroBackground isVisible={isHeroVisible} />

      {/* ═════════════════════════════════════════════════
          TOP NAVIGATION BAR (GLASSMORPHIC)
          ═════════════════════════════════════════════════ */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'glass-nav-bar py-3 shadow-2xl' : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo with Official Crest */}
          <a href="#" className="flex items-center gap-3 focus-visible:outline-none group shrink-0">
            <BbcLogo size={42} showWordmark={true} />
          </a>

          {/* Desktop Navigation Links — Polished Frosted Capsule Menu */}
          <nav 
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 px-2.5 xl:px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-inner font-sans text-[11px] xl:text-xs uppercase tracking-[0.12em] xl:tracking-[0.14em]"
            aria-label="Main Navigation"
          >
            {primaryNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page, link.href)}
                className="px-2.5 xl:px-3.5 py-1.5 rounded-full transition-all duration-200 font-semibold whitespace-nowrap text-white/80 hover:text-[#ffd000] hover:bg-white/[0.08]"
              >
                {link.label}
              </a>
            ))}

            {/* "More" Dropdown Menu */}
            <div className="relative" ref={moreMenuRef}>
              <button
                type="button"
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`group px-2.5 xl:px-3 py-1.5 rounded-full flex items-center gap-1 transition-all duration-200 font-semibold uppercase tracking-[0.12em] whitespace-nowrap ${
                  moreMenuOpen
                    ? 'text-[#ffd000] bg-white/[0.1]'
                    : 'text-white/80 hover:text-[#ffd000] hover:bg-white/[0.08]'
                }`}
                aria-expanded={moreMenuOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreMenuOpen ? 'rotate-180 text-[#ffd000]' : 'text-white/50 group-hover:text-[#ffd000]'
                  }`}
                />
              </button>

              {moreMenuOpen && (
                <div className="absolute top-full right-0 mt-2.5 w-60 rounded-2xl glass-panel border border-white/15 p-2 shadow-2xl backdrop-blur-2xl animate-fade z-50">
                  <div className="flex flex-col gap-1">
                    {moreNavLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.page, link.href)}
                        className="group flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-white/[0.08] hover:border-white/10 transition-all text-left"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-white/80 group-hover:text-[#ffd000] uppercase tracking-[0.1em] transition-colors">
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffd000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <span className="text-[11px] font-sans text-white/50 group-hover:text-white/80 tracking-normal normal-case font-normal mt-0.5 transition-colors">
                          {link.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Controls: Just Join Now Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Join Now Button */}
            <button
              onClick={onOpenEnquiry}
              className="glass-btn-funky h-10 px-4 sm:px-5 rounded-2xl flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-[0.12em] shadow-lg shrink-0 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Join Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden h-10 w-10 p-0 rounded-2xl glass-btn text-white flex items-center justify-center focus-visible:outline-none shrink-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-7 pt-5 pb-8 animate-fade"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Drawer Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
            <BbcLogo size={36} showWordmark={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="h-10 w-10 rounded-full glass-btn text-white flex items-center justify-center hover:text-[#ffd000] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Operational Status Pill */}
          <div className="my-3 px-4 py-2 rounded-full glass-card border-white/15 flex items-center justify-between text-[11px] font-mono" onClick={(e) => e.stopPropagation()}>
            <span className="text-[#ffd000] font-bold">LIVE STATUS</span>
            <span className="text-white/80 font-medium">OPEN · 05:00 AM – 10:00 PM</span>
          </div>

          {/* Nav Links Grid / List */}
          <div className="flex flex-col gap-1.5 my-auto overflow-y-auto max-h-[50vh] pr-1" onClick={(e) => e.stopPropagation()}>
            {allNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page, link.href)}
                className="group flex items-center justify-between px-4 py-3 rounded-2xl glass-card border-white/10 text-xs uppercase tracking-[0.16em] font-sans font-semibold text-white/85 hover:text-[#ffd000] hover:border-[#ffd000]/40 hover:bg-white/[0.06] transition-all"
              >
                <span className="group-hover:text-[#ffd000] transition-colors">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#ffd000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          {/* Drawer Bottom Actions: Laterally Aligned Join Now and Call in ONE Single Line */}
          <div className="pt-4 border-t border-white/10 w-full space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-3 w-full">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="glass-btn-funky h-12 rounded-2xl flex items-center justify-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.14em] shadow-xl"
              >
                <span>Join Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${GYM_DATA.phone}`}
                className="glass-btn h-12 rounded-2xl flex items-center justify-center gap-2 text-xs font-sans font-semibold uppercase tracking-[0.14em] text-white hover:text-[#ffd000]"
                aria-label="Call BBC Pro Gym"
              >
                <PhoneCall className="w-4 h-4 text-[#ffd000]" />
                <span>Call</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-center text-white/50">
              {GYM_DATA.address}, Aurangabad, Bihar
            </p>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════
          HERO MAIN STAGE
          ═════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Telemetry Ribbon, Headline, Copy, Action Buttons */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 md:space-y-8">
            {/* Redesigned Telemetry Status Ribbon - fluid rounded on mobile */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-full">
              {/* Location Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd000]/10 border border-[#ffd000]/30 text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.14em] text-[#ffd000] uppercase shrink-0">
                <Radio className="w-3.5 h-3.5 text-[#ffd000] animate-pulse" />
                <span>AURANGABAD HQ</span>
              </div>

              {/* Coordinates */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-white/75 shrink-0">
                <MapPin className="w-3 h-3 text-[#ffd000]/90 shrink-0" />
                <span>24.74° N, 84.36° E</span>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono font-semibold text-emerald-400 shrink-0">
                <Clock3 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>OPEN · 05:00 AM – 10:00 PM</span>
              </div>
            </div>

            {/* Main Headline in Syne - Optimized for Phone & Tablet Scales */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[1.08] sm:leading-[1.05] text-white">
                BUILD YOUR{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff4a8] via-[#ffd000] to-[#d49a00] drop-shadow-[0_0_35px_rgba(255,208,0,0.25)]">
                  STRONGEST SELF.
                </span>
              </h1>
              <p className="text-[11px] sm:text-xs md:text-sm font-mono text-[#a7a6b5] tracking-[0.18em] sm:tracking-[0.2em] uppercase pt-1">
                FORGED IN AURANGABAD, BIHAR · MISSION SCHOOL ROAD
              </p>
            </div>

            {/* Description Subtext in Plus Jakarta Sans */}
            <p className="text-sm sm:text-base md:text-lg font-normal text-white/75 max-w-2xl leading-relaxed">
              The premier strength, hypertrophy, and body transformation center in Aurangabad. Equipped with heavy Olympic free weights, plate-loaded stations, and structured coaching to forge lasting results.
            </p>

            {/* Feature Highlight Chips */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full glass-card border-white/15 text-[11px] sm:text-xs font-mono text-white/90">
                <Flame className="w-3.5 h-3.5 text-[#ffd000]" />
                <span>Olympic Free Weight Zone</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full glass-card border-white/15 text-[11px] sm:text-xs font-mono text-white/90">
                <Layers className="w-3.5 h-3.5 text-[#ffd000]" />
                <span>Plate-Loaded Matrix</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full glass-card border-white/15 text-[11px] sm:text-xs font-mono text-white/90">
                <Trophy className="w-3.5 h-3.5 text-[#ffd000]" />
                <span>Verified 4.5★ (174+ Reviews)</span>
              </div>
            </div>

            {/* Lucid Glassmorphic CTA Buttons: Responsive Flex on Mobile & Tablet */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="glass-btn-funky text-xs uppercase tracking-[0.16em] font-bold px-5 sm:px-7 py-3.5 rounded-2xl flex items-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 min-h-[44px]"
              >
                <span>Join Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${GYM_DATA.phone}`}
                className="glass-btn text-xs uppercase tracking-[0.16em] font-semibold px-4 sm:px-6 py-3.5 rounded-2xl inline-flex items-center gap-2 text-white hover:text-[#ffd000] hover:border-[#ffd000]/50 transition-colors shrink-0 min-h-[44px]"
                aria-label="Call BBC Pro Gym"
              >
                <PhoneCall className="w-4 h-4 text-[#ffd000]" />
                <span>Call</span>
              </a>

              <a
                href="#memberships"
                className="glass-btn text-xs uppercase tracking-[0.16em] font-medium px-4 sm:px-5 py-3.5 rounded-2xl flex items-center gap-2 text-white/75 hover:text-white transition-colors shrink-0 min-h-[44px]"
              >
                <span>View Plans</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lucid Dark Frosted Blur Transparent Facility Glass Console - Responsive Tablet & Mobile Centered */}
          <div className="lg:col-span-5 w-full md:max-w-xl md:mx-auto lg:max-w-none lg:mx-0">
            <div className="relative rounded-3xl bg-[#09090f]/75 border border-white/15 p-5 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.75)] backdrop-blur-3xl overflow-hidden ring-1 ring-white/[0.08] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/[0.04] before:via-transparent before:to-black/60 before:pointer-events-none">
              {/* Subtle Ambient Gold Prismatic Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#ffd000]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

              {/* Header: Title + Live Status Badge */}
              <div className="relative z-10 flex items-start justify-between gap-4 border-b border-white/10 pb-5 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold tracking-[0.16em] text-emerald-300 uppercase backdrop-blur-md">
                      LIVE DESK
                    </span>
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      MISSION SCHOOL RD
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight drop-shadow-sm">
                    Facility Access & Shifts
                  </h3>
                </div>

                {/* Rating Badge */}
                <a
                  href={GYM_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex flex-col items-end px-3 py-2 rounded-2xl bg-black/45 border border-white/10 hover:border-[#ffd000]/60 backdrop-blur-xl transition-all group shadow-sm hover:scale-[1.02]"
                  aria-label="View 174+ Reviews on Google Maps"
                >
                  <div className="flex items-center gap-1 text-[#ffd000]">
                    <Star className="w-3.5 h-3.5 fill-[#ffd000]" />
                    <span className="text-xs font-mono font-bold text-white group-hover:text-[#ffd000] transition-colors">4.5★</span>
                  </div>
                  <span className="text-[9px] font-mono text-white/60 tracking-wider">174 REVIEWS</span>
                </a>
              </div>

              {/* Shift Hours Grid */}
              <div className="relative z-10 space-y-2.5 font-mono">
                <div className="p-3.5 rounded-2xl bg-black/45 border border-white/[0.08] hover:border-[#ffd000]/40 hover:bg-black/60 backdrop-blur-xl transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-[#ffd000] uppercase tracking-wider">
                        MORNING SHIFT
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/80">
                        DAILY
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wider">
                      05:00 AM – 11:00 AM
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-white/60">
                    Olympic free weights, power rack access & conditioning
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/45 border border-white/[0.08] hover:border-[#ffd000]/40 hover:bg-black/60 backdrop-blur-xl transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-[#ffd000] uppercase tracking-wider">
                        EVENING SHIFT
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/80">
                        MON – SAT
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wider">
                      04:00 PM – 10:00 PM
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-white/60">
                    Hypertrophy, plate-loaded cable matrix & coach floor guidance
                  </p>
                </div>

                <div className="px-3.5 py-2.5 rounded-2xl bg-black/35 border border-white/[0.06] flex items-center justify-between text-[11px] backdrop-blur-md">
                  <span className="text-white/70 font-medium">Sunday Access</span>
                  <span className="text-[#ffd000] font-bold">Special Sessions / Contact Desk</span>
                </div>
              </div>

              {/* Amenities Micro-Badges */}
              <div className="relative z-10 grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/[0.08] text-[10px] font-mono text-white/90 backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3 text-[#ffd000] shrink-0" />
                  <span className="truncate">Free Weights 50kg+</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/[0.08] text-[10px] font-mono text-white/90 backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3 text-[#ffd000] shrink-0" />
                  <span className="truncate">Plate Matrix</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/[0.08] text-[10px] font-mono text-white/90 backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3 text-[#ffd000] shrink-0" />
                  <span className="truncate">AC Training Hall</span>
                </div>
              </div>

              {/* Bottom Actions: Book Trial Session & Directions */}
              <div className="relative z-10 mt-5 grid grid-cols-2 gap-2.5">
                <button
                  onClick={onOpenEnquiry}
                  className="glass-btn-funky h-11 px-3 rounded-2xl flex items-center justify-center gap-1.5 text-xs font-sans font-bold uppercase tracking-[0.12em] shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Book Free Trial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </button>

                <a
                  href={GYM_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn h-11 px-3 rounded-2xl flex items-center justify-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-[0.12em] text-white/90 hover:text-white hover:border-[#ffd000]/60 transition-all"
                >
                  <Compass className="w-3.5 h-3.5 text-[#ffd000] shrink-0" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════
          BOTTOM RECOGNITION & STATS STRIP
          ═════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-center md:text-left">
            <div className="border-r border-white/10 last:border-none pr-4">
              <span className="text-lg sm:text-xl font-display font-black text-white block">
                4.5 ★ RATING
              </span>
              <span className="text-[11px] text-[#8e8d9c] uppercase tracking-wider block mt-0.5">
                174+ Google Reviews
              </span>
            </div>

            <div className="border-r border-white/10 last:border-none pr-4">
              <span className="text-lg sm:text-xl font-display font-black text-[#ffd000] block">
                05:00 AM
              </span>
              <span className="text-[11px] text-[#8e8d9c] uppercase tracking-wider block mt-0.5">
                Early Morning Shift
              </span>
            </div>

            <div className="border-r border-white/10 last:border-none pr-4">
              <span className="text-lg sm:text-xl font-display font-black text-white block">
                HEAVY IRON
              </span>
              <span className="text-[11px] text-[#8e8d9c] uppercase tracking-wider block mt-0.5">
                Olympic Free Weights
              </span>
            </div>

            <div>
              <span className="text-lg sm:text-xl font-display font-black text-white block">
                MISSION SCHOOL RD
              </span>
              <span className="text-[11px] text-[#8e8d9c] uppercase tracking-wider block mt-0.5">
                Gayatri Nagar, Aurangabad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
