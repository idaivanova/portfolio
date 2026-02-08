// ============================================
// Pimcore Platform Case Study Data
// All content data for the Pimcore case study page
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: 'http://localhost:3845/assets/pimcore-hero.png',
    alt: 'Pimcore Platform Preview',
    width: 350,
    height: 212,
  },
  title: (
    <>
      <span className="font-extrabold">Enterprise PIM Platform: </span>
      <span className="font-normal">UX Redesign for Complex Data Management</span>
    </>
  ),
  description: (
    <>
      <p>
        Pimcore is an enterprise-grade Product Information Management (PIM) platform
        that helps organizations centralize and manage complex product data across
        multiple channels and markets.
      </p>
      <p className="mt-4">
        The challenge was to redesign the platform's user experience to reduce
        complexity for non-technical users while maintaining the power and flexibility
        that enterprise clients require for managing millions of product attributes.
      </p>
    </>
  ),
  tags: [
    { label: 'UX Research' },
    { label: 'Enterprise UX' },
    { label: 'Data Visualization' },
  ],
};

// Project Scope and Results
export const projectScopeData = {
  scope: {
    items: [
      { label: 'My role', value: 'UX Design Lead, Research' },
      { label: 'Tools', value: 'Figma, Miro, Confluence' },
      { label: 'Skills involved', value: 'user research, enterprise UX, data visualization, design systems, stakeholder management' },
      { label: 'Team', value: 'collaboration with Product Managers, Developers, and Data Engineers' },
      { label: 'Time frame', value: 'six months' },
    ],
  },
  results: [
    'Reduced task completion time by 40% for content managers',
    'Improved user satisfaction scores from 5.2 to 8.1 out of 10',
    'Decreased training time for new users by 60%',
    'Increased daily active users by 25% within the first quarter',
  ],
};

// Contribution Section
export const contributionData = {
  label: 'CONTRIBUTION',
  title: 'Simplifying complexity without losing power',
  description:
    'Through extensive user research with content managers, data stewards, and administrators, I identified critical pain points in the existing interface. Users struggled with information overload, complex navigation patterns, and inconsistent interactions across different modules.',
  directionPoints: [
    'Streamline navigation and information architecture',
    'Create role-based dashboards for different user types',
    'Implement progressive disclosure for complex data structures',
    'Design a scalable component system for consistent UX',
  ],
};

// Key Features
export const keyFeaturesData = {
  label: 'KEY FEATURES',
  title: 'Core platform capabilities',
  description:
    'The redesigned platform focuses on making complex data management intuitive and efficient for enterprise users.',
  features: [
    {
      title: 'Smart Data Grid',
      description:
        'An advanced data grid with customizable columns, filters, and bulk operations. Users can save views and share configurations with team members.',
    },
    {
      title: 'Visual Workflow Builder',
      description:
        'A drag-and-drop interface for creating and managing data workflows. Non-technical users can automate complex data processes without writing code.',
    },
    {
      title: 'Contextual Navigation',
      description:
        'An adaptive navigation system that shows relevant actions and related data based on the user\'s current context and role.',
    },
    {
      title: 'Intelligent Search',
      description:
        'AI-powered search with filters, saved searches, and recent items. Users can quickly find products across millions of records.',
    },
    {
      title: 'Collaboration Hub',
      description:
        'Built-in commenting, annotations, and task assignment features that enable teams to collaborate directly within the platform.',
    },
    {
      title: 'Audit & Versioning',
      description:
        'Comprehensive change tracking with visual diff views, allowing users to compare versions and understand data evolution over time.',
    },
  ],
};

// Design Process
export const designProcessData = {
  label: 'DESIGN PROCESS',
  title: 'From research to implementation',
  description:
    'A structured approach to tackling enterprise UX challenges, balancing technical constraints with user needs.',
  steps: [
    {
      phase: 'Discovery',
      activities: 'User interviews, heuristic evaluation, competitive analysis',
    },
    {
      phase: 'Definition',
      activities: 'Persona development, journey mapping, information architecture',
    },
    {
      phase: 'Design',
      activities: 'Wireframing, prototyping, design system creation',
    },
    {
      phase: 'Testing',
      activities: 'Usability testing, A/B testing, iterative refinement',
    },
  ],
};

// Reflection
export const reflectionData = {
  label: 'REFLECTION & OUTLOOK',
  title: 'Lessons learned and future direction',
  content: (
    <>
      <p>
        This project taught me the importance of balancing power with simplicity in
        enterprise software. By focusing on progressive disclosure and role-based
        customization, we were able to serve both power users and occasional users
        within the same interface.
      </p>
      <p className="mt-4">
        The success of this redesign has led to a company-wide initiative to apply
        these UX principles across all Pimcore products, establishing a consistent
        design language for the entire ecosystem.
      </p>
    </>
  ),
};
