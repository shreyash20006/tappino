import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowUpRight, Coffee } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { menuItems } from '../config/menu';
import type { MenuItem } from '../types';
import { BrandStrokes } from '../components/ui/BrandStrokes';
import { InstagramIcon } from '../components/ui/InstagramIcon';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Extract unique categories dynamically if real items exist
  const categories = ['all', ...Array.from(new Set(menuItems.map((item) => item.category).filter(Boolean)))];

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id="menu"
      className="relative z-10 w-full bg-cream-50 py-24 sm:py-32 border-t border-maroon-800/10 text-espresso-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-100 px-3.5 py-1 text-xs font-mono font-bold text-maroon-800 mb-3 shadow-warm-sm">
              <BrandStrokes size="sm" color="#8B5A3C" />
              <span>COFFEE SELECTIONS</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-maroon-800 leading-[0.95]">
              THE TAPPINO <span className="text-gradient-maroon">MENU.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-espresso-800 max-w-xl font-sans">
              Handcrafted cold brews and artisan hot coffee in Nagpur.
            </p>
          </div>

          {/* Dynamic Categories (only rendered if multiple categories exist) */}
          {menuItems.length > 0 && categories.length > 2 && (
            <div className="flex flex-wrap items-center gap-2 bg-cream-200/80 p-1.5 rounded-2xl border border-maroon-800/10 backdrop-blur-md shadow-warm-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat || 'all')}
                  className={`rounded-xl px-4 py-2 text-xs font-display font-bold capitalize transition-all ${
                    activeCategory === cat
                      ? 'bg-maroon-800 text-cream-50 shadow-maroon-sm'
                      : 'text-espresso-800 hover:text-maroon-800 hover:bg-cream-100'
                  }`}
                  data-cursor="hover"
                >
                  {cat === 'all' ? 'All Items' : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* If no menu items are populated yet, display clean, ready-for-content placeholder */}
        {menuItems.length === 0 ? (
          <div className="rounded-3xl border border-maroon-800/15 bg-white p-10 sm:p-14 shadow-warm-md text-center max-w-3xl mx-auto space-y-6">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-maroon-800/10 border border-maroon-800/20 flex items-center justify-center text-maroon-800">
              <Coffee className="h-8 w-8" />
            </div>

            <div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-maroon-800">
                Menu Coming Soon
              </h3>
              <p className="mt-2 text-sm sm:text-base text-espresso-700 font-sans max-w-md mx-auto leading-relaxed">
                We are curating our full menu of signature cold coffees and specialty brews. Connect with us on Instagram for daily specials and instant orders.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={brandConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-maroon-800 hover:bg-maroon-900 px-7 py-3.5 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:scale-105 transition-transform"
                data-cursor="hover"
              >
                <InstagramIcon className="h-4 w-4 text-cream-100" />
                <span>DM on Instagram @officialtappino</span>
              </a>
            </div>
          </div>
        ) : (
          /* Dynamic Grid for Real Menu Items */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item: MenuItem) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-maroon-800/10 bg-white p-5 shadow-warm-md hover:border-maroon-800/30 hover:shadow-warm-lg transition-all duration-300"
                >
                  {item.image && (
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-cream-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex-1 pt-5 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-2xl font-bold text-maroon-800 group-hover:text-maroon-900 transition-colors">
                        {item.name}
                      </h3>
                      {item.price && (
                        <span className="font-mono text-sm font-bold text-maroon-800 whitespace-nowrap bg-maroon-800/10 px-2.5 py-1 rounded-xl border border-maroon-800/20">
                          {item.price}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-espresso-700 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-maroon-800/10 flex items-center justify-between">
                    <a
                      href={brandConfig.instagram.dmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-maroon-800 hover:underline"
                    >
                      <span>Order on DM</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

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
              Connect with us directly on Instagram for orders and collaborations.
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
