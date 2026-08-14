import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowDown, Snowflake, MapPin } from 'lucide-react';
import { brandConfig } from '../config/brand';
import { MagneticButton } from '../components/ui/MagneticButton';
import { InstagramIcon } from '../components/ui/InstagramIcon';
import { BrandStrokes } from '../components/ui/BrandStrokes';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 16, y: -y * 16 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200 pt-28 pb-16 flex items-center justify-center"
    >
      {/* Subtle Warm Ivory & Coffee Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-maroon-800/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-tappinoBrown-500/10 blur-[90px] pointer-events-none" />
      
      {/* Subtle Texture Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#8B0000 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon-800/20 bg-cream-50/90 px-3.5 py-1 text-xs font-mono font-semibold text-maroon-800 shadow-warm-sm backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-maroon-800" />
            <span>IT Park, Nagpur</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-tappinoBrown-500/20 bg-cream-50/90 px-3.5 py-1 text-xs font-mono font-medium text-tappinoBrown-600 shadow-warm-sm backdrop-blur-md">
            <Snowflake className="h-3.5 w-3.5 text-tappinoBrown-500" />
            <span>Starting at {brandConfig.startingPrice}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-maroon-800/20 bg-cream-50/90 px-3.5 py-1 text-xs font-mono font-medium text-maroon-800 shadow-warm-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-maroon-700" />
            <span>Freshly Brewed • Rich Taste</span>
          </div>
        </motion.div>

        {/* Hero Grid: Left Content, Right 3D Floating Coffee Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Column: Oversized Editorial Maroon Typography */}
          <motion.div
            style={{ y: yText, opacity }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            <div>
              {/* Decorative Strokes Accent */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-2"
              >
                <BrandStrokes size="sm" color="#8B5A3C" />
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-tappinoBrown-500 font-bold">
                  Nagpur's Signature Brew
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-heading text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold tracking-tight text-maroon-800 leading-[0.9]"
              >
                SIP. CHILL. <br />
                <span className="text-gradient-maroon">REPEAT.</span>
              </motion.h1>

              {/* Handwritten Brand Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-script text-2xl sm:text-3xl text-tappinoBrown-500 font-bold mt-2"
              >
                Sip. Chill. Repeat. <span className="text-maroon-700">❤️</span>
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg text-espresso-800 max-w-xl mx-auto lg:mx-0 font-sans font-normal leading-relaxed"
            >
              Velvety cold coffee & rich hot brews crafted fresh daily in <span className="text-maroon-800 font-semibold">IT Park, Nagpur</span>. Bold espresso, sub-zero chill, and an honest obsession for authentic flavor.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Primary Button: Maroon Background, Cream Text */}
              <MagneticButton
                as="a"
                href={brandConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-maroon-800 hover:bg-maroon-900 px-8 py-4 text-sm font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-md hover:shadow-maroon-lg transition-all hover:scale-105"
                dataCursor="hover"
              >
                <InstagramIcon className="h-4 w-4 text-cream-100" />
                <span>Order on Instagram</span>
              </MagneticButton>

              {/* Secondary Button: Transparent / Cream, Maroon Border, Maroon Text */}
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-maroon-800 bg-cream-50/80 px-7 py-4 text-sm font-display font-bold text-maroon-800 hover:bg-maroon-800 hover:text-cream-50 transition-all shadow-warm-sm"
                data-cursor="hover"
              >
                <Sparkles className="h-4 w-4" />
                <span>Customize Your Cup</span>
              </button>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-maroon-800/10 max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <p className="font-heading text-2xl font-bold text-maroon-800">₹39</p>
                <p className="text-[11px] font-mono text-tappinoBrown-500 font-medium">Cold Brew Starting</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-tappinoBrown-500">100%</p>
                <p className="text-[11px] font-mono text-espresso-700 font-medium">Freshly Brewed</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-maroon-800">IT Park</p>
                <p className="text-[11px] font-mono text-tappinoBrown-500 font-medium">Nagpur Hub</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Floating Hero Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center py-4"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-72 w-72 rounded-full bg-maroon-800/12 blur-[80px] animate-pulse-glow" />
            </div>

            {/* Rotating Decorative Border Ring */}
            <div className="absolute h-96 w-96 rounded-full border border-maroon-800/15 animate-spin-slow pointer-events-none" />

            {/* Floating Cup Container with 3D Tilt */}
            <motion.div
              style={{
                rotateX: tilt.y,
                rotateY: tilt.x,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="relative z-10 w-full max-w-sm sm:max-w-md animate-float-slow group"
              data-cursor="text"
              data-cursor-text="TASTE"
            >
              <div className="relative overflow-hidden rounded-3xl border border-maroon-800/15 bg-white/90 p-3.5 backdrop-blur-md shadow-warm-lg transition-all duration-500 group-hover:border-maroon-800/40">
                <img
                  src="/images/products/hero_cold_coffee.jpg"
                  alt="Tappino Signature Cold Coffee"
                  className="w-full h-[420px] sm:h-[460px] object-cover rounded-2xl hero-cup-shadow transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Top Overlay Badge */}
                <div className="absolute top-6 left-6 rounded-2xl border border-maroon-800/15 bg-cream-50/95 px-4 py-2 backdrop-blur-md shadow-warm-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <BrandStrokes size="sm" color="#8B5A3C" />
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-tappinoBrown-500 font-bold">
                      Signature Drop
                    </span>
                  </div>
                  <span className="block font-heading text-xl font-bold text-maroon-800">
                    Cold Coffee @ ₹39
                  </span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 right-6 rounded-2xl border border-maroon-800/20 bg-cream-50/95 p-3.5 backdrop-blur-md shadow-warm-md max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-xs text-maroon-800 font-mono font-bold">
                    <Sparkles className="h-3.5 w-3.5 text-maroon-700" />
                    <span>Sub-Zero Chilled</span>
                  </div>
                  <p className="text-[11px] text-espresso-800 mt-1 font-medium leading-tight">
                    Thick espresso swirl & velvety microfoam.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-1.5"
        >
          <a
            href="#signature"
            className="flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase text-tappinoBrown-500 font-semibold hover:text-maroon-800 transition-colors"
            data-cursor="hover"
          >
            <span>Explore Experience</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-4 w-4 text-maroon-800" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
