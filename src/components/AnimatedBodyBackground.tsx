import React, { useEffect, useRef } from 'react';

export const AnimatedBodyBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate cursor-tracking hover spotlight on pointer/mouse devices (laptops & desktops)
    if (!window.matchMedia('(hover: hover)').matches) return;

    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let targetX = -1000;
    let targetY = -1000;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          if (container) {
            container.style.setProperty('--mouse-x', `${targetX}px`);
            container.style.setProperty('--mouse-y', `${targetY}px`);
            container.style.setProperty('--mouse-opacity', '1');
          }
          rafId = null;
        });
      }
    };

    const handlePointerLeave = () => {
      if (container) {
        container.style.setProperty('--mouse-opacity', '0');
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
      style={
        {
          '--mouse-x': '-1000px',
          '--mouse-y': '-1000px',
          '--mouse-opacity': '0',
        } as React.CSSProperties
      }
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

      {/* 3. Base Tech Grid Squares (Medium visibility with gentle lateral fade only at outer edges) */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 2%, #000 5%, #000 95%, rgba(0,0,0,0.8) 98%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 2%, #000 5%, #000 95%, rgba(0,0,0,0.8) 98%, transparent 100%)',
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

      {/* 4. Interactive Hover Spotlight: Squares brighten & glow under the cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: 'var(--mouse-opacity, 0)',
          maskImage:
            'radial-gradient(280px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), #000 20%, rgba(0,0,0,0.4) 65%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(280px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), #000 20%, rgba(0,0,0,0.4) 65%, transparent 100%)',
        }}
      >
        {/* Highlighted Micro Grid Under Cursor */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 215, 60, 0.5) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(255, 215, 60, 0.5) 1.5px, transparent 1.5px),
              radial-gradient(circle at 1.5px 1.5px, rgba(255, 215, 60, 0.85) 2.5px, transparent 0)
            `,
            backgroundSize: '54px 54px, 54px 54px, 54px 54px',
          }}
        />

        {/* Highlighted Macro Accent Lines Under Cursor */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 215, 60, 0.6) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(255, 215, 60, 0.6) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '270px 270px',
          }}
        />

        {/* Radial Golden Luminescence Bloom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(260px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255, 215, 60, 0.16) 0%, rgba(255, 180, 0, 0.05) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* 5. Delicate Lateral Edge Softeners (Fades just a little from laptop two sides) */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-r from-[#050507] via-[#050507]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-14 md:w-20 lg:w-24 bg-gradient-to-l from-[#050507] via-[#050507]/60 to-transparent pointer-events-none" />

      {/* 6. Subtle Top & Bottom Softeners */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050507]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none" />
    </div>
  );
};
