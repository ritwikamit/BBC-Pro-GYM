import React, { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_133255_956f653f-5d80-4b06-abd5-0f46c98b60fa.mp4';
const POSTER_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_132328_5f9029c8-218f-4489-82b6-29ff2849920e.png';

interface SeamlessHeroBackgroundProps {
  isVisible?: boolean;
}

export const SeamlessHeroBackground: React.FC<SeamlessHeroBackgroundProps> = ({
  isVisible = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Setup video element attributes & initial playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    if (isVisible && window.scrollY <= 30) {
      video.play().catch(() => {});
    }

    const handleGesture = () => {
      if (video.paused && isVisible && window.scrollY <= 30) {
        video.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleGesture, { passive: true, once: true });
    window.addEventListener('click', handleGesture, { passive: true, once: true });

    return () => {
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('click', handleGesture);
    };
  }, []);

  // Performance Guard: Pause video immediately whenever user scrolls down past the hero top.
  // This frees 100% of GPU video decoding bandwidth during scrolling, ensuring locked 60/120 FPS.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isTicking = false;
    const handleScrollPause = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 30 || !isVisible) {
            if (!video.paused) {
              video.pause();
            }
          } else {
            if (video.paused) {
              video.play().catch(() => {});
            }
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScrollPause, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollPause);
  }, [isVisible]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Native Direct Hardware-Accelerated Video Layer */}
      <div className="absolute inset-0 w-full h-full opacity-90">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={POSTER_URL}
          className="w-full h-full object-cover object-center"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Directional scrim overlays: optimal text contrast and seamless integration with background grid */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/85 via-black/50 to-black/20 lg:from-black/80 lg:via-black/35 lg:to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#050507] via-transparent to-black/50" />
    </div>
  );
};
