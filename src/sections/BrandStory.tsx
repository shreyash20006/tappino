import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { BrandStrokes } from '../components/ui/BrandStrokes';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      className="relative z-10 w-full overflow-hidden bg-cream-100 py-24 sm:py-32 border-t border-maroon-800/10 text-espresso-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-maroon-800/15 shadow-warm-lg">
              <img
                src="/images/gallery/insta_lifestyle.jpg"
                alt="Tappino Coffee culture in Nagpur"
                className="w-full h-[450px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent" />

              {/* Floating Story Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-maroon-800/15 bg-cream-50/95 p-5 backdrop-blur-md shadow-warm-md">
                <div className="flex items-center gap-2 text-maroon-800 font-mono text-xs font-bold">
                  <MapPin className="h-4 w-4 text-maroon-800" />
                  <span>IT Park, Nagpur</span>
                </div>
                <h4 className="font-heading text-2xl font-bold text-maroon-800 mt-1">
                  Crafted for Nagpur's Hustle & Chill
                </h4>
                <p className="text-xs text-espresso-700 mt-1 font-medium">
                  Freshly ground espresso meets rich velvet milk.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-50 px-3.5 py-1 text-xs font-mono font-bold text-maroon-800 shadow-warm-sm">
              <BrandStrokes size="sm" color="#8B5A3C" />
              <span>THE TAPPINO PHILOSOPHY</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-maroon-800 leading-[0.95]">
              {brandConfig.story.heading} <br />
              <span className="text-gradient-maroon">{brandConfig.story.subheading}</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-espresso-800 font-sans leading-relaxed">
              {brandConfig.story.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-maroon-800/10">
              {brandConfig.story.stats.map((st) => (
                <div key={st.label} className="glass-cream rounded-2xl p-3.5 text-center shadow-warm-sm">
                  <p className="font-heading text-xl sm:text-2xl font-bold text-maroon-800">
                    {st.value}
                  </p>
                  <p className="text-[10px] font-mono text-tappinoBrown-500 font-semibold mt-0.5">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={brandConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-5 py-3 text-xs font-mono font-bold text-cream-50 shadow-maroon-sm hover:scale-105 transition-all"
                data-cursor="hover"
              >
                <span>Connect With Us @officialtappino</span>
                <Heart className="h-3.5 w-3.5 text-rose-300 fill-rose-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
