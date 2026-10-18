// ============================================
// Sitemap Diagram Component
// For information architecture visualization
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

interface SitemapImage {
  src: string;
  alt: string;
  position?: {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    width?: string | number;
    height?: string | number;
  };
}

interface SitemapDiagramProps {
  mainImage: {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
  };
  overlayImages?: SitemapImage[];
  footerText?: React.ReactNode;
  containerHeight?: number | string;
  className?: string;
}

export function SitemapDiagram({
  mainImage,
  overlayImages = [],
  footerText,
  containerHeight = 351,
  className,
}: SitemapDiagramProps) {
  // Overlay positions are authored against this reference width; percentages
  // keep them inside the container instead of pushing the page sideways.
  const REF_WIDTH = 1000;
  const refHeight = typeof containerHeight === 'number' ? containerHeight : 351;
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Diagram Container */}
      <div
        className="relative w-full aspect-[1000/351]"
      >
        {/* Main Image */}
        <div className="absolute inset-0">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Overlay Images (e.g., footer diagram) */}
        {overlayImages.map((image, index) => (
          <div
            key={index}
            className="absolute overflow-hidden"
            style={{
              top: image.position?.top != null ? `${((image.position.top as number) / refHeight) * 100}%` : undefined,
              left: image.position?.left != null ? `${((image.position.left as number) / REF_WIDTH) * 100}%` : undefined,
              right: image.position?.right != null ? `${((image.position.right as number) / REF_WIDTH) * 100}%` : undefined,
              bottom: image.position?.bottom != null ? `${((image.position.bottom as number) / refHeight) * 100}%` : undefined,
              width: image.position?.width != null ? `${((image.position.width as number) / REF_WIDTH) * 100}%` : undefined,
              height: image.position?.height != null ? `${((image.position.height as number) / refHeight) * 100}%` : undefined,
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

      {/* Footer Text */}
      {footerText && (
        <div className="font-body text-sm leading-normal text-muted-foreground">
          {footerText}
        </div>
      )}
    </div>
  );
}

// ============================================
// Sitemap Section Wrapper
// Combines SectionHeader with SitemapDiagram
// ============================================

interface SitemapSectionProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  mainImage: {
    src: string;
    alt: string;
  };
  overlayImages?: SitemapImage[];
  footerText?: React.ReactNode;
  containerHeight?: number | string;
  className?: string;
}

export function SitemapSection({
  label,
  title,
  description,
  mainImage,
  overlayImages,
  footerText,
  containerHeight,
  className,
}: SitemapSectionProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {/* Header */}
      <div className="flex flex-col gap-2.5">
        <span className="font-body text-sm text-[var(--color-accent-text)] h-[17px]">{label}</span>
        <h2 className="font-body text-[32px] font-extrabold leading-tight text-foreground">
          {title}
        </h2>
        {description && (
          <div className="font-body text-sm leading-normal text-muted-foreground">
            {description}
          </div>
        )}
      </div>

      {/* Diagram */}
      <SitemapDiagram
        mainImage={mainImage}
        overlayImages={overlayImages}
        footerText={footerText}
        containerHeight={containerHeight}
      />
    </div>
  );
}
