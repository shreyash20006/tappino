import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ParticleCanvas } from './components/ui/ParticleCanvas';
import { LoadingScreen } from './sections/LoadingScreen';
import { HeroSection } from './sections/HeroSection';
import { SignatureShowcase } from './sections/SignatureShowcase';
import { MenuSection } from './sections/MenuSection';
import { KineticStory } from './sections/KineticStory';
import { BrandStory } from './sections/BrandStory';
import { InstagramSection } from './sections/InstagramSection';
import { LocationSection } from './sections/LocationSection';
import { CTASection } from './sections/CTASection';
import { PostModal } from './components/modals/PostModal';
import type { InstagramPost } from './types';

export function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [postModalOpen, setPostModalOpen] = useState<boolean>(false);

  const handleSelectPost = (post: InstagramPost) => {
    setSelectedPost(post);
    setPostModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-cream-100 text-espresso-900 font-sans selection:bg-maroon-800 selection:text-cream-50">
      {/* Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Ambient Particle Dust */}
      <ParticleCanvas />

      {/* Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Main App Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        {/* Full-Screen Mobile Drawer */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Hero Section */}
        <HeroSection />

        {/* Signature Hero Cold Coffee Spotlight */}
        <SignatureShowcase />

        {/* The Tappino Menu */}
        <MenuSection />

        {/* Signature Full-Width Dramatic Maroon Section: Sip. Chill. Repeat. */}
        <KineticStory />

        {/* Brand Story with Supplied Real Cloudinary Video */}
        <BrandStory />

        {/* Instagram Feed & Spotlight */}
        <InstagramSection onSelectPost={handleSelectPost} />

        {/* Location & Map Section */}
        <LocationSection />

        {/* Climax Conversion CTA */}
        <CTASection />

        {/* Minimal Luxury Maroon Footer */}
        <Footer />
      </div>

      {/* Interactive Instagram Post Modal */}
      <PostModal
        post={selectedPost}
        isOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
      />
    </div>
  );
}

export default App;
