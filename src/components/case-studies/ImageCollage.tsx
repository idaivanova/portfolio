// ============================================
// Image Collage Component
// Floating image collage with positioned tags
// ============================================

import * as React from 'react';
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
  containerHeight?: number;
  containerWidth?: number;
  className?: string;
}

export function ImageCollage({
  images,
  tags = [],
  containerHeight = 567,
  containerWidth = 926,
  className,
}: ImageCollageProps) {
  return (
    <div
      className={cn('relative', className)}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute overflow-hidden shadow-[4px_4px_20.8px_0px_rgba(8,36,42,0.43)]"
          style={{
            left: image.position.left,
            top: image.position.top,
            width: image.position.width,
            height: image.position.height,
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
            'backdrop-blur-[2.25px] bg-[rgba(180,131,114,0.1)] text-cream',
          bordered:
            'backdrop-blur-[2.25px] bg-[#0c1d27] border border-[#173748] text-cream',
          accent:
            'backdrop-blur-[2.25px] bg-[rgba(255,134,92,0.1)] text-cream',
        };

        return (
          <div
            key={index}
            className={cn(
              'absolute px-[18px] h-[46px] flex items-center justify-center rounded-sm',
              variantClasses[tag.variant || 'default']
            )}
            style={{
              left: tag.position.left,
              top: tag.position.top,
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
