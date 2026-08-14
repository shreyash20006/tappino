import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, Flame, Send, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { products, brandConfig } from '../config/brand';
import type { Product, ProductCategory } from '../types';
import { BrandStrokes } from '../components/ui/BrandStrokes';

interface MenuSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
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
              <span>FRESH SELECTIONS</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-maroon-800 leading-[0.95]">
              THE TAPPINO <span className="text-gradient-maroon">MENU.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-espresso-800 max-w-xl font-sans">
              Handcrafted cold coffee & artisan hot brews brewed with passion in IT Park, Nagpur. Customizable sweetness, ice, and espresso shots.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-cream-200/80 p-1.5 rounded-2xl border border-maroon-800/10 backdrop-blur-md shadow-warm-sm">
            {[
              { id: 'all', label: 'All Brews' },
              { id: 'cold', label: 'Cold Coffee 🧋' },
              { id: 'hot', label: 'Hot Brews ☕' },
              { id: 'special', label: 'Signatures ✨' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ProductCategory)}
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

        {/* Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-maroon-800/10 bg-white p-5 shadow-warm-md hover:border-maroon-800/30 hover:shadow-warm-lg transition-all duration-300"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl bg-cream-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {product.badge && (
                      <span className="rounded-lg bg-cream-50/95 border border-maroon-800/20 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-maroon-800 backdrop-blur-md shadow-warm-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Temperature Tag */}
                  <div className="absolute bottom-3 left-3 rounded-lg bg-cream-50/95 px-2.5 py-1 text-[11px] font-mono font-medium text-espresso-900 backdrop-blur-md shadow-warm-sm flex items-center gap-1">
                    {product.temperature.includes('Iced') || product.temperature.includes('Cold') ? (
                      <Snowflake className="h-3 w-3 text-tappinoBrown-500" />
                    ) : (
                      <Flame className="h-3 w-3 text-maroon-700" />
                    )}
                    <span>{product.temperature}</span>
                  </div>

                  {/* Intensity Indicator */}
                  <div className="absolute bottom-3 right-3 rounded-lg bg-cream-50/95 px-2.5 py-1 text-[10px] font-mono text-espresso-800 backdrop-blur-md shadow-warm-sm flex items-center gap-1 font-medium">
                    <span>Roast:</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={`h-1.5 w-1.5 rounded-full ${
                            dot <= product.intensity ? 'bg-maroon-800' : 'bg-cream-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-5 pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-maroon-800 group-hover:text-maroon-900 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-tappinoBrown-500 mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>
                    <span className="font-mono text-sm font-bold text-maroon-800 whitespace-nowrap bg-maroon-800/10 px-2.5 py-1 rounded-xl border border-maroon-800/20">
                      {product.price}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-espresso-700 leading-relaxed font-sans line-clamp-3">
                    {product.description}
                  </p>

                  {/* Tasting Notes */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="rounded-md bg-cream-100 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-tappinoBrown-600 border border-maroon-800/10"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-maroon-800/10 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-4 py-2.5 text-xs font-display font-bold text-cream-50 shadow-maroon-sm transition-all hover:scale-[1.02]"
                    data-cursor="hover"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5 text-cream-100" />
                    <span>Customize & Order</span>
                  </button>

                  <a
                    href={brandConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl border border-maroon-800/20 bg-cream-100 text-maroon-800 hover:bg-maroon-800 hover:text-cream-50 transition-colors"
                    aria-label={`Order ${product.name} on Instagram`}
                    title="Direct Instagram DM"
                    data-cursor="hover"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Menu Banner */}
        <div className="mt-12 rounded-3xl border border-maroon-800/15 bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-warm-md">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <BrandStrokes size="sm" color="#8B5A3C" />
              <h4 className="font-heading text-2xl font-bold text-maroon-800">
                Catering, Events & Bulk Orders in Nagpur?
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-espresso-700 font-sans mt-0.5">
              Serving colleges, offices, and events across IT Park & Nagpur. DM us for custom batches.
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
            DM for Events
          </a>
        </div>
      </div>
    </section>
  );
};
