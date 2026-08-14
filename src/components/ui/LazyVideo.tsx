import React, { useRef, useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
  autoPlayInView?: boolean;
  aspectRatioClass?: string;
  onClick?: () => void;
  showPlayIndicator?: boolean;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  alt,
  className = '',
  autoPlayInView = true,
  aspectRatioClass = 'aspect-[9/16]',
  onClick,
  showPlayIndicator = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Ensure muted is explicitly set for browser autoplay policies
    video.muted = true;

    if (!autoPlayInView) return;

    // Intersection Observer for viewport-based playback and aggressive optimization
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Ignore autoplay prevention if any
              });
            }
          } else {
            video.pause();
          }
        });
      },
      {
        rootMargin: '150px 0px',
        threshold: 0.15,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [autoPlayInView, src]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden cursor-pointer group select-none ${aspectRatioClass} ${className}`}
      role="region"
      aria-label={`Tappino coffee social media video: ${alt}`}
    >
      {/* Video Player */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
        title={alt}
      />

      {/* Video Badge Overlay */}
      <div className="absolute top-3 right-3 z-20 rounded-full bg-espresso-950/70 backdrop-blur-md p-2 text-cream-50 transition-transform duration-300 group-hover:scale-110 shadow-md">
        <Play className="h-3.5 w-3.5 fill-cream-50 text-cream-50" />
      </div>

      {/* Hover "PLAY REEL" indicator pill */}
      {showPlayIndicator && (
        <div
          className={`absolute bottom-3 left-3 z-20 rounded-xl bg-maroon-800/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono font-bold text-cream-50 shadow-maroon-sm transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span>Tap to Expand & Sound 🔊</span>
        </div>
      )}
    </div>
  );
};
