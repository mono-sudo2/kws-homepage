import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs · Kletterwald Staufen",
  description:
    "Offene Stellen im Kletterwald Staufen. Werde Teil unseres Teams und arbeite in der Natur des Schwarzwalds.",
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
