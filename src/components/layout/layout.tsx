// ============================================
// Layout Component
// Main wrapper combining Header, content, and Footer
// ============================================

import * as React from 'react';
import { cn } from '../../lib/utils';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  showFooterCTA?: boolean;
  headerVariant?: 'default' | 'transparent';
}

export function Layout({
  children,
  className,
  contentClassName,
  showHeader = true,
  showFooter = true,
  showFooterCTA = true,
  headerVariant = 'default',
}: LayoutProps) {
  return (
    <div className={cn('min-h-screen flex flex-col', className)}>
      {/* Header */}
      {showHeader && (
        <Header
          className={cn(
            headerVariant === 'transparent' && 'bg-transparent'
          )}
        />
      )}

      {/* Main Content */}
      <main
        className={cn(
          'flex-1',
          showHeader && 'pt-16 md:pt-20', // Account for fixed header
          contentClassName
        )}
      >
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer showCTA={showFooterCTA} />}
    </div>
  );
}

// ============================================
// Alternative Layout Variants
// ============================================

// Layout without header (for landing pages with custom hero)
export function LayoutWithoutHeader({
  children,
  className,
  contentClassName,
  showFooter = true,
}: Omit<LayoutProps, 'showHeader' | 'headerVariant'>) {
  return (
    <Layout
      showHeader={false}
      className={className}
      contentClassName={contentClassName}
      showFooter={showFooter}
    >
      {children}
    </Layout>
  );
}

// Layout without footer (for focused pages)
export function LayoutWithoutFooter({
  children,
  className,
  contentClassName,
  headerVariant,
}: Omit<LayoutProps, 'showFooter'>) {
  return (
    <Layout
      showFooter={false}
      className={className}
      contentClassName={contentClassName}
      headerVariant={headerVariant}
    >
      {children}
    </Layout>
  );
}

// Minimal layout (just content)
export function MinimalLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('min-h-screen', className)}>
      {children}
    </div>
  );
}

// ============================================
// Section Component
// For consistent section spacing
// ============================================

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  background?: 'default' | 'muted' | 'dark' | 'orange';
}

export function Section({
  children,
  className,
  spacing = 'lg',
  background = 'default',
  ...props
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
    '2xl': 'py-32 md:py-40',
  };

  const backgroundClasses = {
    default: 'bg-transparent',
    muted: 'bg-navy-dark/30',
    dark: 'bg-navy-dark text-cream',
    orange: 'bg-accent text-cream',
  };

  return (
    <section
      className={cn(
        'w-full',
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

// ============================================
// Page Wrapper Component
// For consistent page-level padding
// ============================================

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function PageWrapper({
  children,
  className,
  size = '2xl',
  ...props
}: PageWrapperProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
  };

  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Layout;
