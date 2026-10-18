// ============================================
// SDZRN (Soda Zitrone) - Brand Case Study Data
// Fictional Austrian sparkling water brand concept
// ============================================

import { Droplets, Leaf, Heart, Zap } from 'lucide-react';

// Hero Section Data
export const heroData = {
  title: 'SDZRN',
  tagline: 'Pure Austrian Refreshment',
  subtitle: 'Water + Lemon. Nothing else.',
  description: `SDZRN (Soda Zitrone) is a conceptual Austrian sparkling water brand,
    built to see what a local water brand looks like without the sugar: alpine water, a
    squeeze of real lemon, and nothing else to explain.`,
  year: '2024',
  category: 'Branding / Packaging Design',
};

// Project Scope Data
export const scopeData = {
  role: 'Brand Designer',
  team: 'Solo Project',
  timeframe: '4 weeks',
  tools: ['Figma', 'Illustrator', 'Photoshop', 'Protopie'],
  skills: [
    'Brand Identity Design',
    'Visual Design Systems',
    'Packaging Design',
    'Typography Selection',
    'Color Psychology',
    'Brand Messaging',
  ],
};

// Brand Concept Data
export const conceptData = {
  tagline: 'Water + Lemon. Nothing else.',
  philosophy: `SDZRN started with a walk down the supermarket shelf. You can buy premium sparkling water
    in Austria, but rarely anything that tastes like it belongs here. The mass-market stuff is
    either sugary or as plain as tap water, so I wanted the boring middle: real lemon essence,
    alpine water, no sweetener.`,
  positioning: 'A sugar-free swap for sugary soft drinks',
  heritage: 'Inspired by Austrian Alpine water purity',
  keyMessages: [
    {
      icon: Droplets,
      title: 'Zero Sugar',
      description: 'Naturally flavored, no added sweeteners',
    },
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Only water and real lemon extract',
    },
    {
      icon: Heart,
      title: 'The Better Choice',
      description: 'A lighter swap than soda or sugary lemonade',
    },
    {
      icon: Zap,
      title: 'Refreshingly Light',
      description: 'Subtle carbonation, maximum refreshment',
    },
  ],
};

// Color Palette Data
export const colorData = {
  primary: {
    name: 'Alpine Water',
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB', usage: 'Primary brand color, backgrounds' },
      { name: 'Glacier Mist', hex: '#B4E4FF', usage: 'Highlights, gradients' },
    ],
  },
  secondary: {
    name: 'Fresh Lemon',
    colors: [
      { name: 'Lemon Chiffon', hex: '#FFF44F', usage: 'Accents, CTAs' },
      { name: 'Golden Hour', hex: '#FFD700', usage: 'Highlights, icons' },
    ],
  },
  accent: {
    name: 'Deep Ocean',
    colors: [
      { name: 'Navy Depth', hex: '#1E3A5F', usage: 'Text, headings' },
      { name: 'Twilight', hex: '#2D4A6F', usage: 'Secondary text' },
    ],
  },
  neutrals: {
    name: 'Natural Base',
    colors: [
      { name: 'Pure White', hex: '#FFFFFF', usage: 'Backgrounds, negative space' },
      { name: 'Soft Cloud', hex: '#F8FAFC', usage: 'Card backgrounds' },
      { name: 'Stone Gray', hex: '#64748B', usage: 'Supporting text' },
    ],
  },
};

// Typography Data
export const typographyData = {
  recommendations: [
    {
      font: 'Krona One',
      usage: 'Brand name, headlines',
      reason: 'Bold, rounded letterforms evoke bubbles and freshness',
    },
    {
      font: 'Montserrat',
      usage: 'Body text, messaging',
      reason: 'Clean, modern sans-serif for readability and accessibility',
    },
  ],
  hierarchy: [
    { element: 'Brand Name', font: 'Krona One', size: '48-72px', weight: 'Bold' },
    { element: 'Headlines', font: 'Krona One', size: '32-48px', weight: 'SemiBold' },
    { element: 'Subheadlines', font: 'Montserrat', size: '20-24px', weight: 'Medium' },
    { element: 'Body Text', font: 'Montserrat', size: '16px', weight: 'Regular' },
    { element: 'Captions', font: 'Montserrat', size: '12-14px', weight: 'Regular' },
  ],
};

// Logo Concepts Data
export const logoData = {
  description: 'I explored three logos. Each one leaned on a different part of what the brand is about.',
  concepts: [
    {
      name: 'Bubbly Minimal',
      description: 'A simplified wordmark where the "Z" turns into a bubble on its way up.',
      style: 'Minimalist, modern',
    },
    {
      name: 'Lemon Drop',
      description: 'A lemon shape tucked into the "S". Simple enough to remember after one look.',
      style: 'Playful, organic',
    },
    {
      name: 'Alpine Crest',
      description: 'An "A" built from a mountain line and a wave. This one leans hard on the Austrian story.',
      style: 'Premium, heritage',
    },
  ],
  primary: 'Bubbly Minimal',
  rationale: 'It works small on a can and big on a billboard, and it moves nicely on a screen.',
};

// Messaging Framework Data
export const messagingData = {
  tagline: 'Water + Lemon. Nothing else.',
  brandVoice: 'Fresh and plain-spoken',
  pillars: [
    {
      pillar: 'Purity',
      statement: 'Nothing added, nothing taken away',
      proof: 'Only two ingredients: water and natural lemon',
    },
    {
      pillar: 'Refreshment',
      statement: 'Alpine water with a squeeze of lemon',
      proof: 'Premium carbonation, subtle citrus notes',
    },
    {
      pillar: 'Health',
      statement: 'Lighter than soda, kinder to the bin',
      proof: 'Zero sugar, recyclable packaging',
    },
  ],
  taglineVariations: [
    'Pure and simple.',
    'The local one',
    'Straight from the Alps',
    'Refreshment, Reinvented',
  ],
  keyClaims: [
    'Zero added sugar',
    '100% natural ingredients',
    'Austrian Alpine water',
    'Real lemon extract',
    'Eco-friendly packaging',
  ],
};

// Comparison Data
export const comparisonData = {
  title: 'Where SDZRN Fits',
  subtitle: 'Positioned between flat water and sugary drinks',
  categories: [
    {
      name: 'Flat Water',
      examples: 'Still water, tap water',
      sugar: '0g',
      calories: '0',
      natural: '✓✓✓',
      refreshment: '○',
    },
    {
      name: 'SDZRN',
      examples: 'Sparkling water with natural lemon',
      sugar: '0g',
      calories: '5',
      natural: '✓✓✓',
      refreshment: '✓✓✓',
      isTarget: true,
    },
    {
      name: 'Lemonade',
      examples: 'Traditional lemonade, soft drinks',
      sugar: '25-40g',
      calories: '100-150',
      natural: '○',
      refreshment: '✓✓',
    },
    {
      name: 'Soft Drinks',
      examples: 'Cola, orange soda',
      sugar: '30-50g',
      calories: '140-200',
      natural: '○',
      refreshment: '✓✓',
    },
  ],
  benefits: [
    'Zero sugar, so no crash an hour later',
    'Real lemon rather than lemon flavouring',
    'No artificial sweeteners',
    'Aluminium and glass, and both recycle',
    'Bottled in Austria, so a short trip to the shelf',
  ],
};

// Packaging Concepts Data
export const packagingData = {
  title: 'Packaging Vision',
  description: 'Purity and simplicity, and it still has to win the shelf.',
  concepts: [
    {
      name: 'The Classic Can',
      description: 'Matte aluminium can with a quiet label: the logo, the flavour, done.',
      materials: 'Recyclable aluminum',
      sizes: '330ml, 500ml',
    },
    {
      name: 'The Premium Bottle',
      description: 'Glass bottle with the logo embossed into it. Aimed at restaurant tables and hotel minibars.',
      materials: 'Recyclable glass',
      sizes: '250ml, 750ml',
    },
    {
      name: 'The Eco Pack',
      description: 'Cardboard multipack, printed in plant-based ink. No plastic film around the cans.',
      materials: 'Cardboard, plant-based ink',
      sizes: '6-pack, 12-pack',
    },
  ],
  sustainability: [
    '100% recyclable materials',
    'Reduced plastic usage',
    'Local production (Austria)',
    'Carbon-neutral distribution',
    'Minimal packaging waste',
  ],
};

// Design Insights Data
export const insightsData = {
  title: 'Design Insights',
  learnings: [
    {
      title: 'The colour did the labelling',
      detail:
        'On the shelf mock-ups, the blue and yellow split reads as water and lemon before you get close enough to read a word. That is most of why the palette stayed this plain.',
    },
    {
      title: 'Empty space did the selling',
      detail:
        'Fewer elements on the can meant zero sugar was visible from across the aisle, and the variants took minutes instead of a redesign.',
    },
    {
      title: 'The Alpine story is an assumption',
      detail:
        'I never tested whether people here pay more for something bottled in their own country. I used it because it is a good story, and I would still flag it as the first thing to check.',
    },
    {
      title: 'Recyclable is table stakes',
      detail:
        'Half the drinks in that aisle already say it, so repeating the word buys nothing. Showing the material itself was more useful.',
    },
  ],
  results: [
    'Readable from a distance, before any copy',
    'One palette, three pack sizes, no redrawing per format',
    'The lemon motif carries from the can to the social tiles',
    'Looks like a small-batch drink without the small-batch price',
  ],
};

// Stats/Metrics for the case study
export const statsData = {
  title: 'Project Impact',
  metrics: [
    { value: '3', suffix: '', label: 'Logo Concepts Explored' },
    { value: '8', suffix: '', label: 'Color Variations Tested' },
    { value: '6', suffix: '', label: 'Packaging Formats' },
    { value: '4', suffix: 'weeks', label: 'Timeline' },
  ],
};

// Feature cards for the case study
export const featuresData = {
  title: 'Deliverables',
  subtitle: 'Logo, palette, packaging and copy',
  features: [
    {
      title: 'Brand Guidelines',
      description: 'A style guide covering logo usage, colours, typography and brand voice.',
      highlight: 'Foundation',
    },
    {
      title: 'Logo System',
      description: 'The primary mark, the lock-ups that go with it, and a note on when not to use it.',
      highlight: 'Identity',
    },
    {
      title: 'Packaging Design',
      description: 'Cans, bottles and a multipack, drawn to print specs including dielines.',
      highlight: '3D Mockups',
    },
    {
      title: 'Messaging Framework',
      description: 'Taglines, key messages and copy rules for every place the brand shows up.',
      highlight: 'Voice',
    },
  ],
};

// Additional data for extended sections
// NOTE: Nobody tested this brand. The audience below is who I pictured while
// designing it, and the market claims are positioning, not measured results.
export const additionalData = {
  targetAudience: [
    'Health-conscious millennials (25-40)',
    'People who buy fitness gear',
    'Austrian urban professionals',
    'Shoppers who check the recycling label',
  ],
  marketPosition: 'Between flat water and soda: sparkling, sweetened with lemon only',
  competitiveAdvantage:
    'Local water, two ingredients, and a shelf look nothing else in that aisle has',
  nextSteps: [
    'Shelf test against the real competitors',
    'Packaging feedback from actual shoppers',
    'Find a production partner',
    'Set a launch date',
  ],
};

export default {
  heroData,
  scopeData,
  conceptData,
  colorData,
  typographyData,
  logoData,
  messagingData,
  comparisonData,
  packagingData,
  insightsData,
  statsData,
  featuresData,
  additionalData,
};
