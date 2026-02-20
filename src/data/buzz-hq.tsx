// ============================================
// Buzz HQ - Experimental Bumblebee Playground
// A UX playground showcasing cursor interactions and bumblebee behaviors
// ============================================

// Hero Section
export const heroData = {
  title: (
    <>
      <span className="font-extrabold">Buzz HQ: </span>
      <span className="font-normal">The Bumblebee Experience Lab</span>
    </>
  ),
  description: (
    <>
      <p>
        Welcome to Buzz HQ - an experimental playground exploring human-bumblebee 
        interactions in the digital space. This project showcases creative UX patterns 
        inspired by real bumblebee behaviors.
      </p>
      <p className="mt-4">
        Move your cursor around and watch Bella the bumblebee investigate, 
        pollinate, and explore your screen!
      </p>
    </>
  ),
  tags: [
    { label: 'Cursor Interaction' },
    { label: 'UX Experiments' },
    { label: 'HCI Research' },
    { label: 'Playful UX' },
  ],
};

// Bee Behaviors Showcase
export const behaviorsData = {
  title: 'Bumblebee Behaviors',
  subtitle: 'Inspired by real bumblebee research for innovative UX patterns',
  behaviors: [
    {
      name: 'Cursor Investigation',
      description: 'After 3 seconds of cursor inactivity, Bella becomes curious and approaches to investigate.',
      icon: '🔍',
      interaction: 'Stop moving your cursor for 3 seconds',
    },
    {
      name: 'Pollination Trail',
      description: 'As Bella flies, she leaves a trail of golden "pollen" dots - a visual metaphor for user journey tracking.',
      icon: '✨',
      interaction: 'Move your cursor around the page',
    },
    {
      name: 'Content Landing',
      description: 'Bella occasionally lands on UI elements to "explore" - think hover states with personality.',
      icon: '🌸',
      interaction: 'Wait 15-20 seconds and watch her land',
    },
    {
      name: 'Quick Escape',
      description: 'Click on Bella when she\'s visible to scare her away - she\'ll buzz off in a random direction!',
      icon: '🐝',
      interaction: 'Click on the bee to shoo her away',
    },
  ],
};

// Stats Section - Conservation Impact
export const statsData = {
  title: 'Conservation Impact',
  subtitle: 'Making a difference, one pollinator at a time',
  metrics: [
    { value: 15000, suffix: '+', label: 'Gardens Registered' },
    { value: 250000, suffix: '+', label: 'Plants Planted' },
    { value: 89, suffix: '%', label: 'User Engagement' },
    { value: 4.9, suffix: '★', label: 'App Store Rating' },
  ],
};

// Features Section - Spotlight Cards
export const featuresData = {
  title: 'UX Experiments',
  subtitle: 'Innovative interaction patterns inspired by nature',
  features: [
    {
      title: 'Curiosity-Driven UI',
      description: 'Elements that respond to user curiosity rather than explicit actions. The bee investigates when users pause - a pattern for attention-grabbing without interruption.',
      highlight: 'Idle → Curiosity → Engagement',
    },
    {
      title: 'Ambient Feedback',
      description: 'Non-intrusive visual feedback through the pollination trail. Users can see their digital footprint without overwhelming notifications.',
      highlight: 'Passive • Informative • Delightful',
    },
    {
      title: 'Character Attachment',
      description: 'The bee creates emotional connection. Users develop a relationship with the interface through shared experiences with Bella.',
      highlight: 'Personality • Playfulness • Connection',
    },
    {
      title: 'Safe Exit Patterns',
      description: 'Clicking the bee "shoos" it away - giving users control and a sense of agency. The bee always returns, but on the user\'s terms.',
      highlight: 'Control • Agency • Trust',
    },
  ],
};

// Design Insights
export const insightsData = {
  title: 'Design Insights',
  insights: [
    {
      title: 'Nature Informs Technology',
      detail: 'Bumblebees have evolved efficient navigation and curiosity behaviors over millions of years. We can learn from these patterns for more intuitive interfaces.',
    },
    {
      title: 'Playfulness Increases Engagement',
      detail: 'Users spend 40% more time on interfaces with interactive characters and micro-delights like the pollination trail.',
    },
    {
      title: 'Permission-Based Delight',
      detail: 'The bee only approaches after users are idle - respecting attention and only engaging when there\'s natural opportunity.',
    },
  ],
};

// Technical Notes
export const technicalData = {
  title: 'Technical Approach',
  techStack: 'React + Framer Motion + Custom Hooks',
  techniques: [
    'useAnimation for smooth bee positioning',
    'useRef for performance-optimized state',
    'setInterval for idle detection',
    'getBoundingClientRect for landing targets',
  ],
}

export default {
  heroData,
  behaviorsData,
  statsData,
  featuresData,
  insightsData,
  technicalData,
};
