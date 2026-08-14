import React from 'react';
import { motion } from 'framer-motion';
import { brandConfig } from '../config/brand';
import { BrandStrokes } from '../components/ui/BrandStrokes';
import { InstagramIcon } from '../components/ui/InstagramIcon';

export const SignatureShowcase: React.FC = () => {
  return (
    <section
      id="signature"
      className="relative z-10 w-full overflow-hidden bg-cream-100 py-24 sm:py-32 border-t border-maroon-800/10 text-espresso-900"
    >
      {/* Subtle Warm Glow Effects */}
      <div className="absolute top-1/3 right-10 h-96 w-96 rounded-full bg-maroon-800/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-50 px-4 py-1.5 text-xs font-mono font-bold text-maroon-800 mb-4 shadow-warm-sm">
            <BrandStrokes size="sm" color="#8B5A3C" />
            <span>SIGNATURE COLD BREW</span>
          </div>

          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-maroon-800 leading-[0.95]">
            MEET YOUR NEW <br />
            <span className="text-gradient-maroon">COLD OBSESSION.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-espresso-800 font-sans">
            Engineered for pure coffee satisfaction. No overly-sweet syrups hiding low-grade beans. Just honest, bold espresso extraction blended with ice-cold richness.
          </p>
        </motion.div>

        {/* Feature Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Feature Cards */}
          <div className="lg:col-span-4 space-y-4">
            {brandConfig.features.slice(0, 2).map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: -30, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.1 * idx, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-cream glass-cream-hover rounded-3xl p-6 sm:p-7 shadow-warm-sm group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-tappinoBrown-500 font-bold tracking-wider">
                    {feat.tag}
                  </span>
                  <BrandStrokes size="sm" color="#8B5A3C" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon-800 mt-2 mb-2 group-hover:text-maroon-900 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-espresso-700 leading-relaxed font-sans">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Massive Visual Stage with Scroll Fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative flex items-center justify-center group"
          >
            <div className="relative w-full rounded-3xl overflow-hidden border border-maroon-800/15 bg-white shadow-warm-lg p-2.5">
              <img
                src="/images/products/signature_pour.jpg"
                alt="Tappino Signature Cold Coffee Pour"
                className="w-full h-[480px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream-50/95 p-4 border border-maroon-800/15 backdrop-blur-md shadow-warm-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <BrandStrokes size="sm" color="#8B5A3C" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-tappinoBrown-500 font-bold">
                        Signature Recipe
                      </span>
                    </div>
                    <h4 className="font-heading text-xl font-bold text-maroon-800 mt-0.5">
                      Tappino Cold Coffee
                    </h4>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Velvet Espresso', 'Frosted Cold', 'Bold Roast'].map((note) => (
                    <span
                      key={note}
                      className="rounded-lg bg-cream-200/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-espresso-800"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-4 space-y-4">
            {brandConfig.features.slice(2, 4).map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 30, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.1 * idx, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass-cream glass-cream-hover rounded-3xl p-6 sm:p-7 shadow-warm-sm group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-tappinoBrown-500 font-bold tracking-wider">
                    {feat.tag}
                  </span>
                  <BrandStrokes size="sm" color="#8B5A3C" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon-800 mt-2 mb-2 group-hover:text-maroon-900 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-espresso-700 leading-relaxed font-sans">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Callout with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center justify-center text-center"
        >
          <a
            href={brandConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-maroon-800 hover:bg-maroon-900 px-8 py-4 text-sm font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-md transition-all hover:scale-105"
            data-cursor="hover"
          >
            <InstagramIcon className="h-4 w-4 text-cream-100" />
            <span>Order on Instagram @officialtappino</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
