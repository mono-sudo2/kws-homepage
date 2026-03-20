import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB · Kletterwald Staufen",
  description: "Allgemeine Geschäftsbedingungen des Kletterwald Staufen.",
};

export default function AgbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
