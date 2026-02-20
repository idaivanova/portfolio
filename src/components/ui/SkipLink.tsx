import { cn } from '@/lib/utils';

interface SkipLinkProps {
  className?: string;
  targetId?: string;
  text?: string;
}

export function SkipLink({
  className,
  targetId = 'main-content',
  text = 'Skip to main content',
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        'skip-link',
        'sr-only focus:not-sr-only',
        'focus:fixed focus:top-4 focus:left-4 focus:z-[9999]',
        'focus:px-4 focus:py-2',
        'focus:bg-accent focus:text-cream',
        'focus:rounded-md',
        'focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-accent',
        'focus:font-medium focus:text-sm',
        'transition-all duration-150',
        className
      )}
    >
      {text}
    </a>
  );
}