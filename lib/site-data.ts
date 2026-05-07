export const COMPANY = {
  name: "J.C Pools",
  phoneDisplay: "480-492-7133",
  phoneTel: "tel:+14804927133",
  tagline:
    "Elegant pool remodeling, refinishing, and care across Phoenix, Arizona.",
  area: "Phoenix, Arizona and surrounding communities",
} as const;

/** Logo: default file in `public/logo-jc-pools.png`. Override with NEXT_PUBLIC_COMPANY_LOGO_SRC (https URL). */
export const COMPANY_LOGO_SRC =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_COMPANY_LOGO_SRC?.trim()) ||
  "/logo-jc-pools.png?v=nobg";

export type ServiceSlide = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

/** Unsplash photos — swap URLs in /public or replace with your own assets anytime */
export const SERVICE_SLIDES: ServiceSlide[] = [
  {
    id: "general-maintenance",
    title: "General pool maintenance",
    description:
      "Balanced chemistry, equipment checks, and routine care you can depend on.",
    imageUrl: "/services-general-maintenance-pexels.jpg",
    imageAlt:
      "Turquoise pool water with yellow rubber duck and blue skimmer net on wooden deck",
  },
  {
    id: "replaster",
    title: "Replastering & refinishing",
    description:
      "Bring worn interiors back to life with premium plaster and expert craftsmanship.",
    imageUrl: "/services-replaster-pool.jpg",
    imageAlt:
      "Overhead view of guest in straw hat sitting on pool edge above turquoise water",
  },
  {
    id: "tile",
    title: "Tile replacement & new tile",
    description:
      "Refresh waterlines and coping with durable new tile tailored to your style.",
    imageUrl: "/services-pool-tile.jpg",
    imageAlt:
      "Decorative square waterline tiles along pool and bubbling spa water in sunlight",
  },
  {
    id: "pebble",
    title: "Pebble finishes",
    description:
      "Rich, textured pebble interiors that feel as good as they look.",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    imageAlt: "Swimming pool at dusk",
  },
  {
    id: "equipment",
    title: "Equipment & circulation",
    description:
      "Filters, pumps, lights, skimmers, vacuums — service and complete replacements.",
    imageUrl: "/services-pool-filter-equipment.jpg",
    imageAlt:
      "Outdoor pool sand filter, pump, and PVC plumbing on concrete pad beside fence",
  },
  {
    id: "decks",
    title: "Pool decks",
    description:
      "Travertine, cool deck textures, and color palettes built around your vision.",
    imageUrl: "/deck-stone-pavers-pexels.jpg",
    imageAlt:
      "Rectangle pool with herringbone stone pavers, lounge chairs, and coastal homes beyond white fence",
  },
  {
    id: "custom",
    title: "Custom work",
    description:
      "Whatever you envision for refinishing and resurfacing — we make it real.",
    imageUrl: "/services-custom-pool-lights.jpg",
    imageAlt:
      "Nighttime pool and spa with vivid blue underwater lights and stainless ladder rails",
  },
];

export const TIMELINE_OPTIONS = [
  { id: "asap", label: "ASAP — start right away" },
  { id: "two-weeks", label: "Within 2 weeks" },
  { id: "month", label: "Within a month" },
  { id: "flexible", label: "Flexible timing" },
  { id: "quote-only", label: "Just getting a quote" },
] as const;

export type GalleryItem = {
  id: string;
  category: "Residential" | "Commercial" | "Pool decks";
  title: string;
  imageUrl: string;
  imageAlt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "res-1",
    category: "Residential",
    title: "Residential oasis",
    imageUrl:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=900&q=80",
    imageAlt: "Residential swimming pool",
  },
  {
    id: "res-2",
    category: "Residential",
    title: "Sunlit backyard pool",
    imageUrl: "/gallery-sunlit-backyard-pool.jpeg",
    imageAlt:
      "Elevated view of rectangular pool with tan tile patio, play area, trees, and loungers",
  },
  {
    id: "res-3",
    category: "Residential",
    title: "Evening retreat",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    imageAlt: "Pool at sunset",
  },
  {
    id: "com-1",
    category: "Commercial",
    title: "Resort-style commercial",
    imageUrl: "/gallery-commercial-pool-pexels.jpg",
    imageAlt:
      "Bright outdoor swimming pool with ladder, stone deck, and blue water on a sunny day",
  },
  {
    id: "com-2",
    category: "Commercial",
    title: "Community centerpiece",
    imageUrl: "/gallery-commercial-pool-pexels.jpg",
    imageAlt:
      "Outdoor pool with stainless ladder, coping, and trees under clear sky",
  },
  {
    id: "deck-1",
    category: "Pool decks",
    title: "Natural stone deck",
    imageUrl: "/deck-stone-pavers-pexels.jpg",
    imageAlt:
      "Stone paver pool deck around blue pool with spa section and lounge chairs",
  },
  {
    id: "deck-2",
    category: "Pool decks",
    title: "Cool deck palette",
    imageUrl: "/gallery-pool-deck-curtis-adams.jpg",
    imageAlt:
      "Modern backyard with blue pool, circular spa, stamped grey patio, lounge chairs, sun sails, and string lights",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Jordan M.",
    location: "Scottsdale",
    quote:
      "Our replaster and tile refresh exceeded expectations. The crew was professional and the pool looks brand new.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya S.",
    location: "Mesa",
    quote:
      "Clear communication from quote to completion. The pebble finish and new deck transformed our backyard.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Marcus T.",
    location: "Phoenix",
    quote:
      "They handled equipment upgrades and lighting fast. Water clarity has never been better.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Elena R.",
    location: "Chandler",
    quote:
      "Commercial property remodel was seamless — minimal downtime and a stunning result for our residents.",
    rating: 5,
  },
] as const;

/** Hero background — synced from `photos/pool bg photo.jpeg` (published as `public/hero-section-pool.jpeg`). */
export const HERO_IMAGE = "/hero-section-pool.jpeg";
