// ============================================
// Butterfly Garden Explorer - Playful UX Demo
// A whimsical case study showcasing motion design & playful UX
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: '/assets/flutter/placeholder.svg',
    alt: 'Butterfly Garden Explorer Interface',
    width: 450,
    height: 280,
  },
  title: (
    <>
      <span className="font-extrabold">Flutter: </span>
      <span className="font-normal">A Playful Journey Through Butterfly Gardens</span>
    </>
  ),
  description: (
    <>
      <p>
        Flutter is an exploratory UX project that brings butterfly gardens to life through 
        playful animations, delightful micro-interactions, and immersive storytelling. 
        Built to experiment with motion design and nature-inspired interfaces.
      </p>
      <p className="mt-4">
        Every interaction flutters, every transition floats, and every discovery blooms 
        with delightful animations that mirror the grace of butterflies in nature.
      </p>
    </>
  ),
  tags: [
    { label: 'Motion Design' },
    { label: 'Playful UX' },
    { label: 'Nature-Inspired' },
    { label: 'Micro-interactions' },
  ],
};

// Project Scope and Results
export const projectScopeData = {
  scope: {
    items: [
      { label: 'My role', value: 'UX Designer, Motion Designer, Creative Developer' },
      { label: 'Tools', value: 'Framer Motion, React Bits, Figma, Lottie' },
      { 
        label: 'Skills involved', 
        value: 'motion design, playful UX patterns, spring physics, gesture interactions, nature-inspired design' 
      },
      { label: 'Team', value: 'Passion project with collaborative input' },
      { label: 'Time frame', value: '2 weeks of playful experimentation' },
    ],
  },
  results: {
    content: (
      <div className="space-y-4">
        <p>12 unique butterfly species with individual flight patterns</p>
        <p>30+ playful micro-interactions throughout the experience</p>
        <p>Nature-inspired spring animations with custom physics</p>
        <p>Gamified discovery encouraging exploration and curiosity</p>
      </div>
    ),
    metrics: [
      { value: '12', label: 'Butterfly Species' },
      { value: '30+', label: 'Micro-interactions' },
      { value: '60fps', label: 'Smooth Animations' },
      { value: '100%', label: 'Delight Factor' },
    ],
  },
};

// Design Concept
export const conceptData = {
  title: 'Design Philosophy',
  subtitle: 'Bringing Nature\'s Grace to Digital Interactions',
  principles: [
    {
      title: 'Float, Don\'t Slide',
      description: 'UI elements flutter like butterfly wings instead of rigid sliding transitions',
      icon: 'WindIcon',
    },
    {
      title: 'Bloom on Interaction',
      description: 'Buttons and cards bloom open like flowers when activated',
      icon: 'FlowerIcon',
    },
    {
      title: 'Flight Path Navigation',
      description: 'Page transitions follow organic curved paths, mimicking butterfly flight',
      icon: 'RouteIcon',
    },
    {
      title: 'Seasonal Themes',
      description: 'Interface changes subtly with real-world seasons and pollinator activity',
      icon: 'SunIcon',
    },
  ],
};

// Playful Features
export const featuresData = {
  title: 'Playful Interactions',
  items: [
    {
      title: 'Butterfly Hover Effects',
      description: 'Hover over any card and watch butterflies flutter around it, revealing additional information',
      motion: 'Butterflies circle the element, leaving subtle sparkle trails',
    },
    {
      title: 'Pollen Particle System',
      description: 'Scroll triggers floating pollen particles that drift across the screen',
      motion: 'Parallax floating particles with gentle rotation and fade',
    },
    {
      title: 'Flower Bloom Loading',
      description: 'Loading states show flowers blooming instead of boring spinners',
      motion: 'Petal-by-petal bloom animation with easing',
    },
    {
      title: 'Caterpillar Progress',
      description: 'Progress bars show a caterpillar transforming as it moves along a leaf',
      motion: 'Crawling animation with metamorphosis transformation',
    },
    {
      title: 'Leaf Page Transitions',
      description: 'Page changes feel like gently falling leaves with natural physics',
      motion: 'Gravity + wind simulation with organic rotation',
    },
  ],
};

// Motion Patterns
export const motionData = {
  title: 'Motion Design Patterns',
  patterns: [
    {
      name: 'The Flutter',
      usage: 'Button hovers, card reveals',
      physics: 'Spring: stiffness 400, damping 12',
      duration: '400ms',
    },
    {
      name: 'The Float',
      usage: 'Modal entrances, dropdowns',
      physics: 'Smooth easing with vertical drift',
      duration: '600ms',
    },
    {
      name: 'The Bloom',
      usage: 'Expanding cards, detail views',
      physics: 'Scale from 0.8 to 1 with overshoot',
      duration: '500ms',
    },
    {
      name: 'The Dance',
      usage: 'Success states, celebrations',
      physics: 'Gentle oscillation on multiple axes',
      duration: '800ms loop',
    },
  ],
};

// Color Palette
export const colorData = {
  title: 'Nature-Inspired Palette',
  colors: [
    { name: 'Morning Sky', hex: '#E0F2FE', usage: 'Backgrounds, airy spaces' },
    { name: 'Lavender Mist', hex: '#F3E8FF', usage: 'Secondary backgrounds' },
    { name: 'Nectar Gold', hex: '#FDE047', usage: 'Accents, highlights' },
    { name: 'Petal Pink', hex: '#FCE7F3', usage: 'Interactive elements' },
    { name: 'Leaf Green', hex: '#86EFAC', usage: 'Success states, growth' },
    { name: 'Monarch Orange', hex: '#FB923C', usage: 'Primary CTAs' },
  ],
};

// User Delight Moments
export const delightData = {
  title: 'Moments of Delight',
  moments: [
    {
      trigger: 'First page load',
      animation: 'Butterflies emerge from behind content, fluttering across screen',
      emotion: 'Wonder and curiosity',
    },
    {
      trigger: 'Completing a form',
      animation: 'Garden blooms with flowers appearing one by one',
      emotion: 'Achievement and joy',
    },
    {
      trigger: 'Scrolling to bottom',
      animation: 'All butterflies return and form a thank you message',
      emotion: 'Surprise and appreciation',
    },
    {
      trigger: 'Inactivity (10s)',
      animation: 'Butterflies land on cursor, exploring the screen edge',
      emotion: 'Playfulness, re-engagement',
    },
    {
      trigger: 'Error state',
      animation: 'Butterflies look confused, then gently point in right direction',
      emotion: 'Amusement instead of frustration',
    },
  ],
};

// Technical Implementation
export const technicalData = {
  title: 'Technical Approach',
  frameworks: 'React + Framer Motion + React Bits',
  techniques: [
    'Shared layout animations for seamless transitions',
    'Custom spring physics tuned to butterfly wing beats',
    'Gesture-based interactions (swipe, pinch, long-press)',
    'Reduced motion support for accessibility',
  ],
  performance: [
    'GPU-accelerated transforms for 60fps',
    'Lazy-loaded animations for initial page speed',
    'Intersection Observer for scroll-triggered effects',
  ],
};

// Lessons Learned
export const lessonsData = {
  title: 'What We Learned',
  insights: [
    {
      insight: 'Motion Should Serve Purpose',
      detail: 'Every animation should guide attention or provide feedback, not just distract',
    },
    {
      insight: 'Performance is Critical',
      detail: 'Even the most beautiful animation breaks trust if it causes lag',
    },
    {
      insight: 'Accessibility First',
      detail: 'Reduced motion preferences must be respected without losing meaning',
    },
    {
      insight: 'Less is More',
      detail: 'Playful doesn\'t mean chaotic - restraint creates elegance',
    },
  ],
};

// Export all data
export default {
  heroData,
  projectScopeData,
  conceptData,
  featuresData,
  motionData,
  colorData,
  delightData,
  technicalData,
  lessonsData,
};
