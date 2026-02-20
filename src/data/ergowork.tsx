// ============================================
// ErgoWork Case Study Data
// All content data for the ErgoWork case study page
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: '/assets/ergowork/placeholder.svg',
    alt: 'ErgoWork Project Preview',
    width: 350,
    height: 212,
  },
  title: (
    <>
      <span className="font-extrabold">Conversion by Design: </span>
      <span className="font-normal">UX Strategy for B2B and B2C Alignment</span>
    </>
  ),
  description: (
    <>
      <p>
        ErgoWork is an Austrian brand aiming to bridge quality craftsmanship with scalable
        ergonomic solutions for both private and business users.
      </p>
      <p className="mt-4">
        While demand for standing desks and hybrid workspace solutions is growing, ErgoWork
        faced a challenge: their online presence lacked structure, clarity, and user
        segmentation - making it difficult for potential customers to understand the offer
        or navigate toward a purchase.
      </p>
    </>
  ),
  tags: [
    { label: 'UX Research' },
    { label: 'UX Audit' },
    { label: 'Competitor Analysis' },
  ],
};

// Project Scope and Results
export const projectScopeData = {
  scope: {
    items: [
      { label: 'My role', value: 'UX Design and Research, UI Design' },
      { label: 'Tools', value: 'Figma, Miro' },
      {
        label: 'Skills involved',
        value:
          'user research, cross-functional collaboration, sitemap delivery, customer journey mapping, brand design and strategy, Wordpress with Elementor knowledge',
      },
      { label: 'Team', value: 'alignment with the CEO and Marketing Expert' },
      { label: 'Time frame', value: 'one week' },
    ],
  },
  results: {
    content: (
      <div className="space-y-4">
        <p>
          A validated UX architecture that balances exploration and conversion for both B2B
          and B2C audiences
        </p>
        <p>Clear decision paths mapped to core personas and user intents</p>
        <p>A modular sitemap and interface structure, ready for phased rollout for development</p>
      </div>
    ),
  },
};

// Contribution Section
export const contributionData = {
  label: 'CONTRIBUTION',
  title: 'Uncovering UX gaps & setting the course',
  description: (
    <>
      <p>
        Through an in-depth UX research and analysis process, I identified critical gaps in
        the user journey and touch points. B2B users hesitated due to unclear pricing and
        fragmented value communication. B2C users struggled to differentiate between models
        and often preferred direct support (via phone calls and less often via mail) instead
        of exploring the catalog independently. Analytics revealed high mobile traffic but
        low engagement, signaling an urgent need to support both quick entry and deeper
        desktop research.
      </p>
      <p className="mt-4">The design direction was set as follows:</p>
    </>
  ),
  directionItems: [
    { content: 'Clarify product value and positioning' },
    { content: 'Streamline the decision-making process' },
    { content: 'Support mobile-first discovery and desktop-first research' },
    { content: 'Bridge the gap between marketing and product structure' },
  ],
};

// Research/Key Insights Section
export const researchData = {
  label: 'RESEARCH',
  title: 'Key insights',
  description:
    'The UX redesign was shaped by competitor analysis (8 competitors have been reviewed) and strategic insights, leading to the following six key experience goals:',
  features: [
    {
      title: 'Guided Exploration to Boost Conversion',
      description:
        'Structured layouts, consistent tabs, and comparison tools reduce cognitive load and guide users confidently through the catalog.',
    },
    {
      title: 'Self-Qualification & Confidence-Building Tools',
      description:
        'A quiz-based selection process, overview pages, and comparison features help users find the right desk without friction.',
    },
    {
      title: 'Trust Signals Integrated Across Flows',
      description:
        'Testimonials, service guarantees, and quality badges are embedded into key content areas to build long-term trust and reduce bounce.',
    },
    {
      title: 'UI Simplicity Paired with Communicated Value',
      description:
        'The clean UI is leveraged to highlight customizability, local production, quality, and service—making benefits instantly recognizable.',
    },
    {
      title: 'Mobile Touchpoint, Desktop Research Logic',
      description:
        'Mobile users are led with highlights and visuals. Desktop experience is structured for comparison, exploration, and quote generation.',
    },
    {
      title: 'B2B Value Needs Early & Clear Communication',
      description:
        'A dedicated B2B overview page and embedded CTAs ensure business users are clearly guided toward fast quoting and contact.',
    },
  ],
};

// Brand Identity Section
export const brandIdentityData = {
  label: 'BRAND IDENTITY BOOST',
  title: 'Refined brand identity and supportive UI',
  description: (
    <>
      <p>
        While my initial focus was on the sitemap and product page flows, it became clear
        that the brand identity and overall interface design needed significant attention.
        For users to confidently explore, compare, and select the right desk - without
        resorting to direct contact - the interface had to provide clarity, guidance, and
        visual credibility. At the same time, the brand needed to convey trust and stability
        to match the quality of the offering.
      </p>
      <p className="mt-4">Selected pieces overview of brand and system kit that was delivered:</p>
    </>
  ),
  mosaicImages: [
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 1',
      position: { top: 0, left: 8, width: 462, height: 175 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 2',
      position: { top: 17, left: 622, width: 271, height: 102 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 3',
      position: { top: 17, left: 478, width: 121, height: 158 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 4',
      position: { top: 318, left: 59, width: 325, height: 166 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 5',
      position: { top: 318, left: 483, width: 439, height: 183 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 6',
      position: { top: 126, left: 867, width: 85, height: 72 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 7',
      position: { top: 231, left: 14, width: 323, height: 54 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 8',
      position: { top: 126, left: 308, width: 150, height: 118 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 9',
      position: { top: 185, left: 470, width: 409, height: 92 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Brand Identity 10',
      position: { top: 185, left: 31, width: 256, height: 26 },
    },
  ],
  containerHeight: 518,
};

// Sitemap Section
export const sitemapData = {
  label: 'SITEMAP',
  title: 'Information architecture for dual audiences',
  description:
    'Taking the current navigation and transforming it into a sitemap gave more clarity for the whole team - the marketing expert contributed with knowledge on conversion, the CEO on the other hand with product and market knowledge and all that lead to a new clean navigation serving the user needs.',
  mainImage: {
    src: '/assets/ergowork/placeholder.svg',
    alt: 'Sitemap Diagram',
    width: 681,
    height: 189,
  },
  overlayImages: [
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Footer Diagram',
      position: { top: 185, left: 48, width: 405, height: 143 },
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Landing Pages',
      position: { top: 253, left: 608, width: 337, height: 84 },
    },
  ],
  footerText: (
    <>
      <p>
        Following established conventions and well known demands from user perspective, the
        footer structure is supportive to the main navigation and relevant for the
        experience in each page.
      </p>
      <p className="mt-4">
        The landing pages seen on a side are supplementary page meaning that the user will
        be exposed to them only in a context specific situation. For example, if the user
        is looking for a bundle order to set up an office environment of 10 desk, then
        service such as assembling is not only nice to have option but even a necessity in
        most of the cases. Same goes for making an order with the incentive on making more
        purchases in future. In B2B world that appears to be quite common - a company
        purchases 10 ergonomic desks and when there is demand for more to be upgraded from
        normal to ergonomic desks in future, a loyalty or bonus program becomes quite
        relevant.
      </p>
    </>
  ),
  containerHeight: 351,
};

// Personas Section
export const personasData = {
  label: 'PERSONAS',
  title: 'Mapping users to design logic',
  description: (
    <>
      <p>
        YouGrow, an independent collaborator for Growth Analysis has uncovered four key
        persona types. The competitor analysis together with the strategic points and the
        provided personas built the design logic. The four personas informed the hierarchy,
        page logic, and tone of content throughout the site.
      </p>
      <p className="mt-4">
        The personas below helped validate our decision to provide both structured
        exploration and fast-track paths toward contact or checkout.
      </p>
    </>
  ),
  personas: [
    {
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Florian - SME Buyer',
      },
      name: 'Florian',
      role: 'SME Buyer',
      details: [
        {
          label: 'Goal',
          value: 'Find a reliable local vendor with assembly support',
        },
        {
          label: 'Needs',
          value: 'Transparent pricing, low order threshold, custom options',
        },
        {
          label: 'Entry Point',
          value: 'Homepage → Business Customers → Request Offer',
        },
      ],
    },
    {
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Julia - Corporate Procurement',
      },
      name: 'Julia',
      role: 'Corporate Procurement',
      details: [
        {
          label: 'Goal',
          value: 'Source ergonomic desks to match internal health goals',
        },
        {
          label: 'Needs',
          value: 'Installation service, visual documentation, fast quoting',
        },
        {
          label: 'Entry Point',
          value: '(potentially Homepage) → Business Page → PDF/Configurator → Contact',
        },
      ],
    },
    {
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Eva - Private Professional',
      },
      name: 'Eva',
      role: 'Private Professional',
      details: [
        {
          label: 'Goal',
          value: 'Invest in a premium home office setup',
        },
        {
          label: 'Needs',
          value: 'Quality guarantee, aesthetic variety, local craftsmanship',
        },
        {
          label: 'Entry Point',
          value: 'Adjustable Tables → Highlights → Product Page',
        },
      ],
    },
    {
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'James - Remote Worker/Gamer',
      },
      name: 'James',
      role: 'Remote Worker/Gamer',
      details: [
        {
          label: 'Goal',
          value: 'Buy an ergonomic desk that suits work and play',
        },
        {
          label: 'Needs',
          value: 'Customization, detailed visuals, fast delivery',
        },
        {
          label: 'Entry Point',
          value: 'Mobile Ad / Recommendation → Product Page → Add to Cart or Explore',
        },
      ],
    },
  ],
};

// Page Flows Section
export const pageFlowsData = {
  label: 'FLOWS',
  title: 'Page-by-page experience design',
  description: (
    <>
      <p>
        Each core page was structured to reflect a specific user intent and interaction
        depth, mapped to persona behavior and conversion triggers. Below shown you can see
        examples of sections with relative important for the pages.
      </p>
    </>
  ),
  flows: [
    {
      direction: 'right' as const,
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Homepage Flow',
        width: 493,
        height: 298,
      },
      title: 'Homepage',
      intent: 'Offer visual guidance and self-segmentation (B2B vs B2C)',
      objective: 'Eva and Florian land here - one wants to explore, the other needs fast validation.',
      keyActions: [
        'First impression matters - quick overview, trustworthy visuals and copy',
        'Scan featured products, understand what is the value of the products',
        'Enter the comparison hub or request an offer',
        'Contact a desk expert if needed',
      ],
    },
    {
      direction: 'left' as const,
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Business Customers Page',
        width: 439,
        height: 364,
      },
      title: 'Business Customers Page',
      intent: 'Provide clear, credible B2B value without delay',
      objective: "Julia and Florian don't browse - they validate and act",
      keyActions: [
        'Generate offer instantly or download spec sheet',
        'View testimonials and use cases',
        'Discover scalable pricing models',
        'Imagine purchase process - amount, steps, delivery, services',
      ],
      additionalContent: (
        <>
          <p>
            The possibility to get in touch on this page is very prominent - the potential
            customer get a custom offer as the first CTA on the page and further down when
            he has seen more - he can see the products in real life in one of the showrooms.
          </p>
        </>
      ),
    },
    {
      isSplitLayout: true,
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Adjustable Tables Page',
        width: '100%',
        height: 'auto',
      },
      leftContent: {
        title: 'Adjustable Tables',
        intent: 'Allow effortless comparison, filtering, and guided selection',
        objective: 'James and Eva want to scan quickly and get inspired',
        keyActions: [
          'Explore model differences',
          'Enter configurator flow',
          'View top-picks or ergonomic bundles',
        ],
      },
      rightContent: (
        <>
          <p>
            This page is delivered as a strategic section flow with clear CTAs - presented
            in mockup form without finalized content. Each block targets specific user
            needs: quick filtering, easy comparison, social proof, and customization.
          </p>
          <p className="mt-4">
            Personas are guided through a relevant journey - e.g., gamers, office workers -
            toward key actions like "See X desk" or "Get a custom offer", reducing friction
            and aligning with value-driven exploration.
          </p>
        </>
      ),
    },
    {
      direction: 'left' as const,
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Product Detail Page',
        width: 498,
        height: 320,
      },
      title: 'Product Detail Page',
      intent: 'Offer detailed reassurance and close the decision gap',
      objective: 'Eva and James need more information or support',
      keyActions: [
        'View gallery, specs, badges, and how-to video',
        'Start configurator or CTA toward quote',
        'See loyalty perks or social proof',
      ],
      additionalContent: (
        <>
          <p className="font-bold mt-4">Deliverable includes:</p>
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>3 variants of the product customization for the main product types</li>
            <li>
              Additional suggestions for the future expansion of the page (currently the
              testimonials and customer images are limited)
            </li>
          </ul>
        </>
      ),
    },
    {
      direction: 'right' as const,
      image: {
        src: '/assets/ergowork/placeholder.svg',
        alt: 'Request Offer Form',
        width: 538,
        height: 239,
      },
      title: 'Request an offer (form)',
      intent: 'Provide a low-barrier entry for high-intent users',
      objective: 'Julia and Florian are ready to act but want clarity',
      keyActions: [
        'Submit project form or book a call',
        'Jump back into B2B content or explore desks',
        'Download brochure or discount logic',
      ],
    },
  ],
};

// Reflection Section
export const reflectionData = {
  label: 'REFLECTION & OUTLOOK',
  title: 'Uncovering UX gaps & setting the course',
  description: (
    <>
      <p>
        Beyond individual screens, this project focused on building a cohesive UX system
        that connects user behavior, product structure, and brand messaging. With defined
        journeys and decision flows mapped to real personas, ErgoWork now has a strategic
        foundation to grow from - supporting future improvements in SEO, campaign-specific
        landing pages, and scalable customization tools.
      </p>
      <p className="mt-4">
        The groundwork is set for consistent, user-centered digital expansion. This project
        is still in development and therefore results can not be estimated as for now.
      </p>
    </>
  ),
};

// Full Width Images for page flows
export const fullWidthImages = {
  homepagePair: [
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Homepage Mockup 1',
      width: 455,
      height: 271,
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Homepage Mockup 2',
      width: 510,
      height: 256,
    },
  ],
  businessPair: [
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Business Page Mockup 1',
      width: 443,
      height: 128,
    },
    {
      src: '/assets/ergowork/placeholder.svg',
      alt: 'Business Page Mockup 2',
      width: 518,
      height: 276,
    },
  ],
  productDetail: {
    src: '/assets/ergowork/placeholder.svg',
    alt: 'Product Detail Full Width',
    width: '100%',
    height: 'auto',
  },
};
