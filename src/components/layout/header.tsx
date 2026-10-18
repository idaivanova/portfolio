// ============================================
// Header Component
// Brand bar only — desktop navigation lives in LeftRailNav,
// mobile navigation lives in the LeftRailNav bottom bar.
// ============================================

import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

// ============================================
// Header Component
// ============================================

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [logoClickCount, setLogoClickCount] = React.useState(0);
  const [isLogoAnimating, setIsLogoAnimating] = React.useState(false);

  // Handle logo click with easter egg trigger
  const handleLogoClick = () => {
    // Increment click counter (resets after 5)
    setLogoClickCount(prev => (prev >= 5 ? 1 : prev + 1));

    // Trigger animation feedback
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 300);

    // Dispatch custom event for easter eggs with click count
    window.dispatchEvent(new CustomEvent('logo-clicked', {
      detail: { clickCount: logoClickCount + 1 }
    }));
  };

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with easter egg trigger */}
          <motion.div
            className="md:hidden flex items-center gap-2 text-xl font-bold text-foreground hover:text-[var(--color-accent-text)] transition-colors font-display cursor-pointer"
            animate={isLogoAnimating ? {
              scale: [1, 1.15, 0.95, 1.05, 1],
              rotate: [0, -3, 3, -2, 0],
            } : {}}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
              <span className="text-[var(--color-accent-text)]">I</span>
              <span>da</span>
            </Link>
            {/* Click count indicator */}
            {logoClickCount > 0 && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent-text)] px-2 py-0.5 rounded-full"
              >
                {logoClickCount}×
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;