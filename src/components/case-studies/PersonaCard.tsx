// ============================================
// Persona Card Component
// User persona card with avatar and details
// ============================================

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
        'flex items-center gap-5 rounded-sm border border-border p-5 md:p-[30px]',
        className
      )}
    >
      {/* Avatar */}
      <div className="w-[104px] h-[104px] md:w-[167px] md:h-[167px] rounded-full overflow-hidden shrink-0">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col gap-2.5 min-w-0">
        <div className="font-body text-xl text-foreground">
          <p className="font-bold">{name}</p>
          <p>{role}</p>
        </div>
        <div className="space-y-3 font-body text-sm text-muted-foreground">
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

// Two 167px avatars plus 30px of padding per card only fit once the content
// column is wide enough — a bare `grid-cols-2` forced the text to 0px and threw
// the row 195px sideways at 375. Stacks until xl.
export function PersonaGrid({ personas, className }: PersonaGridProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-5 xl:grid-cols-2', className)}>
      {personas.map((persona, index) => (
        <PersonaCard key={index} {...persona} />
      ))}
    </div>
  );
}
