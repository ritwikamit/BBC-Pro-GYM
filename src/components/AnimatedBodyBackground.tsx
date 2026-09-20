import React from 'react';

export const AnimatedBodyBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Obsidian Base */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* 2. Sleek Radial Gradients (Pure CSS, 0% CPU, no JS loops) */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255, 208, 0, 0.08), transparent 70%), radial-gradient(ellipse 60% 40% at 90% 40%, rgba(76, 45, 130, 0.08), transparent 60%), radial-gradient(ellipse 50% 30% at 10% 75%, rgba(255, 208, 0, 0.05), transparent 60%)',
        }}
      />

      {/* 3. Razor-Sharp Fine Tech Grid (Pure CSS, hardware-rendered) */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* 4. Fine Vignette Softener */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507]/90" />
    </div>
  );
};
