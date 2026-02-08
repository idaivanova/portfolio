// ============================================
// Page Flow Section Component
// For page-by-page flow sections with image + content
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

interface PageFlowSectionProps {
  direction: 'left' | 'right';
  image: {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
  };
  title: string;
  intent: string;
  objective: string;
  keyActions: string[];
  additionalContent?: React.ReactNode;
  className?: string;
}

export function PageFlowSection({
  direction,
  image,
  title,
  intent,
  objective,
  keyActions,
  additionalContent,
  className,
}: PageFlowSectionProps) {
  const imageWidth = image.width || 493;
  const imageHeight = image.height || 298;

  return (
    <div
      className={cn(
        'flex gap-10 items-center',
        direction === 'right' && 'flex-row-reverse',
        className
      )}
    >
      {/* Image */}
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

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-2.5">
        <h3 className="font-body text-2xl font-extrabold text-cream">
          {title}
        </h3>
        <div className="font-body text-sm leading-normal text-cream/90 space-y-1">
          <p>
            <span className="font-bold">Intent:</span>{' '}
            <span className="font-normal">{intent}</span>
          </p>
          <p>
            <span className="font-bold">Objective:</span>{' '}
            <span className="font-normal">{objective}</span>
          </p>
          <p className="font-bold mt-2">Key Actions:</p>
          <ul className="list-disc ml-5 space-y-1">
            {keyActions.map((action, index) => (
              <li key={index} className="font-normal">
                {action}
              </li>
            ))}
          </ul>
          {additionalContent && (
            <div className="mt-4">{additionalContent}</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Page Flow with Split Text Layout
// For sections with image and two-column text
// ============================================

interface PageFlowSplitProps {
  image: {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
  };
  leftContent: {
    title: string;
    intent: string;
    objective: string;
    keyActions: string[];
  };
  rightContent: React.ReactNode;
  className?: string;
}

export function PageFlowSplit({
  image,
  leftContent,
  rightContent,
  className,
}: PageFlowSplitProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {/* Split Content Row */}
      <div className="flex items-center justify-between py-5">
        <div className="flex-1 flex flex-col gap-2.5 pr-8">
          <h3 className="font-body text-2xl font-extrabold text-cream">
            {leftContent.title}
          </h3>
          <div className="font-body text-sm leading-normal text-cream/90 space-y-1">
            <p>
              <span className="font-bold">Intent:</span>{' '}
              <span className="font-normal">{leftContent.intent}</span>
            </p>
            <p>
              <span className="font-bold">Objective:</span>{' '}
              <span className="font-normal">{leftContent.objective}</span>
            </p>
            <p className="font-bold mt-2">Key Actions:</p>
            <ul className="list-disc ml-5 space-y-1">
              {leftContent.keyActions.map((action, index) => (
                <li key={index} className="font-normal">
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Box */}
        <div className="w-[538px] border border-[#122836] rounded-sm p-[30px]">
          <div className="font-body text-sm leading-normal text-cream/90">
            {rightContent}
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="w-full">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-cover"
          style={{
            width: image.width || '100%',
            height: image.height || 'auto',
          }}
        />
      </div>
    </div>
  );
}
