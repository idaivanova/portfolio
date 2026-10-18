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
        ErgoWork is an Austrian brand. They make ergonomic furniture properly,
        and they sell it to both homes and offices.
      </p>
      <p className="mt-4">
        While demand for standing desks and hybrid workspace solutions is growing, ErgoWork
        faced a problem: nothing on the site told visitors whether it was written for
        private buyers or business buyers, or what the offer really was. People landed,
        looked around and left.
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
          A UX architecture that lets B2B and B2C visitors browse first, or skip straight to
          the thing they came for
        </p>
        <p>Decision paths mapped to the four personas and what each of them came to do</p>
        <p>A modular sitemap and page structure, ready for a phased handover to development</p>
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
        Research turned up the gaps in the journey and the touchpoints. B2B visitors
        hesitated because pricing was unclear and the value story was scattered across
        pages. B2C visitors couldn&apos;t tell the models apart, and plenty of them preferred to
        call instead of digging through the catalogue. On top of that, analytics showed lots
        of mobile traffic and very little engagement: the site needed to work for a quick
        look on a phone and for slower research on a laptop.
      </p>
      <p className="mt-4">The design direction was set as follows:</p>
    </>
  ),
  directionItems: [
    { content: 'Clarify product value and positioning' },
    { content: 'Simplify the decision-making process' },
    { content: 'Support mobile-first discovery and desktop-first research' },
    { content: 'Bridge the gap between marketing and product structure' },
  ],
};

// Research/Key Insights Section
export const researchData = {
  label: 'RESEARCH',
  title: 'Key insights',
  description:
    'I reviewed 8 competitors and looked at where ErgoWork could win. Six experience goals came out of that, and the redesign followed them:',
  features: [
    {
      title: 'Guided Exploration, Fewer Drop-offs',
      description:
        'A clear page structure, tabs that behave the same everywhere and comparison tools, so picking a desk takes minutes instead of an afternoon.',
    },
    {
      title: 'Helping People Qualify Themselves',
      description:
        'A short quiz, one page per model and side-by-side comparisons, so people can narrow the range down on their own instead of emailing someone.',
    },
    {
      title: 'Trust Signals Where It Matters',
      description:
        'Testimonials, service guarantees and quality badges sit next to the products they belong to, not buried in the footer where nobody scrolls.',
    },
    {
      title: 'Simple UI, Value Spelled Out',
      description:
        'The interface stays quiet so the useful things can be loud: local production, custom sizes and the service around the desk.',
    },
    {
      title: 'Mobile First, Desktop Does the Comparing',
      description:
        'On a phone, people get highlights and pictures. On a desktop, the same page opens up for comparison and for starting a quote.',
    },
    {
      title: 'B2B Value Has to Arrive Early',
      description:
        'A dedicated B2B page plus CTAs that lead straight to a quote or a phone call, so nobody has to hunt for the contact form.',
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
        My brief was the sitemap and the product page flows. Then I looked at the brand and
        the interface and realised both needed work first. If people are going to explore
        and compare a desk without picking up the phone, the interface has to feel solid
        and the brand has to look like it will still be there in five years.
      </p>
      <p className="mt-4">Here is a selection from the brand and system kit I delivered:</p>
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
    'I rebuilt the existing navigation as a proper sitemap, which gave the whole team something to argue with. The marketing expert pushed me on conversion, the CEO on product and market. Out of that came a new navigation that finally matches what people are trying to do.',
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
        The footer follows what people expect and quietly repeats the main navigation on
        every page.
      </p>
      <p className="mt-4">
        The landing pages shown on the side only show up when they make sense. Nobody
        needs assembly service before they know which desk they want, but if you are fitting
        out an office with 10 desks, someone will be putting them together. The same goes for
        a bonus programme: a company that buys 10 ergonomic desks today usually needs 10 more
        in two years, so a loyalty offer is worth putting in front of them.
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
        YouGrow, an independent collaborator doing the growth analysis, mapped four persona
        types. Combined with the competitor work and the strategic points from the CEO and
        the marketing expert, those four became the logic behind the design: they set the
        page hierarchy and the tone of the copy.
      </p>
      <p className="mt-4">
        They also settled a question we kept going back and forth on. Both paths stay: the
        slow one for browsing, the fast one for people who already know what they want and
        just want to reach contact or checkout.
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
        Every core page was built around one clear intent and one amount of depth, matched to
        what the personas actually do. Below are a few examples of the sections that mattered
        most on each page.
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
      intent: 'Let people work out whether ErgoWork is for them or their company',
      objective: 'Eva wants to explore, Florian wants to be reassured fast.',
      keyActions: [
        'First impression matters: quick overview, trustworthy visuals and copy',
        'Scan the featured products and get what the offer is about',
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
      intent: 'Make the B2B case quickly and credibly',
      objective: "Julia and Florian don't browse. They check, then they act.",
      keyActions: [
        'Generate offer instantly or download spec sheet',
        'View testimonials and use cases',
        'See how pricing scales with the order',
        'Imagine the purchase: how many, how long, delivery, services',
      ],
      additionalContent: (
        <>
          <p>
            Getting in touch is the loudest thing on this page. A custom offer is the first
            CTA, and further down, once someone has read enough to be interested, they can
            see the desks in real life in one of the showrooms.
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
            This page exists as a flow in mockup form, with the content still open. Each
            block does one job: filter quickly, compare easily, keep the social proof close,
            make customisation obvious.
          </p>
          <p className="mt-4">
            The idea is to walk each persona down the path that suits them, from gamers to
            office workers, ending on things like &quot;See X desk&quot; or &quot;Get a custom offer&quot; instead of a wall of options.
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
      intent: 'Answer the last doubts and close the gap',
      objective: 'Eva and James want more detail, or someone to ask.',
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
              Suggestions for what the page could grow into later (testimonials and customer
              photos are thin right now)
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
      intent: 'Low-barrier way in for people who are ready',
      objective: 'Julia and Florian are ready to act and want the details first.',
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
  title: 'What I would do next',
  description: (
    <>
      <p>
        This went past individual screens. What ErgoWork has now is a system: how people
        behave, how the products are structured and what the brand says all line up, with
        the journeys mapped to real personas. That gives them something to build on for
        SEO, campaign landing pages and more customisation later.
      </p>
      <p className="mt-4">
        The groundwork is in place. The site is still in development, so there are no
        results to report yet. I&apos;ll add them once there are.
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
