// ============================================
// Image Collage Component
// Floating image collage with positioned tags
// ============================================

import { cn } from '@/lib/utils';

interface CollageImage {
  src: string;
  alt: string;
  position: {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    rotate?: number;
  };
}

interface FloatingTag {
  label: string;
  position: {
    left?: number;
    top?: number;
  };
  variant?: 'default' | 'bordered' | 'accent';
}

interface ImageCollageProps {
  images: CollageImage[];
  tags?: FloatingTag[];
  className?: string;
}

// Reference dimensions the pixel positions in the data were authored against.
// The container scales from these, so children are positioned in percentages.
const REF_WIDTH = 926;
const REF_HEIGHT = 567;

export function ImageCollage({
  images,
  tags = [],
  className,
}: ImageCollageProps) {
  return (
    <div
      className={cn('relative w-full aspect-[926/567] max-w-[926px]', className)}
    >
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute overflow-hidden shadow-lg"
          style={{
            // Percentages of the container, not raw pixels: the container now
            // scales with its aspect box, so fixed offsets would drift.
            left: `${((image.position.left ?? 0) / REF_WIDTH) * 100}%`,
            top: `${((image.position.top ?? 0) / REF_HEIGHT) * 100}%`,
            width: `${((image.position.width ?? 0) / REF_WIDTH) * 100}%`,
            height: `${((image.position.height ?? 0) / REF_HEIGHT) * 100}%`,
            transform: image.position.rotate
              ? `rotate(${image.position.rotate}deg)`
              : undefined,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Floating Tags */}
      {tags.map((tag, index) => {
        const variantClasses = {
          default:
            'border border-border/60 bg-card/60 text-foreground backdrop-blur-sm',
          bordered:
            'border border-border bg-card text-foreground backdrop-blur-sm',
          accent:
            'border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/15 text-foreground backdrop-blur-sm',
        };

        return (
          <div
            key={index}
            className={cn(
              'absolute px-[18px] h-[46px] flex items-center justify-center rounded-sm',
              variantClasses[tag.variant || 'default']
            )}
            style={{
              left: `${((tag.position.left ?? 0) / REF_WIDTH) * 100}%`,
              top: `${((tag.position.top ?? 0) / REF_HEIGHT) * 100}%`,
            }}
          >
            <span className="font-body text-sm font-bold whitespace-nowrap">
              {tag.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
