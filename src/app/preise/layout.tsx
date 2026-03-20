import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Tickets · Kletterwald Staufen",
  description:
    "Faire Preise für Kinder, Jugendliche und Erwachsene im Kletterwald Staufen. Jetzt Tickets sichern und Kletterabenteuer erleben.",
};

export default function PreiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
