// ============================================
// Offcuts Strip Component
// The workshop-not-gallery strip: rejected / revised / shipped
// iterations, connected by arrows, annotated by hand.
// ============================================

import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { SectionHeader } from './SectionHeader';
import type { Offcut, OffcutState, OffcutsData } from '@/data/offcuts';

export interface OffcutsStripProps {
  data: OffcutsData;
  label?: string;
  annotation?: string;
  className?: string;
}

interface StateStyle {
  card: string;
  chip: string;
  stateWord: string;
  title: string;
}

const STATE_STYLES: Record<OffcutState, StateStyle> = {
  rejected: {
    card: 'border-dashed border-border bg-transparent opacity-70',
    chip: 'border-border text-muted-foreground',
    stateWord: 'text-muted-foreground/70',
    title: 'text-muted-foreground line-through decoration-muted-foreground/40',
  },
  revised: {
    card: 'border-[var(--color-blue)]/45 bg-[var(--color-blue)]/[0.04]',
    chip: 'border-[var(--color-blue)]/50 text-[var(--color-blue)]',
    stateWord: 'text-[var(--color-blue)]/80',
    title: 'text-foreground',
  },
  shipped: {
    card: 'border-[var(--color-accent)] bg-[var(--color-accent)]/[0.06]',
    chip: 'border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]',
    stateWord: 'text-[var(--color-accent)]',
    title: 'text-foreground',
  },
};

const STATE_WORDS: Record<OffcutState, string> = {
  rejected: 'rejected',
  revised: 'revised',
  shipped: 'shipped',
};

function OffcutCard({ offcut, index }: { offcut: Offcut; index: number }) {
  const style = STATE_STYLES[offcut.state];

  return (
    <ScrollReveal
      delay={index * 0.08}
      direction="up"
      className="flex min-w-0 md:flex-1"
    >
      <article
        className={cn(
          'flex w-full min-w-0 flex-col gap-3 rounded-md border p-4',
          style.card
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'font-body text-[10px] font-bold uppercase tracking-[0.14em] border rounded-sm px-1.5 py-0.5',
              style.chip
            )}
          >
            {offcut.label}
          </span>
          <span
            className={cn(
              'font-body text-[10px] uppercase tracking-[0.14em]',
              style.stateWord
            )}
          >
            {STATE_WORDS[offcut.state]}
          </span>
        </div>

        <h3 className={cn('font-body text-base font-bold leading-snug', style.title)}>
          {offcut.title}
        </h3>

        <p className="font-hand text-[15px] leading-snug text-muted-foreground">
          {offcut.note}
        </p>
      </article>
    </ScrollReveal>
  );
}

function Connector({ horizontal }: { horizontal: boolean }) {
  if (horizontal) {
    return (
      <span aria-hidden="true" className="hidden shrink-0 items-center px-2 md:flex">
        <span className="h-px w-4 bg-[var(--color-blue)]/35" />
        <ChevronRight className="h-3.5 w-3.5 -ml-1 text-[var(--color-blue)]/70" />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="flex shrink-0 flex-col items-center md:hidden">
      <span className="h-4 w-px bg-[var(--color-blue)]/35" />
      <ChevronDown className="h-3.5 w-3.5 -mt-1 text-[var(--color-blue)]/70" />
    </span>
  );
}

export function OffcutsStrip({
  data,
  label = 'OFFCUTS',
  annotation = 'psst — this is what the first two tries looked like',
  className,
}: OffcutsStripProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <ScrollReveal>
        <span className="font-hand text-lg text-[var(--color-accent)] motion-safe:-rotate-1 inline-block">
          {annotation}
        </span>
      </ScrollReveal>

      <SectionHeader label={label} title={data.title} description={data.intro} />

      <ol className="flex flex-col md:flex-row md:items-center md:gap-0">
        {data.items.map((offcut, index) => (
          <li key={offcut.label} className="flex min-w-0 flex-col md:flex-1">
            <OffcutCard offcut={offcut} index={index} />
            {index < data.items.length - 1 && <Connector horizontal />}
            {index < data.items.length - 1 && <Connector horizontal={false} />}
          </li>
        ))}
      </ol>
    </div>
  );
}