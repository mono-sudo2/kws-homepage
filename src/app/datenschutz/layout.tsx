import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Datenschutz · Kletterwald Staufen",
    description:
      "Datenschutzerklaerung des Kletterwald Staufen mit Informationen zur Verarbeitung personenbezogener Daten.",
  },
  "/datenschutz",
);

export default function DatenschutzLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
