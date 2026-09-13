import type { MetadataRoute } from "next";
import { ALL_PATHS } from "@/lib/registry";
import { HREFLANG, LOCALES } from "@/lib/i18n";
import { absL } from "@/lib/seo";

// Required by `output: "export"` — emit this as a static file at build time.
export const dynamic = "force-static";

const PRIORITY: Record<string, number> = {
  "/": 1.0,
  "/RingWireSaws": 0.9,
  "/OEM": 0.8,
  "/Contact": 0.8,
  "/news": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    for (const path of ALL_PATHS) {
      // every URL declares its alternates, which is what Google wants for hreflang
      const alternates: Record<string, string> = {};
      for (const l of LOCALES) alternates[HREFLANG[l]] = absL(path, l);

      entries.push({
        url: absL(path, lang),
        lastModified: now,
        changeFrequency: path === "/" || path === "/news" ? "weekly" : "monthly",
        priority: PRIORITY[path] ?? (path.endsWith("-RingWireSaws") ? 0.6 : 0.7),
        alternates: { languages: alternates },
      });
    }
  }
  return entries;
}
