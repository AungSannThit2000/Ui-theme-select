import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SettingsContext = createContext(null);

const STORAGE_KEY = "app-settings";
const DEFAULTS = { theme: "light", language: "en" };

export function SettingsProvider({ children }) {
  const [theme, setThemeState] = useState(DEFAULTS.theme);
  const [language, setLanguageState] = useState(DEFAULTS.language);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (parsed?.theme === "light" || parsed?.theme === "dark") {
        setThemeState(parsed.theme);
      }
      if (parsed?.language === "en" || parsed?.language === "th") {
        setLanguageState(parsed.language);
      }
    } catch {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, language }));
  }, [theme, language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setTheme = (t) => {
    if (t === "light" || t === "dark") setThemeState(t);
  };

  const setLanguage = (l) => {
    if (l === "en" || l === "th") setLanguageState(l);
  };

  const resetSettings = () => {
    setThemeState(DEFAULTS.theme);
    setLanguageState(DEFAULTS.language);
  };

  const value = useMemo(
    () => ({ theme, language, setTheme, setLanguage, resetSettings }),
    [theme, language]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}
