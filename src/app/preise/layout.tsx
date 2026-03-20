import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { de } from "@/i18n";

export const metadata: Metadata = buildMetadata(de.meta.preise, "/preise");

export default function PreiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
