// ============================================
// Pimcore Platform Case Study Data
// All content data for the Pimcore case study page
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: '/assets/pimcore/placeholder.svg',
    alt: 'Pimcore Platform Login Screen',
    width: 403,
    height: 222,
  },
  title: (
    <>
      <span className="font-extrabold">Pimcore Platform</span>
    </>
  ),
  description: (
    <>
      <p>
        Pimcore is an open-source enterprise platform that combines PIM, DAM, CMS, and
        eCommerce to manage data and content—enabling businesses to deliver consistent,
        personalized, and omnichannel digital experiences.
      </p>
    </>
  ),
  tags: [
    { label: 'UX / UI Design' },
    { label: 'Design System' },
    { label: '2+ years full time' },
  ],
};

// Project Scope and Results
export const projectScopeData = {
  scope: {
    items: [
      { label: 'My role', value: 'UX Design and Research, UI Design' },
      { label: 'Tools', value: 'Figma, FigJam, Github' },
      { label: 'Skills involved', value: 'user research, design systems, accessibility, JTBD, mental models, cross-functional collaboration, affinity diagram, usability testing, prototyping' },
      { label: 'Team', value: '10+ developers, 2 Project Managers, CPO, CTO, DevOps' },
      { label: 'Time frame', value: '2 years' },
    ],
  },
  results: [
    'Translated complex legacy structures into a scalable, user-centered design system',
    'Grounded design decisions in real-world user research and long-term mental models',
    'Delivered a seamless user transition without breaking existing workflows',
  ],
};

// Contribution Section
export const contributionData = {
  label: 'CONTRIBUTION',
  title: 'Transition and upgrade of the front end',
  description:
    'My main responsibility was to ensure we are building an intuitive and future proof user experience during a major upgrade of the existing platform. Used by over 118,000 companies, one of the biggest challenges was addressing the long-standing mental models of the users who have adapted to non-intuitive workflows over the years. My approach combined deep UX research, strong system thinking, and a scalable design foundation.',
  directionPoints: [
    'UX Research & Analysis: Conducted surveys, interviews, and group discussions with implementation partners, end users, and community members',
    'Design System Strategy: Selected and extended a third-party design system matching our tech stack',
    'Scalable & Modular Layout Design: Multiple iterations led to a modern, flexible layout with widget zones and drag-and-drop flexibility',
    'Tested Interactions & Accessibility: No feature was removed—less-critical elements were made collapsible or relocated for clarity',
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
      title: 'UX Research & Analysis',
      description:
        'I conducted surveys, interviews, and group discussions with implementation partners, end users, and community members. These insights were mapped into an affinity diagram and user personas that still guide our design decisions and redesigns today.',
    },
    {
      title: 'Design System Strategy',
      description:
        'We selected and extended a third-party design system that matched our tech stack and supported themes, tokens, accessibility, and UI scalability. It was developed for internal use and external collaboration via a shared component library.',
    },
    {
      title: 'Scalable & Modular Layout Design',
      description:
        'Multiple iterations led to a modern, flexible layout capable of supporting Pimcore\'s diverse use cases. With widget zones, expandable tab areas, and drag-and-drop flexibility, we struck a balance between structure and personalisation.',
    },
    {
      title: 'Tested Interactions & Accessibility',
      description:
        'No feature was removed — instead, less-critical elements were made collapsible, hover-based, or relocated for clarity. Testing methods like A/B tests and think-aloud protocols validated improvements and ensured WCAG alignment.',
    },
    {
      title: 'User Guidelines & Consistency Rules',
      description:
        'We defined key interaction standards — from naming buttons ("Add" vs. "New") to keybindings and casing — to ensure system-wide coherence. Navigation elements like the toolbar and sidebar remained visually and functionally consistent across screens.',
    },
    {
      title: 'Existing vs. Anticipated Experience',
      description:
        'We selected and extended an existing system that matched our tech stack and supported themes, tokens, accessibility, and UI scalability. It was developed for internal use and external collaboration via a shared component library.',
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
        within the same interface. The Pimcore platform upgrade was a significant
        undertaking that required deep understanding of user mental models formed over
        years of using the legacy system.
      </p>
      <p className="mt-4">
        The success of this redesign has led to a company-wide initiative to apply
        these UX principles across all Pimcore products, establishing a consistent
        design language for the entire ecosystem. The design system we created continues
        to evolve and support new features while maintaining the accessibility and
        usability standards we established.
      </p>
    </>
  ),
};
