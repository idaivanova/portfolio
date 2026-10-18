// ============================================
// Case Study Sidebar Component
// Reusable navigation sidebar for all case studies
// ============================================

import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  isIndented?: boolean;
  isSection?: boolean;     // Section header like "Selected work" or "Playground"
  category?: 'real' | 'playground';  // Project category for styling
}

export interface SidebarProps {
  logo?: React.ReactNode;
  navItems: NavItem[];
  contactInfo: {
    email: string;
  };
  className?: string;
}

export function Sidebar({
  logo,
  navItems,
  contactInfo,
  className,
}: SidebarProps) {
  const location = useLocation();

  // Helper to determine if a link is external
  const isExternalLink = (href: string) => href.startsWith('http') || href.startsWith('mailto:');

  // Helper to determine if a link is an anchor link
  const isAnchorLink = (href: string) => href.startsWith('#');

  return (
    <aside
      className={cn(
        // The rail is a fixed 215px column above lg. Below that it must be allowed to
// shrink — a bare w-[215px] with shrink-0 escaped its parent at every width.
        'flex flex-col h-full pb-10 pt-12 sticky top-0 w-full max-w-full min-w-0 lg:w-[215px] lg:shrink-0',
        className
      )}
    >
      {/* Logo */}
      {logo && <div className="mb-[180px]">{logo}</div>}

      {/* Navigation */}
      <nav className="flex flex-col gap-5 mb-auto">
        {navItems.map((item, index) => {
          const external = isExternalLink(item.href);
          const anchor = isAnchorLink(item.href);

          // Section headers (like "Selected work" or "Playground")
          if (item.isSection) {
            return (
              <React.Fragment key={item.label}>
                {/* Divider before each section */}
                {index > 0 && (
                  <div className="my-1 h-px w-full bg-border" />
                )}
                <span className={cn(
                  "font-body text-sm font-semibold uppercase tracking-wider",
                  item.category === 'playground' ? 'text-muted-foreground' : 'text-foreground/70'
                )}>
                  {item.label}
                </span>
              </React.Fragment>
            );
          }

          // Combine current path with anchor for proper navigation
          const linkHref = anchor
            ? `${location.pathname}${item.href}`
            : item.href;

          return (
            <React.Fragment key={item.href + item.label}>
              {/* Divider before "Selected work" section */}
              {index > 0 &&
                navItems[index - 1].label === 'Selected work' &&
                item.isIndented && (
                  <div className="my-1 h-px w-full bg-border" />
                )}

              {external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'font-body text-xl leading-normal transition-colors duration-200',
                    item.isActive
                      ? 'text-foreground font-bold'
                      : 'text-foreground/80 hover:text-foreground',
                    item.isIndented && 'pl-2.5'
                  )}
                >
                  <span className="flex items-center gap-1">
                    {item.isActive && (
                      <svg
                        width="15"
                        height="24"
                        viewBox="0 0 15 24"
                        fill="none"
                        className="shrink-0"
                      >
                        <path d="M0 12L15 0V24L0 12Z" fill="currentColor" />
                      </svg>
                    )}
                    {item.label}
                  </span>
                </a>
              ) : (
                <Link
                  to={linkHref}
                  className={cn(
                    'font-body text-xl leading-normal transition-colors duration-200',
                    item.isActive
                      ? 'text-foreground font-bold'
                      : 'text-foreground/80 hover:text-foreground',
                    item.isIndented && 'pl-2.5'
                  )}
                >
                  <span className="flex items-center gap-1">
                    {item.isActive && (
                      <svg
                        width="15"
                        height="24"
                        viewBox="0 0 15 24"
                        fill="none"
                        className="shrink-0"
                      >
                        <path d="M0 12L15 0V24L0 12Z" fill="currentColor" />
                      </svg>
                    )}
                    {item.label}
                  </span>
                </Link>
              )}

              {/* Divider after "Intro" */}
              {item.label === 'Intro' && (
                <div className="my-1 h-px w-full bg-border" />
              )}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Contact Info — email only for privacy */}
      <div className="flex flex-col gap-4 whitespace-pre-wrap font-body text-sm text-muted-foreground">
        <a
          href={`mailto:${contactInfo.email}`}
          className="underline decoration-solid transition-colors hover:text-foreground"
        >
          {contactInfo.email}
        </a>
      </div>
    </aside>
  );
}

// ============================================
// Logo Component
// ============================================

export interface LogoProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Logo({ name, icon, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2 min-w-0 max-w-full', className)}>
      {icon || (
        <div className="w-[23px] h-[23px] rounded-full bg-accent shrink-0" />
      )}
      <span className="font-display text-xl text-[var(--color-accent-text)] min-w-0 break-words">
        {name}
      </span>
    </div>
  );
}
