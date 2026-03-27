"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";

const SITE_SUFFIX = "Kletterwald Staufen";

export function MetaUpdater() {
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const titleByPath: Record<string, string> = {
      "/": SITE_SUFFIX,
      "/abenteuer": t.abenteuerPage.metaTitle,
      "/preise": "Preise & Tickets · Kletterwald Staufen",
      "/oeffnungszeiten": "Oeffnungszeiten · Kletterwald Staufen",
      "/ueber-uns": "Ueber uns · Kletterwald Staufen",
      "/kontakt": "Kontakt · Kletterwald Staufen",
      "/jobs": "Jobs · Kletterwald Staufen",
      "/impressum": "Impressum · Kletterwald Staufen",
      "/datenschutz": "Datenschutz · Kletterwald Staufen",
      "/agb": "AGB · Kletterwald Staufen",
    };

    const nextTitle = titleByPath[pathname] ?? `${t.notFound.title} · ${SITE_SUFFIX}`;
    document.title = nextTitle;
  }, [pathname, t]);

  return null;
}
