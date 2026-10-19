// ============================================
// Case Study Layout Component
// Wrapper for all case study pages with sidebar
// ============================================

import * as React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

export interface CaseStudyLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function CaseStudyLayout({
  children,
  className,
}: CaseStudyLayoutProps) {
  return (
    <div
      className={cn(
        'min-h-screen bg-background text-foreground',
        className
      )}
    >
      <div className="w-full bg-card min-h-screen">
        {/* pt clears the fixed header (h-16 = 64px, md:h-20 = 80px). Without it
            the back link sat at y=50 underneath the header and
            elementFromPoint returned the header, so it could not be clicked. */}
        <div className="px-4 pt-24 pb-8 md:px-[50px] md:pt-28 md:pb-[50px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-[var(--color-accent-text)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-[30px] max-w-[1000px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
