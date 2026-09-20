import React from 'react';

interface ACCustomLabsLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'default';
  showUnderline?: boolean;
}

/**
 * ACCustom Labs Brand Logo
 * Renders the official developer brand logo as provided:
 * - Stylized "A" chevron monogram
 * - Geometric "C"
 * - Vibrant crimson "Custom" wordmark
 * - Pure white "Labs" wordmark
 * - Signature sweeping red horizon arch underline
 */
export const ACCustomLabsLogo: React.FC<ACCustomLabsLogoProps> = ({
  className = '',
  size = 'default',
}) => {
  // Calibrated sizing for footer credits
  const sizeClasses = {
    small: 'h-4 sm:h-5',
    default: 'h-5 sm:h-6 md:h-6.5',
    medium: 'h-6 sm:h-7 md:h-8',
  }[size];

  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      title="ACCustom Labs"
    >
      <picture className="inline-flex items-center">
        <source srcSet="/ac-custom-labs.webp" type="image/webp" />
        <img
          src="/ac-custom-labs.png"
          alt="ACCustom Labs"
          className={`${sizeClasses} w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,0,43,0.25)] transition-transform duration-200 hover:scale-105`}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </span>
  );
};
