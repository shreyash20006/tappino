import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { BrandStrokes } from '../components/ui/BrandStrokes';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(brandConfig.fullLocationDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="location"
      className="relative z-10 w-full bg-cream-100 py-24 sm:py-32 border-t border-maroon-800/10 text-espresso-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-50 px-3.5 py-1 text-xs font-mono font-bold text-maroon-800 shadow-warm-sm">
              <MapPin className="h-3.5 w-3.5 text-maroon-800" />
              <span>NAGPUR LOCATION</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-maroon-800 leading-[0.95]">
              FIND TAPPINO <br />
              <span className="text-gradient-maroon">IN NAGPUR.</span>
            </h2>

            <p className="text-sm sm:text-base text-espresso-800 font-sans leading-relaxed">
              Situated in the bustling heart of <span className="text-maroon-800 font-bold">IT Park, Nagpur</span>. Drop by for your daily cold coffee fix or message us on Instagram for quick pick-up orders.
            </p>

            {/* Address Card */}
            <div className="rounded-3xl border border-maroon-800/15 bg-white p-6 shadow-warm-md space-y-4">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <BrandStrokes size="sm" color="#8B5A3C" />
                  <span className="text-xs font-mono uppercase tracking-widest text-tappinoBrown-500 font-bold">
                    Location Area
                  </span>
                </div>
                <h4 className="font-heading text-2xl font-bold text-maroon-800">
                  {brandConfig.fullLocationDisplay}
                </h4>
                <p className="text-xs font-mono text-espresso-700 mt-0.5 font-medium">
                  Nagpur, Maharashtra, India
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-maroon-800/25 bg-cream-50 px-3.5 py-2 text-xs font-mono font-bold text-espresso-900 hover:bg-cream-200 transition-colors shadow-sm"
                  data-cursor="hover"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-maroon-800" />}
                  <span>{copied ? 'Copied Location!' : 'Copy Location Text'}</span>
                </button>

                <a
                  href={brandConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-4 py-2 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:scale-105 transition-transform"
                  data-cursor="hover"
                >
                  <Navigation className="h-3.5 w-3.5 text-cream-100" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="flex items-center gap-3 text-xs font-mono font-medium text-espresso-800 bg-cream-50 p-3.5 rounded-2xl border border-maroon-800/10 shadow-warm-sm">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Brewing Daily at IT Park • Fresh Batches Ready</span>
            </div>
          </div>

          {/* Right Column: Stylized Clean Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-maroon-800/15 bg-white shadow-warm-lg h-[420px] sm:h-[480px]">
              {/* Google Map Embed */}
              <iframe
                title="Tappino Coffee Location in IT Park Nagpur"
                src="https://maps.google.com/maps?q=IT+Park+Nagpur+Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 contrast-105 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
              />

              {/* Central Radar Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-maroon-800/30 animate-ping absolute" />
                  <div className="h-11 w-11 rounded-full bg-maroon-800 p-2 shadow-maroon-lg flex items-center justify-center relative z-10">
                    <MapPin className="h-6 w-6 text-cream-50 fill-cream-50" />
                  </div>
                </div>

                <div className="mt-2 rounded-xl bg-cream-50/98 border border-maroon-800/30 px-3.5 py-1 text-center shadow-warm-md backdrop-blur-md">
                  <span className="font-heading text-sm font-bold text-maroon-800 block">
                    TAPPINO
                  </span>
                  <span className="text-[10px] font-mono text-tappinoBrown-600 font-semibold block">
                    IT Park, Nagpur
                  </span>
                </div>
              </div>

              {/* Map Floating Top Badge */}
              <div className="absolute top-4 left-4 rounded-xl bg-cream-50/95 border border-maroon-800/20 px-3 py-1.5 backdrop-blur-md shadow-warm-sm">
                <span className="text-[11px] font-mono text-maroon-800 font-bold flex items-center gap-1.5">
                  <BrandStrokes size="sm" color="#8B5A3C" />
                  <span>Nagpur Landmark</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
