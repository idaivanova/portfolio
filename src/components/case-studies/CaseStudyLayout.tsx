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
        'min-h-screen bg-background',
        className
      )}
    >
      <div className="w-full bg-card min-h-screen">
        <div className="px-4 py-8 md:px-[50px] md:py-[50px]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
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
