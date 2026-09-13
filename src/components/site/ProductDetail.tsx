import Link from "next/link";
import { findProduct, type Product } from "@/content/products";
import { productLeadImage } from "@/content/productImages";
import { productFaqs, productKeyFacts } from "@/content/productFaq";
import { FAQS, KEY_FACTS } from "@/content/faq";
import { localePath, ui, type Locale } from "@/lib/i18n";
import type { Crumb } from "@/lib/seo";
import {
  CtaBand,
  FaqList,
  FeatureList,
  PageHero,
  RelatedGrid,
  SectionHead,
  SpecTable,
} from "./Primitives";
import ProductGallery from "./ProductGallery";
import ProductHeroMedia from "./ProductHeroMedia";
import WireSpecTables from "./WireSpecTables";

export function productCrumbs(p: Product, lang: Locale): Crumb[] {
  const home = ui("home", lang);
  if (p.group === "ring") {
    return [
      { name: home, href: "/" },
      { name: lang === "zh" ? "設備" : "Equipment" },
      {
        name: lang === "zh" ? "環線切割機" : "Ring Wire Cutting M/C",
        href: "/RingWireSaws",
      },
      { name: p.model ?? p.name[lang], href: p.href },
    ];
  }
  return [
    { name: home, href: "/" },
    {
      name:
        p.category === "equipment"
          ? lang === "zh"
            ? "設備"
            : "Equipment"
          : lang === "zh"
            ? "物料"
            : "Materiel",
    },
    { name: p.name[lang], href: p.href },
  ];
}

export default function ProductDetail({ product, lang }: { product: Product; lang: Locale }) {
  const isWire = product.slug === "diamond-wire";
  const faqs = (isWire ? FAQS["diamond-wire"] : productFaqs(product)).map((f) => ({
    q: f.q[lang],
    a: f.a[lang],
  }));
  const facts = isWire ? KEY_FACTS["diamond-wire"][lang] : productKeyFacts(product)[lang];

  const related = (product.related ?? [])
    .map((slug) => findProduct(slug))
    .filter((p): p is Product => Boolean(p))
    .map((p) => ({
      name: p.name[lang],
      line: p.line,
      href: p.href,
      palette: p.palette,
      sides: p.sides,
      rotate: p.rotate,
    }));

  return (
    <>
      <PageHero
        label={`${product.category === "equipment" ? (lang === "zh" ? "設備" : "Equipment") : lang === "zh" ? "物料" : "Materiel"} — ${product.line}`}
        title={product.name[lang]}
        crumbs={productCrumbs(product, lang)}
        lang={lang}
        gem={{ sides: product.sides, rotate: product.rotate, palette: product.palette }}
        media={
          productLeadImage(product.slug) ? (
            <ProductHeroMedia slug={product.slug} lang={lang} />
          ) : undefined
        }
      >
        {product.model && (
          <p className="mt-5 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/70 px-4 py-2 font-mono text-[14px] tracking-[0.08em] text-steel">
            <span className="h-1.5 w-1.5 rotate-45 bg-steel" />
            {product.model}
          </p>
        )}
        {/* answer-first summary: the paragraph an engine should lift */}
        <p className="mt-7 max-w-3xl text-[15.5px] leading-[2] text-ink2">{product.summary[lang]}</p>
      </PageHero>

      <ProductGallery product={product} lang={lang} />

      {/* key facts */}
      {facts.length > 0 && (
        <section className="relative pb-6">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <aside data-reveal className="panel rounded-[24px] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-steel" />
                <p className="label">{ui("keyFacts", lang)}</p>
              </div>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {facts.map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] leading-[1.9] text-ink2">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-steel/60" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      )}

      {/* application + features */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0" data-speed="0.18">
            <div className="absolute inset-[-25%] grid-fine opacity-50" />
            <div className="prism absolute right-[8%] top-[12%] h-[30vw] w-[30vw] bg-[#b3dcf0] opacity-35" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="glass gloss h-full rounded-[24px] p-8 sm:p-10" data-reveal>
                <p className="label">{ui("application", lang)}</p>
                <div className="prism-rule mt-3 w-10" />
                <ul className="mt-7 flex flex-col gap-4">
                  {product.application[lang].map((a) => (
                    <li key={a} className="flex gap-3.5 text-[14.5px] leading-[1.95] text-ink2">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-steel/55" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="glass gloss h-full rounded-[24px] p-8 sm:p-10"
                data-reveal
                style={{ ["--d" as string]: "100ms" }}
              >
                <p className="label">{ui("features", lang)}</p>
                <div className="prism-rule mt-3 w-10" />
                <div className="mt-7">
                  <FeatureList features={product.features[lang]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* specs */}
      {product.specs && product.specs.length > 0 && (
        <section className="relative pb-16 sm:pb-20">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <SectionHead
              label={ui("specifications", lang)}
              title={
                product.model
                  ? `${product.model} ${lang === "zh" ? "規格表" : "specifications"}`
                  : lang === "zh"
                    ? "規格表"
                    : "Specifications"
              }
              lede={ui("specNote", lang)}
            />
            <div className={`grid gap-5 ${product.specs.length > 1 ? "lg:grid-cols-2" : "max-w-3xl"}`}>
              {product.specs.map((t, i) => (
                <SpecTable
                  key={t.title ?? i}
                  title={t.title}
                  rows={t.rows.map(([label, value]) => [label[lang], value] as [string, string])}
                  caption={`${product.name[lang]} ${t.title ?? ""}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {isWire && <WireSpecTables lang={lang} />}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="relative pb-8">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
            <SectionHead
              label="FAQ"
              title={lang === "zh" ? `關於${product.name.zh}` : `About the ${product.name.en}`}
            />
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      <RelatedGrid items={related} lang={lang} />

      <section className="relative pb-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
          {/* 設備 and 物料 have no index page any more, so go back to the
              product directory on the home page instead. */}
          <Link
            href={`${localePath("/", lang)}#products`}
            className="inline-flex items-center gap-2 font-mono text-[14px] tracking-[0.1em] text-steel transition-colors hover:text-ink"
          >
            <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
              <path d="M13 8H3M7 4L3 8l4 4" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            {ui("backTo", lang)} {lang === "zh" ? "產品總覽" : "all products"}
          </Link>
        </div>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
