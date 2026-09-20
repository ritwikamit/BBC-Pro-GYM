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

      {/* 3. Razor-Sharp Architectural Tech Grid Squares ("Medium" Visible) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 215, 60, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 215, 60, 0.13) 1px, transparent 1px),
            radial-gradient(circle at 1px 1px, rgba(255, 215, 60, 0.28) 1.5px, transparent 0)
          `,
          backgroundSize: '54px 54px, 54px 54px, 54px 54px',
        }}
      />

      {/* 4. Secondary Subtle Macro Grid Accent Lines (Every 5 squares = 270px) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 215, 60, 0.24) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 215, 60, 0.24) 1px, transparent 1px)
          `,
          backgroundSize: '270px 270px',
        }}
      />

      {/* 5. Edge Softener Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507]/90" />
    </div>
  );
};
