import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Oeffnungszeiten · Kletterwald Staufen",
    description:
      "Aktuelle Oeffnungszeiten des Kletterwald Staufen mit Saisonzeiten, Feiertagen und Sonderoeffnungszeiten.",
  },
  "/oeffnungszeiten",
);

export default function OeffnungszeitenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
