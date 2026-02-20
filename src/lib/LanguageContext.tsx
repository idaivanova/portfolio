import * as React from 'react';
import { Language, defaultLanguage, getTranslation, translations, type Translations } from './i18n';

const LANGUAGE_STORAGE_KEY = 'ida-portfolio-language';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && (stored === 'en' || stored === 'de' || stored === 'bg' || stored === 'da')) {
    return stored as Language;
  }
  
  const browserLang = navigator.language.split('-')[0];
  if (browserLang in translations) {
    return browserLang as Language;
  }
  
  return defaultLanguage;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = React.useState<Language>(getInitialLanguage);
  
  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  }, []);
  
  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      t: getTranslation(language),
    }),
    [language, setLanguage]
  );
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
