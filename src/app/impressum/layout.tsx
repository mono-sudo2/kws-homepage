import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum · Kletterwald Staufen",
  description: "Impressum des Kletterwald Staufen – Angaben gemäß § 5 TMG.",
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
