// ============================================
// Feature Card Component
// Individual feature card with title and description
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn('flex flex-col gap-2.5 min-w-0', className)}>
      <h3 className="font-body text-xl font-bold text-cream leading-normal">
        {title}
      </h3>
      <p className="font-body text-sm leading-normal text-cream/90">
        {description}
      </p>
    </div>
  );
}

// ============================================
// Feature Cards Grid Component
// 3-column grid of feature cards
// ============================================

export interface FeatureCardsGridProps {
  features: Array<{
    title: string;
    description: string;
  }>;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function FeatureCardsGrid({
  features,
  className,
  columns = 3,
}: FeatureCardsGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={cn('grid gap-5', gridCols[columns], className)}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
