import type { Metadata } from "next";
import { NotFoundContent } from "./not-found-content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  {
    title: "Seite nicht gefunden · Kletterwald Staufen",
    description: "Die gesuchte Seite konnte nicht gefunden werden.",
  },
  "/404",
);

export default function NotFound() {
  return <NotFoundContent />;
}
