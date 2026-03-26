"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/LanguageContext";

const LOCALE_MAP: Record<Language, string> = {
  de: "de_DE",
  en: "en_US",
  fr: "fr_FR",
};

type MetaKey = keyof typeof import("@/i18n/de").de.meta;

const PATH_TO_META_KEY: Record<string, MetaKey> = {
  "/": "home",
  "/impressum": "impressum",
  "/ueber-uns": "ueberUns",
  "/kontakt": "kontakt",
  "/preise": "preise",
  "/oeffnungszeiten": "oeffnungszeiten",
  "/jobs": "jobs",
  "/datenschutz": "datenschutz",
  "/agb": "agb",
  "/abenteuer": "abenteuer",
};

function setMetaTag(attribute: "name" | "property", key: string, content: string) {
  let el = document.querySelector(
    `meta[${attribute}="${key}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function MetaUpdater() {
  const { language, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const metaKey: MetaKey =
      PATH_TO_META_KEY[pathname ?? "/"] ?? "notFound";
    const meta = t.meta[metaKey];
    if (!meta) return;

    document.title = meta.title;
    setMetaTag("name", "description", meta.description);
    setMetaTag("property", "og:title", meta.title);
    setMetaTag("property", "og:description", meta.description);
    setMetaTag("property", "og:locale", LOCALE_MAP[language]);
    setMetaTag("name", "twitter:title", meta.title);
    setMetaTag("name", "twitter:description", meta.description);
  }, [language, t, pathname]);

  return null;
}
