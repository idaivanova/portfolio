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
    <div className={cn('grid grid-cols-4 gap-5', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col justify-center">
          <div className="font-body text-xl leading-normal text-cream">
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
    <div className={cn('grid grid-cols-4 gap-5', className)}>
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col">
          <p className="font-body text-xl leading-normal text-cream whitespace-pre-wrap">
            {feature.title}
          </p>
        </div>
      ))}
    </div>
  );
}
