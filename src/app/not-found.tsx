import type { Metadata } from "next";
import { NotFoundContent } from "./not-found-content";

export const metadata: Metadata = {
  title: "Seite nicht gefunden · Kletterwald Staufen",
  description: "Die gesuchte Seite wurde nicht gefunden.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
