// ============================================
// Persona Card Component
// User persona card with avatar and details
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PersonaCardProps {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  role: string;
  details: Array<{
    label: string;
    value: string;
  }>;
  className?: string;
}

export function PersonaCard({
  image,
  name,
  role,
  details,
  className,
}: PersonaCardProps) {
  return (
    <div
      className={cn(
        'flex gap-5 items-center p-[30px] border border-[#122836] rounded-sm',
        className
      )}
    >
      {/* Avatar */}
      <div className="w-[167px] h-[167px] rounded-full overflow-hidden shrink-0">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col gap-2.5 min-w-0">
        <div className="font-body text-xl text-cream">
          <p className="font-bold">{name}</p>
          <p>{role}</p>
        </div>
        <div className="font-body text-sm text-cream/90 space-y-3">
          {details.map((detail, index) => (
            <p key={index}>
              <span className="font-bold">{detail.label}:</span>{' '}
              <span className="font-normal">{detail.value}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Persona Grid Component
// 2x2 grid of persona cards
// ============================================

export interface PersonaGridProps {
  personas: Array<{
    image: {
      src: string;
      alt: string;
    };
    name: string;
    role: string;
    details: Array<{
      label: string;
      value: string;
    }>;
  }>;
  className?: string;
}

export function PersonaGrid({ personas, className }: PersonaGridProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-5', className)}>
      {personas.map((persona, index) => (
        <PersonaCard key={index} {...persona} />
      ))}
    </div>
  );
}
