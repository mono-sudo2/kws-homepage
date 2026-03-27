"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { de, en, fr, type Translations } from "./index";

export type Language = "de" | "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = { de, en, fr };

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
  t: de,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "de";
    }
    const stored = localStorage.getItem("kw-lang");
    return (stored === "en" || stored === "fr") ? stored : "de";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("kw-lang", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
