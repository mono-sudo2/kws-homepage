"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { MetaUpdater } from "@/components/MetaUpdater";
import { Toaster } from "@/components/ui/sonner";
import { AppShell } from "./AppShell";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <MetaUpdater />
        <AppShell>{children}</AppShell>
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  );
}
