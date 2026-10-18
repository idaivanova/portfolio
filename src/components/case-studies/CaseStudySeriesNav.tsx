// ============================================
// Case Study Series Nav Component
// Breadcrumb for a case study split into several parts.
// Series title, then every part as a link, current part marked
// with aria-current="page". Everything stays a real <Link> so
// the whole strip is reachable by keyboard in either direction.
// ============================================

import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SeriesPart {
  /** Stable id, matched against `activePartId`. */
  id: string;
  /** Short label. Breadcrumbs are not headlines — keep these short. */
  label: string;
  href: string;
}

export interface CaseStudySeriesNavProps {
  /** e.g. "Pimcore Studio" */
  seriesTitle: string;
  /** Hub page for the series. */
  seriesHref: string;
  parts: SeriesPart[];
  /** id of the part currently being read */
  activePartId: string;
  className?: string;
}

export function CaseStudySeriesNav({
  seriesTitle,
  seriesHref,
  parts,
  activePartId,
  className,
}: CaseStudySeriesNavProps) {
  return (
    <nav
      aria-label={`${seriesTitle} — case study parts`}
      className={cn('flex flex-wrap items-center gap-x-2 gap-y-1', className)}
    >
      <Link
        to={seriesHref}
        className="font-body text-sm font-bold text-foreground transition-colors hover:text-[var(--color-blue-text)]"
      >
        {seriesTitle}
      </Link>

      <ChevronRight
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 text-[var(--color-blue-text)]/60"
      />

      <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {parts.map((part, index) => {
          const isActive = part.id === activePartId;

          return (
            <li key={part.id} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-[var(--color-blue-text)]/60"
                />
              )}
              <Link
                to={part.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'font-body text-sm transition-colors',
                  isActive
                    ? 'font-bold text-[var(--color-accent-text)]'
                    : 'text-muted-foreground hover:text-[var(--color-blue-text)]'
                )}
              >
                {part.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
