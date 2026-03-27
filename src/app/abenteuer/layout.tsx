import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Abenteuer · Kletterwald Staufen",
    description:
      "Parcours, Attraktionen und Schatzsuche im Kletterwald Staufen fuer die ganze Familie im Schwarzwald.",
  },
  "/abenteuer",
);

export default function AbenteuerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
