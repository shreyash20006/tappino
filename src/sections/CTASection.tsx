import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { MagneticButton } from '../components/ui/MagneticButton';
import { InstagramIcon } from '../components/ui/InstagramIcon';
import { BrandStrokes } from '../components/ui/BrandStrokes';

export const CTASection: React.FC = () => {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 py-24 sm:py-32 text-cream-50 shadow-2xl">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-maroon-600/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cream-200/20 bg-maroon-950/60 px-4 py-1.5 text-xs font-mono font-semibold text-cream-200 mb-6 shadow-sm backdrop-blur-md"
        >
          <BrandStrokes size="sm" color="#E5D3C2" />
          <span>SIP. CHILL. REPEAT.</span>
        </motion.div>

        {/* Clean Editorial Display Headline with Scroll Fade */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream-50 leading-[0.92]"
        >
          READY FOR YOUR <br />
          <span className="text-gradient-cream">COFFEE FIX?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-cream-200/90 max-w-xl mx-auto font-sans leading-relaxed"
        >
          Reach out directly on Instagram for daily specials, questions, or instant DM orders in Nagpur.
        </motion.p>

        {/* Buttons with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA: Cream filled button with Maroon text */}
          <MagneticButton
            as="a"
            href={brandConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-cream-50 hover:bg-white px-8 py-4 text-sm font-bold font-display uppercase tracking-wider text-maroon-900 shadow-2xl hover:scale-105 transition-all"
            dataCursor="hover"
          >
            <InstagramIcon className="h-4 w-4 text-maroon-900" />
            <span>Order on Instagram</span>
          </MagneticButton>

          {/* Secondary CTA: Menu link */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-cream-200/30 bg-maroon-950/40 px-7 py-4 text-sm font-display font-bold text-cream-50 hover:bg-cream-50 hover:text-maroon-900 transition-all backdrop-blur-md"
            data-cursor="hover"
          >
            <span>View Menu</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Brand Tagline with Scroll Fade */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 font-script text-2xl text-tappinoBrown-200 font-bold"
        >
          {brandConfig.tagline}
        </motion.p>
      </div>
    </section>
  );
};
