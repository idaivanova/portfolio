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
    <div className={cn('flex gap-10 items-start', className)}>
      {/* Image */}
      {image && (
        <div className="shrink-0 w-[350px] h-[212px] overflow-hidden rounded">
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
          <h1 className="font-body text-[32px] font-extrabold leading-tight text-cream">
            {title}
          </h1>
          <div className="font-body text-sm leading-normal text-cream/90">
            {description}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-5">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center justify-center h-[34px] px-4 bg-white/10 rounded-sm font-body text-sm font-bold text-accent"
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
