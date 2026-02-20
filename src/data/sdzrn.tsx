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
  description: `SDZRN (Soda Zitrone) is a conceptual Austrian sparkling water brand 
    designed to capture the essence of Alpine freshness. The brand identity combines 
    Austria's pristine water heritage with the vibrant energy of fresh lemons, creating 
    a visual language that feels both authentic and contemporary.`,
  year: '2024',
  category: 'Branding / Packaging Design',
};

// Project Scope Data
export const scopeData = {
  role: 'Lead Brand Designer',
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
  philosophy: `SDZRN was born from a simple observation: the Austrian market lacked a premium 
    sparkling water option that felt authentically local while delivering exceptional taste. 
    Unlike mass-market alternatives loaded with sugar or artificial flavors, SDZRN represents 
    a return to purity - just water and natural lemon essence, carbonated to perfection.`,
  positioning: 'Healthy alternative to sugary soft drinks',
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
      title: 'Healthy Alternative',
      description: 'Better for you than soda or lemonade',
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
  description: 'Three logo concepts were explored, each capturing different aspects of the brand personality.',
  concepts: [
    {
      name: 'Bubbly Minimal',
      description: 'Simplified letterform with integrated bubble elements. The "Z" transforms into a rising bubble, creating dynamic movement.',
      style: 'Minimalist, modern',
    },
    {
      name: 'Lemon Drop',
      description: 'Playful integration of a lemon silhouette within the letter "S". Fresh, approachable, and memorable.',
      style: 'Playful, organic',
    },
    {
      name: 'Alpine Crest',
      description: 'Mountain-inspired "A" shape combined with water wave patterns. Heritage-focused, premium positioning.',
      style: 'Premium, heritage',
    },
  ],
  primary: 'Bubbly Minimal',
  rationale: 'Selected for its versatility across applications and its ability to animate beautifully in digital contexts.',
};

// Messaging Framework Data
export const messagingData = {
  tagline: 'Water + Lemon. Nothing else.',
  brandVoice: 'Fresh, Pure, Authentic',
  pillars: [
    {
      pillar: 'Purity',
      statement: 'Nothing added, nothing taken away',
      proof: 'Only two ingredients: water and natural lemon',
    },
    {
      pillar: 'Refreshment',
      statement: 'The taste of Austrian Alpine freshness',
      proof: 'Premium carbonation, subtle citrus notes',
    },
    {
      pillar: 'Health',
      statement: 'A better choice for you and the planet',
      proof: 'Zero sugar, recyclable packaging',
    },
  ],
  taglineVariations: [
    'Pure. Simple. Refreshing.',
    'The Natural Choice',
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
    'Better hydration than sugary drinks',
    'Natural energy boost from lemon',
    'No artificial sweeteners',
    'Supports healthy lifestyle choices',
    'Environmentally conscious packaging',
  ],
};

// Packaging Concepts Data
export const packagingData = {
  title: 'Packaging Vision',
  description: 'The packaging design reflects the brand values of purity and simplicity while standing out on shelf.',
  concepts: [
    {
      name: 'The Classic Can',
      description: 'Sleek aluminum can with matte finish, minimal label design showcasing the logo and key benefits.',
      materials: 'Recyclable aluminum',
      sizes: '330ml, 500ml',
    },
    {
      name: 'The Premium Bottle',
      description: 'Glass bottle with embossed logo, premium positioning for retail and hospitality.',
      materials: 'Recyclable glass',
      sizes: '250ml, 750ml',
    },
    {
      name: 'The Eco Pack',
      description: 'Carton-based packaging for multi-packs, emphasizing sustainability and reduced plastic.',
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
      title: 'Color Psychology Matters',
      detail: 'The blue-yellow combination immediately communicates "water" and "citrus" without explicit labeling, making the product instantly understandable at shelf.',
    },
    {
      title: 'Less is More',
      detail: 'In the wellness space, minimalism signals purity. The restrained design approach reinforces the "nothing else" brand promise.',
    },
    {
      title: 'Heritage Sells',
      detail: 'Austrian consumers respond well to local provenance. The Alpine connection adds authenticity and justifies premium pricing.',
    },
    {
      title: 'Sustainability is Expected',
      detail: 'Modern consumers assume eco-friendly packaging. Going beyond with clear messaging about recyclability becomes a competitive advantage.',
    },
  ],
  results: [
    'Strong shelf presence through distinctive color blocking',
    'Clear product positioning in a crowded market',
    'Versatile brand system for multiple formats',
    'Premium perception without premium complexity',
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
  subtitle: 'Comprehensive brand identity system',
  features: [
    {
      title: 'Brand Guidelines',
      description: 'Complete style guide covering logo usage, color system, typography, and brand voice.',
      highlight: 'Foundation',
    },
    {
      title: 'Logo System',
      description: 'Primary logo, variations for different contexts, and animation guidelines.',
      highlight: 'Identity',
    },
    {
      title: 'Packaging Design',
      description: 'Cans, bottles, and multi-pack concepts with production-ready specifications.',
      highlight: '3D Mockups',
    },
    {
      title: 'Messaging Framework',
      description: 'Taglines, key messages, and copy guidelines for all brand touchpoints.',
      highlight: 'Voice',
    },
  ],
};

// Additional data for extended sections
export const additionalData = {
  targetAudience: [
    'Health-conscious millennials (25-40)',
    'Fitness enthusiasts',
    'Austrian urban professionals',
    'Eco-aware consumers',
  ],
  marketPosition: 'Premium sparkling water with natural flavors',
  competitiveAdvantage: 'Austrian heritage + 100% natural ingredients + distinctive visual identity',
  nextSteps: [
    'Consumer research and testing',
    'Focus groups for packaging validation',
    'Production partner identification',
    'Launch timeline development',
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
