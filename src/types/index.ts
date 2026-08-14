export type ProductCategory = 'all' | 'cold' | 'hot' | 'special';

export interface Product {
  id: string;
  name: string;
  category: 'cold' | 'hot' | 'special';
  subtitle: string;
  description: string;
  price: string;
  badge?: string;
  isHero?: boolean;
  tastingNotes: string[];
  temperature: 'Iced & Chilled' | 'Steaming Hot' | 'Nitro Cold';
  intensity: number; // 1 to 5
  image: string;
  customization: {
    sweetnessOptions: string[];
    iceOptions: string[];
    extraShots: boolean;
    milkOptions?: string[];
  };
}

export type SocialMediaType = 'video' | 'image';

export interface SocialMediaAsset {
  id: string;
  type: SocialMediaType;
  url: string;
  posterUrl?: string;
  title: string;
  caption: string;
  likes: string;
  tag: string;
  date: string;
  instagramUrl: string;
  featured?: boolean;
  creator?: string;
  aspectRatio?: 'vertical' | 'square' | 'wide';
}

// Backward compatibility alias
export type InstagramPost = SocialMediaAsset;

export interface BrandConfig {
  name: string;
  tagline: string;
  subTagline: string;
  startingPrice: string;
  city: string;
  locationArea: string;
  state: string;
  country: string;
  fullLocationDisplay: string;
  logoUrl: string;
  instagram: {
    handle: string;
    url: string;
    dmUrl: string;
    bioLine1: string;
    bioLine2: string;
    bioLine3: string;
  };
  maps: {
    embedQuery: string;
    directionsUrl: string;
  };
  features: Array<{
    title: string;
    description: string;
    tag: string;
  }>;
  story: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    stats: Array<{ label: string; value: string }>;
  };
}
