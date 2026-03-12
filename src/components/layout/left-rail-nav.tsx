import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, Layers3, Sparkles, UserRound, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LinkedInIcon } from '../ui/icon';
import { useLanguage } from '../../lib/LanguageContext';
import type { Language, Translations } from '../../lib/i18n';

interface LeftRailNavProps {
  className?: string;
}

interface RailLink {
  id: 'home' | 'about' | 'pimcore' | 'ergowork' | 'dermatik' | 'sdzrn' | 'buzz-hq';
  href: string;
  section: 'main' | 'real' | 'playground';
}

const railLinks: RailLink[] = [
  { id: 'home', href: '/', section: 'main' },
  { id: 'about', href: '/about', section: 'main' },
  { id: 'pimcore', href: '/case-studies/pimcore', section: 'real' },
  { id: 'ergowork', href: '/case-studies/ergowork', section: 'real' },
  { id: 'dermatik', href: '/case-studies/dermatik', section: 'real' },
  { id: 'sdzrn', href: '/case-studies/sdzrn', section: 'playground' },
  { id: 'buzz-hq', href: '/case-studies/buzz-hq', section: 'playground' },
];

const navSectionLabels: Record<Language, { caseStudies: string; playground: string; projects: string }> = {
  en: { caseStudies: 'Case Studies', playground: 'Playground', projects: 'Projects' },
  de: { caseStudies: 'Fallstudien', playground: 'Spielwiese', projects: 'Projekte' },
  bg: { caseStudies: 'Кейс проекти', playground: 'Експерименти', projects: 'Проекти' },
  da: { caseStudies: 'Case studies', playground: 'Legeplads', projects: 'Projekter' },
};

const projectDescriptions: Record<Language, Record<'pimcore' | 'ergowork' | 'dermatik' | 'sdzrn' | 'buzz-hq', string>> = {
  en: {
    pimcore: 'Enterprise PIM redesign',
    ergowork: 'Ergonomics platform',
    dermatik: 'Healthcare app',
    sdzrn: 'Brand identity concept',
    'buzz-hq': 'Interactive bee',
  },
  de: {
    pimcore: 'Enterprise-PIM Redesign',
    ergowork: 'Ergonomie-Plattform',
    dermatik: 'Healthcare-App',
    sdzrn: 'Markenidentitätskonzept',
    'buzz-hq': 'Interaktive Biene',
  },
  bg: {
    pimcore: 'Редизайн на Enterprise PIM',
    ergowork: 'Ергономична платформа',
    dermatik: 'Здравно приложение',
    sdzrn: 'Концепция за бранд идентичност',
    'buzz-hq': 'Интерактивна пчела',
  },
  da: {
    pimcore: 'Enterprise PIM-redesign',
    ergowork: 'Ergonomisk platform',
    dermatik: 'Sundhedsapp',
    sdzrn: 'Brandidentitetskoncept',
    'buzz-hq': 'Interaktiv bi',
  },
};

function localizeRailLink(item: RailLink, t: Translations, language: Language) {
  switch (item.id) {
    case 'home':
      return { label: t.nav.home };
    case 'about':
      return { label: t.nav.about };
    case 'pimcore':
      return { label: t.features.caseStudies.pimcore.title, description: projectDescriptions[language].pimcore };
    case 'ergowork':
      return { label: t.features.caseStudies.ergowork.title, description: projectDescriptions[language].ergowork };
    case 'dermatik':
      return { label: t.features.caseStudies.dermatik.title, description: projectDescriptions[language].dermatik };
    case 'sdzrn':
      return { label: 'SDZRN', description: projectDescriptions[language].sdzrn };
    case 'buzz-hq':
      return { label: t.features.playground.buzzHQ.title, description: projectDescriptions[language]['buzz-hq'] };
    default:
      return { label: item.id };
  }
}

const triggerLogoClicked = (clickCount: number) => {
  window.dispatchEvent(new CustomEvent('logo-clicked', {
    detail: { clickCount },
  }));
};

function DesktopRailNav({ className }: LeftRailNavProps) {
  const location = useLocation();
  const { t, language } = useLanguage();
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
  const sectionLabels = navSectionLabels[language];

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
              // Use exact match for home/about, startsWith for case study pages to handle sub-routes
              const active = item.href === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(item.href);
              const localized = localizeRailLink(item, t, language);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block rounded-md px-2.5 py-1.5 text-[12px] lg:text-[13px] font-semibold tracking-[0.04em] transition-colors',
                    active ? 'bg-accent/15 text-accent' : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  )}
                >
                  {localized.label}
                </Link>
              );
            })}
          </div>

          <div className="my-3 h-px bg-border" />

          <p className="px-2.5 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/45">
            {sectionLabels.caseStudies}
          </p>
          <div className="space-y-0.5">
            {realLinks.map((item) => {
              // Use startsWith to handle case study pages with sub-routes
              const active = location.pathname.startsWith(item.href);
              const localized = localizeRailLink(item, t, language);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block rounded-md px-2.5 py-1.5 transition-colors',
                    active ? 'bg-accent/12 text-accent' : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span className="block text-[12px] lg:text-[13px] font-medium leading-tight">{localized.label}</span>
                  {localized.description && (
                    <span className="mt-0.5 hidden lg:block text-[11px] text-foreground/45 leading-tight">{localized.description}</span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="my-3 h-px bg-border" />

          <p className="px-2.5 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/45">
            {sectionLabels.playground}
          </p>
          <div className="space-y-0.5">
            {playgroundLinks.map((item) => {
              // Use startsWith to handle case study pages with sub-routes
              const active = location.pathname.startsWith(item.href);
              const localized = localizeRailLink(item, t, language);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'block rounded-md px-2.5 py-1.5 transition-colors',
                    active ? 'bg-accent/12 text-accent' : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span className="block text-[12px] lg:text-[13px] font-medium leading-tight">{localized.label}</span>
                  {localized.description && (
                    <span className="mt-0.5 hidden lg:block text-[11px] text-foreground/45 leading-tight">{localized.description}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="mt-3 border-t border-border pt-2.5">
          <div className="mb-2.5 flex items-center gap-2">
            <LanguageToggle menuPlacement="up" menuAlign="left" />
            <ThemeToggle />
          </div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
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
  const { t, language } = useLanguage();
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(false);
  const [beeTapCount, setBeeTapCount] = React.useState(0);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const mobileDialogId = 'mobile-projects-dialog';

  const realLinks = railLinks.filter((item) => item.section === 'real');
  const playgroundLinks = railLinks.filter((item) => item.section === 'playground');
  const sectionLabels = navSectionLabels[language];

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
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/55">{sectionLabels.projects}</p>
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
                {realLinks.map((item) => {
                  const localized = localizeRailLink(item, t, language);
                  // Use startsWith to handle case study pages with sub-routes
                  const active = location.pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsProjectsOpen(false)}
                      className={cn(
                        'rounded-lg px-3 py-2',
                        active ? 'bg-accent/12 text-accent' : 'text-foreground/78 hover:bg-muted hover:text-foreground'
                      )}
                    >
                      <span className="block text-sm font-medium">{localized.label}</span>
                      {localized.description && <span className="block text-[11px] text-foreground/45">{localized.description}</span>}
                    </Link>
                  );
                })}

                <div className="my-1 h-px bg-border" />

                {playgroundLinks.map((item) => {
                  const localized = localizeRailLink(item, t, language);
                  // Use startsWith to handle case study pages with sub-routes
                  const active = location.pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsProjectsOpen(false)}
                      className={cn(
                        'rounded-lg px-3 py-2',
                        active ? 'bg-accent/12 text-accent' : 'text-foreground/78 hover:bg-muted hover:text-foreground'
                      )}
                    >
                      <span className="block text-sm font-medium">{localized.label}</span>
                      {localized.description && <span className="block text-[11px] text-foreground/45">{localized.description}</span>}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-2.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <LanguageToggle menuPlacement="up" menuAlign="left" />
                  <ThemeToggle />
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm text-foreground/70 hover:text-accent"
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
            <span>{sectionLabels.projects}</span>
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
