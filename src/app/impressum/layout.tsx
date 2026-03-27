import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Impressum · Kletterwald Staufen",
    description: "Impressum des Kletterwald Staufen mit allen Pflichtangaben gemaess TMG.",
  },
  "/impressum",
);

export default function ImpressumLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
