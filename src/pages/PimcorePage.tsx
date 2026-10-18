// ============================================
// Pimcore Studio — series hub
// /case-studies/pimcore stays a valid URL because the rail links here.
// This page indexes the parts. It deliberately does not repeat their bodies.
// ============================================

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  CaseStudyLayout,
  CaseStudyHeader,
  InfoCards,
  Divider,
  SectionHeader,
} from '@/components/case-studies';
import { hubHeroData, hubScopeData, hubPartsData } from '@/data/pimcore';
import { cn } from '@/lib/utils';

// Subtle alternating tilt so the parts read as pinned to a board, matching the
// case-study cards on the home page. Written out as full class strings so the
// Tailwind scanner picks them up.
const PART_TILT = ['md:rotate-[-0.5deg]', 'md:rotate-[0.4deg]'] as const;

export default function PimcorePage() {
  return (
    <CaseStudyLayout>
      {/* Hero Section */}
      <section id="hero">
        <CaseStudyHeader
          title={hubHeroData.title}
          description={hubHeroData.description}
          tags={hubHeroData.tags}
        />
      </section>

      <Divider />

      {/* Engagement scope */}
      <section id="scope">
        <InfoCards scope={hubScopeData.scope} results={hubScopeData.results} />
      </section>

      <Divider />

      {/* The parts */}
      <section id="parts">
        <SectionHeader
          label="THE PARTS"
          title="Two pieces of work, one engagement"
          description="Same client, same platform, different problems. Each part is written up on its own."
        />

        <ul className="mt-8 flex flex-col gap-6">
          {hubPartsData.map((part, index) => (
            <li key={part.id} className="min-w-0">
              <Link
                to={part.href}
                className={cn(
                  'group relative flex flex-col gap-3 rounded-lg border border-border bg-card p-5 md:p-6',
                  'transition-[rotate,translate,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.8,.2,1)]',
                  'hover:border-[var(--color-accent)]',
                  'motion-safe:hover:-translate-y-0.5 motion-safe:hover:rotate-0',
                  PART_TILT[index % PART_TILT.length],
                )}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-blue-text)]">
                    Part {index + 1}
                  </span>
                  <h3 className="font-body text-xl font-extrabold leading-tight text-foreground md:text-2xl">
                    {part.title}
                  </h3>
                </div>

                <p className="font-body text-sm leading-normal text-muted-foreground max-w-[68ch]">
                  {part.summary}
                </p>

                <span className="font-note text-[15px] text-[var(--color-accent-text)]">
                  {part.annotation}
                </span>

                <ul className="flex flex-wrap gap-2">
                  {part.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-body text-xs font-bold text-foreground border border-border bg-secondary/70 rounded-sm px-2.5 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 font-body text-sm font-bold text-[var(--color-accent-text)]">
                  Read the case study
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-note text-[15px] text-muted-foreground">
          More parts may be added. The engagement is still running, so this list will grow.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
