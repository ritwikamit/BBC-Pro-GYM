import React, { useEffect, useRef } from 'react';

export const AnimatedBodyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Grid sizing
    const isMobile = width < 768;
    const gridSize = isMobile ? 56 : 64;

    interface ClothPoint {
      origX: number;
      origY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      pinned: boolean;
      phaseOffset: number;
    }

    let cols = Math.ceil(width / gridSize) + 2;
    let rows = Math.ceil(height / gridSize) + 2;
    let grid: ClothPoint[][] = [];

    const initGrid = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      if (width <= 0 || height <= 0) return;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      cols = Math.ceil(width / gridSize) + 2;
      rows = Math.ceil(height / gridSize) + 2;
      const newGrid: ClothPoint[][] = [];

      for (let r = 0; r < rows; r++) {
        const row: ClothPoint[] = [];
        for (let c = 0; c < cols; c++) {
          const origX = c * gridSize;
          const origY = r * gridSize;
          const pinned = c === 0 || c === cols - 1 || r === 0 || r === rows - 1;
          row.push({
            origX,
            origY,
            x: origX,
            y: origY,
            vx: 0,
            vy: 0,
            pinned,
            phaseOffset: (r * 0.4 + c * 0.3) % (Math.PI * 2),
          });
        }
        newGrid.push(row);
      }
      grid = newGrid;
    };

    initGrid();

    const handleResize = () => {
      initGrid();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Pointer state with passive event handling
    const mouse = {
      x: -1000,
      y: -1000,
      vx: 0,
      vy: 0,
      active: false,
      lastMoveTime: 0,
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const now = performance.now();
      const dt = Math.max(16, now - mouse.lastMoveTime);
      mouse.lastMoveTime = now;

      mouse.vx = Math.min(25, Math.max(-25, ((clientX - mouse.x) / dt) * 16));
      mouse.vy = Math.min(25, Math.max(-25, ((clientY - mouse.y) / dt) * 16));
      mouse.x = clientX;
      mouse.y = clientY;
      mouse.active = true;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e) {
        if (e.touches && e.touches[0]) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          return;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      updatePointer(clientX, clientY);
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stretchRadius = isMobile ? 110 : 140;
    const maxDisplacement = isMobile ? 10 : 14;

    // Smooth RAF loop capped to viewport
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Check mouse inactivity to save CPU
      if (mouse.active && performance.now() - mouse.lastMoveTime > 1200) {
        mouse.active = false;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      if (!grid || grid.length === 0) {
        ctx.restore();
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const totalRows = grid.length;
      const totalCols = grid[0]?.length || 0;
      const time = performance.now() * 0.001;

      // ─── 1. ULTRA-LIGHT PHYSICS UPDATE ───
      if (!prefersReducedMotion) {
        // A. Pointer stretch
        if (mouse.active) {
          for (let r = 0; r < totalRows; r++) {
            const row = grid[r];
            if (!row) continue;
            for (let c = 0; c < totalCols; c++) {
              const p = row[c];
              if (!p || p.pinned) continue;

              const dx = p.x - mouse.x;
              const dy = p.y - mouse.y;
              const distSq = dx * dx + dy * dy;

              if (distSq < stretchRadius * stretchRadius && distSq > 1) {
                const dist = Math.sqrt(distSq);
                const factor = 1 - dist / stretchRadius;
                const pushForce = factor * factor * (isMobile ? 1.2 : 1.6);
                p.vx += (dx / dist) * pushForce;
                p.vy += (dy / dist) * pushForce;
              }
            }
          }
        }

        // B. Spring restoration
        for (let r = 0; r < totalRows; r++) {
          const row = grid[r];
          if (!row) continue;
          for (let c = 0; c < totalCols; c++) {
            const p = row[c];
            if (!p) continue;

            if (p.pinned) {
              p.x = p.origX;
              p.y = p.origY;
              continue;
            }

            // Return force
            p.vx += (p.origX - p.x) * 0.08;
            p.vy += (p.origY - p.y) * 0.08;

            // Damping
            p.vx *= 0.88;
            p.vy *= 0.88;

            p.x += p.vx;
            p.y += p.vy;

            // Cap displacement
            const dispX = p.x - p.origX;
            const dispY = p.y - p.origY;
            const dispSq = dispX * dispX + dispY * dispY;
            if (dispSq > maxDisplacement * maxDisplacement) {
              const disp = Math.sqrt(dispSq);
              const scale = maxDisplacement / disp;
              p.x = p.origX + dispX * scale;
              p.y = p.origY + dispY * scale;
              p.vx *= 0.6;
              p.vy *= 0.6;
            }
          }
        }
      }

      // ─── 2. FAST SINGLE-PASS MESH RENDER ───
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Horizontal grid lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 215, 60, 0.06)';
      ctx.lineWidth = 0.8;

      for (let r = 0; r < totalRows; r++) {
        const row = grid[r];
        if (!row || !row[0]) continue;
        ctx.moveTo(row[0].x, row[0].y);
        for (let c = 1; c < totalCols; c++) {
          const prev = row[c - 1];
          const curr = row[c];
          if (!prev || !curr) continue;
          ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) * 0.5, (prev.y + curr.y) * 0.5);
        }
        const last = row[totalCols - 1];
        if (last) ctx.lineTo(last.x, last.y);
      }
      ctx.stroke();

      // Vertical grid lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 215, 60, 0.06)';
      ctx.lineWidth = 0.8;

      for (let c = 0; c < totalCols; c++) {
        const top = grid[0]?.[c];
        if (!top) continue;
        ctx.moveTo(top.x, top.y);
        for (let r = 1; r < totalRows; r++) {
          const prev = grid[r - 1]?.[c];
          const curr = grid[r]?.[c];
          if (!prev || !curr) continue;
          ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) * 0.5, (prev.y + curr.y) * 0.5);
        }
        const bottom = grid[totalRows - 1]?.[c];
        if (bottom) ctx.lineTo(bottom.x, bottom.y);
      }
      ctx.stroke();

      // Subtle active intersection pins
      if (mouse.active) {
        ctx.fillStyle = 'rgba(255, 215, 60, 0.25)';
        for (let r = 0; r < totalRows; r++) {
          const row = grid[r];
          if (!row) continue;
          for (let c = 0; c < totalCols; c++) {
            const p = row[c];
            if (!p) continue;
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            if (dx * dx + dy * dy < stretchRadius * stretchRadius) {
              ctx.beginPath();
              ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 transform-gpu"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Obsidian Base */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* 2. Hardware-Accelerated Ambient Glowing Orbs */}
      <div className="absolute top-[5%] left-[5%] w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-gradient-to-br from-[#ffd000]/[0.06] via-[#ff9900]/[0.02] to-transparent blur-[60px] animate-aurora-drift-1 transform-gpu will-change-transform" />
      <div className="absolute top-[40%] right-[4%] w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-gradient-to-bl from-[#4c2d82]/[0.08] via-[#1f1638]/[0.03] to-transparent blur-[65px] animate-aurora-drift-2 transform-gpu will-change-transform" />
      <div className="absolute top-[75%] left-[8%] w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#ffd000]/[0.05] via-[#d49a00]/[0.02] to-transparent blur-[60px] animate-aurora-drift-3 transform-gpu will-change-transform" />

      {/* 3. High-Performance Viewport-Sized Cloth Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70 mix-blend-screen pointer-events-none transform-gpu"
      />

      {/* 4. Fine Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050507]/20 to-[#050507]/80 pointer-events-none" />
    </div>
  );
};
