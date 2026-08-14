import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ExternalLink, MessageCircle, Share2, Volume2, VolumeX } from 'lucide-react';
import type { SocialMediaAsset } from '../../types';
import { brandConfig } from '../../config/brand';
import { InstagramIcon } from '../ui/InstagramIcon';
import { BrandStrokes } from '../ui/BrandStrokes';

interface PostModalProps {
  post: SocialMediaAsset | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ post, isOpen, onClose }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [showHeartPop, setShowHeartPop] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    setLiked(false);
    setShowHeartPop(false);
    setIsMuted(false);
  }, [post]);

  if (!post) return null;

  const handleDoubleTap = () => {
    setLiked(true);
    setShowHeartPop(true);
    setTimeout(() => setShowHeartPop(false), 900);
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-maroon-800/15 bg-white shadow-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 text-espresso-900"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-30 rounded-full bg-cream-50/90 border border-maroon-800/20 p-2 text-espresso-900 transition-colors hover:bg-cream-200 shadow-sm"
              aria-label="Close post"
              data-cursor="hover"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Media Spotlight (Video or Image) */}
            <div
              className="relative md:col-span-7 bg-espresso-950 flex items-center justify-center cursor-pointer select-none group min-h-[360px] max-h-[580px]"
              onDoubleClick={handleDoubleTap}
            >
              {post.type === 'video' ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={post.url}
                    poster={post.posterUrl}
                    playsInline
                    autoPlay
                    loop
                    muted={isMuted}
                    className="w-full h-full max-h-[580px] object-cover"
                    title={post.title}
                  />

                  {/* Audio Mute/Unmute toggle button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAudio();
                    }}
                    className="absolute bottom-4 right-4 z-20 rounded-full bg-espresso-950/80 p-2.5 text-cream-50 hover:bg-maroon-800 transition-colors shadow-lg backdrop-blur-sm"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
              ) : (
                <img
                  src={post.url}
                  alt={post.title}
                  className="w-full h-full max-h-[580px] object-cover"
                />
              )}

              {/* Animated Pop Heart */}
              <AnimatePresence>
                {showHeartPop && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                  >
                    <Heart className="h-24 w-24 text-rose-500 fill-rose-500 drop-shadow-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-3 left-3 bg-espresso-950/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-mono text-cream-100 font-medium z-10 pointer-events-none">
                Double tap to like ❤️
              </div>
            </div>

            {/* Right Details & Instagram Meta */}
            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-cream-50 border-t md:border-t-0 md:border-l border-maroon-800/10">
              {/* Account Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-maroon-800/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-maroon-800 p-1 flex items-center justify-center shadow-sm">
                      <span className="font-heading text-lg font-bold text-cream-50">T</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-display text-espresso-900 flex items-center gap-1.5">
                        @{post.creator || 'officialtappino'}
                        <BrandStrokes size="sm" color="#8B5A3C" />
                      </h4>
                      <p className="text-[11px] text-tappinoBrown-500 font-semibold">IT Park, Nagpur</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-cream-200 px-2.5 py-1 text-[11px] font-mono font-bold text-maroon-800">
                    {post.tag}
                  </span>
                </div>

                {/* Title & Caption */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-heading text-xl font-bold text-maroon-800">
                    {post.title}
                  </h3>
                  <div className="text-sm text-espresso-800 leading-relaxed max-h-40 overflow-y-auto pr-1 font-sans">
                    <span className="font-bold text-maroon-800 mr-2">@{post.creator || 'officialtappino'}</span>
                    {post.caption}
                  </div>
                </div>
              </div>

              {/* Engagement & CTAs */}
              <div className="mt-6 pt-4 border-t border-maroon-800/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setLiked(!liked)}
                      className="text-espresso-800 transition-transform active:scale-125"
                      data-cursor="hover"
                      aria-label="Like post"
                    >
                      <Heart
                        className={`h-6 w-6 transition-colors ${
                          liked ? 'text-rose-500 fill-rose-500' : 'hover:text-rose-500'
                        }`}
                      />
                    </button>
                    <button
                      className="text-espresso-800 hover:text-maroon-800 transition-colors"
                      data-cursor="hover"
                      aria-label="Comment"
                    >
                      <MessageCircle className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: post.title,
                            url: brandConfig.instagram.url,
                          });
                        }
                      }}
                      className="text-espresso-800 hover:text-maroon-800 transition-colors"
                      data-cursor="hover"
                      aria-label="Share"
                    >
                      <Share2 className="h-6 w-6" />
                    </button>
                  </div>

                  <span className="text-xs font-mono text-tappinoBrown-500 font-semibold">{post.date}</span>
                </div>

                <p className="text-xs font-bold font-mono text-espresso-900 mb-4">
                  {liked ? 'Liked by you and others' : `${post.likes} likes`}
                </p>

                <a
                  href={brandConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-maroon-800 hover:bg-maroon-900 px-4 py-3 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm transition-transform hover:scale-[1.02]"
                  data-cursor="hover"
                >
                  <InstagramIcon className="h-4 w-4 text-cream-100" />
                  View on Instagram @officialtappino
                  <ExternalLink className="h-3.5 w-3.5 text-cream-200" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
