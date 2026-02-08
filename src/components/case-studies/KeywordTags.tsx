// ============================================
// Keyword Tags Component
// Neomorphism glass effect tags
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

interface KeywordCategory {
  title: string;
  icon?: string | null;
  tags: string[];
}

interface KeywordTagsProps {
  categories: KeywordCategory[];
  className?: string;
}

export function KeywordTags({ categories, className }: KeywordTagsProps) {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col gap-5">
          {/* Category Header */}
          <div className="flex items-center gap-2.5">
            {category.icon && (
              <div className="flex items-center justify-center rotate-180">
                <div className="p-1">
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d="M8 10L0 0H16L8 10Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            )}
            <h3 className="font-body text-2xl font-extrabold text-accent">
              {category.title}
            </h3>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-5">
            {category.tags.map((tag, tagIndex) => (
              <div
                key={tagIndex}
                className={cn(
                  'relative px-[15px] py-2 rounded-sm',
                  'backdrop-blur-[42px] bg-[rgba(255,255,255,0.04)]',
                  'shadow-[4px_4px_116px_0px_rgba(97,120,201,0.16)]',
                  'before:absolute before:inset-0 before:rounded-[inherit]',
                  'before:shadow-[inset_2px_2px_16px_0px_rgba(255,255,255,0.03)]',
                  'before:pointer-events-none'
                )}
              >
                <span className="relative font-body text-sm font-bold text-cream whitespace-nowrap">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// Single Neomorphism Tag
// ============================================

interface NeomorphismTagProps {
  label: string;
  className?: string;
}

export function NeomorphismTag({ label, className }: NeomorphismTagProps) {
  return (
    <div
      className={cn(
        'relative px-[15px] py-2 rounded-sm inline-flex',
        'backdrop-blur-[42px] bg-[rgba(255,255,255,0.04)]',
        'shadow-[4px_4px_116px_0px_rgba(97,120,201,0.16)]',
        'before:absolute before:inset-0 before:rounded-[inherit]',
        'before:shadow-[inset_2px_2px_16px_0px_rgba(255,255,255,0.03)]',
        'before:pointer-events-none',
        className
      )}
    >
      <span className="relative font-body text-sm font-bold text-cream whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
