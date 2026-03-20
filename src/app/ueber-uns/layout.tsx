import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns · Kletterwald Staufen",
  description:
    "Erfahre mehr über den Kletterwald Staufen – seit über 15 Jahren der größte Kletterpark in Südbaden mit Leidenschaft, Sicherheit und Natur.",
};

export default function UeberUnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
