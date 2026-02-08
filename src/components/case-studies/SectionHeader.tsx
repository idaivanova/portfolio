// ============================================
// Section Header Component
// Label + Title + optional description for sections
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-2.5', className)}>
      <span className="font-body text-sm text-accent h-[17px]">{label}</span>
      <h2 className="font-body text-[32px] font-extrabold leading-tight text-cream">
        {title}
      </h2>
      {description && (
        <div className="font-body text-sm leading-normal text-cream/90">
          {description}
        </div>
      )}
    </div>
  );
}
