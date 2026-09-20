import React, { useEffect, useRef } from 'react';

export const AnimatedBodyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth || window.innerWidth;
    let height = canvas.offsetHeight || window.innerHeight;

    // Responsive architectural grid pitch
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const gridSize = isMobile ? 48 : isTablet ? 54 : 60;

    // Cloth Vertex Structure
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

    let cols = Math.ceil(width / gridSize) + 1;
    let rows = Math.ceil(height / gridSize) + 1;
    let grid: ClothPoint[][] = [];

    const initGrid = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth || window.innerWidth;
      height = canvas.offsetHeight || window.innerHeight;
      if (width <= 0 || height <= 0) return;

      // Crisp Retina / High-DPI canvas buffer sizing to eliminate blurriness
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      cols = Math.ceil(width / gridSize) + 1;
      rows = Math.ceil(height / gridSize) + 1;
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
      if (!canvas) return;
      initGrid();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // Pointer state
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      speed: 0,
      active: false,
      lastTime: performance.now(),
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;

      const now = performance.now();
      const dt = Math.max(1, now - mouse.lastTime);
      mouse.lastTime = now;

      const dx = relativeX - mouse.x;
      const dy = relativeY - mouse.y;
      mouse.vx = (dx / dt) * 16;
      mouse.vy = (dy / dt) * 16;
      mouse.speed = Math.hypot(mouse.vx, mouse.vy);

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = relativeX;
      mouse.y = relativeY;
      mouse.active = true;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e) {
        if (e.touches && e.touches.length > 0 && e.touches[0]) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else if (e.changedTouches && e.changedTouches.length > 0 && e.changedTouches[0]) {
          clientX = e.changedTouches[0].clientX;
          clientY = e.changedTouches[0].clientY;
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
      mouse.vx = 0;
      mouse.vy = 0;
      mouse.speed = 0;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animation Loop: Crisp, Sharp Architectural Grid with Elastic Tactile Response
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      if (!grid || grid.length === 0 || !grid[0] || grid[0].length === 0) {
        ctx.restore();
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const totalRows = grid.length;
      const totalCols = grid[0].length;

      // Viewport culling with generous buffer
      const rect = container.getBoundingClientRect();
      const viewTop = Math.max(0, -rect.top - 140);
      const viewBottom = Math.min(height, -rect.top + window.innerHeight + 140);
      const startRow = Math.max(0, Math.min(totalRows - 1, Math.floor(viewTop / gridSize)));
      const endRow = Math.max(startRow, Math.min(totalRows - 1, Math.ceil(viewBottom / gridSize)));

      const stretchRadius = isMobile ? 120 : 155;
      const maxDisplacement = isMobile ? 12 : 16;
      const time = performance.now() * 0.001;

      // ─── 1. SIMULATE CLOTH PHYSICS ───
      if (!prefersReducedMotion) {
        // A. Interactive Cursor Stretch
        if (mouse.active) {
          for (let r = startRow; r <= endRow; r++) {
            const row = grid[r];
            if (!row) continue;
            for (let c = 0; c < totalCols; c++) {
              const p = row[c];
              if (!p || p.pinned) continue;

              const dx = p.x - mouse.x;
              const dy = p.y - mouse.y;
              const dist = Math.hypot(dx, dy);

              if (dist < stretchRadius && dist > 1) {
                const factor = 1 - dist / stretchRadius;
                const smoothFactor = factor * factor * (3 - 2 * factor);
                const pushForce = smoothFactor * (isMobile ? 1.4 : 2.0);
                p.vx += (dx / dist) * pushForce;
                p.vy += (dy / dist) * pushForce;

                p.vx += mouse.vx * factor * 0.1;
                p.vy += mouse.vy * factor * 0.1;
              }
            }
          }
        }

        // B. Subtle ambient life
        for (let r = startRow; r <= endRow; r++) {
          const row = grid[r];
          if (!row) continue;
          for (let c = 0; c < totalCols; c++) {
            const p = row[c];
            if (!p || p.pinned) continue;

            const breath = Math.sin(time * 0.7 + p.phaseOffset) * 0.035;
            p.vx += breath;
            p.vy += breath * 0.5;
          }
        }

        // C. Elastic Spring Tension
        for (let r = startRow; r <= endRow; r++) {
          const row = grid[r];
          if (!row) continue;
          for (let c = 0; c < totalCols; c++) {
            const p = row[c];
            if (!p) continue;

            // Horizontal connection
            if (c < totalCols - 1) {
              const right = row[c + 1];
              if (right) {
                const hdx = right.x - p.x;
                const hdy = right.y - p.y;
                const hdist = Math.hypot(hdx, hdy) || 1;
                const hdiff = (hdist - gridSize) * 0.04;
                const hnx = hdx / hdist;
                const hny = hdy / hdist;

                if (!p.pinned) {
                  p.vx += hnx * hdiff;
                  p.vy += hny * hdiff;
                }
                if (!right.pinned) {
                  right.vx -= hnx * hdiff;
                  right.vy -= hny * hdiff;
                }
              }
            }

            // Vertical connection
            if (r < totalRows - 1 && grid[r + 1]) {
              const down = grid[r + 1][c];
              if (down) {
                const vdx = down.x - p.x;
                const vdy = down.y - p.y;
                const vdist = Math.hypot(vdx, vdy) || 1;
                const vdiff = (vdist - gridSize) * 0.04;
                const vnx = vdx / vdist;
                const vny = vdy / vdist;

                if (!p.pinned) {
                  p.vx += vnx * vdiff;
                  p.vy += vny * vdiff;
                }
                if (!down.pinned) {
                  down.vx -= vnx * vdiff;
                  down.vy -= vny * vdiff;
                }
              }
            }
          }
        }

        // D. Restoring Spring Force & Damping
        for (let r = startRow; r <= endRow; r++) {
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

            const returnX = p.origX - p.x;
            const returnY = p.origY - p.y;
            p.vx += returnX * 0.075;
            p.vy += returnY * 0.075;

            p.vx *= 0.86;
            p.vy *= 0.86;

            p.x += p.vx;
            p.y += p.vy;

            // Strict displacement cap
            const currentDispX = p.x - p.origX;
            const currentDispY = p.y - p.origY;
            const currentDisp = Math.hypot(currentDispX, currentDispY);
            if (currentDisp > maxDisplacement) {
              const scale = maxDisplacement / currentDisp;
              p.x = p.origX + currentDispX * scale;
              p.y = p.origY + currentDispY * scale;
              p.vx *= 0.5;
              p.vy *= 0.5;
            }
          }
        }
      }

      // ─── 2. RENDER CRISP, HIGH-DEFINITION GRID MESH ───
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Horizontal Grid Threads (Crisp, single clean stroke without blurry shadow duplication)
      for (let r = startRow; r <= endRow; r++) {
        const row = grid[r];
        if (!row || row.length === 0 || !row[0]) continue;

        ctx.beginPath();
        ctx.moveTo(row[0].x, row[0].y);

        let maxStretch = 0;
        for (let c = 1; c < totalCols; c++) {
          const prev = row[c - 1];
          const curr = row[c];
          if (!prev || !curr) continue;
          const midX = (prev.x + curr.x) * 0.5;
          const midY = (prev.y + curr.y) * 0.5;
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);

          const stretch = Math.hypot(curr.x - curr.origX, curr.y - curr.origY);
          if (stretch > maxStretch) maxStretch = stretch;
        }
        const last = row[totalCols - 1];
        if (last) ctx.lineTo(last.x, last.y);

        if (maxStretch > 1.5) {
          const intensity = Math.min(1, maxStretch / maxDisplacement);
          ctx.strokeStyle = `rgba(255, 215, 75, ${(0.09 + intensity * 0.16).toFixed(3)})`;
          ctx.lineWidth = 1.0;
        } else {
          // Sharp, subtle hairline
          ctx.strokeStyle = 'rgba(255, 210, 60, 0.07)';
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      }

      // Vertical Grid Threads
      for (let c = 0; c < totalCols; c++) {
        const topPoint = grid[startRow]?.[c];
        if (!topPoint) continue;

        ctx.beginPath();
        ctx.moveTo(topPoint.x, topPoint.y);

        let maxStretch = 0;
        for (let r = startRow + 1; r <= endRow; r++) {
          const prev = grid[r - 1]?.[c];
          const curr = grid[r]?.[c];
          if (!prev || !curr) continue;
          const midX = (prev.x + curr.x) * 0.5;
          const midY = (prev.y + curr.y) * 0.5;
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);

          const stretch = Math.hypot(curr.x - curr.origX, curr.y - curr.origY);
          if (stretch > maxStretch) maxStretch = stretch;
        }
        const bottomPoint = grid[endRow]?.[c];
        if (bottomPoint) ctx.lineTo(bottomPoint.x, bottomPoint.y);

        if (maxStretch > 1.5) {
          const intensity = Math.min(1, maxStretch / maxDisplacement);
          ctx.strokeStyle = `rgba(255, 215, 75, ${(0.09 + intensity * 0.16).toFixed(3)})`;
          ctx.lineWidth = 1.0;
        } else {
          ctx.strokeStyle = 'rgba(255, 210, 60, 0.07)';
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      }

      // Intersection Accent Pins (Sharp, pinpoint micro-dots)
      for (let r = startRow; r <= endRow; r++) {
        const row = grid[r];
        if (!row) continue;
        for (let c = 0; c < totalCols; c++) {
          const p = row[c];
          if (!p) continue;

          const stretch = Math.hypot(p.x - p.origX, p.y - p.origY);

          if (stretch > 2.0) {
            const intensity = Math.min(1, stretch / maxDisplacement);
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.4 + intensity * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 235, 130, ${(0.35 + intensity * 0.45).toFixed(3)})`;
            ctx.fill();
          } else if ((r + c) % 2 === 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 0.85, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 220, 80, 0.13)';
            ctx.fill();
          }
        }
      }

      // Cursor Subtle Ambient Highlight
      if (mouse.active) {
        const auraRadius = isMobile ? 120 : 160;
        const grad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          auraRadius
        );
        grad.addColorStop(0, 'rgba(255, 215, 60, 0.065)');
        grad.addColorStop(0.5, 'rgba(255, 175, 30, 0.018)');
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Obsidian Base */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* 2. Subdued, Clean Ambient Lighting (Significantly less blurry & hazy) */}
      {/* Upper Subtle Warmth */}
      <div className="absolute top-[8%] left-[6%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#ffd000]/08 via-[#ff9900]/03 to-transparent blur-[80px] sm:blur-[95px] animate-aurora-drift-1 transform-gpu" />

      {/* Mid Subtle Violet Tone */}
      <div className="absolute top-[32%] right-[5%] w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full bg-gradient-to-bl from-[#4c2d82]/10 via-[#1f1638]/05 to-transparent blur-[85px] sm:blur-[100px] animate-aurora-drift-2 transform-gpu" />

      {/* Lower Soft Gold Accent */}
      <div className="absolute top-[58%] left-[12%] w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full bg-gradient-to-tr from-[#ffd000]/07 via-[#d49a00]/03 to-transparent blur-[85px] sm:blur-[105px] animate-aurora-drift-3 transform-gpu" />

      {/* Bottom Corner Accent */}
      <div className="absolute top-[80%] right-[4%] w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-gradient-to-tl from-[#ffd000]/08 via-[#ff7700]/03 to-transparent blur-[80px] sm:blur-[95px] animate-aurora-drift-1 transform-gpu" />

      {/* 3. High-DPI Sharp Interactive Cloth Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80 mix-blend-screen pointer-events-none"
      />

      {/* 4. Crisp Radial Vignette Edge Softener */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050507]/20 to-[#050507]/75 pointer-events-none" />
    </div>
  );
};
