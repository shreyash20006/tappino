import React from 'react';
import { motion } from 'framer-motion';
import { BrandStrokes } from '../components/ui/BrandStrokes';

export const KineticStory: React.FC = () => {
  const steps = [
    {
      word: 'SIP.',
      subtitle: 'The Fresh Espresso Extraction',
      description: 'Single-origin espresso pulled slow. Rich velvety crema hitting ice-cold milk with deep cocoa notes.',
      number: '01',
      bgImage: '/images/products/signature_pour.jpg',
    },
    {
      word: 'CHILL.',
      subtitle: 'The Sub-Zero Velvet Texture',
      description: 'Frosted crystal cubes, thick microfoam froth, and a temperature so crisp it recharges your entire day.',
      number: '02',
      bgImage: '/images/products/hero_cold_coffee.jpg',
    },
    {
      word: 'REPEAT.',
      subtitle: 'The Daily Nagpur Ritual',
      description: 'From morning sprints in IT Park to evening crew hangs. Pure coffee obsession in every single cup.',
      number: '03',
      bgImage: '/images/gallery/insta_lifestyle.jpg',
    },
  ];

  return (
    <section className="relative z-10 w-full overflow-hidden bg-gradient-to-b from-maroon-850 via-maroon-900 to-maroon-950 py-24 sm:py-32 text-cream-50 shadow-2xl">
      {/* Background Subtle Lines & Ambient Glow */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #FFFDF8 1px, transparent 1px)',
          backgroundSize: '80px 100%',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[650px] rounded-full bg-maroon-600/15 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Pill with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cream-200/20 bg-maroon-950/60 px-4 py-1.5 text-xs font-mono font-semibold text-cream-200 mb-3 backdrop-blur-md">
            <BrandStrokes size="sm" color="#E5D3C2" />
            <span>THE TAPPINO RITUAL</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream-50">
            THREE WORDS. ONE SIGNATURE OBSESSION.
          </h2>
          <p className="font-script text-2xl sm:text-3xl text-tappinoBrown-200 font-bold mt-2">
            Sip. Chill. Repeat. <span className="text-rose-400">❤️</span>
          </p>
        </motion.div>

        {/* 3 Sequential Kinetic Cards with Scroll Fade */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.word}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: 0.12 * idx, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-cream-200/15 bg-maroon-950/70 p-8 shadow-2xl backdrop-blur-md flex flex-col justify-between min-h-[460px] hover:border-cream-200/35 hover:bg-maroon-950/85 transition-all duration-500"
            >
              {/* Subtle Ambient Background Image with Dark Maroon Overlay */}
              <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-35 pointer-events-none">
                <img
                  src={step.bgImage}
                  alt={step.word}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/80 to-transparent" />
              </div>

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-tappinoBrown-200">
                  {step.number} / 03
                </span>
                <BrandStrokes size="sm" color="#E5D3C2" />
              </div>

              {/* Massive Kinetic Word */}
              <div className="relative z-10 my-8">
                <h3 className="font-heading text-6xl sm:text-7xl font-bold tracking-tight text-cream-50 group-hover:text-cream-100 transition-colors leading-none">
                  {step.word}
                </h3>
                <p className="font-mono text-xs text-tappinoBrown-200 font-semibold uppercase tracking-wider mt-2">
                  {step.subtitle}
                </p>
              </div>

              {/* Card Description */}
              <div className="relative z-10 pt-4 border-t border-cream-200/15">
                <p className="text-xs sm:text-sm text-cream-200/90 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
