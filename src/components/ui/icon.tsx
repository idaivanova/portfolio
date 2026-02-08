// ============================================
// Icon Component
// Integrates Lucide icons with custom sizing
// ============================================

import * as React from 'react';
import { cn } from '../../lib/utils';

// Import all Lucide icons
import * as LucideIcons from 'lucide-react';

// Icon size tokens (matching design system)
export const iconSizes = {
  xs: 12,    // 12px
  sm: 16,    // 16px
  md: 20,    // 20px
  lg: 24,    // 24px
  xl: 32,    // 32px
  '2xl': 40, // 40px
} as const;

export type IconSize = keyof typeof iconSizes;

// Icon names from Lucide
export type IconName = keyof typeof LucideIcons;

// Icon props
interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: IconSize | number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

// Icon component
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', color, strokeWidth = 2, className, ...props }, ref) => {
    // Get the icon component from Lucide
    const LucideIcon = LucideIcons[name] as React.ComponentType<{
      size?: number;
      color?: string;
      strokeWidth?: number;
      className?: string;
    }>;

    if (!LucideIcon) {
      console.warn(`Icon "${name}" not found in Lucide icons`);
      return null;
    }

    // Calculate size in pixels
    const sizeInPixels = typeof size === 'number' ? size : iconSizes[size];

    return (
      <LucideIcon
        ref={ref as React.Ref<SVGSVGElement>}
        size={sizeInPixels}
        color={color}
        strokeWidth={strokeWidth}
        className={cn('flex-shrink-0', className)}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };

// ============================================
// Custom SVG Icons (from Figma extraction)
// ============================================

// Arrow icon (for navigation)
const ArrowIcon = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeInPixels = typeof size === 'number' ? size : iconSizes[size];

    return (
      <svg
        ref={ref}
        width={sizeInPixels}
        height={sizeInPixels}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('flex-shrink-0', className)}
        {...props}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  }
);

ArrowIcon.displayName = 'ArrowIcon';

// Close/X icon
const CloseIcon = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeInPixels = typeof size === 'number' ? size : iconSizes[size];

    return (
      <svg
        ref={ref}
        width={sizeInPixels}
        height={sizeInPixels}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('flex-shrink-0', className)}
        {...props}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }
);

CloseIcon.displayName = 'CloseIcon';

// Menu/Hamburger icon
const MenuIcon = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeInPixels = typeof size === 'number' ? size : iconSizes[size];

    return (
      <svg
        ref={ref}
        width={sizeInPixels}
        height={sizeInPixels}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('flex-shrink-0', className)}
        {...props}
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }
);

MenuIcon.displayName = 'MenuIcon';

// Social icons
const LinkedInIcon = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeInPixels = typeof size === 'number' ? size : iconSizes[size];

    return (
      <svg
        ref={ref}
        width={sizeInPixels}
        height={sizeInPixels}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn('flex-shrink-0', className)}
        {...props}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
);

LinkedInIcon.displayName = 'LinkedInIcon';

const GithubIcon = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeInPixels = typeof size === 'number' ? size : iconSizes[size];

    return (
      <svg
        ref={ref}
        width={sizeInPixels}
        height={sizeInPixels}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn('flex-shrink-0', className)}
        {...props}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }
);

GithubIcon.displayName = 'GithubIcon';

// Export custom icons
export {
  ArrowIcon,
  CloseIcon,
  MenuIcon,
  LinkedInIcon,
  GithubIcon,
};

// ============================================
// Icon Button Component (combines Icon + Button)
// ============================================

import { Button, type ButtonProps } from './button';

interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  iconName: IconName;
  iconSize?: IconSize;
  'aria-label': string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ iconName, iconSize = 'md', className, size = 'icon', ...props }, ref) => {
    return (
      <Button ref={ref} size={size} className={cn(className)} {...props}>
        <Icon name={iconName} size={iconSize} />
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };

// ============================================
// Icon with text component
// ============================================

interface IconWithTextProps extends React.HTMLAttributes<HTMLDivElement> {
  iconName: IconName;
  iconSize?: IconSize;
  text: string;
  iconPosition?: 'left' | 'right';
  gap?: 'xs' | 'sm' | 'md';
}

const IconWithText = React.forwardRef<HTMLDivElement, IconWithTextProps>(
  ({ className, iconName, iconSize = 'sm', text, iconPosition = 'left', gap = 'sm', ...props }, ref) => {
    const gapClasses = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
    };

    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center', gapClasses[gap], className)}
        {...props}
      >
        {iconPosition === 'left' && <Icon name={iconName} size={iconSize} />}
        <span>{text}</span>
        {iconPosition === 'right' && <Icon name={iconName} size={iconSize} />}
      </div>
    );
  }
);

IconWithText.displayName = 'IconWithText';

export { IconWithText };
