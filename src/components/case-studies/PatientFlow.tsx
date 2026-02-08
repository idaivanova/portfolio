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
            'flex gap-10 items-start',
            index % 2 === 1 ? 'flex-row-reverse' : ''
          )}
        >
          {/* Content */}
          <div className="flex-1 flex flex-col gap-2.5">
            <div className="flex items-baseline gap-4">
              <span className="font-body text-[54px] font-extrabold text-accent leading-none">
                {step.number}
              </span>
              <h3 className="font-body text-2xl font-extrabold text-cream">
                {step.title}
              </h3>
            </div>
            <div className="font-body text-sm leading-normal text-cream/90">
              {step.description}
            </div>
          </div>

          {/* Phone Mockup */}
          {step.image && (
            <div
              className="shrink-0 overflow-hidden rounded-lg border border-[#122836] bg-[#0C1D27]"
              style={{
                width: step.image.width || 246,
                height: step.image.height || 438,
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
      <div className="flex justify-between items-start">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="flex items-center">
              <span className="font-body text-sm font-bold text-cream">
                {item.label}
              </span>
              {index < items.length - 1 && (
                <div className="w-8 h-px bg-[#122836] mx-2" />
              )}
            </div>
            <span className="font-body text-xs text-cream/70 text-center max-w-[100px]">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline Image */}
      {image && (
        <div className="mt-5 flex justify-center">
          <div
            className="overflow-hidden rounded"
            style={{
              width: image.width || 500,
              height: image.height || 96,
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
  return (
    <div
      className={cn(
        'shrink-0 overflow-hidden rounded-lg border border-[#122836] bg-[#0C1D27]',
        className
      )}
      style={{ width, height }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
