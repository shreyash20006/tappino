import type { BrandConfig } from '../types';
import { officialLogoUrl, socialMediaAssets } from './socialMedia';

export const storyVideoUrl = 'https://res.cloudinary.com/dsqxboxoc/video/upload/v1786693077/gemini_generated_video_261cfc04_t7xiiz.mp4';

export const brandConfig: BrandConfig = {
  name: 'TAPPINO',
  tagline: 'Sip. Chill. Repeat. ❤️',
  subTagline: 'Cold Coffee & Specialty Brews',
  city: 'Nagpur',
  locationArea: 'IT Park',
  state: 'Maharashtra',
  country: 'India',
  fullLocationDisplay: 'IT Park, Nagpur, Maharashtra',
  logoUrl: officialLogoUrl,
  storyVideoUrl: storyVideoUrl,
  instagram: {
    handle: '@officialtappino',
    url: 'https://www.instagram.com/officialtappino/',
    dmUrl: 'https://ig.me/m/officialtappino',
  },
  maps: {
    query: 'Tappino IT Park Nagpur Maharashtra',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Tappino+IT+Park+Nagpur+Maharashtra',
  },
  features: [
    {
      title: 'Craft Coffee',
      description: 'Slow-crafted espresso extraction with unmatched aroma and rich body.',
      tag: '01 / CRAFT',
    },
    {
      title: 'Rich Taste',
      description: 'Bold roast balanced with velvety texture and smooth crema.',
      tag: '02 / FLAVOR',
    },
    {
      title: 'Iced & Refreshing',
      description: 'Frosted chill that stays thick, icy, and invigorating to the last sip.',
      tag: '03 / TEMPERATURE',
    },
    {
      title: 'Nagpur Coffee Spot',
      description: 'Bringing pure coffee passion and chill vibes together in IT Park.',
      tag: '04 / COMMUNITY',
    },
  ],
  story: {
    heading: 'CRAFTED FOR NAGPUR.',
    subheading: 'Real flavor. Pure chill.',
    paragraphs: [
      'Tappino brings fresh cold coffee and specialty brews to Nagpur. Every pour is made with passion, quality ingredients, and a commitment to authentic taste.',
      'Whether it is your daily cold brew recharge or sharing chill moments with friends in IT Park, we are dedicated to bringing you an honest, delicious coffee experience.',
    ],
  },
};

export const instagramPosts = socialMediaAssets;
