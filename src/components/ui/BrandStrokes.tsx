import React from 'react';

interface BrandStrokesProps {
  className?: string;
  color?: string; // default to Coffee Brown #8B5A3C
  size?: 'sm' | 'md' | 'lg';
}

export const BrandStrokes: React.FC<BrandStrokesProps> = ({
  className = '',
  color = '#8B5A3C',
  size = 'md',
}) => {
  const heights = {
    sm: 'h-3.5 w-7',
    md: 'h-5 w-10',
    lg: 'h-7 w-14',
  };

  return (
    <svg
      viewBox="0 0 44 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${heights[size]} inline-block flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* 3 signature curved coffee-brown aroma/flair strokes from the Tappino logo */}
      <path
        d="M6 16C7.5 10 11 5 14 3"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M19 17C20.5 10.5 23.5 5 26 2.5"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M32 17.5C33.5 11 36 6 38.5 3.5"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
