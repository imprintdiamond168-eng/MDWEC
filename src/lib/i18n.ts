/**
 * Bilingual site: Traditional Chinese at the root, English under /en/.
 *
 * Chinese sits at the root because Taiwan is the primary market and the
 * domain is .com.tw; English gets its own subtree so it can be targeted
 * separately in Search Console and carry its own hreflang cluster.
 */

export const LOCALES = ["zh", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh";

/** Text that exists in both languages. */
export type LS = { zh: string; en: string };
/** Lists that exist in both languages. */
export type LA = { zh: string[]; en: string[] };

export const t = (v: LS, lang: Locale) => v[lang];
export const ta = (v: LA, lang: Locale) => v[lang];

/**
 * Logical path -> the URL actually served.
 *
 * The site inherited its URLs from the previous MDWEC site so that every
 * ranking and backlink Google already holds keeps landing on the same
 * content: flat `.html` files at the root, English under `/en/`.
 * `/AnyCut` -> `/AnyCut.html`, and the two home pages keep their own shape.
 */
export function pageUrl(path: string): string {
  return path === "/" ? "/" : `${path}.html`;
}

/** `/AnyCut` -> `/AnyCut.html`, or `/en/AnyCut.html` for English. */
export function localePath(path: string, lang: Locale): string {
  if (lang === DEFAULT_LOCALE) return pageUrl(path);
  // The legacy English home was /en/index.html; keep that exact URL.
  return path === "/" ? "/en/index.html" : `/en${pageUrl(path)}`;
}

/** Strip the locale prefix and the `.html` suffix back off a pathname. */
export function stripLocale(path: string): { lang: Locale; path: string } {
  let lang: Locale = "zh";
  let p = path;
  if (p === "/en" || p.startsWith("/en/")) {
    lang = "en";
    p = p.slice(3) || "/";
  }
  if (p === "/index.html") return { lang, path: "/" };
  if (p.endsWith(".html")) p = p.slice(0, -5);
  return { lang, path: p || "/" };
}

export const HTML_LANG: Record<Locale, string> = {
  zh: "zh-Hant-TW",
  en: "en",
};

/** BCP-47 values used in hreflang and OpenGraph. */
export const HREFLANG: Record<Locale, string> = {
  zh: "zh-Hant-TW",
  en: "en",
};

export const OG_LOCALE: Record<Locale, string> = {
  zh: "zh_TW",
  en: "en_US",
};

/* ============================================================
   UI strings
   ============================================================ */
export const UI = {
  skipToContent: { zh: "跳到主要內容", en: "Skip to main content" },
  home: { zh: "首頁", en: "Home" },
  breadcrumb: { zh: "麵包屑", en: "Breadcrumb" },
  mainMenu: { zh: "主選單", en: "Main menu" },
  mobileMenu: { zh: "行動版選單", en: "Mobile menu" },
  openMenu: { zh: "開啟選單", en: "Open menu" },
  closeMenu: { zh: "關閉選單", en: "Close menu" },
  navigation: { zh: "選單", en: "Navigation" },
  contactUs: { zh: "聯絡我們", en: "Contact Us" },
  viewAll: { zh: "全部", en: "View all" },
  viewSpecs: { zh: "查看規格", en: "View specifications" },
  view: { zh: "查看", en: "View" },
  readMore: { zh: "閱讀", en: "Read more" },
  learnMore: { zh: "了解更多", en: "Learn more" },
  backTo: { zh: "返回", en: "Back to" },

  gallery: { zh: "產品圖", en: "Gallery" },
  galleryEquipment: { zh: "機台與製程實例", en: "The machine and the process" },
  galleryMaterial: { zh: "產品與應用實例", en: "The product and its application" },

  keyFacts: { zh: "重點摘要", en: "Key facts" },
  faq: { zh: "常見問題", en: "Frequently asked questions" },
  application: { zh: "應用", en: "Application" },
  features: { zh: "特色", en: "Characteristics" },
  specifications: { zh: "規格", en: "Specification" },
  relatedProducts: { zh: "相關物料與設備", en: "Related products" },
  productRange: { zh: "產品線", en: "Product range" },
  models: { zh: "全部機型", en: "All models" },
  comparison: { zh: "機型比較", en: "Model comparison" },
  materials: { zh: "適用材料", en: "Applicable materials" },
  sections: { zh: "分頁", en: "Sections" },
  milestones: { zh: "里程碑", en: "Milestones" },
  years: { zh: "年份", en: "Years" },
  categories: { zh: "分類", en: "Categories" },
  items: { zh: "項", en: "items" },
  scroll: { zh: "向下捲動", en: "Scroll" },

  prevSlide: { zh: "上一張", en: "Previous slide" },
  nextSlide: { zh: "下一張", en: "Next slide" },
  goToSlide: { zh: "前往第 {n} 張", en: "Go to slide {n}" },
  carouselLabel: { zh: "微鑽石首頁輪播", en: "MDWEC homepage carousel" },

  specNote: {
    zh: "下表為公開規格典型值。實際數據依材料、線徑與製程條件而異，以報價與試切結果為準。",
    en: "Figures below are typical published values. Actual results vary with material, wire diameter and process conditions; a trial cut is definitive.",
  },
  ctaTitle: { zh: "告訴我們你要切的材料", en: "Tell us what you need to cut" },
  ctaBody: {
    zh: "材質、尺寸、目標厚度與產能需求 — 我們會回覆建議的機型、線徑與整套耗材配置。",
    en: "Material, dimensions, target thickness and throughput — we will come back with a recommended machine, wire diameter and consumable set.",
  },
  emailUs: { zh: "寄信給我們", en: "Email us" },
  callUs: { zh: "撥打電話", en: "Call us" },
  officialLine: { zh: "官方 LINE", en: "Official LINE" },
  contactOptions: { zh: "聯絡方式", en: "Contact options" },
  openContact: { zh: "開啟聯絡選單", en: "Open contact menu" },
  closeContact: { zh: "關閉聯絡選單", en: "Close contact menu" },

  langSwitch: { zh: "語言", en: "Language" },
  zhLabel: { zh: "繁體中文", en: "繁體中文" },
  enLabel: { zh: "English", en: "English" },

  headquarters: { zh: "總部與生產基地", en: "Headquarters" },
  telephone: { zh: "電話", en: "Telephone" },
  fax: { zh: "傳真", en: "Fax" },
  email: { zh: "業務信箱", en: "Sales e-mail" },
  affiliates: { zh: "關係企業", en: "Affiliated companies" },
  copyright: {
    zh: "微鑽石線材設備有限公司 版權所有",
    en: "Micron Diamond Wire & Equipment Co., Ltd. All rights reserved.",
  },
  humanRights: { zh: "人權聲明", en: "Human rights statement" },
} satisfies Record<string, LS>;

export type UIKey = keyof typeof UI;
export const ui = (key: UIKey, lang: Locale) => UI[key][lang];
