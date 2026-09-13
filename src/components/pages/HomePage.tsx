import Image from "next/image";
import {
  ABOUT_PARAGRAPHS,
  APPLICATIONS,
  CLIENT_SECTION,
  HERO_STATS,
  HOME_SHOWCASES,
  NEWS,
} from "@/content/company";
import { EQUIPMENT, MATERIALS, OEM, RING_SAWS } from "@/content/products";
import { KEY_FACTS } from "@/content/faq";
import type { Locale } from "@/lib/i18n";
import HeroCarousel from "@/components/site/HeroCarousel";
import FacetGem, { GEM_PALETTES } from "@/components/site/FacetGem";
import { CtaBand, KeyFacts, L, SectionHead } from "@/components/site/Primitives";

const WRAP = "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10";
const t = (zh: string, en: string, lang: Locale) => (lang === "zh" ? zh : en);

/**
 * The home page is a hub, not a content dump.
 *
 * Every menu item has its own page (鑽石線 -> /materials/diamond-wire, and so
 * on), so this page introduces the company and routes people onward. Product
 * detail — specs, features, applications — lives on the leaf pages only, which
 * also keeps each page's keywords distinct rather than competing with the home
 * page in search.
 */
export default function HomePage({ lang }: { lang: Locale }) {
  const groups = [
    {
      label: t("設備", "Equipment", lang),
      line: "Equipment",
      href: null,
      blurb: t(
        "七類線切割設備，從桌面型環線切割機到 3,800 kg 的大型旋轉切割機。",
        "Seven categories of wire saw equipment, from a benchtop ring saw to a 3,800 kg rotary machine.",
        lang,
      ),
      items: [
        {
          name: t("環線切割機", "Ring Wire Cutting M/C", lang),
          href: "/RingWireSaws",
          note: `${RING_SAWS.length} ${t("款", "models", lang)}`,
        },
        ...EQUIPMENT.map((e) => ({ name: e.name[lang], href: e.href, note: e.model ?? "" })),
      ],
      palette: "ice",
      sides: 12,
    },
    {
      label: t("物料", "Materiel", lang),
      line: "Materiel",
      href: null,
      blurb: t(
        "鑽石線、冷卻液、AB 膠、犧牲材與導輪 — 為同一條線切割製程設計。",
        "Diamond wire, coolant, epoxy adhesive, sacrificial beam and pulleys — one matched system.",
        lang,
      ),
      items: MATERIALS.map((m) => ({ name: m.name[lang], href: m.href, note: "" })),
      palette: "jade",
      sides: 15,
    },
    {
      label: t("代工服務", "OEM Service", lang),
      line: "OEM Service",
      href: "/OEM",
      blurb: t(
        "沒有設備也能用我們的製程：晶棒截斷、晶棒切片、晶粒切割。",
        "Use our process without owning a machine: ingot cropping, ingot slicing and wafer dicing.",
        lang,
      ),
      items: OEM.map((o) => ({ name: o.name[lang], href: o.href, note: "" })),
      palette: "amber",
      sides: 9,
    },
  ];

  const about = [
    { name: t("公司願景", "Vision", lang), href: "/introduction" },
    { name: t("歷史沿革", "History", lang), href: "/history" },
    { name: t("經營理念", "Management Philosophy", lang), href: "/management" },
    { name: t("社會責任", "Responsibility", lang), href: "/responsibility" },
  ];

  return (
    <>
      <HeroCarousel lang={lang} />

      {/* stats */}
      <section className="relative overflow-hidden border-y border-ink/8 bg-white/60 backdrop-blur-sm">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-[-60%] grid-fine opacity-50" data-speed="0.28" />
        </div>
        <div className={`${WRAP} relative`}>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.k.en}
                className={`px-2 py-7 sm:px-6 ${i % 2 === 1 ? "border-l border-ink/8" : ""} ${
                  i >= 2 ? "border-t border-ink/8 lg:border-t-0" : ""
                } ${i === 2 ? "lg:border-l lg:border-ink/8" : ""}`}
              >
                <dt className="label">{s.k[lang]}</dt>
                <dd className="mt-2.5 flex items-baseline gap-1.5">
                  <span className="font-mono text-[28px] font-medium tracking-tight text-ink sm:text-[34px]">
                    {s.v}
                  </span>
                  {s.u[lang] && <span className="font-mono text-[14px] text-steel">{s.u[lang]}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* applications marquee */}
      <section
        className="relative border-b border-ink/8 bg-white/50 py-5"
        aria-label={t("應用產業", "Industries served", lang)}
      >
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {APPLICATIONS[lang].map((c) => (
                  <span key={c} className="flex shrink-0 items-center gap-6 px-6">
                    <span className="font-mono text-[14px] tracking-[0.1em] text-ink2">{c}</span>
                    <span className="h-1 w-1 rotate-45 bg-steel/45" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* product directory — names and links only */}
      <section id="products" className="relative scroll-mt-20 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Three depths rather than one slab: the grid sits furthest back, the
              two prisms drift apart from each other as the section passes. The
              speed lives on wrappers because .prism owns its own drift keyframes. */}
          <div className="absolute inset-[-25%] grid-lines opacity-60" data-speed="0.3" />
          <div className="absolute inset-0" data-speed="0.14">
            <div className="prism absolute left-[6%] top-[10%] h-[32vw] w-[32vw] bg-[#a8d8ef] opacity-35" />
          </div>
          <div className="absolute inset-0" data-speed="-0.08">
            <div className="prism absolute bottom-[8%] right-[6%] h-[26vw] w-[26vw] bg-[#cabff3] opacity-30" />
          </div>
        </div>

        <div className={WRAP}>
          <SectionHead
            label={t("產品與服務 — Products", "Products & services", lang)}
            title={t("整條切割產線，一家公司", "One company, the whole cutting line", lang)}
            lede={t(
              "從鑽石線的鍍覆製程，到線切割設備的整機設計，再到耗材供應。點進任一項目看完整規格。",
              "From wire coating to complete machines and matched consumables. Open any item for its full specification.",
              lang,
            )}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {groups.map((g, i) => (
              <div
                key={g.line}
                data-reveal
                style={{ ["--d" as string]: `${i * 90}ms` }}
                className="glass gloss relative flex flex-col overflow-hidden rounded-[24px] p-8"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 aspect-square w-48 opacity-50"
                  data-speed="-0.06"
                >
                  <FacetGem
                    uid={`hub-${g.line.replace(/\W+/g, "")}`}
                    sides={g.sides}
                    rotate={-90 + i * 15}
                    palette={GEM_PALETTES[g.palette]}
                    sweep={false}
                    className="h-full w-full"
                  />
                </div>

                <div className="relative">
                  <p className="label">{g.line}</p>
                  <h3 className="display mt-4 text-[clamp(1.5rem,3.2vw,2rem)] text-ink">{g.label}</h3>
                  <p className="mt-4 text-[14px] leading-[1.9] text-ink2">{g.blurb}</p>
                </div>

                <ul className="relative mt-7 flex flex-1 flex-col border-t border-ink/8">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <L
                        href={it.href}
                        lang={lang}
                        className="group flex items-center justify-between gap-3 border-b border-ink/6 py-3 last:border-0"
                      >
                        <span className="flex items-center gap-2.5 text-[14px] text-ink2 transition-colors group-hover:text-ink">
                          <span className="h-1 w-1 shrink-0 rotate-45 bg-steel/45 transition-colors group-hover:bg-steel" />
                          {it.name}
                        </span>
                        <span className="flex shrink-0 items-center gap-2">
                          {it.note && (
                            <span className="font-mono text-[14px] text-ink3">{it.note}</span>
                          )}
                          <svg
                            viewBox="0 0 16 16"
                            className="h-2.5 w-2.5 text-steel opacity-0 transition-opacity group-hover:opacity-100"
                            fill="none"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </span>
                      </L>
                    </li>
                  ))}
                </ul>

                {g.href && (
                  <L
                    href={g.href}
                    lang={lang}
                    className="relative mt-6 inline-flex items-center gap-2 font-mono text-[14px] tracking-[0.1em] text-steel transition-colors hover:text-ink"
                  >
                    {lang === "zh" ? `全部${g.label}` : `All ${g.label}`}
                    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </L>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* short about + latest news */}
      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-[-30%] grid-fine opacity-50" data-speed="0.26" />
          <div className="absolute inset-0" data-speed="0.12">
            <div className="prism absolute right-[10%] top-[6%] h-[26vw] w-[26vw] bg-[#bfe3d2] opacity-25" />
          </div>
          <div className="absolute inset-0" data-speed="-0.07">
            <div className="prism absolute bottom-[4%] left-[8%] h-[22vw] w-[22vw] bg-[#f3d9bf] opacity-20" />
          </div>
        </div>
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="glass gloss h-full rounded-[24px] p-8 sm:p-10" data-reveal>
                <p className="label">{t("關於微鑽石 — About", "About MDWEC", lang)}</p>
                <div className="prism-rule mt-3 w-10" />
                <h2 className="display mt-5 text-[clamp(1.5rem,3.4vw,2.1rem)] text-ink">
                  {t("以鑽石為企業發展核心", "Diamond is the core of our business", lang)}
                </h2>
                <p className="mt-6 text-[15px] leading-[2.05] text-ink2">
                  {ABOUT_PARAGRAPHS[lang][1]}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {about.map((a) => (
                    <li key={a.href}>
                      <L
                        href={a.href}
                        lang={lang}
                        className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-[14px] text-ink2 transition-colors hover:border-steel/40 hover:text-ink"
                      >
                        {a.name}
                      </L>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="glass gloss relative h-full overflow-hidden rounded-[24px] p-8 sm:p-10"
                data-reveal
              >
                <div
                  className="pointer-events-none absolute -right-14 -top-14 aspect-square w-44 opacity-45"
                  data-speed="-0.06"
                >
                  <FacetGem
                    uid="home-news"
                    sides={17}
                    rotate={-88}
                    palette={GEM_PALETTES.iris}
                    sweep={false}
                    className="h-full w-full"
                  />
                </div>
                <div className="relative">
                  <p className="label">{t("最新消息 — News", "Latest news", lang)}</p>
                  <div className="prism-rule mt-3 w-10" />
                  <time
                    dateTime={NEWS[0].iso}
                    className="mt-5 block font-mono text-[14px] tracking-[0.1em] text-steel"
                  >
                    {NEWS[0].date[lang]} · {NEWS[0].place[lang]}
                  </time>
                  <h2 className="mt-3 text-[17px] font-medium leading-[1.6] text-ink">
                    {NEWS[0].title[lang]}
                  </h2>
                  <p className="mt-4 text-[14px] leading-[1.95] text-ink2">{NEWS[0].body[lang]}</p>
                  <L
                    href="/news"
                    lang={lang}
                    className="mt-6 inline-flex items-center gap-2 font-mono text-[14px] tracking-[0.1em] text-steel transition-colors hover:text-ink"
                  >
                    {t("全部消息", "All news", lang)}
                    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </L>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <KeyFacts facts={KEY_FACTS.home[lang]} lang={lang} columns={3} />
          </div>
        </div>
      </section>

      {HOME_SHOWCASES.map((s) => (
        <section key={s.id} className="relative py-14 sm:py-16">
          <div className={WRAP}>
            <SectionHead label={s.id === "service" ? "Service" : "Strategy"} title={s.title[lang]} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.items.map((it, i) => (
                <figure
                  key={it.src}
                  className="panel gloss overflow-hidden rounded-[20px]"
                  data-reveal
                  style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
                >
                  {/* Square originals in a landscape frame: cover, because
                      these are photographs and a crop reads better here than
                      letterboxing would. */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={it.src}
                      alt={it.caption[lang]}
                      width={it.w}
                      height={it.h}
                      loading="lazy"
                      sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-ink/8 px-6 py-5 text-[14.5px] leading-[1.85] text-ink2">
                    {it.caption[lang]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* manufacturing credentials + the customer list */}
      <section className="relative py-14 sm:py-16">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5" data-reveal>
              <p className="label">Manufacturing</p>
              <div className="prism-rule mt-3 w-14" />
              <h2 className="display mt-5 text-[clamp(1.6rem,3.6vw,2.4rem)] text-ink">
                {CLIENT_SECTION.title[lang]}
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {CLIENT_SECTION.points[lang].map((p) => (
                  <li key={p} className="flex gap-3.5 text-[14.5px] leading-[1.95] text-ink2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-steel/55" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7" data-reveal style={{ ["--d" as string]: "100ms" }}>
              <p className="label">Clients</p>
              <div className="prism-rule mt-3 w-14" />
              <h2 className="display mt-5 text-[clamp(1.6rem,3.6vw,2.4rem)] text-ink">
                {CLIENT_SECTION.clientsTitle[lang]}
              </h2>
              {/* The logo files are 135×105 JPEGs on white, so each one sits in
                  its own white tile — otherwise the white squares would show as
                  rectangles against the paper background. */}
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CLIENT_SECTION.logos.map((c) => (
                  <li
                    key={c.src}
                    className="panel flex h-[84px] items-center justify-center rounded-[14px] px-3"
                  >
                    <Image
                      src={c.src}
                      alt={c.name}
                      width={135}
                      height={105}
                      loading="lazy"
                      sizes="135px"
                      className="max-h-full w-auto max-w-full object-contain mix-blend-multiply"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capped height rather than the file's own 1200×447: at full
              container width that ratio comes out ~500px tall, which made a
              supporting image the biggest thing on the page — and it would be
              upscaling past its 1200px source to get there. */}
          <figure className="panel gloss relative mt-10 overflow-hidden rounded-[24px]" data-reveal>
            <Image
              src={CLIENT_SECTION.banner.src}
              alt={CLIENT_SECTION.banner.caption[lang]}
              width={CLIENT_SECTION.banner.w}
              height={CLIENT_SECTION.banner.h}
              loading="lazy"
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="h-[150px] w-full object-cover sm:h-[200px] lg:h-[260px]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-6 pb-5 pt-14 text-right text-[14.5px] leading-[1.7] text-white sm:px-8">
              {CLIENT_SECTION.banner.caption[lang]}
            </figcaption>
          </figure>
        </div>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
