import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, Layers3, Sparkles, UserRound, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LinkedInIcon } from '../ui/icon';
import { useLanguage } from '../../lib/LanguageContext';

interface LeftRailNavProps {
  className?: string;
}

interface RailLink {
  label: string;
  href: string;
  description?: string;
  section: 'main' | 'real' | 'playground';
}

const railLinks: RailLink[] = [
  { label: 'HOME', href: '/', section: 'main' },
  { label: 'ABOUT', href: '/about', section: 'main' },
  { label: 'Pimcore Platform', href: '/case-studies/pimcore', description: 'Enterprise PIM redesign', section: 'real' },
  { label: 'ErgoWork', href: '/case-studies/ergowork', description: 'Ergonomics platform', section: 'real' },
  { label: 'Dermatik', href: '/case-studies/dermatik', description: 'Healthcare app', section: 'real' },
  { label: 'SDZRN', href: '/case-studies/sdzrn', description: 'Brand identity concept', section: 'playground' },
  { label: 'Buzz HQ', href: '/case-studies/buzz-hq', description: 'Interactive bee', section: 'playground' },
];

const triggerLogoClicked = (clickCount: number) => {
  window.dispatchEvent(new CustomEvent('logo-clicked', {
    detail: { clickCount },
  }));
};

function DesktopRailNav({ className }: LeftRailNavProps) {
  const location = useLocation();
  const { t } = useLanguage();
  const [logoClickCount, setLogoClickCount] = React.useState(0);
  const [isLogoAnimating, setIsLogoAnimating] = React.useState(false);

  const handleLogoClick = () => {
    const nextClickCount = logoClickCount >= 5 ? 1 : logoClickCount + 1;
    setLogoClickCount(nextClickCount);
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 260);
    triggerLogoClicked(nextClickCount);
  };

  const mainLinks = railLinks.filter((item) => item.section === 'main');
  const realLinks = railLinks.filter((item) => item.section === 'real');
  const playgroundLinks = railLinks.filter((item) => item.section === 'playground');

  return (
    <aside
      className={cn(
        'hidden md:flex fixed left-0 top-0 z-40 h-screen',
        'md:w-[220px] lg:w-[238px] xl:w-[252px] 2xl:w-[264px]',
        'border-r border-border bg-background/95 backdrop-blur-sm',
        className
      )}
    >
      <div className="flex h-full w-full flex-col md:p-3 lg:p-4 xl:p-5">
        <motion.div
          className="flex items-center gap-2 font-bold text-foreground hover:text-accent transition-colors font-display md:text-lg xl:text-xl"
          animate={isLogoAnimating ? {
            scale: [1, 1.12, 0.96, 1.03, 1],
            rotate: [0, -2.5, 2.5, -1.5, 0],
          } : {}}
          transition={{ duration: 0.26 }}
        >
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
            <span className="text-accent">I</span>
            <span>da</span>
          </Link>
          {logoClickCount > 0 && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] text-accent"
            >
              {logoClickCount}x
            </motion.span>
          )}
        </motion.div>

        <nav className="mt-5 flex-1 overflow-y-auto pr-1">
          <div className="space-y-1">
            {mainLinks.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block rounded-md px-2.5 py-1.5 text-[12px] lg:text-[13px] font-semibold tracking-[0.04em] transition-colors',
                    active ? 'bg-accent/15 text-accent' : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  )}
                >
                  {item.label === 'HOME' ? t.nav.home : t.nav.about}
                </Link>
              );
            })}
          </div>

          <div className="my-3 h-px bg-border" />

          <p className="px-2.5 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/45">
            Case Studies
          </p>
          <div className="space-y-0.5">
            {realLinks.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block rounded-md px-2.5 py-1.5 transition-colors',
                    active ? 'bg-accent/12 text-accent' : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span className="block text-[12px] lg:text-[13px] font-medium leading-tight">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 hidden lg:block text-[11px] text-foreground/45 leading-tight">{item.description}</span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="my-3 h-px bg-border" />

          <p className="px-2.5 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/45">
            Playground
          </p>
          <div className="space-y-0.5">
            {playgroundLinks.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block rounded-md px-2.5 py-1.5 transition-colors',
                    active ? 'bg-accent/12 text-accent' : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span className="block text-[12px] lg:text-[13px] font-medium leading-tight">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 hidden lg:block text-[11px] text-foreground/45 leading-tight">{item.description}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="mt-3 border-t border-border pt-2.5">
          <div className="mb-2.5 flex items-center gap-2">
            <LanguageToggle menuPlacement="up" />
            <ThemeToggle />
          </div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs lg:text-sm text-foreground/65 hover:text-accent transition-colors"
          >
            <LinkedInIcon size="sm" />
            <span>{t.common.linkedIn}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

function MobilePortfolioNav() {
  const location = useLocation();
  const { t } = useLanguage();
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(false);
  const [beeTapCount, setBeeTapCount] = React.useState(0);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const mobileDialogId = 'mobile-projects-dialog';

  const realLinks = railLinks.filter((item) => item.section === 'real');
  const playgroundLinks = railLinks.filter((item) => item.section === 'playground');

  const handleBeeTap = () => {
    const nextClickCount = beeTapCount >= 5 ? 1 : beeTapCount + 1;
    setBeeTapCount(nextClickCount);
    triggerLogoClicked(nextClickCount);
  };

  React.useEffect(() => {
    if (!isProjectsOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProjectsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isProjectsOpen]);

  return (
    <>
      <AnimatePresence>
        {isProjectsOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close projects menu"
              onClick={() => setIsProjectsOpen(false)}
              className="fixed inset-0 z-[10040] bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              id={mobileDialogId}
              role="dialog"
              aria-modal="true"
              aria-label="Projects menu"
              className="fixed bottom-[86px] left-3 right-3 z-[10060] rounded-2xl border border-border bg-background/98 p-3 shadow-2xl md:hidden"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/55">Projects</p>
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={() => setIsProjectsOpen(false)}
                  className="rounded-md p-1 text-foreground/65 hover:bg-muted hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {realLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsProjectsOpen(false)}
                    className={cn(
                      'rounded-lg px-3 py-2',
                      location.pathname === item.href ? 'bg-accent/12 text-accent' : 'text-foreground/78 hover:bg-muted hover:text-foreground'
                    )}
                  >
                    <span className="block text-sm font-medium">{item.label}</span>
                    <span className="block text-[11px] text-foreground/45">{item.description}</span>
                  </Link>
                ))}

                <div className="my-1 h-px bg-border" />

                {playgroundLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsProjectsOpen(false)}
                    className={cn(
                      'rounded-lg px-3 py-2',
                      location.pathname === item.href ? 'bg-accent/12 text-accent' : 'text-foreground/78 hover:bg-muted hover:text-foreground'
                    )}
                  >
                    <span className="block text-sm font-medium">{item.label}</span>
                    <span className="block text-[11px] text-foreground/45">{item.description}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-border pt-2.5">
                <div className="flex items-center gap-2">
                  <LanguageToggle menuPlacement="up" />
                  <ThemeToggle />
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-foreground/65 hover:text-accent"
                >
                  <LinkedInIcon size="sm" />
                  <span>{t.common.linkedIn}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 right-0 z-[10050] border-t border-border bg-background/96 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-sm md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
          <Link
            to="/"
            className={cn(
              'flex flex-col items-center justify-center rounded-xl py-1.5 text-[11px] font-medium',
              location.pathname === '/' ? 'text-accent bg-accent/10' : 'text-foreground/70'
            )}
          >
            <Home className="mb-0.5 h-4 w-4" />
            <span>{t.nav.home}</span>
          </Link>

          <Link
            to="/about"
            className={cn(
              'flex flex-col items-center justify-center rounded-xl py-1.5 text-[11px] font-medium',
              location.pathname === '/about' ? 'text-accent bg-accent/10' : 'text-foreground/70'
            )}
          >
            <UserRound className="mb-0.5 h-4 w-4" />
            <span>{t.nav.about}</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsProjectsOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isProjectsOpen}
            aria-controls={mobileDialogId}
            className="flex flex-col items-center justify-center rounded-xl py-1.5 text-[11px] font-medium text-foreground/70"
          >
            <Layers3 className="mb-0.5 h-4 w-4" />
            <span>Projects</span>
          </button>

          <button
            type="button"
            onClick={handleBeeTap}
            aria-label={`Trigger Bella easter egg, level ${beeTapCount > 0 ? beeTapCount : 0}`}
            className="relative flex flex-col items-center justify-center rounded-xl py-1.5 text-[11px] font-medium text-foreground/80"
          >
            <Sparkles className="mb-0.5 h-4 w-4 text-accent" />
            <span>Bella</span>
            {beeTapCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 rounded-full bg-accent/20 px-1.5 py-0.5 text-[10px] text-accent">
                {beeTapCount}x
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export function LeftRailNav({ className }: LeftRailNavProps) {
  return (
    <>
      <DesktopRailNav className={className} />
      <MobilePortfolioNav />
    </>
  );
}

export default LeftRailNav;
