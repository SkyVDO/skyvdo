// ============================================================
// SunDown Entertainment — Constants & Content
// ============================================================

// Section IDs (used for anchor links and scroll targets)
export const SECTION_IDS = {
  hero: "hero",
  whatWeDo: "what-we-do",
  whoItsFor: "who-its-for",
  packages: "packages",
  visualProof: "visual-proof",
  howItWorks: "how-it-works",
  enquiry: "enquiry",
  finalCta: "final-cta",
} as const;

// Nav items
export const NAV_ITEMS = [
  { label: "Who It's For", href: `#${SECTION_IDS.whoItsFor}` },
  { label: "Packages", href: `#${SECTION_IDS.packages}` },
  { label: "How It Works", href: `#${SECTION_IDS.howItWorks}` },
] as const;

// Contact info
export const CONTACT = {
  whatsappNumber: "919566071168",
  whatsappLink: "https://wa.me/919566071168",
  phone: "+91 95660 71168",
  email: "hello@sundownentertainment.in",
  instagram: "https://instagram.com/sundownentertainment",
  youtube: "https://youtube.com/@sundownentertainment",
  locations: "Chennai & Coimbatore",
} as const;

// Hero content
export const HERO = {
  overline: "PREMIUM OUTDOOR CINEMA & LIVE IPL NIGHTS",
  headline: "YOUR BACKYARD.\nOUR SCREEN.\nPURE MAGIC.",
  subtext:
    "From movie nights to high-energy IPL screenings, we bring premium 4K projection, cinematic sound, and inflatable screens right to your doorstep.",
  primaryCta: "Enquire Now",
  secondaryCta1: "View Packages",
  secondaryCta2: "See How It Works",
} as const;

// What We Do cards
export const SERVICES = [
  {
    category: "SCREENS",
    title: "Big Screens",
    subtitle: "9ft – 40ft",
    description:
      "Inflatable cinema screens in every size — from intimate backyard setups to massive community screenings.",
    image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=600&h=450&fit=crop",
    imageAlt: "[Placeholder] Outdoor inflatable cinema screen at dusk",
  },
  {
    category: "SOUND",
    title: "Cinematic Sound",
    subtitle: "Immersive Audio",
    description:
      "Professional sound systems that fill any space with rich, theatre-quality audio for the full cinematic experience.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=450&fit=crop",
    imageAlt: "[Placeholder] Professional cinema sound speakers setup",
  },
  {
    category: "SETUPS",
    title: "Indoor & Outdoor",
    subtitle: "Anywhere You Want",
    description:
      "Rooftops, backyards, terraces, community halls — we set up wherever you dream of watching.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=450&fit=crop",
    imageAlt: "[Placeholder] Outdoor cinema setup in a garden setting",
  },
] as const;

// Who It's For cards
export const AUDIENCES = [
  {
    title: "Home Movie Nights",
    description: "Turn your backyard into a private cinema for family and friends.",
    gradient: "from-amber-glow/20 to-midnight",
  },
  {
    title: "Apartment Communities",
    description: "Movie nights that bring your whole community together under the stars.",
    gradient: "from-twilight/40 to-midnight",
  },
  {
    title: "Corporate Events",
    description: "Impress clients and reward teams with an unforgettable cinema experience.",
    gradient: "from-sunset-orange/20 to-midnight",
  },
  {
    title: "Schools & Colleges",
    description: "Screen festivals, fundraisers, and campus movie nights they'll never forget.",
    gradient: "from-cinema-red/20 to-midnight",
  },
  {
    title: "Sports Screenings",
    description: "Watch the big match on the big screen — stadium energy, anywhere you want.",
    gradient: "from-success/20 to-midnight",
  },
] as const;

// Package cards (NO prices per brief)
export const PACKAGES = [
  {
    name: "High-Octane IPL Night",
    description:
      "Bring stadium energy home with a match-day setup built for loud cheers, big moments, and unforgettable cricket nights.",
    features: [
      "16ft Inflatable Screen",
      "4K Projector",
      "High-Output Match Audio Setup",
      "Complete Setup & Takedown",
      "Ambient Match-Night Lighting",
    ],
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Kids Birthday Party Cinema",
    description:
      "A joyful, family-friendly movie setup for birthdays with safe, comfortable viewing and a wow factor kids love.",
    features: [
      "12ft Inflatable Screen",
      "HD Projector",
      "Balanced Family Sound System",
      "Complete Setup & Takedown",
      "Flexible Viewing Area Arrangement",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Choose Your Own Experience",
    description:
      "Build a fully custom screening for your space, crowd size, and occasion, from intimate gatherings to large-format events.",
    features: [
      "Custom Screen Size (12ft to 40ft)",
      "Projector Choice (HD / 4K / Laser)",
      "Sound Setup Tuned to Venue Size",
      "Complete Setup & Takedown",
      "Optional Add-Ons & Theme Styling",
      "Dedicated Planning Support",
    ],
    highlighted: false,
    badge: null,
  },
] as const;

// Visual proof gallery
export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop",
    alt: "[Placeholder] Outdoor cinema screening under the night sky",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=400&fit=crop",
    alt: "[Placeholder] Audience watching movie on inflatable screen",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=400&fit=crop",
    alt: "[Placeholder] Close-up of projector setup",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&h=400&fit=crop",
    alt: "[Placeholder] Community movie night gathering",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=500&fit=crop",
    alt: "[Placeholder] Family enjoying outdoor cinema",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
    alt: "[Placeholder] Corporate outdoor screening event",
    span: "col-span-1 row-span-1",
  },
] as const;

// IPL showcase carousel images
export const IPL_CAROUSEL_IMAGES = [
  {
    src: "/ipl/ipl-day-family.jpeg",
    alt: "Family and friends enjoying a daytime IPL screening in a backyard setup.",
    title: "DAYTIME BACKYARD IPL WATCH PARTY",
  },
  {
    src: "/ipl/ipl-night-family.jpeg",
    alt: "Family watching an IPL match on an outdoor inflatable screen near a pool at night.",
    title: "NIGHT POOLSIDE IPL CINEMA EXPERIENCE",
  },
  {
    src: "/ipl/ipl-multiple-scenarios.jpeg",
    alt: "Multiple IPL screening setups across rooftops, lawns, and community spaces at dusk.",
    title: "COMMUNITY IPL SCREENINGS ACROSS EVERY SETTING",
  },
] as const;

// How It Works steps
export const STEPS = [
  {
    number: "01",
    icon: "MessageSquare" as const,
    title: "Tell Us About Your Event",
    description:
      "Share your vision — the date, location, number of guests, and type of event. We'll take it from there.",
  },
  {
    number: "02",
    icon: "Truck" as const,
    title: "We Deliver & Set Up",
    description:
      "Our team arrives with everything — screen, projector, sound system — and sets it all up while you relax.",
  },
  {
    number: "03",
    icon: "Play" as const,
    title: "You Enjoy the Show",
    description:
      "Sit back, grab popcorn, and watch the magic unfold under the open sky. We handle the rest.",
  },
] as const;

// Event type options for enquiry form
export const EVENT_TYPES = [
  "Home Screening",
  "Community Event",
  "Corporate Event",
  "School / College Event",
  "Sports Screening",
  "Other",
] as const;

// Footer links
export const FOOTER_LINKS = {
  services: [
    { label: "Outdoor Cinema", href: `#${SECTION_IDS.packages}` },
    { label: "Corporate Events", href: `#${SECTION_IDS.packages}` },
    { label: "Community Screenings", href: `#${SECTION_IDS.packages}` },
    { label: "Sports Screenings", href: `#${SECTION_IDS.packages}` },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: `#${SECTION_IDS.howItWorks}` },
    { label: "FAQ", href: "#" },
  ],
  connect: [
    { label: "Instagram", href: CONTACT.instagram },
    { label: "YouTube", href: CONTACT.youtube },
    { label: "WhatsApp", href: CONTACT.whatsappLink },
  ],
} as const;
