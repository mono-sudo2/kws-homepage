import type { Metadata } from "next";
import { NotFoundContent } from "./not-found-content";
import { buildMetadata } from "@/lib/metadata";
import { de } from "@/i18n";

export const metadata: Metadata = buildMetadata(de.meta.notFound);

export default function NotFound() {
  return <NotFoundContent />;
}
