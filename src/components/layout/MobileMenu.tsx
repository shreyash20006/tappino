import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { InstagramIcon } from '../ui/InstagramIcon';
import { TappinoLogo } from '../ui/TappinoLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Signature', href: '#signature' },
    { label: 'Menu', href: '#menu' },
    { label: 'Story', href: '#story' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-cream-50/98 px-6 py-8 backdrop-blur-2xl md:hidden text-espresso-900 shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-maroon-800/10 pb-5">
            <TappinoLogo variant="maroon" size="sm" showTagline={false} />
            <button
              onClick={onClose}
              className="rounded-full border border-maroon-800/20 bg-cream-100 p-2 text-espresso-900 hover:bg-cream-200"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 py-6">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + idx * 0.04 }}
                className="font-heading text-4xl uppercase tracking-wider text-espresso-900 transition-colors hover:text-maroon-800 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-tappinoBrown-400 font-semibold">0{idx + 1}</span>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="space-y-4 border-t border-maroon-800/10 pt-6">
            <div className="flex items-center gap-2 text-xs font-mono text-tappinoBrown-600 font-medium">
              <MapPin className="h-3.5 w-3.5 text-maroon-800" />
              <span>{brandConfig.fullLocationDisplay}</span>
            </div>

            <a
              href={brandConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-maroon-800 hover:bg-maroon-900 py-4 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm"
            >
              <InstagramIcon className="h-4 w-4 text-cream-100" />
              <span>Order on Instagram</span>
            </a>

            <p className="text-center font-script font-bold text-base text-tappinoBrown-500 tracking-wide">
              {brandConfig.tagline}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
