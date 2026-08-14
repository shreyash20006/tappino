import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Volume2 } from 'lucide-react';
import type { SocialMediaAsset } from '../../types';
import { LazyVideo } from '../ui/LazyVideo';
import { BrandStrokes } from '../ui/BrandStrokes';
import { InstagramIcon } from '../ui/InstagramIcon';

interface FeaturedReelProps {
  asset: SocialMediaAsset;
  onSelect: (asset: SocialMediaAsset) => void;
}

export const FeaturedReel: React.FC<FeaturedReelProps> = ({ asset, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={() => onSelect(asset)}
      className="group relative overflow-hidden rounded-3xl border-2 border-maroon-800/20 bg-white shadow-warm-lg hover:border-maroon-800/40 hover:shadow-warm-lg transition-all duration-500 cursor-pointer flex flex-col justify-between"
      data-cursor="text"
      data-cursor-text="WATCH"
    >
      {/* Top Banner Tag */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-cream-50/95 border border-maroon-800/20 px-3.5 py-1.5 backdrop-blur-md shadow-warm-sm">
        <BrandStrokes size="sm" color="#8B5A3C" />
        <span className="font-mono text-xs font-bold text-maroon-800 uppercase tracking-wider">
          {asset.tag}
        </span>
      </div>

      {/* Main Video Stream */}
      <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[580px] overflow-hidden bg-espresso-950">
        <LazyVideo
          src={asset.url}
          poster={asset.posterUrl}
          alt={asset.title}
          aspectRatioClass="h-full w-full"
          showPlayIndicator={false}
        />

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/20 to-transparent pointer-events-none opacity-85 transition-opacity group-hover:opacity-95" />

        {/* Bottom Editorial Card Information */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-cream-50 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-cream-200">
              <InstagramIcon className="h-3.5 w-3.5 text-cream-100" />
              <span>@{asset.creator || 'officialtappino'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-maroon-950/80 border border-cream-200/20 rounded-full px-3 py-1 text-xs font-mono font-bold text-cream-100 backdrop-blur-md">
              <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400" />
              <span>{asset.likes}</span>
            </div>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-wide text-cream-50 leading-tight">
            {asset.title}
          </h3>

          <p className="text-xs sm:text-sm text-cream-200/90 font-sans leading-relaxed line-clamp-2">
            {asset.caption}
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-cream-200/15">
            <span className="text-[11px] font-mono text-tappinoBrown-200 font-semibold flex items-center gap-1">
              <Volume2 className="h-3.5 w-3.5" />
              <span>Tap to expand & listen with audio</span>
            </span>
            <span className="text-xs font-mono font-bold text-cream-100 underline decoration-maroon-400 underline-offset-4">
              View Reel →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
