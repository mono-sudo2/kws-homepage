import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kletterwald-staufen.de";
export const SITE_NAME = "Kletterwald Staufen";
export const OG_IMAGE_PATH = "/og-image.jpg";

export interface PageMeta {
  title: string;
  description: string;
}

export function buildMetadata(
  meta: PageMeta,
  path: string = ""
): Metadata {
  const url = path ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}` : SITE_URL;
  const ogImage = `${SITE_URL}${OG_IMAGE_PATH}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: url,
    },
  };
}
