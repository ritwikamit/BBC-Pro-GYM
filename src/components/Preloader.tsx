import React, { useState, useEffect } from 'react';
import { BbcLogo } from './BbcLogo';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);
  const [hasExited, setHasExited] = useState(false);

  useEffect(() => {
    // Fast, crisp initial presentation
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 450);

    const exitTimer = setTimeout(() => {
      setHasExited(true);
    }, 850);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  if (hasExited) return null;

  return (
    <div
      id="site-preloader"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] transition-opacity duration-400 select-none ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading"
    >
      {/* Subtle Minimal Gold Radial Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-[#ffd000]/8 blur-[120px] pointer-events-none" />

      {/* Minimal Logo & Loading Indicator */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <div className="animate-pulse">
          <BbcLogo size={84} variant="stacked" showWordmark={true} />
        </div>

        <div className="space-y-2.5">
          <div className="text-[10px] font-mono font-medium text-[#7d7c8a] tracking-[0.32em] uppercase">
            LOADING
          </div>

          {/* Minimal hairline loading progress indicator */}
          <div className="w-32 h-[1px] bg-white/10 overflow-hidden relative">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#ffd000] to-transparent animate-[shimmer_1.2s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};
