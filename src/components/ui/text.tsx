// ============================================
// Typography Components
// Based on Figma typography tokens
// Includes: Heading, Text, Label, Display
// ============================================

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// Heading Component (H1-H6)
// ============================================

const headingVariants = cva('font-bold tracking-tight text-zinc-900 dark:text-zinc-100', {
  variants: {
    level: {
      h1: 'text-4xl md:text-5xl lg:text-6xl leading-tight',
      h2: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
      h3: 'text-2xl md:text-3xl leading-snug',
      h4: 'text-xl md:text-2xl leading-snug',
      h5: 'text-lg md:text-xl leading-snug',
      h6: 'text-base md:text-lg font-semibold leading-normal tracking-wide uppercase',
    },
    weight: {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    level: 'h2',
    weight: 'bold',
    align: 'left',
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, as, weight, align, children, ...props }, ref) => {
    const Component = as || level || 'h2';

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, weight, align, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

// ============================================
// Text/Body Component
// ============================================

const textVariants = cva('text-zinc-700 dark:text-zinc-300', {
  variants: {
    size: {
      xs: 'text-xs leading-normal tracking-wide',
      sm: 'text-sm leading-normal',
      base: 'text-base leading-relaxed',
      lg: 'text-lg leading-relaxed',
      xl: 'text-xl leading-relaxed',
    },
    weight: {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    variant: {
      default: 'text-zinc-700 dark:text-zinc-300',
      muted: 'text-zinc-500 dark:text-zinc-400',
      primary: 'text-orange-600 dark:text-orange-400',
      inverse: 'text-white dark:text-zinc-900',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    variant: 'default',
    align: 'left',
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, variant, align, as: Component = 'p', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ size, weight, variant, align, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

// ============================================
// Label Component (for UI labels, tags, etc.)
// ============================================

const labelVariants = cva(
  'inline-flex items-center font-medium tracking-wider uppercase',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      variant: {
        default: 'text-zinc-600 dark:text-zinc-400',
        primary: 'text-orange-600 dark:text-orange-400',
        muted: 'text-zinc-400 dark:text-zinc-500',
        inverse: 'text-white dark:text-zinc-900',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      weight: 'semibold',
    },
  }
);

interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ className, size, variant, weight, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(labelVariants({ size, variant, weight, className }))}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Label.displayName = 'Label';

// ============================================
// Display/Hero Component (for welcome sections)
// ============================================

const displayVariants = cva(
  'font-bold tracking-tight text-zinc-900 dark:text-white',
  {
    variants: {
      size: {
        sm: 'text-3xl md:text-4xl leading-tight',
        md: 'text-4xl md:text-5xl lg:text-6xl leading-tight',
        lg: 'text-5xl md:text-6xl lg:text-7xl leading-none',
        xl: 'text-6xl md:text-7xl lg:text-8xl leading-none',
      },
      variant: {
        default: 'text-zinc-900 dark:text-white',
        gradient: 'bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent',
        inverse: 'text-white',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      align: 'left',
    },
  }
);

interface DisplayProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof displayVariants> {
  as?: 'h1' | 'h2' | 'div';
}

const Display = React.forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ className, size, variant, align, as: Component = 'h1', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(displayVariants({ size, variant, align, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Display.displayName = 'Display';

// ============================================
// Overline Component (for section headers)
// ============================================

const overlineVariants = cva(
  'inline-block text-xs font-semibold tracking-widest uppercase',
  {
    variants: {
      variant: {
        default: 'text-zinc-500 dark:text-zinc-400',
        primary: 'text-orange-500 dark:text-orange-400',
        inverse: 'text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface OverlineProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof overlineVariants> {}

const Overline = React.forwardRef<HTMLSpanElement, OverlineProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(overlineVariants({ variant, className }))}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Overline.displayName = 'Overline';

// ============================================
// Caption Component (small helper text)
// ============================================

const captionVariants = cva('text-xs', {
  variants: {
    variant: {
      default: 'text-zinc-500 dark:text-zinc-400',
      muted: 'text-zinc-400 dark:text-zinc-500',
      error: 'text-red-500',
      success: 'text-green-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CaptionProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof captionVariants> {}

const Caption = React.forwardRef<HTMLSpanElement, CaptionProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(captionVariants({ variant, className }))}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Caption.displayName = 'Caption';

// ============================================
// Link Component
// ============================================

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'muted' | 'primary';
  underline?: 'always' | 'hover' | 'none';
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = 'primary', underline = 'hover', children, ...props }, ref) => {
    const variantClasses = {
      default: 'text-zinc-900 dark:text-zinc-100',
      muted: 'text-zinc-500 dark:text-zinc-400',
      primary: 'text-orange-600 dark:text-orange-400',
    };

    const underlineClasses = {
      always: 'underline underline-offset-4',
      hover: 'underline-offset-4 hover:underline',
      none: 'no-underline',
    };

    return (
      <a
        ref={ref}
        className={cn(
          'transition-colors duration-200',
          variantClasses[variant],
          underlineClasses[underline],
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';

// ============================================
// Export all typography components
// ============================================

export {
  Heading,
  headingVariants,
  Text,
  textVariants,
  Label,
  labelVariants,
  Display,
  displayVariants,
  Overline,
  overlineVariants,
  Caption,
  captionVariants,
  Link,
};
