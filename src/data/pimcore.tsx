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
        Pimcore is an open-source enterprise platform. PIM, DAM, CMS and eCommerce sit
        under one roof, so businesses can keep product data and content consistent across
        every channel they sell on.
      </p>
    </>
  ),
  tags: [
    { label: 'UX / UI Design' },
    { label: 'Design System' },
    { label: '2023 — Present' },
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
      { label: 'Time frame', value: '2023 — Present' },
    ],
  },
  results: {
    content: (
      <div className="space-y-4">
        <p>
          The front-end designer since 2023, on my own: 10+ developers, 2 project managers, a
          CPO, a CTO and DevOps around me
        </p>
        <p>
          A design system that grew out of real user research, not a component library nobody
          asked for
        </p>
        <p>
          Accessibility was in the first wireframe, not bolted on at the end
        </p>
      </div>
    ),
  },
};

// Contribution Section
export const contributionData = {
  label: 'CONTRIBUTION',
  title: 'Transition and upgrade of the front end',
  description:
    'My main job was to keep the experience intuitive while the platform moved to a major new version. Pimcore is used by over 118,000 companies, and the hard part was the mental models: people had spent years working around awkward workflows, so they expected awkwardness. I ran real research first, then built a foundation the team could keep extending.',
  directionPoints: [
    'UX Research & Analysis: Surveys, interviews and group sessions with implementation partners, end users and community members',
    'Design System Strategy: Picked a third-party design system that matched our tech stack, then extended it',
    'Scalable & Modular Layout Design: After several rounds, the layout got flexible enough for widget zones and drag-and-drop without falling apart',
    'Tested Interactions & Accessibility: I removed nothing. Less-critical elements became collapsible or moved somewhere clearer',
  ],
};

// Key Features
export const keyFeaturesData = {
  label: 'KEY FEATURES',
  title: 'Core platform capabilities',
  description:
    'The redesign is mostly about making complex data management feel ordinary for the people who live in it every day.',
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
        'Multiple iterations led to a layout flexible enough for Pimcore\'s many use cases. Widget zones, expandable tab areas and drag-and-drop gave people room to make it theirs without losing the structure.',
    },
    {
      title: 'Tested Interactions & Accessibility',
      description:
        'Nothing got removed. Less-critical elements became collapsible, hover-based, or moved somewhere clearer, and A/B tests plus think-aloud sessions told me whether any of it actually helped. WCAG alignment came out of that.',
    },
    {
      title: 'User Guidelines & Consistency Rules',
      description:
        'We wrote down the key interaction standards, from naming buttons ("Add" vs. "New") to keybindings and casing, so the product feels like one product. Toolbar and sidebar stayed visually and functionally the same across screens.',
    },
    {
      title: 'Existing vs. Anticipated Experience',
      description:
        'Everything had to work for the admin who logs in once a quarter and for the implementation partner who lives in the platform all day. One system, different depth of detail.',
    },
  ],
};

// Design Process
export const designProcessData = {
  label: 'DESIGN PROCESS',
  title: 'From research to implementation',
  description:
    'Four phases. Research decided what to build, and the technical limits decided how it could look.',
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

// Video walkthrough
export const videoData = {
  label: 'VIDEO WALKTHROUGH',
  title: 'Ida talks through the Pimcore redesign',
  description: 'A walkthrough of the design process, the research behind the decisions, and the lessons learned. Recorded for a design community talk.',
  url: 'https://www.youtube.com/watch?v=jC58hL2cR4w',
  thumbnail: 'https://i.ytimg.com/vi/jC58hL2cR4w/maxresdefault.jpg',
};

// Reflection
export const reflectionData = {
  label: 'REFLECTION & OUTLOOK',
  title: 'Lessons learned and future direction',
  content: (
    <>
      <p>
        The biggest lesson was that power and simplicity pull against each other. Progressive
        disclosure and role-based customisation let one interface serve an admin who logs in
        once a quarter and a power user who never closes the tab. Upgrading a platform
        people had used for years meant understanding the mental models they had built
        around the old one first.
      </p>
      <p className="mt-4">
        The redesign turned into a company-wide effort. The same UX principles are now being
        applied across Pimcore&apos;s products so everything shares one design language. The
        design system keeps growing with new features, and it still holds to the
        accessibility bar we set at the start.
      </p>
    </>
  ),
};
