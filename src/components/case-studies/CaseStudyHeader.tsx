// ============================================
// Case Study Header Component
// Hero section with image, title, description, and tags
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface Tag {
  label: string;
}

export interface CaseStudyHeaderProps {
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title: React.ReactNode;
  description: React.ReactNode;
  tags: Tag[];
  className?: string;
}

export function CaseStudyHeader({
  image,
  title,
  description,
  tags,
  className,
}: CaseStudyHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-10 items-start lg:flex-row', className)}>
      {/* Image — stacks above the copy below lg. A fixed 350px column plus a
          40px gap is non-shrinkable and blew out the viewport on tablet. */}
      {image && (
        <div className="w-full aspect-[350/212] overflow-hidden rounded lg:shrink-0 lg:w-[350px] lg:aspect-auto lg:h-[212px]">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col gap-[30px] min-w-0">
        {/* Title & Description */}
        <div className="flex flex-col gap-2.5">
          <h1 className="font-body text-[32px] font-extrabold leading-tight text-foreground">
            {title}
          </h1>
          <div className="font-body text-sm leading-normal text-muted-foreground">
            {description}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-5">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex h-[34px] items-center justify-center rounded-sm border border-border bg-secondary/70 px-4 font-body text-sm font-bold text-[var(--color-accent-text)]"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
