import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt · Kletterwald Staufen",
  description:
    "Kontaktiere den Kletterwald Staufen für Fragen, Reservierungen und Gruppenanfragen. Wir helfen dir gerne weiter.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
