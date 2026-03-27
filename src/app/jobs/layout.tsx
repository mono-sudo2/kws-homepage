import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Jobs · Kletterwald Staufen",
    description:
      "Offene Stellen im Kletterwald Staufen. Werde Teil unseres Teams und arbeite mitten in der Natur.",
  },
  "/jobs",
);

export default function JobsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
