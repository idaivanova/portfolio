// ============================================
// Pimcore Studio — Part 2 of 2
// Bridging Dev and UX for Pimcore Studio native extensions.
// ============================================
//
// EDITING NOTES (grep for "TODO" before publishing):
//   Nothing is marked TODO any more. Team and time frame were previously
//   placeholders and are now omitted from scopeData.items entirely, so the
//   live page cannot display an internal note. Everything remaining here is
//   either stated in the brief or copied from src/data/pimcore.tsx.
//
//   Deliberately NOT claimed, because none of it could be verified:
//     - that extensions caused no visual or functional disruption
//     - that the rules remove the need for a design review
//     - that extensions inherit design constraints automatically
//   The honest version of each is written instead. No counts, no percentages,
//   no time saved, no adoption numbers. None were given and none are invented.
// ============================================

// Hero Section
export const heroData = {
  image: {
    src: '/assets/pimcore/placeholder.svg',
    alt: 'Pimcore Studio',
    width: 403,
    height: 222,
  },
  title: (
    <>
      <span className="font-extrabold">Bridging dev and UX for</span>{' '}
      <span className="font-extrabold">Pimcore Studio native extensions</span>
    </>
  ),
  description: (
    <>
      <p>
        I look after the front end of Pimcore Studio. This part is not about the core
        interface. It is about the widgets that developers and product managers build on top
        of it, and about writing the design rules down where those people can actually find
        them.
      </p>
    </>
  ),
  tags: [
    { label: 'UX / UI Design' },
    { label: 'Design System' },
    { label: 'Design Systems for Devs' },
  ],
};

// Project Scope
export const scopeData = {
  scope: {
    items: [
      { label: 'Client', value: 'Pimcore' },
      { label: 'My role', value: 'UX Design and Research, UI Design' },
      { label: 'Tools', value: 'Figma, Storybook, GitHub' },
      // Team and time frame are omitted rather than filled with a guess. If Ida
      // confirms them later, re-add here as plain rows in the same shape.
    ],
  },
  results: {
    content: (
      <div className="space-y-4">
        <p>
          A design system for the core product, and a second version of the same rules
          published for the people extending it
        </p>
        <p>
          I have no measured result to show here. What I can describe is what the resources
          are for and who uses them.
        </p>
      </div>
    ),
  },
};

// Context — the problem
export const contextData = {
  label: 'CONTEXT',
  title: 'Add-ons that did not look like the product',
  description:
    'Pimcore Studio is where product data, assets and content get managed. On top of it, developers and product managers build their own widgets. Without shared rules for how those widgets should look and behave, they read as foreign bodies bolted onto the core product.',
  content: (
    <div className="space-y-4 text-foreground/80 leading-relaxed">
      <p>
        The extension points are the point of the platform. If extending it required a design
        qualification first, half the extensions would never get built.
      </p>
      <p>
        So the question was not how to stop people building things. It was how to hand them a
        set of rules they can follow without learning a design tool or taking a course.
      </p>
    </div>
  ),
};

// The two deliverables — the spine of this case study
export const deliverablesData = {
  label: 'DELIVERABLES',
  title: 'Two resources, one set of rules',
  description:
    'A Storybook for people who can open a browser tab, and a skills repository for people who are working inside an AI coding assistant.',
  features: [
    {
      title: 'Pimcore Studio Storybook',
      description:
        'The single source of truth for the interface. Modular components, every state written down (default, hover, active, disabled), and a token system covering colour, spacing and typography. If something is not in the Storybook, it does not exist yet.',
    },
    {
      title: 'A public UX/UI AI skill repository',
      description:
        "The same design rules, republished on Pimcore's GitHub as skills an AI coding assistant can read before it starts writing. The agent gets the tokens and the component rules up front, instead of guessing what they are.",
    },
  ],
};

// Design principles
export const principlesData = {
  label: 'DESIGN PRINCIPLES',
  title: 'Two pillars I worked from',
  description:
    'Every decision about a component or a word on a button came back to one of these.',
  features: [
    {
      title: 'Predictable interaction',
      description:
        'A smooth path through the task, with cognitive load kept as low as I can manage. Errors get limited by repeating the same standard pattern over and over, rather than inventing a new interaction for every screen.',
    },
    {
      title: 'Scalability in both directions',
      description:
        'Micro means every component, flow and asset polished on its own. Macro means the standalone feature still looks like it belongs to the wider platform it sits inside. Both had to hold at the same time.',
    },
  ],
};

// Storybook & component system detail
export const libraryData = {
  label: 'THE LIBRARY',
  title: 'How the Storybook is organised',
  description:
    'Three things had to be true before the library was useful to anyone outside the design team.',
  points: [
    {
      title: 'Organisation',
      description:
        'Components are grouped by what the thing is, not by which team owns it. Anyone extending the product should be able to find the right component without knowing the internal structure first.',
    },
    {
      title: 'Component states',
      description:
        'Default, hover, active and disabled are documented per component. A state nobody wrote down is a state nobody will build, and every team ends up inventing its own version of it.',
    },
    {
      title: 'Tokens',
      description:
        'Colour, spacing and typography come from one token set. Hard-coded values are what make two extensions look like two different products, and they are also what make every future theme expensive.',
    },
  ],
};

// Microcopy rules
export const microcopyData = {
  label: 'MICROCOPY',
  title: 'The words on the buttons',
  description:
    'These rules are in the Storybook too, because most of them are about language rather than pixels.',
  rules: [
    {
      title: 'Primary before secondary',
      description:
        'One primary action per view. Everything else steps down, so the next step is never ambiguous.',
    },
    {
      title: 'Verb first',
      description:
        "Labels lead with the action. 'Save product' tells you what happens when you press it. 'Product' tells you nothing.",
    },
    {
      title: 'New or Add',
      description:
        "Word choice carries the structure. 'New' starts something at the top level. 'Add' brings something into what already exists. Picking the wrong one makes the two feel identical when they are not.",
    },
    {
      title: 'Icon-only buttons',
      description:
        'Only where the action is repetitive and universally understood. Anything rarer gets a label, because an icon is a guess and a word is not.',
    },
    {
      title: 'Style, position and platform',
      description:
        'Writing style, absolute positioning rules and the interaction patterns that have to behave the same across platforms. Written down so two extensions do not quietly disagree with each other.',
    },
  ],
};

// AI-assisted development
export const aiDevData = {
  label: 'AI-ASSISTED DEVELOPMENT',
  title: 'The assistant had no idea what the design system was',
  description:
    'Coding assistants were already part of how the extensions got built. That turned into a problem worth solving.',
  content: (
    <div className="space-y-4 text-foreground/80 leading-relaxed">
      <p>
        A coding assistant will happily write you working code. What it hands back is often
        functionally fine and visually wrong, because it has no context for a custom design
        system. The token names, the component APIs and the naming conventions are simply not
        in the model. It reaches for whatever it has seen most often, which is somebody
        else&apos;s design system.
      </p>
      <p>
        That is a documentation problem, not a prompting problem. So I published the design
        rules in a form an agent can read. The skills hand it the tokens and the component
        rules before it starts writing.
      </p>
      <p>
        To be clear about what that does and does not do: the skills do not guarantee correct
        output. They give the assistant a far better starting point than guessing, and in
        practice that means a designer has to step in less often.
      </p>
    </div>
  ),
};

// Impact / takeaways
export const outcomeData = {
  label: 'OUTCOME',
  title: 'What it actually changed',
  content: (
    <div className="space-y-4 text-foreground/80 leading-relaxed">
      <p>
        Product managers can spin up an accurate prototype without queueing behind a designer.
        Developers building a front end for their widget start from the rules rather than from
        a screenshot somebody sent them.
      </p>
      <p>
        The extensions read as part of the product rather than add-ons. That is a judgement
        call, not a measurement, and it is one I make by looking at what ships.
      </p>
      <p>
        What I did not do was make review optional. The guidance reduces how often a designer
        has to intervene. It does not remove the intervention, and it should not, because
        the whole point of the rules was that people could follow them without supervision,
        not that nobody checks the work.
      </p>
    </div>
  ),
};

// Video walkthrough — reuses the existing embed
export const videoData = {
  label: 'VIDEO WALKTHROUGH',
  title: 'Ida talks through the Pimcore redesign',
  description:
    'A talk about the front-end transition that came first. It covers the research behind those decisions rather than the extension work on this page.',
  url: 'https://www.youtube.com/watch?v=jC58hL2cR4w',
  thumbnail: 'https://i.ytimg.com/vi/jC58hL2cR4w/maxresdefault.jpg',
};
