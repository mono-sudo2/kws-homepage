import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { de } from "@/i18n";

export const metadata: Metadata = buildMetadata(de.meta.ueberUns, "/ueber-uns");

export default function UeberUnsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
