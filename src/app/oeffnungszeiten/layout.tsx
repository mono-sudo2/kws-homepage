import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Öffnungszeiten · Kletterwald Staufen",
  description:
    "Aktuelle Öffnungszeiten des Kletterwald Staufen. Saison, Feiertage und Sonderöffnungszeiten auf einen Blick.",
};

export default function OeffnungszeitenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
