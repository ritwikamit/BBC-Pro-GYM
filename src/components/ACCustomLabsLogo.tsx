import React from 'react';

interface ACCustomLabsLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'default';
  showUnderline?: boolean;
}

/**
 * ACCustom Labs Brand Logo
 * Renders the official developer brand logo calibrated to match text baseline:
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
  // Calibrated compact sizing for seamless inline text alignment
  const sizeClasses = {
    small: 'h-3 sm:h-3.5',
    default: 'h-3.5 sm:h-4',
    medium: 'h-4.5 sm:h-5',
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
          className={`${sizeClasses} w-auto object-contain filter drop-shadow-[0_1px_6px_rgba(255,0,43,0.3)] transition-transform duration-200 hover:scale-105`}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </span>
  );
};
