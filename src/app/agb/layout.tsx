import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "AGB · Kletterwald Staufen",
    description: "Allgemeine Geschaeftsbedingungen des Kletterwald Staufen.",
  },
  "/agb",
);

export default function AGBLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
