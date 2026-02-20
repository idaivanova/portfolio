// ============================================
// NeuralSync Case Study Data
// Multimodal AI Workspace - Mock Project
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: 'http://localhost:3845/assets/neuralsync-hero.png',
    alt: 'NeuralSync Workspace Interface',
    width: 450,
    height: 280,
  },
  title: (
    <>
      <span className="font-extrabold">NeuralSync: </span>
      <span className="font-normal">Multimodal AI Workspace for Creative Professionals</span>
    </>
  ),
  description: (
    <>
      <p>
        NeuralSync is an AI-powered workspace that seamlessly integrates text, voice, image, 
        and code interactions into a unified creative environment. Built for designers, 
        writers, and developers who work across multiple modalities.
      </p>
      <p className="mt-4">
        The challenge was to design an intuitive interface that handles complex AI interactions 
        while maintaining clarity and reducing cognitive load during creative workflows.
      </p>
    </>
  ),
  tags: [
    { label: 'Multimodal AI' },
    { label: 'LLM Integration' },
    { label: 'Voice UI' },
    { label: 'Design System' },
  ],
};

// Project Scope and Results
export const projectScopeData = {
  scope: {
    items: [
      { label: 'My role', value: 'Lead UX/UI Designer, AI Interaction Designer' },
      { label: 'Tools', value: 'Figma, Framer, LangChain, OpenAI API' },
      { 
        label: 'Skills involved', 
        value: 'AI interaction design, voice UI, multimodal interfaces, LLM prompt engineering, real-time feedback systems' 
      },
      { label: 'Team', value: '3 engineers, 1 ML specialist, 1 PM' },
      { label: 'Time frame', value: '3 months' },
    ],
  },
  results: {
    content: (
      <div className="space-y-4">
        <p>Unified workspace supporting 4 interaction modes (text, voice, image, code)</p>
        <p>AI response time under 200ms for 95% of interactions</p>
        <p>40% reduction in context-switching for creative workflows</p>
        <p>Beta users reported 3.5x faster content creation</p>
      </div>
    ),
    metrics: [
      { value: '4', label: 'Interaction Modes' },
      { value: '<200ms', label: 'AI Response Time' },
      { value: '40%', label: 'Less Context Switching' },
      { value: '3.5x', label: 'Faster Creation' },
    ],
  },
};

// Problem Statement
export const problemData = {
  title: 'The Challenge',
  description: [
    'Creative professionals increasingly use AI tools, but they face a fragmented experience:',
  ],
  challenges: [
    {
      title: 'Tool Fragmentation',
      description: 'Switching between 5-7 different AI tools daily (ChatGPT, Midjourney, GitHub Copilot, etc.)',
      icon: 'SplitIcon',
    },
    {
      title: 'Context Loss',
      description: 'AI assistants don\'t retain project context across different modalities and sessions',
      icon: 'UnlinkIcon',
    },
    {
      title: 'Cognitive Overhead',
      description: 'Managing multiple conversations, prompt histories, and output formats creates mental fatigue',
      icon: 'BrainIcon',
    },
    {
      title: 'Output Integration',
      description: 'Getting AI outputs into actual work requires manual copy-paste and formatting',
      icon: 'CopyIcon',
    },
  ],
};

// Solution Overview
export const solutionData = {
  title: 'The Solution',
  subtitle: 'A unified AI workspace with multimodal intelligence',
  features: [
    {
      title: 'Adaptive Input Modalities',
      description: 'Seamlessly switch between typing, speaking, or uploading images without changing context',
      image: {
        src: 'http://localhost:3845/assets/neuralsync-modalities.png',
        alt: 'Input modality switcher interface',
        width: 400,
        height: 250,
      },
    },
    {
      title: 'Project Context Memory',
      description: 'AI remembers your project goals, preferences, and previous iterations across all sessions',
      image: {
        src: 'http://localhost:3845/assets/neuralsync-memory.png',
        alt: 'Context memory dashboard',
        width: 400,
        height: 250,
      },
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work alongside AI with live previews, suggestions, and the ability to steer outputs mid-generation',
      image: {
        src: 'http://localhost:3845/assets/neuralsync-collab.png',
        alt: 'Real-time collaboration view',
        width: 400,
        height: 250,
      },
    },
  ],
};

// User Research
export const researchData = {
  title: 'User Research Insights',
  methods: [
    {
      method: 'User Interviews',
      participants: '24 creative professionals',
      findings: [
        'Average user switches between 6.2 AI tools per day',
        '78% report frustration with losing context between sessions',
        'Voice input preferred for brainstorming (62% of users)',
      ],
    },
    {
      method: 'Diary Study',
      participants: '2 weeks, 15 participants',
      findings: [
        'Context switching costs 15-23 minutes of productive time per session',
        'Manual formatting of AI outputs takes 8-12 minutes per task',
        'Users want AI to "remember" their style and preferences',
      ],
    },
    {
      method: 'Task Analysis',
      participants: 'Comparative study of 5 AI tools',
      findings: [
        'Average 4.7 clicks to complete common AI tasks',
        'No tool supports seamless modality switching',
        'Output integration is consistently the weakest UX point',
      ],
    },
  ],
};

// Key Features
export const featuresData = {
  title: 'Key Features',
  items: [
    {
      title: 'Multi-Modal Input Hub',
      icon: 'MicIcon',
      description: 'One input area that accepts text, voice, images, code snippets, or file uploads. AI automatically detects the best response mode.',
      highlights: [
        'Voice transcription with speaker identification',
        'Image analysis with text extraction (OCR)',
        'Code detection with syntax-aware responses',
        'Smart file type recognition',
      ],
    },
    {
      title: 'Living Context Panel',
      icon: 'EyeIcon',
      description: 'Persistent side panel showing active project context, goals, and constraints. AI uses this to ground all responses.',
      highlights: [
        'Project brief and requirements',
        'Style preferences and tone settings',
        'Related conversations and iterations',
        'Export formats and integration targets',
      ],
    },
    {
      title: 'Conversational Workspaces',
      icon: 'MessageSquareIcon',
      description: 'Organize AI interactions into project-based workspaces with threaded conversations and version history.',
      highlights: [
        'Thread branching for exploring alternatives',
        'Version comparison and rollback',
        'Export to Figma, VS Code, Notion, etc.',
        'Share workspaces with team members',
      ],
    },
    {
      title: 'Voice Command System',
      icon: 'HeadphonesIcon',
      description: 'Native voice commands for hands-free operation: "expand this section", "make it more formal", "show me alternatives".',
      highlights: [
        '30+ voice commands for common actions',
        'Natural language processing for custom commands',
        'Voice feedback confirmations',
        'Mute/quick pause with hotkey',
      ],
    },
  ],
};

// Design Process
export const processData = {
  title: 'Design Process',
  phases: [
    {
      phase: 'Discovery',
      duration: '2 weeks',
      activities: [
        'Competitive analysis of 12 AI tools',
        'User interviews with 24 creative professionals',
        'Contextual inquiry of AI-assisted workflows',
        'JTBD framework workshops',
      ],
    },
    {
      phase: 'Concept Development',
      duration: '3 weeks',
      activities: [
        'Rapid prototyping of interaction patterns',
        'Wizard-of-Oz testing for voice commands',
        'LLM prompt engineering for consistent outputs',
        'Information architecture for workspace organization',
      ],
    },
    {
      phase: 'Iterative Design',
      duration: '4 weeks',
      activities: [
        'Weekly usability testing with clickable prototypes',
        'A/B testing of AI response presentation formats',
        'Voice command accuracy optimization',
        'Accessibility audit and WCAG 2.1 AA compliance',
      ],
    },
    {
      phase: 'Implementation & Refinement',
      duration: '6 weeks',
      activities: [
        'Close collaboration with ML engineering team',
        'Real-time AI response testing with actual models',
        'Performance optimization for <200ms responses',
        'Beta testing with 50 users over 2 weeks',
      ],
    },
  ],
};

// Technical Implementation
export const technicalData = {
  title: 'Technical Implementation',
  architecture: {
    frontend: 'React + TypeScript + Tailwind CSS',
    backend: 'Node.js + FastAPI (Python for ML)',
    ai: 'GPT-4, Claude, Whisper, CLIP',
    realtime: 'WebSockets for live AI streaming',
  },
  challenges: [
    {
      challenge: 'Latency Management',
      solution: 'Implemented streaming responses with progressive rendering, showing AI "thinking" states and partial outputs to reduce perceived wait time',
    },
    {
      challenge: 'Context Preservation',
      solution: 'Built vector database storage for conversation embeddings, enabling semantic search and context retrieval across sessions',
    },
    {
      challenge: 'Multimodal Integration',
      solution: 'Created unified abstraction layer that normalizes all input types into a common representation before AI processing',
    },
  ],
};

// Outcome and Impact
export const outcomeData = {
  title: 'Outcome & Impact',
  metrics: [
    { value: '3.5x', label: 'Faster Content Creation', description: 'Beta users completed tasks 3.5x faster compared to using separate AI tools' },
    { value: '92%', label: 'User Satisfaction', description: 'NPS score of 72, significantly above SaaS industry average of 41' },
    { value: '40%', label: 'Reduced Context Switching', description: 'Eye-tracking studies showed 40% less task-switching behavior' },
    { value: '<200ms', label: 'AI Response Time', description: '95th percentile response time for all AI interactions' },
  ],
  testimonials: [
    {
      quote: "NeuralSync completely changed how I work with AI. Instead of juggling five different tools, I have one intelligent workspace that understands my entire project.",
      author: 'Sarah Chen',
      role: 'Product Designer at TechCorp',
    },
    {
      quote: "The voice commands are a game-changer. I can brainstorm while walking, capture ideas instantly, and the AI remembers everything for when I sit down to work.",
      author: 'Marcus Rodriguez',
      role: 'Content Strategist',
    },
  ],
};

// Export all data
export default {
  heroData,
  projectScopeData,
  problemData,
  solutionData,
  researchData,
  featuresData,
  processData,
  technicalData,
  outcomeData,
};
