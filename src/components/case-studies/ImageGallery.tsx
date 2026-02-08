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

export function ImageMosaic({
  images,
  containerHeight,
  className,
  backgroundColor = '#081827',
}: ImageMosaicProps) {
  return (
    <div
      className={cn('relative w-full', className)}
      style={{ height: containerHeight, backgroundColor }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute overflow-hidden"
          style={{
            top: image.position.top,
            left: image.position.left,
            right: image.position.right,
            bottom: image.position.bottom,
            width: image.position.width,
            height: image.position.height,
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
  imageHeight?: number | string;
  children: React.ReactNode;
  className?: string;
}

export function PageFlow({
  direction,
  image,
  imageWidth = 493,
  imageHeight = 298,
  children,
  className,
}: PageFlowProps) {
  return (
    <div
      className={cn(
        'flex gap-10 items-center',
        direction === 'right' && 'flex-row-reverse',
        className
      )}
    >
      <div
        className="shrink-0 overflow-hidden"
        style={{ width: imageWidth, height: imageHeight }}
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
