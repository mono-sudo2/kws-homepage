import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kletterwald Staufen",
  description:
    "Action im Schwarzwald: Kletterparcours, Seilrutschen und Abenteuer fuer die ganze Familie.",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="de">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
