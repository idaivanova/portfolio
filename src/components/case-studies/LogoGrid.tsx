// ============================================
// Logo Grid Component
// For displaying company/client logos
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isSvg?: boolean;
}

interface LogoGridProps {
  logos: Logo[];
  className?: string;
}

export function LogoGrid({ logos, className }: LogoGridProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-5 opacity-70',
        className
      )}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center"
          style={{
            width: logo.width || 'auto',
            height: logo.height || 60,
          }}
        >
          {logo.isSvg ? (
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================
// Education List Component
// For displaying education entries
// ============================================

interface EducationEntry {
  degree: string;
  school: string;
}

interface EducationListProps {
  entries: EducationEntry[];
  className?: string;
}

export function EducationList({ entries, className }: EducationListProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {entries.map((entry, index) => (
        <div key={index} className="flex flex-col gap-1">
          <p className="font-body text-xl font-bold text-cream">
            {entry.degree}
          </p>
          <p className="font-body text-sm text-cream/80">{entry.school}</p>
        </div>
      ))}
    </div>
  );
}
