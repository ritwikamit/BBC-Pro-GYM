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
 * Displays the official enhanced BBC PRO GYM emblem with transparent background:
 * - High-resolution 3D metallic gold finish with ornate baroque flourishes
 * - Barbells at 10 & 2, 8 & 4 o'clock
 * - Top arched 'BBC' ribbon, vertical 'PRO' and 'GYM' banners
 * - Interlocking center monogram crest
 * - Transparent background floating seamlessly on any backdrop
 */
export const BbcLogo: React.FC<BbcLogoProps> = ({
  className = '',
  size = 48,
  showWordmark = true,
  wordmarkClassName = '',
  variant = 'horizontal',
}) => {
  const emblem = (
    <picture className="shrink-0 inline-flex items-center justify-center">
      <source srcSet="/bbc-logo-emblem.webp" type="image/webp" />
      <img
        src="/bbc-logo-emblem.png"
        alt="BBC Pro Gym Official Emblem"
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px` }}
        className="object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(255,215,60,0.25)] select-none"
        loading="eager"
        decoding="async"
      />
    </picture>
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
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none min-w-0 ${className}`}>
      {emblem}
      {showWordmark && (
        <div className={`flex flex-col leading-tight min-w-0 ${wordmarkClassName}`}>
          <div className="flex items-center gap-1 sm:gap-1.5 font-display font-extrabold uppercase text-xs sm:text-base tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap">
            <span className="text-white">BBC</span>
            <span className="text-funky-gold">PRO</span>
            <span className="text-white">GYM</span>
          </div>
          <span className="text-[9px] sm:text-[11px] font-mono tracking-[0.16em] sm:tracking-[0.22em] text-[#8e8d9c] uppercase mt-0.5 whitespace-nowrap hidden min-[360px]:block">
            Aurangabad · Bihar
          </span>
        </div>
      )}
    </div>
  );
};
