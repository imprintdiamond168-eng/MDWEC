import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ABOUT_PARAGRAPHS,
  COMPANY,
  HISTORY,
  NEWS,
  PHILOSOPHY,
  RESPONSIBILITY,
} from "@/content/company";
import { ALL_PRODUCTS, EQUIPMENT, MATERIALS, OEM, RING_SAWS, findProduct } from "@/content/products";
import { FAQS } from "@/content/faq";
import { productDescription, productFaqs, productTitle } from "@/content/productFaq";
import ProductDetail, { productCrumbs } from "@/components/site/ProductDetail";
import {
  ContactPage,
  HistoryPage,
  IntroductionPage,
  ManagementPage,
  NewsPage,
  OemPage,
  ResponsibilityPage,
  RingIndex,
} from "@/components/pages/Pages";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/site/Primitives";
import { ui, type Locale } from "./i18n";
import {
  ORG_ID,
  articleLd,
  breadcrumbLd,
  buildMetadata,
  faqLd,
  graph,
  itemListLd,
  productLd,
  webPageLd,
} from "./seo";

type Page = {
  render: (lang: Locale) => ReactNode;
  meta: (lang: Locale) => Metadata;
};

const z = (zh: string, en: string, lang: Locale) => (lang === "zh" ? zh : en);
const faqPlain = (key: string, lang: Locale) =>
  (FAQS[key] ?? []).map((f) => ({ q: f.q[lang], a: f.a[lang] }));
const home = (lang: Locale) => ({ name: ui("home", lang), href: "/" });

/* ------------------------------------------------------------------ */
/* Static pages                                                        */
/* ------------------------------------------------------------------ */
const STATIC: Record<string, Page> = {
  "/": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z(`MDWEC | ${COMPANY.nameZh}`, `MDWEC | ${COMPANY.nameEn}`, lang),
              description: COMPANY.tagline[lang],
              path: "/",
              lang,
            }),
            // No faqLd here: the home page no longer shows a FAQ, and FAQPage
            // markup for answers a visitor cannot see on the page is a
            // structured-data violation, not a free rich result.
            itemListLd(
              [...EQUIPMENT, ...MATERIALS].map((p) => ({ name: p.name[lang], href: p.href })),
              z("MDWEC 產品總覽", "MDWEC product range", lang),
              lang,
            ),
          )}
        />
        <HomePage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z(`MDWEC | ${COMPANY.nameZh}`, "MDWEC | Diamond Wire & Wire Saw Manufacturer", lang),
        description: z(
          "微鑽石（MDWEC）創立於 2007 年，專業於鑽石線鋸（金剛線）Diamond Coating Wire 及線切割設備 Wire Saws 的研究開發與整合、製造與販售。2008 年成為全世界第四家量產鑽石線的企業，通過 ISO 9001 認證。",
          "MDWEC (Micron Diamond Wire & Equipment, Taiwan) manufactures diamond coating wire and wire saw machines for sapphire, SiC, silicon and quartz. Founded 2007, ISO 9001, and the 4th company worldwide to mass-produce diamond wire.",
          lang,
        ),
        path: "/",
        lang,
        keywords:
          lang === "zh"
            ? ["鑽石線廠商", "線切割機", "台灣鑽石線", "晶圓切割設備", "藍寶石切割"]
            : [
                "diamond wire manufacturer",
                "wire saw supplier Taiwan",
                "sapphire ingot slicing machine",
                "SiC wafer dicing",
                "silicon ingot squaring",
              ],
      }),
  },

  "/RingWireSaws": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("環線切割機 KLDJ 系列", "KLDJ Ring Wire Saws", lang),
              description: z(
                "MDWEC 環線切割機十款機型規格比較。",
                "Specification comparison of the ten MDWEC KLDJ ring wire saw models.",
                lang,
              ),
              path: "/RingWireSaws",
              lang,
            }),
            breadcrumbLd(
              [
                home(lang),
                { name: z("設備", "Equipment", lang) },
                {
                  name: z("環線切割機", "Ring Wire Cutting M/C", lang),
                  href: "/RingWireSaws",
                },
              ],
              lang,
            ),
            itemListLd(
              RING_SAWS.map((p) => ({ name: p.model ?? p.name[lang], href: p.href })),
              z("MDWEC 環線切割機 KLDJ 系列", "MDWEC KLDJ ring wire saw range", lang),
              lang,
            ),
            faqLd(faqPlain("ring-wire-saws", lang)),
          )}
        />
        <RingIndex lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("環線切割機 KLDJ 系列", "KLDJ Ring Wire Saws", lang),
        description: z(
          "MDWEC 環線切割機 KLDJ 系列共十款：KLDJ15SQ 至 KLDJ200Q。工作臺自 200×150 mm 至 Φ1700 mm，承重 15 kg 至 5,000 kg，最大線速度 2,000~2,700 m/min，表面粗糙度 Ra ≤ 1.25。",
          "Ten MDWEC KLDJ ring wire saw models from KLDJ15SQ to KLDJ200Q. Worktables 200×150 mm to Φ1700 mm, load 15 kg to 5,000 kg, wire speed to 2,700 m/min, surface roughness Ra ≤ 1.25.",
          lang,
        ),
        path: "/RingWireSaws",
        lang,
        keywords: ["KLDJ", "ring wire saw", "環線切割機", "rotary wire cutting", "contour cutting"],
      }),
  },

  "/OEM": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("代工服務 OEM", "OEM Service", lang),
              description: z("MDWEC 切割代工服務。", "MDWEC subcontract cutting services.", lang),
              path: "/OEM",
              lang,
            }),
            breadcrumbLd([home(lang), { name: z("代工服務", "OEM Service", lang), href: "/OEM" }], lang),
            itemListLd(
              OEM.map((o) => ({ name: o.name[lang], href: o.href })),
              z("MDWEC 代工服務", "MDWEC OEM services", lang),
              lang,
            ),
            {
              "@type": "Service",
              name: z("硬脆材料線切割代工", "Hard and brittle material wire cutting service", lang),
              serviceType: z(
                "切割代工（晶棒截斷、晶棒切片、晶粒切割）",
                "Subcontract cutting (ingot cropping, ingot slicing, wafer dicing)",
                lang,
              ),
              provider: { "@id": ORG_ID },
              areaServed: lang === "en" ? "Worldwide" : "TW",
              description: z(
                "MDWEC 提供晶棒截斷、晶棒切片（2~15 吋）與晶粒切割（4~8 吋晶圓）代工服務。",
                "MDWEC provides ingot cropping, ingot slicing (2–15 inch) and wafer dicing (4–8 inch) subcontract services.",
                lang,
              ),
            },
            faqLd(faqPlain("oem", lang)),
          )}
        />
        <OemPage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("代工服務 OEM", "OEM Cutting Service", lang),
        description: z(
          "MDWEC 提供三類切割代工：晶棒截斷、晶棒切片（2~15 吋）、晶粒切割（4~8 吋晶圓）。可處理矽晶、石英、陶瓷、藍寶石、SiC、AlN、玻璃、砷化鎵等硬脆材料。",
          "Three MDWEC subcontract cutting services: ingot cropping, ingot slicing (2–15 inch) and wafer dicing (4–8 inch). Silicon, quartz, ceramic, sapphire, SiC, AlN, glass and GaAs.",
          lang,
        ),
        path: "/OEM",
        lang,
        keywords:
          lang === "zh"
            ? ["切割代工", "晶棒切片", "晶棒截斷", "晶粒切割"]
            : ["wafer dicing service", "ingot slicing service", "subcontract cutting", "OEM cutting Taiwan"],
      }),
  },

  "/introduction": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("公司願景", "Company vision", lang),
              description: ABOUT_PARAGRAPHS[lang][0].slice(0, 160),
              path: "/introduction",
              lang,
            }),
            breadcrumbLd(
              [
                home(lang),
                { name: z("關於微鑽石", "About", lang) },
                { name: z("公司願景", "Vision", lang), href: "/introduction" },
              ],
              lang,
            ),
            faqLd(faqPlain("about", lang)),
          )}
        />
        <IntroductionPage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("公司願景", "Company Vision", lang),
        description: z(
          "微鑽石線材設備有限公司（MDWEC）創立於 2007 年，為 WEC 集團所屬子公司，秉持以「人才為本」的理念投入研發，專業於金剛石線鋸及線切割設備的研究開發、整合、製造與銷售。",
          "MDWEC is a subsidiary of WEC Group established in 2007. Talented employees and managing business with heart are our conceptual framework; we specialise in diamond coating wire and wire saw equipment.",
          lang,
        ),
        path: "/introduction",
        lang,
      }),
  },

  "/history": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("歷史沿革", "History", lang),
              description: z(
                "微鑽石線材設備有限公司 2007 至 2024 年的發展大事紀。",
                "MDWEC milestones from 2007 to 2024.",
                lang,
              ),
              path: "/history",
              lang,
            }),
            breadcrumbLd(
              [
                home(lang),
                { name: z("關於微鑽石", "About", lang) },
                { name: z("歷史沿革", "History", lang), href: "/history" },
              ],
              lang,
            ),
            {
              "@type": "ItemList",
              name: z("MDWEC 歷史沿革", "MDWEC history", lang),
              numberOfItems: HISTORY.length,
              itemListOrder: "https://schema.org/ItemListOrderDescending",
              itemListElement: HISTORY.map((h, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: h.y,
                description: h.items[lang].join("; "),
              })),
            },
            {
              "@type": "Organization",
              "@id": ORG_ID,
              award: z(
                "全世界第四家、台灣及中國唯一成功量產鑽石線的企業（2008）",
                "Fourth company worldwide, and the only one in Taiwan and China, to mass-produce diamond wire (2008)",
                lang,
              ),
            },
            faqLd(faqPlain("history", lang)),
          )}
        />
        <HistoryPage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("歷史沿革", "Company History", lang),
        description: z(
          "MDWEC 歷史沿革：2007 年成立，2008 年成為全世界第四家、台灣及中國唯一成功量產鑽石線的企業，2012 年導入 ISO 9001，2024 年開發晶粒切割機 MDS-68A 並取得專利。",
          "MDWEC history: founded 2007; in 2008 the fourth company worldwide to mass-produce diamond wire; ISO 9001 in 2012; the MDS-68A wafer dicing saw patented in 2024.",
          lang,
        ),
        path: "/history",
        lang,
      }),
  },

  "/management": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("經營理念", "Management philosophy", lang),
              description: PHILOSOPHY[lang].slice(0, 160),
              path: "/management",
              lang,
            }),
            breadcrumbLd(
              [
                home(lang),
                { name: z("關於微鑽石", "About", lang) },
                { name: z("經營理念", "Management Philosophy", lang), href: "/management" },
              ],
              lang,
            ),
            faqLd(faqPlain("about", lang)),
          )}
        />
        <ManagementPage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("經營理念", "Management Philosophy", lang),
        description: PHILOSOPHY[lang].slice(0, 158),
        path: "/management",
        lang,
      }),
  },

  "/responsibility": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("社會責任與人權聲明", "Corporate social responsibility", lang),
              description: RESPONSIBILITY.paragraphs[lang][0].slice(0, 160),
              path: "/responsibility",
              lang,
            }),
            breadcrumbLd(
              [
                home(lang),
                { name: z("關於微鑽石", "About", lang) },
                { name: z("社會責任", "Responsibility", lang), href: "/responsibility" },
              ],
              lang,
            ),
            faqLd(faqPlain("about", lang)),
          )}
        />
        <ResponsibilityPage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("社會責任與人權聲明", "Corporate Social Responsibility", lang),
        description: z(
          "微鑽石（MDWEC）秉持「飲水思源」精神扶助弱勢團體，積極響應節能減碳，聚焦創能、轉能、儲能、節能四大面向，並承諾遵循《聯合國世界人權宣言》及 ILO 核心勞工標準。",
          "MDWEC supports local communities, participates in energy saving and carbon reduction, and focuses on energy production, transformation, storage and saving. It follows the UN Declaration of Human Rights and ILO core labour standards.",
          lang,
        ),
        path: "/responsibility",
        lang,
        keywords: ["CSR", "ESG", "human rights", "社會責任", "人權聲明"],
      }),
  },

  "/news": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("最新消息", "News", lang),
              description: z("微鑽石（MDWEC）最新消息與技術動態。", "MDWEC news and technology updates.", lang),
              path: "/news",
              lang,
            }),
            breadcrumbLd([home(lang), { name: z("最新消息", "News", lang), href: "/news" }], lang),
            ...NEWS.map((n) =>
              articleLd({
                headline: n.title[lang],
                description: n.body[lang],
                path: "/news",
                lang,
                datePublished: n.iso,
              }),
            ),
            faqLd(faqPlain("news", lang)),
          )}
        />
        <NewsPage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("最新消息", "News", lang),
        description: z(
          "微鑽石（MDWEC）最新消息與技術動態。2025 年 2 月：微鑽石技術突破，助力台積電 CoWoS 產能擴增。",
          "MDWEC news and technology updates. February 2025: MDWEC cutting technology breakthrough supports CoWoS advanced packaging capacity.",
          lang,
        ),
        path: "/news",
        lang,
        type: "article",
      }),
  },

  "/Contact": {
    render: (lang) => (
      <>
        <JsonLd
          data={graph(
            webPageLd({
              name: z("聯絡我們", "Contact us", lang),
              description: z(
                "微鑽石線材設備有限公司聯絡資訊與詢價須知。",
                "MDWEC contact details and what to include in an enquiry.",
                lang,
              ),
              path: "/Contact",
              lang,
            }),
            breadcrumbLd([home(lang), { name: ui("contactUs", lang), href: "/Contact" }], lang),
            { "@type": "ContactPage", mainEntity: { "@id": ORG_ID } },
            faqLd(faqPlain("contact", lang)),
          )}
        />
        <ContactPage lang={lang} />
      </>
    ),
    meta: (lang) =>
      buildMetadata({
        title: z("聯絡我們", "Contact Us", lang),
        description: z(
          "微鑽石線材設備有限公司（MDWEC）地址：新北市三重區福德南路 45 號。電話 +886 2 2977 0268，傳真 +886 2 2975 6299，業務信箱 service@mdwec.com。",
          "MDWEC, No.45 Fude S. Rd., SanChong Dist., New Taipei City 241, Taiwan. Tel +886 2 2977 0268, fax +886 2 2975 6299, e-mail service@mdwec.com.",
          lang,
        ),
        path: "/Contact",
        lang,
      }),
  },
};

/* ------------------------------------------------------------------ */
/* Product pages                                                       */
/* ------------------------------------------------------------------ */
function productPage(slug: string): Page {
  return {
    render: (lang) => {
      const p = findProduct(slug)!;
      const faqs = (p.slug === "diamond-wire" ? FAQS["diamond-wire"] : productFaqs(p)).map((f) => ({
        q: f.q[lang],
        a: f.a[lang],
      }));
      return (
        <>
          <JsonLd
            data={graph(
              webPageLd({
                name: p.name[lang],
                description: p.summary[lang],
                path: p.href,
                lang,
              }),
              breadcrumbLd(productCrumbs(p, lang), lang),
              productLd({
                name: productTitle(p, lang),
                description: p.summary[lang],
                path: p.href,
                lang,
                model: p.model,
                category:
                  p.category === "equipment"
                    ? z("線切割設備", "Wire saw equipment", lang)
                    : z("切割耗材", "Cutting consumable", lang),
                specs: p.specs,
              }),
              faqLd(faqs),
            )}
          />
          <ProductDetail product={p} lang={lang} />
        </>
      );
    },
    meta: (lang) => {
      const p = findProduct(slug)!;
      return buildMetadata({
        title: p.model ? `${p.name[lang]} ${p.model}` : p.name[lang],
        description: productDescription(p, lang),
        path: p.href,
        lang,
        keywords: [p.name[lang], p.line, ...(p.model ? [p.model] : [])],
      });
    },
  };
}

/* ------------------------------------------------------------------ */
/* Assembled registry                                                  */
/* ------------------------------------------------------------------ */
export const PAGES: Record<string, Page> = {
  ...STATIC,
  ...Object.fromEntries(ALL_PRODUCTS.map((p) => [p.href, productPage(p.slug)])),
};

/** Every logical path, in sitemap order. */
export const ALL_PATHS: string[] = [
  "/",
  "/RingWireSaws",
  ...EQUIPMENT.map((p) => p.href),
  ...RING_SAWS.map((p) => p.href),
  ...MATERIALS.map((p) => p.href),
  "/OEM",
  "/introduction",
  "/history",
  "/management",
  "/responsibility",
  "/news",
  "/Contact",
];

export function getPage(path: string): Page | undefined {
  return PAGES[path];
}
