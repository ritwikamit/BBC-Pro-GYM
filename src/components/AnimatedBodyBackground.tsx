import React from 'react';

export const AnimatedBodyBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Obsidian Base */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* 2. Sleek Radial Ambient Lighting */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 50% at 50% -10%, rgba(255, 208, 0, 0.07), transparent 70%), radial-gradient(ellipse 60% 40% at 85% 45%, rgba(76, 45, 130, 0.06), transparent 60%), radial-gradient(ellipse 50% 30% at 15% 75%, rgba(255, 208, 0, 0.05), transparent 60%)',
        }}
      />

      {/* 3. Tech Grid Squares (Medium visibility across screen, softly fading just a little at the laptop sides) */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 2%, #000 4.5%, #000 95.5%, rgba(0,0,0,0.85) 98%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.85) 2%, #000 4.5%, #000 95.5%, rgba(0,0,0,0.85) 98%, transparent 100%)',
        }}
      >
        {/* Micro 54px Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 215, 60, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 215, 60, 0.14) 1px, transparent 1px),
              radial-gradient(circle at 1px 1px, rgba(255, 215, 60, 0.3) 1.5px, transparent 0)
            `,
            backgroundSize: '54px 54px, 54px 54px, 54px 54px',
          }}
        />

        {/* Macro 270px Accent Grid Lines */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 215, 60, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 215, 60, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '270px 270px',
          }}
        />
      </div>

      {/* 4. Delicate Lateral Edge Softeners (Fades just a little from laptop two sides) */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-r from-[#050507] via-[#050507]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-l from-[#050507] via-[#050507]/60 to-transparent pointer-events-none" />

      {/* 5. Subtle Top & Bottom Edge Softeners */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050507]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none" />
    </div>
  );
};
