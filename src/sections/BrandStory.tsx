import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { BrandStrokes } from '../components/ui/BrandStrokes';
import { InstagramIcon } from '../components/ui/InstagramIcon';

export const BrandStory: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Ignore autoplay restrictions
              });
            }
          } else {
            video.pause();
          }
        });
      },
      {
        rootMargin: '150px 0px',
        threshold: 0.2,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="story"
      className="relative z-10 w-full overflow-hidden bg-cream-100 py-24 sm:py-32 border-t border-maroon-800/10 text-espresso-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Real Cloudinary Video with Natural Responsive Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden rounded-3xl border border-maroon-800/15 bg-espresso-950 shadow-warm-lg flex items-center justify-center p-1 sm:p-2"
            >
              <video
                ref={videoRef}
                src={brandConfig.storyVideoUrl}
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                className="w-full h-auto max-h-[540px] object-contain rounded-2xl"
                title="Tappino Coffee Story"
              />
            </div>
          </motion.div>

          {/* Right Text Content (Clean without fake stats or founding claims) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-50 px-3.5 py-1 text-xs font-mono font-bold text-maroon-800 shadow-warm-sm">
              <BrandStrokes size="sm" color="#8B5A3C" />
              <span>THE TAPPINO STORY</span>
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

            <div className="pt-3">
              <a
                href={brandConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-maroon-800 hover:bg-maroon-900 px-7 py-3.5 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:scale-105 transition-all"
                data-cursor="hover"
              >
                <InstagramIcon className="h-4 w-4 text-cream-100" />
                <span>Follow @officialtappino</span>
                <Heart className="h-3.5 w-3.5 text-rose-300 fill-rose-300 ml-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
