import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
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

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  if (typeof window !== "undefined") {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "kw-lang") onStoreChange();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(onStoreChange);
      window.removeEventListener("storage", onStorage);
    };
  }
  return () => {
    listeners.delete(onStoreChange);
  };
}

function emit() {
  listeners.forEach((l) => l());
}

function readLanguage(): Language {
  if (typeof window === "undefined") return "de";
  const stored = localStorage.getItem("kw-lang");
  return stored === "en" || stored === "fr" ? stored : "de";
}

function getSnapshot(): Language {
  return readLanguage();
}

function getServerSnapshot(): Language {
  return "de";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem("kw-lang", lang);
    emit();
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
