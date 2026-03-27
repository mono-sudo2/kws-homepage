import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Preise & Tickets · Kletterwald Staufen",
    description:
      "Faire Preise fuer Kinder, Jugendliche und Erwachsene im Kletterwald Staufen. Jetzt Tickets sichern.",
  },
  "/preise",
);

export default function PreiseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
