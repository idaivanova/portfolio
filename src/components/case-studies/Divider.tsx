// ============================================
// Divider Component
// Horizontal separator between sections
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps {
  className?: string;
  color?: string;
}

export function Divider({ className, color = '#122836' }: DividerProps) {
  return (
    <div
      className={cn('h-px w-full', className)}
      style={{ backgroundColor: color }}
    />
  );
}
