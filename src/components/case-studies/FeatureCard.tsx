// ============================================
// Feature Card Component
// Individual feature card with title and description
// ============================================

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
    <div className={cn('flex flex-col gap-2.5 min-w-0 p-5 rounded-lg bg-card border-border', className)}>
      <h3 className="font-body text-xl font-bold leading-normal text-foreground">
        {title}
      </h3>
      <p className="font-body text-sm leading-normal text-muted-foreground">
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
  // Responsive prefixes matter here: a bare grid-cols-3 gives 154px columns
  // at 375px, which breaks titles mid-word and stacks them 5 lines tall.
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
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
