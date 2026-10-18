// ============================================
// Four Column Grid Component
// 4-column layout for design direction/key points
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ColumnItem {
  content: React.ReactNode;
}

interface FourColumnGridProps {
  items: ColumnItem[];
  className?: string;
}

export function FourColumnGrid({ items, className }: FourColumnGridProps) {
  return (
    // A bare `grid-cols-4` left 67px columns at 375 while the text needed ~113px;
    // the items are overflow:visible, so the text spilled past the viewport.
    <div className={cn('grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex min-w-0 flex-col justify-center">
          <div className="font-body text-xl leading-normal text-foreground">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// Four Column Feature Grid
// For key features with centered alignment
// ============================================

interface FeatureColumn {
  title: string;
  description: string;
}

interface FourColumnFeatureGridProps {
  features: FeatureColumn[];
  className?: string;
}

export function FourColumnFeatureGrid({
  features,
  className,
}: FourColumnFeatureGridProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {features.map((feature, index) => (
        <div key={index} className="flex min-w-0 flex-col">
          <p className="font-body text-xl leading-normal text-foreground whitespace-pre-wrap">
            {feature.title}
          </p>
        </div>
      ))}
    </div>
  );
}
