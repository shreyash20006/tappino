import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { MagneticButton } from '../components/ui/MagneticButton';
import { InstagramIcon } from '../components/ui/InstagramIcon';
import { BrandStrokes } from '../components/ui/BrandStrokes';

interface CTASectionProps {
  onOpenOrderModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 py-24 sm:py-32 text-cream-50 shadow-2xl">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-maroon-600/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-cream-200/20 bg-maroon-950/60 px-4 py-1.5 text-xs font-mono font-semibold text-cream-200 mb-6 shadow-sm backdrop-blur-md"
        >
          <BrandStrokes size="sm" color="#E5D3C2" />
          <span>READY FOR YOUR CHILL FIX?</span>
        </motion.div>

        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-cream-50 leading-[0.9]"
        >
          YOUR COFFEE IS <br />
          <span className="text-gradient-cream">ONE DM AWAY.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-cream-200/90 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Freshly brewed cold coffee starting at {brandConfig.startingPrice}. Drop us a message on Instagram for instant orders, pickup, and bulk campus batches in Nagpur.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA: Cream filled button with Maroon text */}
          <MagneticButton
            as="a"
            href={brandConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-cream-50 hover:bg-white px-8 py-4 text-base font-bold font-display uppercase tracking-wider text-maroon-900 shadow-2xl hover:scale-105 transition-all"
            dataCursor="hover"
          >
            <InstagramIcon className="h-5 w-5 text-maroon-900" />
            <span>Order on Instagram</span>
          </MagneticButton>

          {/* Secondary CTA: Cream Outline */}
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-cream-200/40 bg-maroon-950/40 px-7 py-4 text-base font-display font-bold text-cream-50 hover:bg-cream-50 hover:text-maroon-900 transition-all backdrop-blur-md"
            data-cursor="hover"
          >
            <Sparkles className="h-4 w-4" />
            <span>Build Custom Cup</span>
          </button>
        </motion.div>

        {/* Brand Tagline */}
        <p className="mt-8 font-script text-2xl text-tappinoBrown-200 font-bold">
          {brandConfig.tagline} • {brandConfig.fullLocationDisplay}
        </p>
      </div>
    </section>
  );
};
