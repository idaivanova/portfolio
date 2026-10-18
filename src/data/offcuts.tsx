// ============================================
// Offcuts Data
// Iteration fragments per case study — the tries that didn't make it.
// Kept separate from the case study data files so the polished
// narrative stays clean and the process notes stay honest.
// ============================================

export type OffcutState = 'rejected' | 'revised' | 'shipped';

export interface Offcut {
  label: string; // "v1", "v2", "shipped" etc
  title: string; // short
  note: string; // handwritten-style note, factual
  state: OffcutState;
}

export interface OffcutsData {
  title: string;
  intro: string;
  items: Offcut[];
}

export const pimcoreOffcuts: OffcutsData = {
  title: 'What got thrown out on the way here.',
  intro:
    'Two years, one designer on the front end and ten developers who had opinions. These are the tries that did not survive — kept around because the wrong turns are the useful part.',
  items: [
    {
      label: 'v1',
      title: 'research wall',
      note: 'every interview note on one board. more than anyone could hold in their head, and I could not sort it either.',
      state: 'rejected',
    },
    {
      label: 'v2',
      title: 'affinity map',
      note: 'same notes, cut down to four clusters. that is the version still guiding decisions.',
      state: 'revised',
    },
    {
      label: 'testing',
      title: 'a/b + think-aloud',
      note: 'most of what I wanted to cut did not test better. so nothing got removed — it got made collapsible, or moved somewhere clearer.',
      state: 'revised',
    },
    {
      label: 'shipped',
      title: 'system + tokens',
      note: 'third-party design system, picked for our stack and extended. still growing, and still held to the accessibility bar we set first.',
      state: 'shipped',
    },
  ],
};

export const ergoworkOffcuts: OffcutsData = {
  title: 'One week, three versions of the same answer.',
  intro:
    'A sprint, a CEO, a marketing expert and eight competitors. Not much room for a fourth round — so the first two are worth showing.',
  items: [
    {
      label: 'v1',
      title: 'one giant tree',
      note: 'every page under one navigation, like the site already was. tidy on the board, and it still told me nothing about who was meant to find what.',
      state: 'rejected',
    },
    {
      label: 'v2',
      title: 'split by audience',
      note: 'b2b and b2c get their own way in. slow path for browsing, fast path to contact or checkout. this one held.',
      state: 'revised',
    },
    {
      label: 'personas',
      title: 'four, from the growth analysis',
      note: 'youGrow mapped the persona types. they set the page hierarchy and the copy tone — and settled the keep-both-paths argument.',
      state: 'revised',
    },
    {
      label: 'now',
      title: 'handed over, still building',
      note: 'the site is in development, so there are no results to report yet. I will put them here when there are.',
      state: 'shipped',
    },
  ],
};