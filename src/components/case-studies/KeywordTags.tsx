// ============================================
// Keyword Tags Component
// Neomorphism glass effect tags
// ============================================

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
                  'rounded-sm border border-border/70 bg-card/60 px-[15px] py-2 shadow-sm backdrop-blur-sm'
                )}
              >
                <span className="font-body text-sm font-bold whitespace-nowrap text-foreground">
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
        'inline-flex rounded-sm border border-border/70 bg-card/60 px-[15px] py-2 shadow-sm backdrop-blur-sm',
        className
      )}
    >
      <span className="font-body text-sm font-bold whitespace-nowrap text-foreground">
        {label}
      </span>
    </div>
  );
}
