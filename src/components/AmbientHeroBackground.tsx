import React, { useEffect, useRef } from 'react';

interface AmbientHeroBackgroundProps {
  className?: string;
  onLoaded?: () => void;
}

/**
 * AmbientHeroBackground:
 * Ultra-smooth, infinite atmospheric gym canvas with:
 * 1. High-resolution cinematic gym visual with continuous 35s smooth breathing camera drift.
 * 2. Real-time floating gold ember particles on HTML5 Canvas (smooth 60fps, 0% video loop hiccups).
 * 3. Soft ambient volumetric radial lighting that breathes organically.
 */
export const AmbientHeroBackground: React.FC<AmbientHeroBackgroundProps> = ({
  className = '',
  onLoaded,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    onLoaded?.();
  }, [onLoaded]);

  // Canvas particle ember engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate gentle ambient floating motes
    const particleCount = Math.min(Math.floor(width / 35), 36);
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        speedY: -(Math.random() * 0.35 + 0.15),
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.1,
        maxAlpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      });
    }

    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(t + p.y * 0.01) * 0.15;
        p.alpha = 0.2 + (Math.sin(t * p.pulseSpeed * 50) + 1) * 0.5 * (p.maxAlpha - 0.2);

        // Respawn if moved off screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 208, 0, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden select-none pointer-events-none ${className}`}>
      {/* High-res cinematic gym background with continuous smooth camera drift */}
      <div className="absolute inset-0 w-full h-full animate-infinite-cinematic">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.18] saturate-[0.85]"
          loading="eager"
        />
      </div>

      {/* Atmospheric dark gradient overlays & lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-[#050507]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-[#050507]/40 to-[#050507]/90" />

      {/* Volumetric Breathing Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#ffd000]/[0.07] blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#ff7a00]/[0.05] blur-[140px] animate-pulse" />

      {/* Subtle fine geometric tech grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Live Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
