import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface SoundToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="group relative flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-50/90 px-3.5 py-1.5 text-xs text-espresso-900 shadow-sm backdrop-blur-md transition-all hover:border-maroon-800/60 hover:bg-white"
      aria-label={isPlaying ? 'Mute ambient cafe sound' : 'Play ambient cafe sound'}
      title={isPlaying ? 'Mute ambient sound' : 'Play ambient cafe sound'}
      data-cursor="hover"
    >
      <div className="flex items-center gap-0.5">
        {isPlaying ? (
          <>
            <motion.span
              animate={{ height: ['4px', '12px', '6px', '14px', '4px'] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-0.5 rounded-full bg-maroon-800"
            />
            <motion.span
              animate={{ height: ['8px', '4px', '14px', '6px', '8px'] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
              className="w-0.5 rounded-full bg-maroon-800"
            />
            <motion.span
              animate={{ height: ['12px', '6px', '4px', '12px', '10px'] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut', delay: 0.4 }}
              className="w-0.5 rounded-full bg-tappinoBrown-500"
            />
          </>
        ) : (
          <VolumeX className="h-3.5 w-3.5 text-espresso-700/60 group-hover:text-maroon-800" />
        )}
      </div>
      <span className="hidden sm:inline font-mono text-[11px] tracking-wider uppercase text-espresso-800 font-semibold opacity-90 group-hover:opacity-100">
        {isPlaying ? 'Cafe Audio' : 'Sound Off'}
      </span>
      {isPlaying && <Volume2 className="h-3 w-3 text-maroon-800" />}
    </button>
  );
};
