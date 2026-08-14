import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { socialMediaAssets } from '../config/socialMedia';
import type { SocialMediaAsset } from '../types';
import { InstagramIcon } from '../components/ui/InstagramIcon';
import { BrandStrokes } from '../components/ui/BrandStrokes';
import { FeaturedReel } from '../components/social/FeaturedReel';
import { VideoCard } from '../components/social/VideoCard';
import { ImageCard } from '../components/social/ImageCard';

interface InstagramSectionProps {
  onSelectPost: (post: SocialMediaAsset) => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ onSelectPost }) => {
  const featuredAsset = socialMediaAssets.find((a) => a.featured) || socialMediaAssets[0];
  const supportingAssets = socialMediaAssets.filter((a) => a.id !== featuredAsset.id);

  return (
    <section
      id="instagram"
      className="relative z-10 w-full bg-cream-50 py-24 sm:py-32 border-t border-maroon-800/10 text-espresso-900 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-maroon-800/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-100 px-3.5 py-1 text-xs font-mono font-bold text-maroon-800 mb-3 shadow-warm-sm">
              <InstagramIcon className="h-3.5 w-3.5 text-maroon-800" />
              <span>COMMUNITY & REELS</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-maroon-800 leading-[0.95]">
              FROM OUR <span className="text-gradient-maroon">INSTAGRAM.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-espresso-800 max-w-xl font-sans">
              Fresh pours, real moments, straight from Tappino. Follow along{' '}
              <a
                href={brandConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon-800 font-mono font-bold underline decoration-maroon-800/40 hover:decoration-maroon-800"
              >
                @officialtappino
              </a>
              .
            </p>
          </div>

          <a
            href={brandConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-maroon-800 hover:bg-maroon-900 px-6 py-3.5 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:scale-105 transition-transform whitespace-nowrap"
            data-cursor="hover"
          >
            <InstagramIcon className="h-4 w-4 text-cream-100" />
            <span>Follow @officialtappino</span>
            <ExternalLink className="h-3.5 w-3.5 ml-1 text-cream-200" />
          </a>
        </motion.div>

        {/* Editorial Masonry Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Large Featured Reel (Media 01) */}
          <div className="lg:col-span-5">
            <FeaturedReel asset={featuredAsset} onSelect={onSelectPost} />
          </div>

          {/* Right Column: 2x3 Supporting Media Grid (Medias 02 to 07) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {supportingAssets.map((asset, index) =>
              asset.type === 'video' ? (
                <VideoCard
                  key={asset.id}
                  asset={asset}
                  index={index}
                  onSelect={onSelectPost}
                />
              ) : (
                <ImageCard
                  key={asset.id}
                  asset={asset}
                  index={index}
                  onSelect={onSelectPost}
                />
              )
            )}
          </div>
        </div>

        {/* Bottom Instagram Profile CTA Banner with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-maroon-800/15 bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 p-6 sm:p-8 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-warm-md"
        >
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-maroon-800 p-1 shadow-maroon-sm flex items-center justify-center flex-shrink-0">
              <span className="font-heading text-3xl font-bold text-cream-50">T</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-heading text-2xl font-bold text-maroon-800">
                  FOLLOW @OFFICIALTAPPINO
                </h4>
                <BrandStrokes size="sm" color="#8B5A3C" />
              </div>
              <p className="text-xs font-mono text-tappinoBrown-500 font-semibold mt-0.5">
                {brandConfig.tagline} • {brandConfig.fullLocationDisplay}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={brandConfig.instagram.dmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none rounded-xl border border-maroon-800/30 bg-cream-50 px-4 py-3 text-xs font-mono font-bold text-maroon-800 hover:bg-cream-200 transition-colors shadow-sm text-center"
              data-cursor="hover"
            >
              📩 DM for Orders
            </a>
            <a
              href={brandConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-6 py-3 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:scale-105 transition-transform text-center"
              data-cursor="hover"
            >
              <InstagramIcon className="h-4 w-4 text-cream-100" />
              <span>Visit Instagram →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
