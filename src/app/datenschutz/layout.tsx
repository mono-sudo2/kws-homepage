import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz · Kletterwald Staufen",
  description:
    "Datenschutzerklärung des Kletterwald Staufen – Informationen zum Umgang mit deinen Daten.",
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
