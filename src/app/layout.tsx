import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Kletterwald Staufen – Abenteuer im Schwarzwald",
  description:
    "Erlebe Kletterabenteuer im größten Kletterpark Südbadens. 15+ Parcours, 200+ Kletter-Elemente – Spaß für die ganze Familie im Schwarzwald.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
