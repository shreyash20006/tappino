export interface MenuItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  order: number;
  description?: string;
  available?: boolean;
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

export type InstagramPost = SocialMediaAsset;

export interface BrandConfig {
  name: string;
  tagline: string;
  subTagline: string;
  city: string;
  locationArea: string;
  state: string;
  country: string;
  fullLocationDisplay: string;
  logoUrl: string;
  storyVideoUrl: string;
  instagram: {
    handle: string;
    url: string;
    dmUrl: string;
  };
  maps: {
    query: string;
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
  };
}
