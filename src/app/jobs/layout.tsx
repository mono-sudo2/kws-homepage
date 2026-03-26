import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { de } from "@/i18n";

export const metadata: Metadata = buildMetadata(de.meta.jobs, "/jobs");

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
