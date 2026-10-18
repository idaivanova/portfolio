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
  subtitle: 'Patterns I borrowed from actual bumblebees',
  behaviors: [
    {
      name: 'Cursor Investigation',
      description: 'After 3 seconds of cursor inactivity, Bella becomes curious and approaches to investigate.',
      icon: '🔍',
      interaction: 'Stop moving your cursor for 3 seconds',
    },
    {
      name: 'Pollination Trail',
      description: 'She leaves a trail of golden "pollen" dots as she flies, which is my excuse to draw the user&rsquo;s path across the page.',
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

// Stats Section - Experiment Facts
export const statsData = {
  title: 'Experiment Facts',
  subtitle: 'A UX playground, not a real product — here is what actually happened',
  metrics: [
    { value: 1, suffix: '', label: 'Bee character' },
    { value: 4, suffix: '', label: 'Interaction behaviors' },
    { value: 3, suffix: 's', label: 'Idle time before she investigates' },
    { value: 0, suffix: '', label: 'Real gardens impacted' },
  ],
};

// Features Section - Spotlight Cards
export const featuresData = {
  title: 'UX Experiments',
  subtitle: 'Interaction patterns lifted straight from nature',
  features: [
    {
      title: 'Curiosity-Driven UI',
      description: 'Elements that react when you pause instead of when you click. Attention without another popup asking for it.',
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
      title: 'Nature Sets the Rules',
      detail: 'Bumblebees worked out efficient navigation and curiosity long before we had interfaces to copy. I just watched what they do.',
    },
    {
      title: 'Playfulness Earns Attention',
      detail: 'Interfaces with a character in them tend to hold attention longer. The pollen trail gives people a small reason to keep moving.',
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
