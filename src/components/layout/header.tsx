// ============================================
// Header Component
// Responsive navigation with mobile menu and projects dropdown
// ============================================

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { IconButton } from '../ui/icon';
import { LinkedInIcon } from '../ui/icon';
import { ChevronDown } from 'lucide-react';

// Navigation items
const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
];

// Case studies for dropdown
const caseStudies = [
  // Real case studies
  { label: 'Pimcore Platform', href: '/case-studies/pimcore', description: 'Enterprise PIM redesign' },
  { label: 'ErgoWork', href: '/case-studies/ergowork', description: 'Ergonomics platform' },
  { label: 'Dermatik', href: '/case-studies/dermatik', description: 'Healthcare app' },
  // Experimental projects
  { label: 'Buzz', href: '/case-studies/buzz', description: 'Conservation app' },
  { label: 'Flutter', href: '/case-studies/flutter', description: 'Motion design' },
  { label: 'Buzz HQ 🆕', href: '/case-studies/buzz-hq', description: 'Bumblebee playground' },
  { label: 'Flutter Fields 🆕', href: '/case-studies/flutter-fields', description: 'Motion experiments' },
];

// ============================================
// Desktop Navigation with Projects Dropdown
// ============================================

interface DesktopNavProps {
  currentPath: string;
}

function DesktopNav({ currentPath }: DesktopNavProps) {
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(false);

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

      {/* Projects Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsProjectsOpen(true)}
        onMouseLeave={() => setIsProjectsOpen(false)}
      >
        <button
          className={cn(
            'flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors duration-200',
            'hover:text-accent',
            currentPath.startsWith('/case-studies')
              ? 'text-accent'
              : 'text-cream/70'
          )}
        >
          PROJECTS
          <ChevronDown className={cn(
            'w-4 h-4 transition-transform duration-200',
            isProjectsOpen && 'rotate-180'
          )} />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isProjectsOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-2 w-64 bg-navy-dark border border-cream/10 rounded-lg shadow-xl overflow-hidden z-50"
            >
              {caseStudies.map((project) => {
                const isActive = currentPath === project.href;
                return (
                  <Link
                    key={project.href}
                    to={project.href}
                    className={cn(
                      'block px-4 py-3 transition-colors duration-150',
                      isActive
                        ? 'bg-accent/20 text-accent'
                        : 'text-cream/80 hover:bg-cream/5 hover:text-cream'
                    )}
                  >
                    <span className="font-medium text-sm">{project.label}</span>
                    <p className="text-xs text-cream/50 mt-0.5">{project.description}</p>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// ============================================
// Mobile Navigation with Projects Section
// ============================================

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

function MobileNav({ isOpen, onClose, currentPath }: MobileNavProps) {
  const [isProjectsExpanded, setIsProjectsExpanded] = React.useState(false);

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
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-navy-dark z-50 md:hidden shadow-2xl border-l border-cream/10 overflow-y-auto"
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

              {/* Main Navigation links */}
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

                {/* Projects Section (expandable) */}
                <div className="mt-2 pt-2 border-t border-cream/10">
                  <button
                    onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                    className="flex items-center justify-between w-full py-3 px-4 text-lg font-medium tracking-wider uppercase rounded-lg transition-colors text-cream/80 hover:bg-cream/5"
                  >
                    <span>PROJECTS</span>
                    <ChevronDown className={cn(
                      'w-5 h-5 transition-transform duration-200',
                      isProjectsExpanded && 'rotate-180'
                    )} />
                  </button>

                  <AnimatePresence>
                    {isProjectsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {caseStudies.map((project) => {
                          const isActive = currentPath === project.href;
                          return (
                            <Link
                              key={project.href}
                              to={project.href}
                              onClick={onClose}
                              className={cn(
                                'block py-2.5 pl-8 pr-4 text-base font-medium tracking-wider transition-colors rounded-lg',
                                isActive
                                  ? 'bg-accent/20 text-accent'
                                  : 'text-cream/60 hover:bg-cream/5 hover:text-cream/80'
                              )}
                            >
                              {project.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
