import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  dataCursor?: string;
  dataCursorText?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 30,
  as = 'button',
  href,
  target,
  rel,
  dataCursor = 'hover',
  dataCursorText,
  onClick,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) / (width / 2);
    const deltaY = (clientY - centerY) / (height / 2);
    setPosition({ x: deltaX * strength, y: deltaY * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.1 }}
      className="inline-block"
      data-cursor={dataCursor}
      data-cursor-text={dataCursorText}
    >
      {as === 'a' ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className={`relative inline-flex items-center justify-center font-display transition-colors focus:outline-none ${className}`}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={`relative inline-flex items-center justify-center font-display transition-colors focus:outline-none ${className}`}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
};
