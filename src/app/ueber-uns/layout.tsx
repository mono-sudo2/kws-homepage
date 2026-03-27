import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Ueber uns · Kletterwald Staufen",
    description:
      "Erfahre mehr ueber den Kletterwald Staufen, unsere Geschichte, Werte und das Team hinter dem Park.",
  },
  "/ueber-uns",
);

export default function UeberUnsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
