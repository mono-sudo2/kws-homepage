import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { de } from "@/i18n";

export const metadata: Metadata = buildMetadata(de.meta.datenschutz, "/datenschutz");

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return children;
}
