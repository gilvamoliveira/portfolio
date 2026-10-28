import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { pt } from './pt.js';
import { en } from './en.js';

const dictionaries = { pt, en };
const STORAGE_KEY = 'portfolio-locale';
const DEFAULT_LOCALE = 'pt';

const LocaleContext = createContext(null);

function readStoredLocale() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return dictionaries[stored] ? stored : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(readStoredLocale);

  const setLocale = useCallback((nextLocale) => {
    if (!dictionaries[nextLocale]) return;
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // storage may be unavailable; the toggle still works for this session
    }
  }, []);

  const t = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = t.meta.lang;
    document.title = t.meta.title;
  }, [t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale precisa ser usado dentro de LocaleProvider');
  }

  return context;
}
