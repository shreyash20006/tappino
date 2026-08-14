import React, { useState } from 'react';
import { officialLogoUrl } from '../../config/socialMedia';
import { BrandStrokes } from './BrandStrokes';

interface TappinoLogoProps {
  variant?: 'maroon' | 'light' | 'monochrome';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  useImage?: boolean;
}

export const TappinoLogo: React.FC<TappinoLogoProps> = ({
  variant = 'maroon',
  showTagline = false,
  size = 'md',
  className = '',
  useImage = true,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const isLight = variant === 'light';

  // Responsive dimensions preserving original image proportions
  const sizeClasses = {
    sm: {
      img: 'h-9 sm:h-10 w-auto',
      container: 'p-1',
      text: 'text-2xl sm:text-3xl',
      strokeSize: 'sm' as const,
      tagline: 'text-[11px]',
    },
    md: {
      img: 'h-11 sm:h-12 w-auto',
      container: 'p-1',
      text: 'text-3xl sm:text-4xl',
      strokeSize: 'md' as const,
      tagline: 'text-xs sm:text-sm',
    },
    lg: {
      img: 'h-14 sm:h-16 w-auto',
      container: 'p-1.5',
      text: 'text-4xl sm:text-5xl',
      strokeSize: 'md' as const,
      tagline: 'text-sm sm:text-base',
    },
    xl: {
      img: 'h-24 sm:h-28 md:h-32 w-auto',
      container: 'p-2',
      text: 'text-6xl sm:text-7xl md:text-8xl',
      strokeSize: 'lg' as const,
      tagline: 'text-lg sm:text-xl',
    },
  };

  const currentSize = sizeClasses[size];

  // If using image and no error, render official Cloudinary logo with appropriate background treatment
  if (useImage && !imageError) {
    return (
      <div className={`inline-flex flex-col items-start select-none ${className}`}>
        <div
          className={`inline-flex items-center justify-center rounded-2xl transition-transform duration-300 ${
            isLight
              ? 'bg-cream-50/95 p-1.5 shadow-warm-md border border-cream-200/40'
              : 'bg-transparent'
          }`}
        >
          <img
            src={officialLogoUrl}
            alt="Tappino Official Logo - Sip. Chill. Repeat."
            className={`${currentSize.img} object-contain rounded-xl`}
            onError={() => setImageError(true)}
            loading="eager"
          />
        </div>
        {showTagline && (
          <span
            className={`font-script font-bold tracking-wide mt-1 pl-1 ${
              isLight ? 'text-cream-200' : 'text-tappinoBrown-500'
            } ${currentSize.tagline}`}
          >
            Sip. Chill. Repeat. <span className="text-maroon-700">❤️</span>
          </span>
        )}
      </div>
    );
  }

  // Fallback vector typography treatment if image is loading or disabled
  const wordmarkColor = isLight ? 'text-cream-50' : 'text-maroon-800';
  const strokesColor = isLight ? '#E5D3C2' : '#8B5A3C';
  const taglineColor = isLight ? 'text-cream-200' : 'text-tappinoBrown-500';

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="relative pl-1">
        <BrandStrokes size={currentSize.strokeSize} color={strokesColor} />
      </div>

      <div className="flex items-baseline gap-1 -mt-1">
        <span
          className={`font-heading tracking-[0.06em] font-bold ${currentSize.text} ${wordmarkColor} leading-none transition-colors`}
        >
          TAPPINO
        </span>
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isLight ? 'bg-cream-200' : 'bg-maroon-800'
          } animate-pulse mb-1`}
          aria-hidden="true"
        />
      </div>

      {showTagline && (
        <span
          className={`font-script font-bold tracking-wide ${currentSize.tagline} ${taglineColor} -mt-0.5 pl-1`}
        >
          Sip. Chill. Repeat. <span className="text-maroon-600">❤️</span>
        </span>
      )}
    </div>
  );
};
