import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Snowflake, Flame, Sparkles } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { menuItems } from '../config/menu';
import type { MenuItem } from '../types';
import { BrandStrokes } from '../components/ui/BrandStrokes';
import { InstagramIcon } from '../components/ui/InstagramIcon';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Preserve the exact sequence order
  const sortedItems = [...menuItems].sort((a, b) => a.order - b.order);

  const filteredItems = sortedItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'cold', label: 'Cold Coffee 🧋' },
    { id: 'hot', label: 'Hot Coffee ☕' },
    { id: 'special', label: 'Specialty ✨' },
  ];

  return (
    <section
      id="menu"
      className="relative z-10 w-full bg-cream-50 py-24 sm:py-32 border-t border-maroon-800/10 text-espresso-900 overflow-hidden"
    >
      {/* Background Radiance */}
      <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-maroon-800/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-100 px-3.5 py-1 text-xs font-mono font-bold text-maroon-800 mb-3 shadow-warm-sm">
              <BrandStrokes size="sm" color="#8B5A3C" />
              <span>OFFICIAL TAPPINO MENU</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-maroon-800 leading-[0.95]">
              THE TAPPINO <span className="text-gradient-maroon">MENU.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-espresso-800 max-w-xl font-sans">
              Handcrafted cold coffee, signature blends, and hot brews in Nagpur. Order directly via Instagram DM.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-cream-200/80 p-1.5 rounded-2xl border border-maroon-800/10 backdrop-blur-md shadow-warm-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl px-4 py-2 text-xs font-display font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-maroon-800 text-cream-50 shadow-maroon-sm'
                    : 'text-espresso-800 hover:text-maroon-800 hover:bg-cream-100'
                }`}
                data-cursor="hover"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: 12 Real Cloudinary Assets in Strict Order */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-maroon-800/12 bg-white p-4 sm:p-5 shadow-warm-sm hover:border-maroon-800/35 hover:shadow-warm-lg transition-all duration-300"
                data-cursor="hover"
              >
                {/* Image Container with object-contain to never crop text/prices in the asset */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-cream-100/70 p-2 flex items-center justify-center border border-maroon-800/8 group-hover:border-maroon-800/20 transition-colors">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />

                  {/* Category Type Tag */}
                  <div className="absolute top-3 left-3 rounded-lg bg-cream-50/95 border border-maroon-800/15 px-2.5 py-1 text-[10px] font-mono font-semibold text-espresso-900 backdrop-blur-md shadow-sm flex items-center gap-1">
                    {item.category.includes('Cold') ? (
                      <Snowflake className="h-3 w-3 text-tappinoBrown-500" />
                    ) : item.category.includes('Hot') ? (
                      <Flame className="h-3 w-3 text-maroon-700" />
                    ) : (
                      <Sparkles className="h-3 w-3 text-maroon-800" />
                    )}
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Content & Details */}
                <div className="flex-1 pt-4 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-2xl font-bold text-maroon-800 group-hover:text-maroon-900 transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-mono text-base font-bold text-maroon-800 whitespace-nowrap bg-maroon-800/10 px-2.5 py-0.5 rounded-xl border border-maroon-800/20">
                      {item.price}
                    </span>
                  </div>

                  {item.description && (
                    <p className="mt-2 text-xs text-espresso-700 leading-relaxed font-sans line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Order on Instagram Button */}
                <div className="pt-3 border-t border-maroon-800/10">
                  <a
                    href={brandConfig.instagram.dmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-4 py-2.5 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm transition-transform hover:scale-[1.02]"
                    data-cursor="hover"
                  >
                    <InstagramIcon className="h-3.5 w-3.5 text-cream-100" />
                    <span>Order on Instagram</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-3xl border border-maroon-800/15 bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-warm-md">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <BrandStrokes size="sm" color="#8B5A3C" />
              <h4 className="font-heading text-2xl font-bold text-maroon-800">
                Special Batches & Inquiries in Nagpur
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-espresso-700 font-sans mt-0.5">
              Connect with us directly on Instagram for daily specials, custom orders, and campus brews.
            </p>
          </div>
          <a
            href={brandConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-6 py-3 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:scale-105 transition-transform whitespace-nowrap"
            data-cursor="hover"
          >
            <Send className="h-4 w-4 text-cream-100" />
            <span>Connect on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
