// ============================================
// Button Component
// Based on Figma Button variants:
// - Master (Primary CTA)
// - Secondary (Outlined)
// - Link (Text with underline)
// Each with Orange and White color schemes
// ============================================

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Button variants configuration based on Figma design
const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      // Variant styles from Figma (Master, Secondary, Link)
      variant: {
        // Master/Primary button - Filled orange background
        master: 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 shadow-sm hover:shadow-md',

        // Secondary button - Outlined with orange border
        secondary: 'border-2 border-orange-500 text-orange-500 bg-transparent hover:bg-orange-50 active:bg-orange-100',

        // Link button - Text only with underline on hover
        link: 'text-orange-500 underline-offset-4 hover:underline active:text-orange-700 bg-transparent',

        // White variants for dark backgrounds
        'master-white': 'bg-white text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200 shadow-sm',
        'secondary-white': 'border-2 border-white text-white bg-transparent hover:bg-white/10',
        'link-white': 'text-white underline-offset-4 hover:underline hover:text-white/80 bg-transparent',

        // Ghost variant (subtle hover effect)
        ghost: 'hover:bg-zinc-100 active:bg-zinc-200 text-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-700 dark:text-zinc-100',
      },
      // Size variants
      size: {
        sm: 'h-9 px-4 py-2 text-xs',
        md: 'h-11 px-6 py-2.5',
        lg: 'h-12 px-8 py-3 text-base',
        icon: 'h-10 w-10 p-2',
      },
      // Full width option
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'master',
      size: 'md',
      fullWidth: false,
    },
  }
);

// Loading spinner component
const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('animate-spin h-4 w-4', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// Button props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    // Handle loading state
    const isDisabled = disabled || isLoading;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            {children && <span className="ml-2">{children}</span>}
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };

// ============================================
// Button Group Component (for multiple buttons)
// ============================================

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'sm' | 'md' | 'lg';
  direction?: 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      spacing = 'md',
      direction = 'horizontal',
      children,
      ...props
    },
    ref
  ) => {
    const spacingClasses = {
      sm: direction === 'horizontal' ? 'gap-2' : 'flex-col gap-2',
      md: direction === 'horizontal' ? 'gap-4' : 'flex-col gap-4',
      lg: direction === 'horizontal' ? 'gap-6' : 'flex-col gap-6',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };

// ============================================
// Icon Button Component
// ============================================

interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  icon: React.ReactNode;
  'aria-label': string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, size = 'icon', ...props }, ref) => {
    return (
      <Button ref={ref} size={size} className={cn(className)} {...props}>
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
