import type { Metadata } from "next";
import { COMPANY } from "@/content/company";
import {
  DEFAULT_LOCALE,
  HREFLANG,
  LOCALES,
  OG_LOCALE,
  localePath,
  pageUrl,
  type Locale,
} from "./i18n";

/**
 * Change this to the domain the site is actually served from.
 * Every canonical URL, hreflang, sitemap entry and JSON-LD @id derives from it.
 */
export const SITE_URL = "https://mdwec.com.tw";

export const SITE_NAME: Record<Locale, string> = {
  zh: `${COMPANY.nameZh} MDWEC`,
  en: `${COMPANY.nameEn} (MDWEC)`,
};

/**
 * Social share card. Without this, links pasted into LINE / Facebook / Threads
 * render as a bare text block. One image serves both languages — the artwork
 * carries the company name in Chinese and English.
 */
export const OG_IMAGE = {
  url: `${SITE_URL}/images/common/og-image.jpg`,
  width: 1200,
  height: 630,
  type: "image/jpeg",
};

/** Square brand mark, for Organization structured data. */
export const ORG_LOGO = `${SITE_URL}/images/common/LOGO.png`;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Canonical URLs must match what the server actually serves. The site is
 * exported with `trailingSlash: false` and carries the previous site's flat
 * `.html` URLs, so a canonical is the logical path run through `pageUrl`.
 */
export const abs = (path: string) => new URL(pageUrl(path), SITE_URL).toString();

/** Absolute URL for a logical path in a given language. */
export const absL = (path: string, lang: Locale) =>
  new URL(localePath(path, lang), SITE_URL).toString();

/* ============================================================
   Metadata
   ============================================================ */
const BASE_KEYWORDS: Record<Locale, string[]> = {
  zh: ["微鑽石", "MDWEC", "鑽石線", "金剛線", "鑽石線鋸", "線切割設備", "Diamond Coating Wire", "Wire Saws"],
  en: [
    "MDWEC",
    "diamond wire",
    "diamond coating wire",
    "wire saw",
    "wire saw machine",
    "ingot slicing",
    "wafer dicing",
    "sapphire cutting",
    "SiC cutting",
    "Taiwan diamond wire manufacturer",
  ],
};

type BuildMeta = {
  title: string;
  description: string;
  /** locale-independent path, e.g. "/AnyCut" */
  path: string;
  lang: Locale;
  keywords?: string[];
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  lang,
  keywords = [],
  type = "website",
}: BuildMeta): Metadata {
  const url = absL(path, lang);

  // hreflang cluster: every page points at both languages plus x-default
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[HREFLANG[l]] = absL(path, l);
  languages["x-default"] = absL(path, DEFAULT_LOCALE);

  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS[lang], ...keywords],
    alternates: { canonical: url, languages },
    openGraph: {
      title: `${title} — ${SITE_NAME[lang]}`,
      description,
      url,
      siteName: SITE_NAME[lang],
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      type,
      images: [{ ...OG_IMAGE, alt: SITE_NAME[lang] }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME[lang]}`,
      description,
      images: [{ ...OG_IMAGE, alt: SITE_NAME[lang] }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/* ============================================================
   JSON-LD
   ============================================================ */
export function organizationLd(lang: Locale) {
  return {
    "@type": ["Organization", "Manufacturer"],
    "@id": ORG_ID,
    name: lang === "zh" ? COMPANY.nameZh : COMPANY.nameEn,
    legalName: COMPANY.nameEn,
    alternateName: [COMPANY.nameZh, COMPANY.nameEn, "MDWEC", "微鑽石"],
    url: SITE_URL,
    logo: ORG_LOGO,
    image: OG_IMAGE.url,
    foundingDate: COMPANY.founded,
    description: COMPANY.tagline[lang],
    email: COMPANY.mail,
    telephone: COMPANY.tel,
    faxNumber: COMPANY.fax,
    address: {
      "@type": "PostalAddress",
      streetAddress: lang === "zh" ? "福德南路 45 號" : "No.45 Fude S. Rd.",
      addressLocality: lang === "zh" ? "三重區" : "SanChong District",
      addressRegion: lang === "zh" ? "新北市" : "New Taipei City",
      postalCode: "241",
      addressCountry: "TW",
    },
    parentOrganization: { "@type": "Organization", name: "WEC Group", url: "https://www.wec.com.tw" },
    sameAs: [
      "https://www.wec.com.tw",
      "https://www.alishandiamond.com/",
      "https://www.imprint-diamond.com/",
      "https://www.facebook.com/wecgroup",
      "https://www.youtube.com/user/WECGroup1992",
    ],
    knowsAbout:
      lang === "zh"
        ? ["鑽石線鋸", "金剛線", "線切割設備", "半導體晶圓切割", "藍寶石切割", "碳化矽 SiC 切割", "太陽能矽晶棒切割", "晶粒切割"]
        : [
            "diamond coating wire",
            "wire saw machines",
            "semiconductor wafer cutting",
            "sapphire ingot slicing",
            "silicon carbide cutting",
            "solar silicon ingot squaring",
            "wafer dicing",
          ],
    /** English pages target export markets, not just Taiwan */
    areaServed:
      lang === "en"
        ? [
            { "@type": "Country", name: "Taiwan" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Japan" },
            { "@type": "Country", name: "South Korea" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Place", name: "Worldwide" },
          ]
        : { "@type": "Country", name: "Taiwan" },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "ISO 9001",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: COMPANY.mail,
      telephone: COMPANY.tel,
      areaServed: lang === "en" ? "Worldwide" : "TW",
      availableLanguage: ["zh-Hant", "zh-Hans", "en"],
    },
  };
}

export function websiteLd(lang: Locale) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME[lang],
    inLanguage: LOCALES.map((l) => HREFLANG[l]),
    publisher: { "@id": ORG_ID },
  };
}

/** `href` is omitted for menu-only sections, which have no page to link to. */
export type Crumb = { name: string; href?: string };

export function breadcrumbLd(crumbs: Crumb[], lang: Locale) {
  // Every ListItem needs a URL, so crumbs without a page are left out here
  // even though the visible trail still shows them as plain text.
  const linked = crumbs.filter((c): c is Required<Crumb> => !!c.href);
  return {
    "@type": "BreadcrumbList",
    itemListElement: linked.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absL(c.href, lang),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function productLd(p: {
  name: string;
  description: string;
  path: string;
  lang: Locale;
  model?: string;
  category: string;
  specs?: { rows: [{ zh: string; en: string }, string][] }[];
}) {
  const props = (p.specs ?? [])
    .flatMap((t) => t.rows)
    .map(([label, value]) => ({ "@type": "PropertyValue", name: label[p.lang], value }));

  return {
    "@type": "Product",
    "@id": `${absL(p.path, p.lang)}#product`,
    name: p.name,
    description: p.description,
    url: absL(p.path, p.lang),
    category: p.category,
    ...(p.model ? { model: p.model, sku: p.model, mpn: p.model } : {}),
    brand: { "@type": "Brand", name: "MDWEC" },
    manufacturer: { "@id": ORG_ID },
    ...(props.length ? { additionalProperty: props } : {}),
  };
}

export function itemListLd(items: { name: string; href: string }[], name: string, lang: Locale) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absL(it.href, lang),
    })),
  };
}

export function articleLd(a: {
  headline: string;
  description: string;
  path: string;
  lang: Locale;
  datePublished: string;
}) {
  return {
    "@type": "NewsArticle",
    headline: a.headline,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    mainEntityOfPage: absL(a.path, a.lang),
    inLanguage: HREFLANG[a.lang],
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function webPageLd(p: {
  name: string;
  description: string;
  path: string;
  lang: Locale;
}) {
  return {
    "@type": "WebPage",
    "@id": `${absL(p.path, p.lang)}#webpage`,
    url: absL(p.path, p.lang),
    name: p.name,
    description: p.description,
    inLanguage: HREFLANG[p.lang],
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

/** Wraps nodes into one @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
