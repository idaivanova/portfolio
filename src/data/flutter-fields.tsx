// ============================================
// Flutter Fields - Experimental Butterfly Motion Playground
// A UX playground for motion design and playful interactions
// ============================================

// Hero Section
export const heroData = {
  title: (
    <>
      <span className="font-extrabold">Flutter Fields: </span>
      <span className="font-normal">Motion Design Experiments</span>
    </>
  ),
  description: (
    <>
      <p>
        Welcome to Flutter Fields - a playground for exploring motion design patterns 
        inspired by the graceful movements of butterflies in nature.
      </p>
      <p className="mt-4">
        This experimental project showcases innovative animation techniques, 
        physics-based interactions, and delightful micro-movements.
      </p>
    </>
  ),
  tags: [
    { label: 'Motion Design' },
    { label: 'Animation' },
    { label: 'Physics' },
    { label: 'Micro-interactions' },
  ],
};

// Motion Patterns
export const motionPatternsData = {
  title: 'Motion Patterns',
  subtitle: 'Animation techniques inspired by butterfly flight physics',
  patterns: [
    {
      name: 'The Flutter',
      description: 'Quick, rhythmic wing-like movements for attention-grabbing interactions',
      physics: 'Spring: stiffness 400, damping 12',
      duration: '400ms',
      example: 'Button hover states, card reveals',
    },
    {
      name: 'The Float',
      description: 'Gentle, drifting movements for ambient animations',
      physics: 'Smooth easing with vertical drift',
      duration: '600ms',
      example: 'Modal entrances, dropdown opens',
    },
    {
      name: 'The Bloom',
      description: 'Expanding from center like a flower opening',
      physics: 'Scale 0 → 1.1 → 1 with overshoot',
      duration: '500ms',
      example: 'Feature reveals, notification appearances',
    },
    {
      name: 'The Dance',
      description: 'Playful oscillating movements for celebrations',
      physics: 'Gentle oscillation on multiple axes',
      duration: '800ms loop',
      example: 'Success states, achievement unlocks',
    },
    {
      name: 'The Glide',
      description: 'Smooth curved paths mimicking butterfly flight',
      physics: 'Bezier curves with momentum',
      duration: 'Variable',
      example: 'Page transitions, element movements',
    },
  ],
};

// Butterfly Species Showcase
export const butterfliesData = {
  title: 'Butterfly Species',
  subtitle: 'Each with unique flight patterns and color schemes',
  butterflies: [
    {
      name: 'Monarch',
      colors: ['#FF6B35', '#F7C59F', '#2E294E'],
      pattern: 'Long graceful glides with occasional flutter bursts',
      personality: 'Elegant, predictable, majestic',
    },
    {
      name: 'Painted Lady',
      colors: ['#FF9F1C', '#CBF3F0', '#2EC4B6'],
      pattern: 'Quick darting movements, constantly in motion',
      personality: 'Energetic, curious, adventurous',
    },
    {
      name: 'Swallowtail',
      colors: ['#FFD700', '#000000', '#FF4500'],
      pattern: 'Rolling dives and soaring ascents',
      personality: 'Bold, dramatic, attention-seeking',
    },
    {
      name: 'Blue Morpho',
      colors: ['#00B4D8', '#0077B6', '#90E0EF'],
      pattern: 'Slow, deliberate wing beats with dramatic color shifts',
      personality: 'Calm, mesmerizing, sophisticated',
    },
    {
      name: 'Cabbage White',
      colors: ['#FFFFFF', '#E9ECEF', '#CED4DA'],
      pattern: 'Simple, straight, efficient flight paths',
      personality: 'Minimalist, practical, reliable',
    },
    {
      name: 'Red Admiral',
      colors: ['#DC143C', '#1A1A2E', '#E94560'],
      pattern: 'Territorial patrolling with sudden direction changes',
      personality: 'Protective, distinctive, memorable',
    },
  ],
};

// Micro-interactions
export const microInteractionsData = {
  title: 'Micro-interactions',
  subtitle: 'Small animations that make big impressions',
  interactions: [
    {
      trigger: 'Button Hover',
      animation: 'Wings flutter rapidly 3 times',
      feel: 'Playful, encouraging',
    },
    {
      trigger: 'Success State',
      animation: 'Butterfly emerges and does a victory loop',
      feel: 'Celebratory, rewarding',
    },
    {
      trigger: 'Loading',
      animation: 'Chrysalis wiggles, then butterfly emerges',
      feel: 'Anticipatory, satisfying',
    },
    {
      trigger: 'Error',
      animation: 'Butterfly looks confused, points to solution',
      feel: 'Friendly, helpful',
    },
    {
      trigger: 'Scroll',
      animation: 'Leaves rustle in scroll direction',
      feel: 'Responsive, immersive',
    },
    {
      trigger: 'Focus Input',
      animation: 'Flower blooms around the input field',
      feel: 'Welcoming, guiding',
    },
  ],
};

// Technical Notes
export const technicalData = {
  title: 'Technical Approach',
  stack: 'React + Framer Motion + Custom Hooks',
  techniques: [
    'Custom spring physics tuned to natural butterfly movement',
    'Shared layout animations for seamless transitions',
    'Gesture-based interactions (swipe, pinch, long-press)',
    'Reduced motion support for accessibility',
  ],
  performance: [
    'GPU-accelerated transforms for 60fps animations',
    'Lazy-loaded animation libraries',
    'Intersection Observer for scroll-triggered effects',
    'Memoization of animation configs',
  ],
};

export default {
  heroData,
  motionPatternsData,
  butterfliesData,
  microInteractionsData,
  technicalData,
};
