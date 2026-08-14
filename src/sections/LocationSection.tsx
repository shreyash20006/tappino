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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Location Info */}
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
              Located in <span className="text-maroon-800 font-bold">IT Park, Nagpur</span>. Visit us for freshly crafted cold coffee and specialty brews.
            </p>

            {/* Clean Location Card */}
            <div className="rounded-3xl border border-maroon-800/15 bg-white p-6 sm:p-7 shadow-warm-md space-y-4">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <BrandStrokes size="sm" color="#8B5A3C" />
                  <span className="text-xs font-mono uppercase tracking-widest text-tappinoBrown-500 font-bold">
                    Nagpur Hub
                  </span>
                </div>
                <h4 className="font-heading text-3xl font-bold text-maroon-800">
                  TAPPINO
                </h4>
                <p className="text-sm text-espresso-800 font-sans mt-1">
                  {brandConfig.fullLocationDisplay}, India
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={brandConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-5 py-3 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:scale-105 transition-transform"
                  data-cursor="hover"
                >
                  <Navigation className="h-4 w-4 text-cream-100" />
                  <span>Open in Google Maps</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-maroon-800/25 bg-cream-50 px-4 py-3 text-xs font-mono font-bold text-espresso-900 hover:bg-cream-200 transition-colors shadow-sm"
                  data-cursor="hover"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-maroon-800" />}
                  <span>{copied ? 'Copied!' : 'Copy Location'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-maroon-800/15 bg-white shadow-warm-lg h-[400px] sm:h-[460px]">
              {/* Google Map Embed */}
              <iframe
                title="Tappino Coffee Location in IT Park Nagpur"
                src="https://maps.google.com/maps?q=IT+Park+Nagpur+Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 contrast-105 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
