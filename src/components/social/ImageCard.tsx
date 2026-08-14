import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Image as ImageIcon } from 'lucide-react';
import type { SocialMediaAsset } from '../../types';
import { InstagramIcon } from '../ui/InstagramIcon';

interface ImageCardProps {
  asset: SocialMediaAsset;
  index: number;
  onSelect: (asset: SocialMediaAsset) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ asset, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.06 * index, duration: 0.45 }}
      onClick={() => onSelect(asset)}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-maroon-800/15 bg-white shadow-warm-md hover:border-maroon-800/40 hover:shadow-warm-lg transition-all duration-300 cursor-pointer"
      data-cursor="text"
      data-cursor-text="VIEW"
    >
      <div className="aspect-[9/14] sm:aspect-[9/15] w-full overflow-hidden bg-cream-200 relative">
        <img
          src={asset.url}
          alt={asset.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />

        {/* Photo indicator */}
        <div className="absolute top-3 right-3 z-10 rounded-full bg-espresso-950/60 backdrop-blur-md p-2 text-cream-50 transition-transform duration-300 group-hover:scale-110 shadow-sm">
          <ImageIcon className="h-3.5 w-3.5 text-cream-50" />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/95 via-maroon-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-between text-cream-50 z-20">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cream-50/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cream-100">
              {asset.tag}
            </span>
            <div className="flex items-center gap-1 text-cream-100 text-xs font-mono font-bold">
              <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" />
              <span>{asset.likes}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-tappinoBrown-200 mb-1">
              <InstagramIcon className="h-3 w-3 text-tappinoBrown-200" />
              <span>@{asset.creator || 'officialtappino'}</span>
            </div>
            <h4 className="font-heading text-lg font-bold text-cream-50 leading-tight">
              {asset.title}
            </h4>
            <p className="text-xs text-cream-200/90 font-sans line-clamp-2 mt-1">
              {asset.caption}
            </p>
            <span className="inline-block mt-2 text-[11px] font-mono text-tappinoBrown-200 font-bold">
              View photo →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
