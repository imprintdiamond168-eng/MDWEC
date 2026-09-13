import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { COMPANY } from "@/content/company";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `MDWEC | ${COMPANY.nameZh}`, template: "%s — MDWEC 微鑽石" },
  description: COMPANY.tagline.zh,
  applicationName: "MDWEC",
  authors: [{ name: COMPANY.nameZh, url: SITE_URL }],
  creator: COMPANY.nameZh,
  publisher: COMPANY.nameZh,
  category: "Industrial Manufacturing",
  formatDetection: { telephone: true, address: true, email: true },
  // Fallback share card for any route that does not build its own metadata.
  openGraph: { images: [{ ...OG_IMAGE, alt: SITE_NAME.zh }] },
  twitter: { card: "summary_large_image", images: [{ ...OG_IMAGE, alt: SITE_NAME.zh }] },
};

export const viewport: Viewport = { themeColor: "#f4f6f8", colorScheme: "light" };

/** Chinese root layout (one of two — see app/(en)/layout.tsx). */
export default function ZhRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-Hant-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
