import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { de } from "@/i18n";

export const metadata: Metadata = buildMetadata(de.meta.impressum, "/impressum");

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return children;
}
