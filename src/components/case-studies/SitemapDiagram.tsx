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
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Diagram Container */}
      <div
        className="relative w-full"
        style={{ height: containerHeight }}
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
              top: image.position?.top,
              left: image.position?.left,
              right: image.position?.right,
              bottom: image.position?.bottom,
              width: image.position?.width,
              height: image.position?.height,
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
        <div className="font-body text-sm leading-normal text-cream/90">
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
  className?: string;
}

export function SitemapSection({
  label,
  title,
  description,
  mainImage,
  overlayImages,
  footerText,
  className,
}: SitemapSectionProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {/* Header */}
      <div className="flex flex-col gap-2.5">
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

      {/* Diagram */}
      <SitemapDiagram
        mainImage={mainImage}
        overlayImages={overlayImages}
        footerText={footerText}
      />
    </div>
  );
}
