import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath, ui } from "@/lib/i18n";
import type { Crumb } from "@/lib/seo";
import FacetGem, { GEM_PALETTES } from "./FacetGem";

/* ============================================================
   JSON-LD
   ============================================================ */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** locale-aware Link — takes a logical path and prefixes /en when needed */
export function L({
  href,
  lang,
  children,
  className,
  ...rest
}: {
  href: string;
  lang: Locale;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "children" | "className">) {
  return (
    <Link href={localePath(href, lang)} className={className} {...rest}>
      {children}
    </Link>
  );
}

/* ============================================================
   Breadcrumbs
   ============================================================ */
export function Breadcrumbs({ crumbs, lang }: { crumbs: Crumb[]; lang: Locale }) {
  return (
    <nav aria-label={ui("breadcrumb", lang)} className="flex flex-wrap items-center gap-2">
      {crumbs.map((c, i) => {
        const last = i === crumbs.length - 1;
        return (
          <span key={`${i}-${c.name}`} className="flex items-center gap-2">
            {last ? (
              <span aria-current="page" className="font-mono text-[14px] tracking-[0.1em] text-ink2">
                {c.name}
              </span>
            ) : !c.href ? (
              <span className="font-mono text-[14px] tracking-[0.1em] text-ink3">{c.name}</span>
            ) : (
              <L
                href={c.href}
                lang={lang}
                className="font-mono text-[14px] tracking-[0.1em] text-ink3 transition-colors hover:text-steel"
              >
                {c.name}
              </L>
            )}
            {!last && <span className="text-ink3/50">/</span>}
          </span>
        );
      })}
    </nav>
  );
}

/* ============================================================
   Inner-page hero band
   ============================================================ */
export function PageHero({
  label,
  title,
  lead,
  crumbs,
  lang,
  gem = { sides: 14, rotate: -90, palette: "ice" },
  media,
  children,
}: {
  label: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  lang: Locale;
  gem?: { sides: number; rotate: number; palette: string };
  /**
   * Optional visual for the left column — the product photograph on detail
   * pages. When it is given the copy moves into a right-hand column and the
   * floating gem stands down: two focal points on one side fight each other,
   * and the photograph is the more useful of the two.
   */
  media?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const copy = (
    <>
      <p className="label">{label}</p>
      <div className="prism-rule mt-3 w-14" />
      <h1 className="display mt-6 text-[clamp(2.1rem,5.6vw,4rem)] text-ink">{title}</h1>
      {lead && (
        <p className="mt-7 max-w-2xl text-[15.5px] leading-[2] text-ink2 sm:text-base">{lead}</p>
      )}
      {children}
    </>
  );

  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" data-speed="0.2">
          <div className="absolute inset-[-25%] grid-lines opacity-70" />
          <div className="prism absolute -left-[6%] top-[-20%] h-[38vw] w-[38vw] bg-[#a8d8ef] opacity-45" />
          <div className="prism absolute right-[4%] top-[10%] h-[30vw] w-[30vw] bg-[#cabff3] opacity-35" />
        </div>
      </div>

      {!media && (
        <div
          className="pointer-events-none absolute right-[-14%] top-[18%] -z-10 aspect-square w-[70vw] sm:right-[-4%] sm:w-[42vw] lg:right-[2%] lg:w-[28vw]"
          data-speed="-0.07"
        >
          <div className="gem-float h-full w-full">
            <FacetGem
              uid={`ph-${title.replace(/\W+/g, "").slice(0, 12)}`}
              sides={gem.sides}
              rotate={gem.rotate}
              palette={GEM_PALETTES[gem.palette] ?? GEM_PALETTES.ice}
              className="h-full w-full opacity-90"
            />
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <Breadcrumbs crumbs={crumbs} lang={lang} />

        {media ? (
          <div className="mt-8 grid items-start gap-9 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5" data-reveal>
              {media}
            </div>
            <div className="lg:col-span-7" data-reveal style={{ ["--d" as string]: "90ms" }}>
              {copy}
            </div>
          </div>
        ) : (
          <div className="mt-8 max-w-3xl" data-reveal>
            {copy}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   Section head
   ============================================================ */
export function SectionHead({
  label,
  title,
  lede,
}: {
  label: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
      <div data-reveal>
        <p className="label">{label}</p>
        <div className="prism-rule mt-3 w-14" />
        <h2 className="display mt-5 text-[clamp(1.8rem,4.6vw,3rem)] text-ink">{title}</h2>
      </div>
      {lede && (
        <p
          data-reveal
          style={{ ["--d" as string]: "120ms" }}
          className="max-w-md text-[14.5px] leading-[1.95] text-ink2"
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   Key facts — the GEO block
   ============================================================ */
export function KeyFacts({
  facts,
  lang,
  columns = 1,
}: {
  facts: string[];
  lang: Locale;
  columns?: 1 | 3;
}) {
  if (!facts?.length) return null;
  return (
    <aside data-reveal className="panel rounded-[24px] p-7 sm:p-9" aria-label={ui("keyFacts", lang)}>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rotate-45 bg-steel" />
        <p className="label">
          {ui("keyFacts", lang)}
          {lang === "zh" ? " — Key facts" : ""}
        </p>
      </div>
      <ul
        className={`mt-6 gap-4 ${
          columns === 3 ? "grid sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col"
        }`}
      >
        {facts.map((f) => (
          <li key={f} className="flex gap-3 text-[14px] leading-[1.9] text-ink2">
            <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-steel/60" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ============================================================
   FAQ — the AEO block
   ============================================================ */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="panel overflow-hidden rounded-[24px]" data-reveal>
      {faqs.map((f, i) => (
        <details key={f.q} className="group border-b border-ink/8 last:border-0" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-6 transition-colors hover:bg-steel/[0.035] sm:px-8">
            <h3 className="text-[15.5px] font-medium leading-[1.7] text-ink">{f.q}</h3>
            <span
              aria-hidden="true"
              className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/12 text-ink2 transition-transform duration-500 group-open:rotate-45"
            >
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
                <path d="M6 1v10M1 6h10" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <div className="px-6 pb-7 sm:px-8">
            <p className="max-w-3xl text-[14.5px] leading-[2] text-ink2">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({
  faqs,
  title,
  lang,
  note,
}: {
  faqs: { q: string; a: string }[];
  title?: string;
  lang: Locale;
  note?: string;
}) {
  if (!faqs?.length) return null;
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHead label="FAQ" title={title ?? ui("faq", lang)} lede={note} />
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}

/* ============================================================
   Spec table
   ============================================================ */
export function SpecTable({
  title,
  rows,
  caption,
}: {
  title?: string;
  rows: [string, string][];
  caption?: string;
}) {
  return (
    <div className="panel overflow-hidden rounded-[24px]" data-reveal>
      {title && (
        <div className="border-b border-ink/8 px-7 py-5">
          <h3 className="text-[15.5px] font-medium tracking-[0.04em] text-ink">{title}</h3>
        </div>
      )}
      <table className="w-full border-collapse text-left">
        {caption && <caption className="sr-only">{caption}</caption>}
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="spec-row border-b border-ink/6 last:border-0">
              <th
                scope="row"
                className="w-[42%] px-6 py-4 align-top text-[14px] font-normal text-ink3 sm:w-[38%] sm:px-7"
              >
                {k}
              </th>
              <td className="px-6 py-4 align-top font-mono text-[14px] leading-[1.7] text-ink sm:px-7">
                {v}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ============================================================
   Feature list
   ============================================================ */
export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {features.map((f) => (
        <li key={f} className="flex gap-3.5 text-[14px] leading-[1.9] text-ink2">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-steel/55" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

/* ============================================================
   Related products
   ============================================================ */
export function RelatedGrid({
  items,
  title,
  lang,
}: {
  items: { name: string; line: string; href: string; palette: string; sides: number; rotate: number }[];
  title?: string;
  lang: Locale;
}) {
  if (!items.length) return null;
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHead label="Related" title={title ?? ui("relatedProducts", lang)} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <L
              key={it.href}
              href={it.href}
              lang={lang}
              data-reveal
              style={{ ["--d" as string]: `${(i % 4) * 80}ms` }}
              className="glass gloss lift group relative overflow-hidden rounded-[20px] p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 aspect-square w-32 opacity-55 transition-transform duration-1000 group-hover:scale-110">
                <FacetGem
                  uid={`rel-${it.href.replace(/\W+/g, "")}`}
                  sides={it.sides}
                  rotate={it.rotate}
                  palette={GEM_PALETTES[it.palette] ?? GEM_PALETTES.ice}
                  sweep={false}
                  className="h-full w-full"
                />
              </div>
              <div className="relative">
                <h3 className="text-[15.5px] font-medium tracking-tight text-ink">{it.name}</h3>
                <p className="label mt-2 text-[14px] tracking-[0.1em]">{it.line}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[14px] tracking-[0.1em] text-steel">
                  {ui("view", lang)}
                  <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </L>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA band
   ============================================================ */
export function CtaBand({
  lang,
  title,
  body,
}: {
  lang: Locale;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" data-speed="0.2">
        <div className="prism absolute left-1/2 top-1/2 h-[46vw] w-[46vw] -translate-x-1/2 -translate-y-1/2 bg-[#a8d8ef] opacity-35" />
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div
          data-reveal
          className="glass gloss relative overflow-hidden rounded-[28px] px-7 py-12 text-center sm:px-14 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 aspect-square w-64 opacity-50">
            <FacetGem
              uid="cta-band-gem"
              sides={17}
              rotate={-88}
              palette={GEM_PALETTES.ice}
              sweep={false}
              className="h-full w-full"
            />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <p className="label">{ui("contactUs", lang)}</p>
            <h2 className="display mt-5 text-[clamp(1.6rem,4vw,2.6rem)] text-ink">
              {title ?? ui("ctaTitle", lang)}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.95] text-ink2">
              {body ?? ui("ctaBody", lang)}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <L href="/Contact" lang={lang} className="btn btn-primary">
                <span className="sheen" aria-hidden="true" />
                <span>{ui("contactUs", lang)}</span>
              </L>
              <L href="/OEM" lang={lang} className="btn btn-ghost">
                <span>{lang === "zh" ? "代工服務" : "OEM Service"}</span>
              </L>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
