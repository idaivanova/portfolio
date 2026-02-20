import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../lib/LanguageContext';
import { languages, type Language } from '../../lib/i18n';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((l) => l.code === language) || languages[0];

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200',
          'text-sm font-medium text-cream/80 hover:text-cream hover:bg-cream/5',
          isOpen && 'bg-cream/10'
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-48 bg-navy-dark border border-cream/10 rounded-lg shadow-xl overflow-hidden z-50"
            role="listbox"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150',
                  'hover:bg-cream/5',
                  language === lang.code
                    ? 'bg-accent/20 text-accent'
                    : 'text-cream/80'
                )}
                role="option"
                aria-selected={language === lang.code}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                <span className="text-xs text-cream/40 uppercase">{lang.code}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
