// ============================================
// Patient Flow Component
// Numbered step-by-step flow with phone mockups
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

interface FlowStep {
  number: string;
  title: string;
  description: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
  };
}

interface PatientFlowProps {
  steps: FlowStep[];
  className?: string;
}

export function PatientFlow({ steps, className }: PatientFlowProps) {
  return (
    <div className={cn('flex flex-col gap-[60px]', className)}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={cn(
            'flex flex-col gap-10 lg:flex-row lg:items-start',
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          )}
        >
          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col gap-2.5">
            <div className="flex items-baseline gap-4">
              <span className="font-body text-[54px] font-extrabold text-[var(--color-accent-text)] leading-none">
                {step.number}
              </span>
              <h3 className="font-body text-2xl font-extrabold text-foreground">
                {step.title}
              </h3>
            </div>
            <div className="font-body text-sm leading-normal text-muted-foreground">
              {step.description}
            </div>
          </div>

          {/* Phone Mockup */}
          {step.image && (
            <div
              className="w-full max-w-full overflow-hidden rounded-lg border border-border bg-card lg:shrink-0"
              style={{
                maxWidth: step.image.width ?? 246,
                aspectRatio:
                  typeof step.image.width === 'number' &&
                  typeof step.image.height === 'number'
                    ? `${step.image.width} / ${step.image.height}`
                    : undefined,
              }}
            >
              <img
                src={step.image.src}
                alt={step.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================
// Timeline Component
// Horizontal timeline for design process
// ============================================

interface TimelineItem {
  label: string;
  value: string;
}

interface TimelineProps {
  items: TimelineItem[];
  image?: {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
  };
  className?: string;
}

export function Timeline({ items, image, className }: TimelineProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {/* Timeline Items */}
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex min-w-0 flex-col items-center gap-2">
            <div className="flex items-center">
              <span className="font-body text-sm font-bold text-foreground">
                {item.label}
              </span>
              {index < items.length - 1 && (
                <div className="mx-2 h-px w-8 bg-border max-lg:hidden" />
              )}
            </div>
            <span className="max-w-[100px] text-center font-body text-xs text-muted-foreground">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline Image */}
      {image && (
        <div className="mt-5 flex justify-center">
          <div
            className="w-full max-w-full overflow-hidden rounded"
            style={{
              maxWidth: image.width ?? 500,
              aspectRatio:
                typeof image.width === 'number' &&
                typeof image.height === 'number'
                  ? `${image.width} / ${image.height}`
                  : undefined,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Phone Mockup Component
// Standalone phone frame for screenshots
// ============================================

interface PhoneMockupProps {
  image: {
    src: string;
    alt: string;
  };
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function PhoneMockup({
  image,
  width = 246,
  height = 438,
  className,
}: PhoneMockupProps) {
  // Same bug class as PageFlowSection/PageFlow: `style={{ width, height }}` gave
  // the box a hard 246x438 that cannot shrink, so it escaped any parent narrower
  // than 246px by exactly 66px at every viewport. Cap the width instead and let
  // an aspect ratio carry the declared proportions.
  const hasFixedSize = typeof width === 'number' && typeof height === 'number';

  return (
    <div
      className={cn(
        'w-full max-w-full overflow-hidden rounded-lg border border-border bg-card lg:shrink-0',
        className
      )}
      style={{
        maxWidth: width,
        aspectRatio: hasFixedSize ? `${width} / ${height}` : undefined,
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
