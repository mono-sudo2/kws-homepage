import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Kontakt · Kletterwald Staufen",
    description:
      "Kontakt zum Kletterwald Staufen: Adresse, Telefon, E-Mail und Kontaktformular fuer Fragen und Reservierungen.",
  },
  "/kontakt",
);

export default function KontaktLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
