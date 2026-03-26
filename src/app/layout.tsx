import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { AppShell } from "./AppShell";
import { buildMetadata } from "@/lib/metadata";
import { de } from "@/i18n";

export const metadata: Metadata = buildMetadata(de.meta.home, "/");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
