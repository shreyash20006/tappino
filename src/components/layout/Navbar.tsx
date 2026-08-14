import React, { useState, useEffect } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { SoundToggle } from '../ui/SoundToggle';
import { MagneticButton } from '../ui/MagneticButton';
import { InstagramIcon } from '../ui/InstagramIcon';
import { TappinoLogo } from '../ui/TappinoLogo';

interface NavbarProps {
  isPlayingSound: boolean;
  onToggleSound: () => void;
  onOpenMobileMenu: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlayingSound,
  onToggleSound,
  onOpenMobileMenu,
  onOpenOrderModal,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-xl border-b border-maroon-800/10 py-2.5 shadow-warm-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Authentic Tappino Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none"
          data-cursor="hover"
        >
          <TappinoLogo variant="maroon" size="sm" />
          <span className="hidden lg:inline-block rounded-full border border-maroon-800/20 bg-cream-200/80 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-tappinoBrown-500 font-semibold">
            Nagpur • IT Park
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 rounded-full border border-maroon-800/10 bg-cream-50/90 px-6 py-2 shadow-warm-sm backdrop-blur-md">
          <a
            href="#hero"
            className="text-xs font-display font-semibold tracking-wider uppercase text-espresso-900 hover:text-maroon-800 transition-colors"
            data-cursor="hover"
          >
            Home
          </a>
          <a
            href="#signature"
            className="text-xs font-display font-semibold tracking-wider uppercase text-espresso-900 hover:text-maroon-800 transition-colors"
            data-cursor="hover"
          >
            Signature
          </a>
          <a
            href="#menu"
            className="text-xs font-display font-semibold tracking-wider uppercase text-espresso-900 hover:text-maroon-800 transition-colors"
            data-cursor="hover"
          >
            Menu
          </a>
          <a
            href="#story"
            className="text-xs font-display font-semibold tracking-wider uppercase text-espresso-900 hover:text-maroon-800 transition-colors"
            data-cursor="hover"
          >
            Story
          </a>
          <a
            href="#instagram"
            className="text-xs font-display font-semibold tracking-wider uppercase text-espresso-900 hover:text-maroon-800 transition-colors"
            data-cursor="hover"
          >
            Instagram
          </a>
          <a
            href="#location"
            className="text-xs font-display font-semibold tracking-wider uppercase text-espresso-900 hover:text-maroon-800 transition-colors"
            data-cursor="hover"
          >
            Location
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-3.5">
          <SoundToggle isPlaying={isPlayingSound} onToggle={onToggleSound} />

          {/* Quick Custom Order */}
          <button
            onClick={onOpenOrderModal}
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-tappinoBrown-500/30 bg-cream-50 px-3.5 py-1.5 text-xs font-mono font-medium text-tappinoBrown-600 hover:border-maroon-800 hover:text-maroon-800 transition-all shadow-sm"
            data-cursor="hover"
          >
            <Sparkles className="h-3.5 w-3.5 text-maroon-700" />
            Build Cup
          </button>

          {/* Primary CTA: Order on Instagram */}
          <MagneticButton
            as="a"
            href={brandConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-maroon-800 hover:bg-maroon-900 px-5 py-2 text-xs font-bold font-display uppercase tracking-wider text-cream-50 shadow-maroon-sm hover:shadow-maroon-md transition-all hover:scale-105"
            dataCursor="hover"
          >
            <InstagramIcon className="h-3.5 w-3.5 text-cream-100" />
            <span>Order on Instagram</span>
          </MagneticButton>

          {/* Mobile Menu Trigger */}
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden rounded-full border border-maroon-800/15 bg-cream-50/90 p-2 text-espresso-900 hover:bg-cream-200 shadow-sm"
            aria-label="Open mobile menu"
            data-cursor="hover"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
