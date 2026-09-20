import React, { useEffect, useRef, useState, useCallback } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_133255_956f653f-5d80-4b06-abd5-0f46c98b60fa.mp4';
const POSTER_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_132328_5f9029c8-218f-4489-82b6-29ff2849920e.png';

const CROSSFADE_WINDOW = 1.4; // seconds before end to crossfade seamlessly

interface SeamlessHeroBackgroundProps {
  isVisible?: boolean;
}

export const SeamlessHeroBackground: React.FC<SeamlessHeroBackgroundProps> = ({
  isVisible = true,
}) => {
  const videoRefA = useRef<HTMLVideoElement | null>(null);
  const videoRefB = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A');
  const activeVideoRef = useRef<'A' | 'B'>('A');
  const isCrossfadingRef = useRef(false);
  const isVisibleRef = useRef(isVisible);

  useEffect(() => {
    activeVideoRef.current = activeVideo;
  }, [activeVideo]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  // Setup video elements attributes & initial play
  useEffect(() => {
    const vA = videoRefA.current;
    const vB = videoRefB.current;
    if (!vA || !vB) return;

    [vA, vB].forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
    });

    const startFirst = () => {
      if (isVisibleRef.current) {
        vA.play().catch(() => {
          // Will retry on user gesture
        });
      }
    };
    startFirst();

    // Browser policy gesture wake-up
    const handleGesture = () => {
      if (!isVisibleRef.current) return;
      if (vA.paused && !vB.paused) {
        // vB is playing, all good
      } else if (vA.paused && vB.paused) {
        vA.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleGesture, { passive: true, once: true });
    window.addEventListener('click', handleGesture, { passive: true, once: true });
    window.addEventListener('scroll', handleGesture, { passive: true, once: true });

    return () => {
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('scroll', handleGesture);
    };
  }, []);

  // High-performance playback coordination:
  // Pauses video when off-screen and resumes instantly upon scroll-back via requestAnimationFrame
  useEffect(() => {
    let resumeRafId: number;

    if (!isVisible) {
      // Pause both videos when off-screen to release GPU decoder & CPU threads
      const vA = videoRefA.current;
      const vB = videoRefB.current;
      if (vA && !vA.paused) {
        vA.pause();
      }
      if (vB && !vB.paused) {
        vB.pause();
      }
    } else {
      // Synchronize video resumption with the display refresh cycle via requestAnimationFrame
      resumeRafId = requestAnimationFrame(() => {
        const activeVid = activeVideoRef.current === 'A' ? videoRefA.current : videoRefB.current;
        if (activeVid && activeVid.paused) {
          const playPromise = activeVid.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Gracefully handle any browser autoplay deferrals
            });
          }
        }
      });
    }

    return () => {
      if (resumeRafId) {
        cancelAnimationFrame(resumeRafId);
      }
    };
  }, [isVisible]);

  // Periodic timer to monitor video playback and execute seamless cross-dissolve (runs only when visible)
  useEffect(() => {
    if (!isVisible) return;

    const checkInterval = setInterval(() => {
      if (!isVisibleRef.current) return;

      const vA = videoRefA.current;
      const vB = videoRefB.current;

      if (vA && vB) {
        const currentActive = isCrossfadingRef.current ? null : activeVideoRef.current;

        if (currentActive === 'A') {
          const dur = vA.duration;
          if (dur > 0 && vA.currentTime >= dur - CROSSFADE_WINDOW) {
            isCrossfadingRef.current = true;
            vB.currentTime = 0;
            vB.play()
              .then(() => {
                setActiveVideo('B');
                setTimeout(() => {
                  if (videoRefA.current) {
                    videoRefA.current.pause();
                    videoRefA.current.currentTime = 0;
                  }
                  isCrossfadingRef.current = false;
                }, CROSSFADE_WINDOW * 1000);
              })
              .catch(() => {
                isCrossfadingRef.current = false;
              });
          }
        } else if (currentActive === 'B') {
          const dur = vB.duration;
          if (dur > 0 && vB.currentTime >= dur - CROSSFADE_WINDOW) {
            isCrossfadingRef.current = true;
            vA.currentTime = 0;
            vA.play()
              .then(() => {
                setActiveVideo('A');
                setTimeout(() => {
                  if (videoRefB.current) {
                    videoRefB.current.pause();
                    videoRefB.current.currentTime = 0;
                  }
                  isCrossfadingRef.current = false;
                }, CROSSFADE_WINDOW * 1000);
              })
              .catch(() => {
                isCrossfadingRef.current = false;
              });
          }
        }
      }
    }, 200);

    return () => clearInterval(checkInterval);
  }, [isVisible, activeVideo]);

  // Ambient floating gold embers on HTML5 canvas (paused when off-screen)
  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const count = Math.min(Math.floor(width / 50), 22);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.6,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.4 + 0.1,
      maxAlpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    let t = 0;
    const render = () => {
      if (!isVisibleRef.current) return;
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(t + p.y * 0.01) * 0.1;
        p.alpha = 0.15 + (Math.sin(t * p.pulse * 40) + 1) * 0.5 * (p.maxAlpha - 0.15);

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 208, 0, ${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* 
        The cinematic drifting wrapper:
        28-second smooth camera pan & scale eliminates any sense of repetition,
        decoupling visual motion from the 10-second clip duration.
      */}
      <div className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-infinite-cinematic">
        {/* Video Player A */}
        <video
          ref={videoRefA}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={POSTER_URL}
          onEnded={() => {
            if (activeVideo === 'A') {
              if (videoRefB.current) {
                videoRefB.current.currentTime = 0;
                videoRefB.current.play().catch(() => {});
              }
              setActiveVideo('B');
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-opacity duration-[1400ms] ease-in-out ${
            activeVideo === 'A' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'opacity, transform',
          }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Video Player B (seamless crossfade counterpart) */}
        <video
          ref={videoRefB}
          muted
          playsInline
          preload="auto"
          poster={POSTER_URL}
          onEnded={() => {
            if (activeVideo === 'B') {
              if (videoRefA.current) {
                videoRefA.current.currentTime = 0;
                videoRefA.current.play().catch(() => {});
              }
              setActiveVideo('A');
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-opacity duration-[1400ms] ease-in-out ${
            activeVideo === 'B' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'opacity, transform',
          }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Floating Gold Motes Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Directional scrims: supreme contrast for text while maintaining vibrant background visibility */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/80 via-black/40 to-black/10 lg:from-black/75 lg:via-black/25 lg:to-transparent" />
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/90 via-transparent to-black/40" />
    </div>
  );
};
