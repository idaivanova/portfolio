// ============================================
// Header Component
// Responsive navigation with mobile menu
// ============================================

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { IconButton } from '../ui/icon';
import { LinkedInIcon } from '../ui/icon';

// Navigation items
const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PROJECTS', href: '/#projects' },
];

// ============================================
// Desktop Navigation
// ============================================

interface DesktopNavProps {
  currentPath: string;
}

function DesktopNav({ currentPath }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => {
        const isActive = currentPath === item.href ||
          (item.href === '/' && currentPath === '') ||
          (item.href !== '/' && currentPath.startsWith(item.href));

        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'relative text-sm font-medium tracking-wider uppercase transition-colors duration-200',
              'hover:text-accent',
              isActive
                ? 'text-accent'
                : 'text-cream/70'
            )}
          >
            {item.label}
            {isActive && (
              <motion.span
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

// ============================================
// Mobile Navigation
// ============================================

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

function MobileNav({ isOpen, onClose, currentPath }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-darkest/80 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-navy-dark z-50 md:hidden shadow-2xl border-l border-cream/10"
          >
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex items-center justify-end p-4 border-b border-cream/10">
                <IconButton
                  iconName="X"
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="text-cream hover:bg-cream/10"
                />
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col p-4 gap-2">
                {navItems.map((item, index) => {
                  const isActive = currentPath === item.href ||
                    (item.href === '/' && currentPath === '') ||
                    (item.href !== '/' && currentPath.startsWith(item.href));

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className={cn(
                          'block py-3 px-4 text-lg font-medium tracking-wider uppercase rounded-lg transition-colors',
                          isActive
                            ? 'bg-accent/20 text-accent'
                            : 'text-cream/80 hover:bg-cream/5'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Contact info at bottom */}
              <div className="mt-auto p-4 border-t border-cream/10">
                <p className="text-sm text-cream/50 mb-2">
                  Get in touch
                </p>
                <a
                  href="mailto:ivanova.contact@gmail.com"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  ivanova.contact@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============================================
// Header Component
// ============================================

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Get current path from React Router
  const currentPath = location.pathname + location.hash;

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          isScrolled
            ? 'bg-navy-darkest/90 backdrop-blur-md border-b border-cream/10'
            : 'bg-transparent',
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-cream hover:text-accent transition-colors font-display"
            >
              <span className="text-accent">I</span>
              <span>da</span>
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav currentPath={currentPath} />

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* LinkedIn Link (Desktop) */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-cream/70 hover:text-accent transition-colors"
              >
                <LinkedInIcon size="sm" />
                <span className="sr-only">LinkedIn</span>
              </a>

              {/* Mobile Menu Button */}
              <IconButton
                iconName="Menu"
                variant="ghost"
                size="icon"
                className="md:hidden text-cream hover:bg-cream/10"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={currentPath}
      />
    </>
  );
}

export default Header;
