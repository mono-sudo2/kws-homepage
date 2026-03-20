"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import { MetaUpdater } from "@/components/MetaUpdater";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MetaUpdater />
      {children}
    </LanguageProvider>
  );
}
