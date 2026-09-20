import React from 'react';

interface BbcLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  variant?: 'horizontal' | 'stacked' | 'emblem';
}

/**
 * BbcLogo
 * Faithfully reproduces the official circular BBC PRO GYM emblem uploaded by the user:
 * - Top arched ribbon: "BBC"
 * - Left vertical banner: "P R O"
 * - Right vertical banner: "G Y M"
 * - Flanking barbell weights at 10 and 2 o'clock
 * - Center concentric medallions with intertwining monogram
 * - Ornate baroque filigree finials
 * - Clean, wide-spaced "BBC PRO GYM" typography in Sora
 * - Minimalistic yellow-gold gradient palette
 */
export const BbcLogo: React.FC<BbcLogoProps> = ({
  className = '',
  size = 48,
  showWordmark = true,
  wordmarkClassName = '',
  variant = 'horizontal',
}) => {
  const emblem = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="BBC Pro Gym Official Emblem"
    >
      <defs>
        {/* Minimalist Yellow-Gold Gradient */}
        <linearGradient id="minimalGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff4a8" />
          <stop offset="35%" stopColor="#ffd000" />
          <stop offset="75%" stopColor="#e5a400" />
          <stop offset="100%" stopColor="#c28500" />
        </linearGradient>

        {/* Subtle Edge Sheen */}
        <linearGradient id="goldEdge" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#a37000" />
          <stop offset="25%" stopColor="#ffd414" />
          <stop offset="50%" stopColor="#fff8b8" />
          <stop offset="75%" stopColor="#e09e00" />
          <stop offset="100%" stopColor="#8f6000" />
        </linearGradient>

        {/* Soft Gold Line */}
        <linearGradient id="goldLine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd200" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#b37c00" stopOpacity="0.6" />
        </linearGradient>

        {/* Background Disc Gradient */}
        <radialGradient id="discBg" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#0d0d12" />
          <stop offset="90%" stopColor="#060608" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* Minimalist Soft Glow */}
        <filter id="softGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#ffd000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* ── Outer Beaded Circular Shield ── */}
      <circle cx="120" cy="120" r="114" fill="url(#discBg)" stroke="url(#goldEdge)" strokeWidth="3" />
      <circle cx="120" cy="120" r="108" stroke="url(#minimalGold)" strokeWidth="1" strokeDasharray="3 3" opacity="0.85" />
      <circle cx="120" cy="120" r="104" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

      {/* ── Flanking Barbells (Top 10 & 2 o'clock, Bottom 8 & 4 o'clock) ── */}
      {/* Top Left Barbell */}
      <g transform="translate(68, 54) rotate(-35)" stroke="url(#minimalGold)" strokeWidth="1.6" fill="#141418">
        <line x1="-14" y1="0" x2="14" y2="0" strokeWidth="2.5" />
        <rect x="-16" y="-6" width="3" height="12" rx="1" fill="url(#minimalGold)" />
        <rect x="-20" y="-8" width="3" height="16" rx="1" fill="url(#minimalGold)" />
        <rect x="13" y="-6" width="3" height="12" rx="1" fill="url(#minimalGold)" />
        <rect x="17" y="-8" width="3" height="16" rx="1" fill="url(#minimalGold)" />
      </g>

      {/* Top Right Barbell */}
      <g transform="translate(172, 54) rotate(35)" stroke="url(#minimalGold)" strokeWidth="1.6" fill="#141418">
        <line x1="-14" y1="0" x2="14" y2="0" strokeWidth="2.5" />
        <rect x="-16" y="-6" width="3" height="12" rx="1" fill="url(#minimalGold)" />
        <rect x="-20" y="-8" width="3" height="16" rx="1" fill="url(#minimalGold)" />
        <rect x="13" y="-6" width="3" height="12" rx="1" fill="url(#minimalGold)" />
        <rect x="17" y="-8" width="3" height="16" rx="1" fill="url(#minimalGold)" />
      </g>

      {/* ── Top Arched Banner: BBC ── */}
      <path
        d="M 66 52 Q 120 32 174 52 L 168 72 Q 120 54 72 72 Z"
        fill="#0e0e13"
        stroke="url(#minimalGold)"
        strokeWidth="2.2"
      />
      {/* Banner tail notches */}
      <path d="M 66 52 L 58 48 L 62 61 L 72 72" fill="url(#minimalGold)" />
      <path d="M 174 52 L 182 48 L 178 61 L 168 72" fill="url(#minimalGold)" />

      {/* Arched Text: BBC */}
      <path id="topBbcArc" d="M 72 68 Q 120 48 168 68" fill="none" />
      <text
        fill="url(#minimalGold)"
        fontSize="15"
        fontWeight="800"
        letterSpacing="8"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', 'Sora', monospace"
      >
        <textPath href="#topBbcArc" startOffset="50%">
          BBC
        </textPath>
      </text>

      {/* ── Left Vertical Banner: PRO ── */}
      <g>
        <rect x="34" y="76" width="22" height="74" rx="2" fill="#0e0e13" stroke="url(#minimalGold)" strokeWidth="1.8" />
        <path d="M 34 150 L 45 142 L 56 150 Z" fill="url(#minimalGold)" />
        <text x="45" y="97" fill="url(#minimalGold)" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">P</text>
        <text x="45" y="117" fill="url(#minimalGold)" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">R</text>
        <text x="45" y="137" fill="url(#minimalGold)" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">O</text>
      </g>

      {/* ── Right Vertical Banner: GYM ── */}
      <g>
        <rect x="184" y="76" width="22" height="74" rx="2" fill="#0e0e13" stroke="url(#minimalGold)" strokeWidth="1.8" />
        <path d="M 184 150 L 195 142 L 206 150 Z" fill="url(#minimalGold)" />
        <text x="195" y="97" fill="url(#minimalGold)" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">G</text>
        <text x="195" y="117" fill="url(#minimalGold)" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">Y</text>
        <text x="195" y="137" fill="url(#minimalGold)" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">M</text>
      </g>

      {/* ── Inner Concentric Rings with Gold Borders ── */}
      <circle cx="120" cy="120" r="54" fill="#07070a" stroke="url(#minimalGold)" strokeWidth="2.8" />
      <circle cx="120" cy="120" r="48" fill="none" stroke="url(#goldEdge)" strokeWidth="1.2" />
      <circle cx="120" cy="120" r="44" fill="none" stroke="url(#minimalGold)" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.8" />

      {/* ── Central Interlocking Monogram (BBC Crest) ── */}
      <g filter="url(#softGoldGlow)" transform="translate(120 120)">
        {/* Central pillar */}
        <rect x="-3" y="-30" width="6" height="60" rx="1.5" fill="url(#minimalGold)" />
        
        {/* Left 'B' loops */}
        <path
          d="M -3 -22 C -20 -22, -20 -4, -3 -2 C -22 0, -22 22, -3 22"
          fill="none"
          stroke="url(#minimalGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Right 'B' loops */}
        <path
          d="M 3 -22 C 20 -22, 20 -4, 3 -2 C 22 0, 22 22, 3 22"
          fill="none"
          stroke="url(#minimalGold)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Interlocking 'C' curve */}
        <path
          d="M 12 -14 C 3 -19, -12 -19, -15 0 C -12 19, 3 19, 12 14"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.95"
        />
        {/* Central diamond rivet */}
        <circle cx="0" cy="0" r="2.8" fill="#ffffff" />
      </g>

      {/* ── Bottom Ornate Scroll Flourishes & Finial Anchor ── */}
      <g stroke="url(#minimalGold)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M 88 184 Q 120 206 152 184" />
        <path d="M 98 193 Q 120 216 142 193" />
        <line x1="120" y1="184" x2="120" y2="214" strokeWidth="2.2" />
        <circle cx="120" cy="216" r="3" fill="url(#minimalGold)" />
        {/* Lateral curly scrolls */}
        <path d="M 78 174 Q 92 188 104 180" />
        <path d="M 162 174 Q 148 188 136 180" />
      </g>
    </svg>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex items-center ${className}`}>{emblem}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        {emblem}
        {showWordmark && (
          <div className={`mt-3 flex flex-col items-center ${wordmarkClassName}`}>
            <span
              className="text-white font-extrabold tracking-[0.24em] uppercase text-sm sm:text-base font-display"
              style={{ letterSpacing: '0.24em' }}
            >
              BBC PRO GYM
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#9c9ba8] uppercase mt-0.5">
              Aurangabad · Bihar
            </span>
          </div>
        )}
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {emblem}
      {showWordmark && (
        <div className={`flex flex-col leading-tight ${wordmarkClassName}`}>
          <div className="flex items-center gap-1.5 font-display font-extrabold uppercase text-sm sm:text-base tracking-[0.2em]">
            <span className="text-white">BBC</span>
            <span className="text-funky-gold">PRO</span>
            <span className="text-white">GYM</span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#8e8d9c] uppercase mt-0.5">
            Aurangabad · Bihar
          </span>
        </div>
      )}
    </div>
  );
};
