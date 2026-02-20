// ============================================
// Badge Component
// Small status indicators and labels
// ============================================

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Badge variants - matching the portfolio color scheme
const badgeVariants = cva(
  // Base styles
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-medium transition-colors duration-200',
  {
    variants: {
      // Variant styles
      variant: {
        // Default - accent background
        default: 'bg-accent/10 text-accent border border-accent/20',
        
        // Secondary - navy background
        secondary: 'bg-navy-mid/50 text-cream/80 border border-cream/10',
        
        // Accent - accent color background
        accent: 'bg-accent text-cream border-0',
        
        // Outlined - transparent with border
        outline: 'bg-transparent text-cream/80 border border-cream/20',
        
        // Ghost - subtle hover
        ghost: 'bg-transparent text-cream/60 hover:text-cream hover:bg-cream/5',
        
        // Success - green
        success: 'bg-green-500/10 text-green-400 border border-green-500/20',
        
        // Warning - yellow
        warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
        
        // Error - red
        error: 'bg-red-500/10 text-red-400 border border-red-500/20',
      },
      // Size variants
      size: {
        sm: 'px-2 py-0.5 text-[10px]',
        md: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// Badge props interface
export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

// Badge component
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    // If asChild is true, we'd use Slot from radix-ui
    // For now, just render a span
    return (
      <span
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
