import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUp, Heart } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { InstagramIcon } from '../ui/InstagramIcon';
import { TappinoLogo } from '../ui/TappinoLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cream-200/10 bg-maroon-950 pt-16 pb-12 text-cream-100 shadow-2xl overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Grid with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-cream-200/15"
        >
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <TappinoLogo variant="light" size="md" showTagline={true} />

            <p className="text-sm text-cream-200/85 max-w-sm leading-relaxed font-sans pt-1">
              Freshly crafted premium cold coffee & specialty brews in Nagpur. Experience authentic flavor and pure chill.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-tappinoBrown-200 font-medium">
              <MapPin className="h-4 w-4 text-cream-200" />
              <span>{brandConfig.fullLocationDisplay}, India</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-tappinoBrown-200 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-display font-medium">
              <li>
                <a href="#hero" className="text-cream-200 hover:text-white transition-colors">
                  01. Home
                </a>
              </li>
              <li>
                <a href="#signature" className="text-cream-200 hover:text-white transition-colors">
                  02. Signature Brew
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream-200 hover:text-white transition-colors">
                  03. Menu
                </a>
              </li>
              <li>
                <a href="#story" className="text-cream-200 hover:text-white transition-colors">
                  04. Story
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-cream-200 hover:text-white transition-colors">
                  05. Instagram Feed
                </a>
              </li>
              <li>
                <a href="#location" className="text-cream-200 hover:text-white transition-colors">
                  06. Location
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Instagram */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-tappinoBrown-200 font-bold">
              Connect & Orders
            </h4>
            <p className="text-xs text-cream-200/85 leading-relaxed">
              We take orders, group bookings, event brews, and collaborations directly on Instagram DM.
            </p>

            <div className="pt-1">
              <a
                href={brandConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cream-50 hover:bg-white px-6 py-3.5 text-xs font-bold font-display uppercase tracking-wider text-maroon-900 shadow-lg transition-transform hover:scale-[1.02]"
                data-cursor="hover"
              >
                <InstagramIcon className="h-4 w-4 text-maroon-900" />
                <span>Follow @officialtappino</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cream-200/70"
        >
          <p>© {new Date().getFullYear()} Tappino. All rights reserved.</p>

          <div className="flex items-center gap-1.5 font-sans">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400 inline" />
            <span>for Nagpur Coffee Lovers</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cream-200 hover:text-white transition-colors"
            aria-label="Scroll to top"
            data-cursor="hover"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};
