// ============================================
// Image Gallery Components
// Various layouts for displaying images
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// ============================================
// Single Image Component
// ============================================

export interface SingleImageProps {
  image: GalleryImage;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'auto' | string;
}

export function SingleImage({
  image,
  className,
  aspectRatio = 'auto',
}: SingleImageProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    auto: '',
  };

  return (
    <div
      className={cn(
        'overflow-hidden',
        aspectClasses[aspectRatio as keyof typeof aspectClasses] || aspectRatio,
        className
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// ============================================
// Image Pair Component (2 images side by side)
// ============================================

export interface ImagePairProps {
  images: [GalleryImage, GalleryImage];
  className?: string;
  aspectRatio?: 'video' | 'square' | 'auto';
}

export function ImagePair({
  images,
  className,
  aspectRatio = 'video',
}: ImagePairProps) {
  return (
    <div className={cn('flex gap-5', className)}>
      {images.map((image, index) => (
        <SingleImage
          key={index}
          image={image}
          aspectRatio={aspectRatio}
          className="flex-1"
        />
      ))}
    </div>
  );
}

// ============================================
// Image Grid Component (mosaic layout)
// ============================================

export interface PositionedImage extends GalleryImage {
  position: {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    width?: string | number;
    height?: string | number;
  };
}

export interface ImageMosaicProps {
  images: PositionedImage[];
  containerHeight: number | string;
  className?: string;
  backgroundColor?: string;
}

// Mosaic positions are authored against a ~1000px reference width. They are
// expressed as percentages so the mosaic scales with its container; raw pixel
// left/width values pushed the page 608px sideways at 375.
const REF_WIDTH = 1000;

export function ImageMosaic({
  images,
  containerHeight = 518,
  className,
  backgroundColor = 'var(--card)',
}: ImageMosaicProps) {
  const refHeight = typeof containerHeight === 'number' ? containerHeight : 518;
  return (
    <div
      className={cn('relative w-full aspect-[1000/518] max-h-none', className)}
      style={{ backgroundColor }}
      aria-label="Selected brand and system pieces"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute overflow-hidden"
          style={{
            top: image.position.top != null ? `${((image.position.top as number) / refHeight) * 100}%` : undefined,
            left: image.position.left != null ? `${((image.position.left as number) / REF_WIDTH) * 100}%` : undefined,
            right: image.position.right != null ? `${((image.position.right as number) / REF_WIDTH) * 100}%` : undefined,
            bottom: image.position.bottom != null ? `${((image.position.bottom as number) / refHeight) * 100}%` : undefined,
            width: image.position.width != null ? `${((image.position.width as number) / REF_WIDTH) * 100}%` : undefined,
            height: image.position.height != null ? `${((image.position.height as number) / refHeight) * 100}%` : undefined,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

// ============================================
// Page Flow Image Component (with text)
// ============================================

export interface PageFlowProps {
  direction: 'left' | 'right';
  image: GalleryImage;
  imageWidth?: number | string;
  children: React.ReactNode;
  className?: string;
}

export function PageFlow({
  direction,
  image,
  imageWidth = 493,
  children,
  className,
}: PageFlowProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 items-center lg:flex-row lg:gap-10',
        direction === 'right' && 'lg:flex-row-reverse',
        className
      )}
    >
      {/* Fixed pixel widths (493px default) overflowed below lg, where the
          rail padding leaves very little content column. */}
      <div
        className="w-full max-w-full overflow-hidden lg:shrink-0"
        style={{ maxWidth: imageWidth }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
