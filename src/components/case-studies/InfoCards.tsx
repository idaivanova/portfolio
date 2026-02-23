// ============================================
// Info Cards Component
// Two-column layout for Project Scope and Results
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InfoItem {
  label: string;
  value: React.ReactNode;
}

interface InfoCardProps {
  title: string;
  items?: InfoItem[];
  children?: React.ReactNode;
  className?: string;
}

function InfoCard({ title, items, children, className }: InfoCardProps) {
  return (
    <div
      className={cn(
        'flex min-w-0 flex-1 flex-col gap-2.5 rounded-sm border border-border p-[30px]',
        className
      )}
    >
      <h3 className="font-body text-2xl font-extrabold text-foreground">{title}</h3>
      <div className="font-body text-sm leading-normal text-muted-foreground">
        {items ? (
          <div className="space-y-1">
            {items.map((item, index) => (
              <p key={index}>
                <span className="font-bold">{item.label}:</span>{' '}
                <span className="font-normal">{item.value}</span>
              </p>
            ))}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export interface InfoCardsProps {
  scope: {
    title?: string;
    items: InfoItem[];
  };
  results: {
    title?: string;
    items?: InfoItem[];
    content?: React.ReactNode;
  };
  className?: string;
}

export function InfoCards({ scope, results, className }: InfoCardsProps) {
  return (
    <div className={cn('flex gap-5', className)}>
      <InfoCard title={scope.title || 'Project Scope'} items={scope.items} />
      <InfoCard title={results.title || 'Results'}>
        {results.content || (
          <div className="space-y-4">
            {results.items?.map((item, index) => (
              <p key={index}>{item.value}</p>
            ))}
          </div>
        )}
      </InfoCard>
    </div>
  );
}
