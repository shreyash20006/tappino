import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover (mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasFinePointer);

    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor]');
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute('data-cursor');
        const customText = interactiveEl.getAttribute('data-cursor-text') || '';
        
        if (cursorType === 'text' || customText) {
          setCursorVariant('text');
          setCursorText(customText || 'VIEW');
        } else if (cursorType === 'hover') {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else if (target.closest('button, a, input, select, textarea')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-display uppercase tracking-widest text-[10px] font-bold shadow-sm"
        animate={{
          x: mousePosition.x - (cursorVariant === 'text' ? 36 : cursorVariant === 'hover' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'text' ? 36 : cursorVariant === 'hover' ? 24 : 16),
          width: cursorVariant === 'text' ? 72 : cursorVariant === 'hover' ? 48 : 32,
          height: cursorVariant === 'text' ? 72 : cursorVariant === 'hover' ? 48 : 32,
          backgroundColor:
            cursorVariant === 'text'
              ? 'rgba(139, 0, 0, 0.95)'
              : cursorVariant === 'hover'
              ? 'rgba(139, 0, 0, 0.08)'
              : 'rgba(139, 0, 0, 0.03)',
          borderColor:
            cursorVariant === 'text'
              ? 'rgba(255, 253, 248, 0.3)'
              : cursorVariant === 'hover'
              ? 'rgba(139, 0, 0, 0.45)'
              : 'rgba(139, 0, 0, 0.25)',
          borderWidth: cursorVariant === 'text' ? 0 : 1.5,
          color: cursorVariant === 'text' ? '#FFFDF8' : '#8B0000',
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none font-bold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      {cursorVariant !== 'text' && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-maroon-800"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: cursorVariant === 'hover' ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 700,
            mass: 0.1,
          }}
        />
      )}
    </div>
  );
};
