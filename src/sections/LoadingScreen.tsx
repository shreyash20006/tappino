import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandConfig } from '../config/brand';
import { officialLogoUrl } from '../config/socialMedia';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 24);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-50 text-espresso-900"
        >
          {/* Subtle Ambient Maroon Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-maroon-800/8 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Real Cloudinary Logo Animation: blur -> sharp, scale 0.96 -> 1, opacity 0 -> 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="rounded-3xl bg-cream-50 p-2 shadow-warm-lg border border-maroon-800/15">
                <img
                  src={officialLogoUrl}
                  alt="Tappino Official Logo"
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain rounded-2xl"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Handwritten Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 font-script text-2xl sm:text-3xl text-tappinoBrown-500 font-bold"
            >
              {brandConfig.tagline}
            </motion.p>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-1 font-mono text-[11px] uppercase tracking-widest text-espresso-700 font-semibold"
            >
              {brandConfig.fullLocationDisplay}
            </motion.span>

            {/* Maroon Progress Track */}
            <div className="mt-7 w-48 sm:w-60 overflow-hidden rounded-full bg-cream-200 h-1.5 border border-maroon-800/10 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-tappinoBrown-500 via-maroon-700 to-maroon-800"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="mt-2.5 font-mono text-xs text-maroon-800 font-bold">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
