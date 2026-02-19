// ============================================
// Bumblebee Conservation App - Playful UX Demo
// Environmental awareness meets delightful UX
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: 'http://localhost:3845/assets/bumblebee-app-hero.png',
    alt: 'Bumblebee Conservation App Interface',
    width: 450,
    height: 280,
  },
  title: (
    <>
      <span className="font-extrabold">Buzz: </span>
      <span className="font-normal">Making Conservation Adorable</span>
    </>
  ),
  description: (
    <>
      <p>
        Buzz is a playful exploration into how environmental apps can be both educational 
        and delightful. By centering the experience around our fuzzy friends - bumblebees - 
        we transform conservation into an engaging, heartwarming journey.
      </p>
      <p className="mt-4">
        Every interaction buzzes with life. Every achievement helps real pollinators. 
        Every user becomes a guardian of gardens.
      </p>
    </>
  ),
  tags: [
    { label: 'Gamification' },
    { label: 'Environmental UX' },
    { label: 'Character Design' },
    { label: 'Social Impact' },
  ],
};

// Project Scope and Results
export const projectScopeData = {
  scope: {
    items: [
      { label: 'My role', value: 'UX Designer, UI Designer, Interaction Designer' },
      { label: 'Tools', value: 'Figma, Framer Motion, Lottie, Procreate' },
      { 
        label: 'Skills involved', 
        value: 'character animation, gamification, behavior design, environmental storytelling' 
      },
      { label: 'Team', value: 'Concept project with environmental consultant input' },
      { label: 'Time frame', value: '10 days of buzz-worthy design' },
    ],
  },
  results: {
    content: (
      <div className="space-y-4">
        <p>15 unique bumblebee characters with distinct personalities</p>
        <p>Gamified conservation tasks with real-world impact tracking</p>
        <p>Playful haptic feedback mimicking bee wing vibrations</p>
        <p>Community garden mapping with neighbor collaboration features</p>
      </div>
    ),
    metrics: [
      { value: '15', label: 'Bee Characters' },
      { value: '8', label: 'Gamified Challenges' },
      { value: '50+', label: 'Micro-interactions' },
      { value: '∞', label: 'Buzz Factor' },
    ],
  },
};

// App Features
export const featuresData = {
  title: 'Buzz-Worthy Features',
  items: [
    {
      title: 'Your Hive Dashboard',
      description: 'Personal conservation hub showing your impact, collected bees, and garden progress',
      highlights: [
        'Animated hive showing activity level',
        'Pollinator counter for tracked contributions',
        'Daily buzz-worthy achievements',
      ],
    },
    {
      title: 'Bee Discovery Mode',
      description: 'AR-enabled bumblebee identification using your phone camera',
      highlights: [
        'Point at real bees to identify species',
        'Cute character representations unlock in collection',
        'Educational facts delivered by animated bees',
      ],
    },
    {
      title: 'Garden Planner',
      description: 'Design pollinator-friendly gardens with drag-and-drop plant placement',
      highlights: [
        'Seasonal bloom calendars',
        'Bee-attractiveness ratings for each plant',
        'AR preview of mature garden',
      ],
    },
    {
      title: 'Community Pollinator Map',
      description: 'See nearby gardens and contribute to local conservation efforts',
      highlights: [
        'Heat map of pollinator activity',
        'Certified Bee-Friendly Garden badges',
        'Neighborhood challenges and leaderboards',
      ],
    },
  ],
};

// Character System
export const charactersData = {
  title: 'Meet the Bee Squad',
  subtitle: 'Each bumblebee has a unique personality and conservation specialty',
  characters: [
    {
      name: 'Bella the Bumble',
      role: 'Your Guide',
      personality: 'Enthusiastic, encouraging, slightly clumsy',
      specialty: 'Onboarding & tutorials',
      animation: 'Bounces when talking, leaves sparkle trail',
    },
    {
      name: 'Professor Buzzworth',
      role: 'Education Expert',
      personality: 'Wise, patient, wears tiny glasses',
      specialty: 'Facts & environmental science',
      animation: 'Flies in circles while thinking, adjusts glasses',
    },
    {
      name: 'Daisy the Daredevil',
      role: 'Challenge Host',
      personality: 'Adventurous, competitive, always buzzing with energy',
      specialty: 'Gamification & achievements',
      animation: 'Loop-de-loops, speed trails',
    },
    {
      name: 'Honey the Helper',
      role: 'Community Manager',
      personality: 'Warm, nurturing, remembers everyone\'s names',
      specialty: 'Social features & collaboration',
      animation: 'Gentle figure-8 dance, warm glow aura',
    },
  ],
};

// Gamification System
export const gamificationData = {
  title: 'Conservation Adventures',
  mechanics: [
    {
      type: 'Daily Buzz',
      description: 'Quick daily tasks that take 2-5 minutes',
      examples: [
        'Photograph a pollinator in your area',
        'Learn about one native plant species',
        'Share a bee fact with a friend',
      ],
      reward: '10-25 honey points + random bee character encounter',
    },
    {
      type: 'Garden Quests',
      description: 'Multi-step challenges for garden improvement',
      examples: [
        'Plant 3 bee-friendly flowers',
        'Create a water station for pollinators',
        'Remove pesticides from your garden',
      ],
      reward: '100-300 honey points + rare bee characters',
    },
    {
      type: 'Seasonal Festivals',
      description: 'Community-wide events tied to real-world seasons',
      examples: [
        'Spring Bloom Celebration',
        'Summer Pollinator Party',
        'Fall Harvest for Bees',
        'Winter Planning Challenge',
      ],
      reward: 'Exclusive seasonal bees + community badge',
    },
    {
      type: 'Neighborhood Goals',
      description: 'Collaborative challenges with nearby users',
      examples: [
        'Collectively plant 1000 bee-friendly plants',
        'Identify 50 unique pollinator species',
        'Certify 10 Bee-Friendly Gardens',
      ],
      reward: 'Everyone gets honey points + community monument',
    },
  ],
};

// Micro-interactions
export const microInteractionsData = {
  title: 'Playful Touches',
  interactions: [
    {
      trigger: 'App launch',
      animation: 'Bella flies across screen, leaving dotted trail that becomes UI',
    },
    {
      trigger: 'Pull to refresh',
      animation: 'Bees carry the refresh indicator, wobbling under weight',
    },
    {
      trigger: 'Completing a task',
      animation: 'Confetti of flower petals with happy bee dance',
    },
    {
      trigger: 'Reaching new level',
      animation: 'Hive expands, more bees appear and celebrate',
    },
    {
      trigger: 'Inactivity (5s)',
      animation: 'Bees peek from behind UI elements, curious about user',
    },
    {
      trigger: 'Error state',
      animation: 'Bee looks confused, then politely points to correct path',
    },
    {
      trigger: 'Loading state',
      animation: 'Bees carrying progress bar segments, flying into place',
    },
    {
      trigger: 'Toggle switch',
      animation: 'Bee sits on toggle, wings buzz to help it move',
    },
  ],
};

// Visual Design
export const visualData = {
  title: 'Visual Language',
  palette: [
    { name: 'Honey Gold', hex: '#FFB800', usage: 'Primary action, highlights' },
    { name: 'Bumblebee Yellow', hex: '#FFD54F', usage: 'Backgrounds, accents' },
    { name: 'Pollen Orange', hex: '#FFA726', usage: 'Warnings, warm highlights' },
    { name: 'Lavender Field', hex: '#B39DDB', usage: 'Calming backgrounds' },
    { name: 'Meadow Green', hex: '#81C784', usage: 'Success, growth indicators' },
    { name: 'Bee Stripe Black', hex: '#424242', usage: 'Text, strong accents' },
  ],
  typography: {
    headings: 'Quicksand - Rounded, friendly, approachable',
    body: 'Nunito - Highly readable with soft edges',
    numbers: 'Fredoka - Playful for scores and stats',
  },
};

// Accessibility
export const accessibilityData = {
  title: 'Inclusive by Design',
  features: [
    'Reduced motion mode: bees hover gently instead of flying vigorously',
    'Color-blind friendly: all information encoded in shape + color',
    'Screen reader optimized: bees introduce themselves with personality',
    'Large touch targets: minimum 48x48px for all interactive elements',
    'Haptic feedback toggle: wing vibration feedback adjustable by user',
  ],
  philosophy: 'Playful doesn\'t mean exclusive - everyone deserves delightful conservation',
};

// Impact Tracking
export const impactData = {
  title: 'Real-World Impact',
  tracking: [
    {
      metric: 'Plants Committed',
      description: 'Users pledge to plant bee-friendly species, tracked with photo verification',
      goal: '1 million plants by end of 2025',
    },
    {
      metric: 'Pesticide Reduction',
      description: 'Users commit to reducing/eliminating harmful pesticides',
      goal: '10,000 pesticide-free gardens',
    },
    {
      metric: 'Pollinator Sightings',
      description: 'Citizen science data contributed to conservation research',
      goal: '100,000 documented sightings',
    },
    {
      metric: 'Education Outreach',
      description: 'Bee facts shared and conservation awareness spread',
      goal: '1 million people educated',
    },
  ],
};

// Technical Notes
export const technicalData = {
  title: 'Playful Tech Stack',
  frameworks: 'React Native + Framer Motion + Lottie + ARKit',
  highlights: [
    '60fps character animations using GPU acceleration',
    'AR bee identification with CoreML integration',
    'Real-time sync for community challenges',
    'Offline-first for garden planning in remote areas',
  ],
};

// Lessons Learned
export const lessonsData = {
  title: 'Design Insights',
  insights: [
    {
      lesson: 'Character-Driven UX Builds Connection',
      detail: 'Users form emotional bonds with bee characters, increasing app retention',
    },
    {
      lesson: 'Micro-interactions Add Up',
      detail: 'Hundreds of tiny delightful moments create memorable experiences',
    },
    {
      lesson: 'Gamification Must Have Purpose',
      detail: 'Points and badges only work when tied to real conservation impact',
    },
    {
      lesson: 'Accessibility Enhances Playfulness',
      detail: 'Constraints of reduced motion mode led to creative alternative animations',
    },
  ],
};

// Export all data
export default {
  heroData,
  projectScopeData,
  featuresData,
  charactersData,
  gamificationData,
  microInteractionsData,
  visualData,
  accessibilityData,
  impactData,
  technicalData,
  lessonsData,
};
