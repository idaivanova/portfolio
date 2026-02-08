// ============================================
// Container Component
// Provides consistent max-width and padding
// ============================================

import * as React from 'react';
import { cn } from '@/lib/utils';

// Container size variants
const containerSizes = {
  sm: 'max-w-3xl',      // 768px
  md: 'max-w-4xl',      // 896px
  lg: 'max-w-5xl',      // 1024px
  xl: 'max-w-6xl',      // 1152px
  '2xl': 'max-w-7xl',   // 1280px
  full: 'max-w-full',   // 100%
} as const;

type ContainerSize = keyof typeof containerSizes;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  center?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size = '2xl',
      padding = 'lg',
      center = true,
      children,
      ...props
    },
    ref
  ) => {
    const paddingClasses = {
      none: '',
      sm: 'px-4',
      md: 'px-4 sm:px-6',
      lg: 'px-4 sm:px-6 lg:px-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          containerSizes[size],
          paddingClasses[padding],
          center && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export { Container, containerSizes };
export type { ContainerSize, ContainerProps };
