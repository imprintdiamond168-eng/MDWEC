import {
  ABOUT_PARAGRAPHS,
  AFFILIATES,
  COMPANY,
  HISTORY,
  NEWS,
  NEWS_CATEGORIES,
  NEWS_YEARS,
  PHILOSOPHY,
  PHILOSOPHY_PILLARS,
  PROCESSES,
  RESPONSIBILITY,
} from "@/content/company";
import { EQUIPMENT, MATERIALS, OEM, OEM_STEPS, RING_SAWS } from "@/content/products";
import { ENQUIRY_CHECKLIST, FAQS, KEY_FACTS } from "@/content/faq";
import { ui, type Locale } from "@/lib/i18n";
import WireSpecTables from "@/components/site/WireSpecTables";
import FacetGem, { GEM_PALETTES } from "@/components/site/FacetGem";
import {
  CtaBand,
  FaqSection,
  KeyFacts,
  L,
  PageHero,
  SectionHead,
} from "@/components/site/Primitives";

const WRAP = "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10";
const t = (zh: string, en: string, lang: Locale) => (lang === "zh" ? zh : en);
const faqFor = (key: string, lang: Locale) =>
  (FAQS[key] ?? []).map((f) => ({ q: f.q[lang], a: f.a[lang] }));

const crumbHome = (lang: Locale) => ({ name: ui("home", lang), href: "/" });

/* ============================================================
   Reusable product card grid
   ============================================================ */
function ProductCards({
  items,
  lang,
  cols = 3,
}: {
  items: typeof EQUIPMENT;
  lang: Locale;
  cols?: 2 | 3;
}) {
  return (
    <div className={`grid gap-5 md:grid-cols-2 ${cols === 3 ? "xl:grid-cols-3" : ""}`}>
      {items.map((p, i) => (
        <L
          key={p.slug}
          href={p.href}
          lang={lang}
          data-reveal
          style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
          className="glass gloss lift group relative flex flex-col overflow-hidden rounded-[24px] p-7 sm:p-8"
        >
          <div className="pointer-events-none absolute -right-14 -top-14 aspect-square w-48 opacity-55 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-80">
            <FacetGem
              uid={`pc-${p.slug}`}
              sides={p.sides}
              rotate={p.rotate}
              palette={GEM_PALETTES[p.palette] ?? GEM_PALETTES.ice}
              sweep={false}
              className="h-full w-full"
            />
          </div>
          <div className="relative flex-1">
            <p className="font-mono text-[14px] tracking-[0.1em] text-ink3">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-[20px] font-medium tracking-tight text-ink sm:text-[22px]">
              {p.name[lang]}
            </h3>
            {p.model && (
              <p className="mt-2 font-mono text-[14px] tracking-[0.1em] text-steel">{p.model}</p>
            )}
            <p className="label mt-1.5 text-[14px] tracking-[0.1em]">{p.line}</p>
            <p className="mt-5 text-[14px] leading-[1.9] text-ink2">{p.summary[lang]}</p>
          </div>
          <span className="relative mt-6 inline-flex items-center gap-2 border-t border-ink/8 pt-5 font-mono text-[14px] tracking-[0.1em] text-steel">
            {ui("viewSpecs", lang)}
            <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
              <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </L>
      ))}
    </div>
  );
}

/* ============================================================
   EQUIPMENT INDEX
   ============================================================ */
export function EquipmentIndex({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHero
        label={t("設備 — Equipment", "Equipment", lang)}
        title={t("線切割設備", "Wire saw equipment", lang)}
        lead={t(
          "MDWEC 線切割設備共七類，從桌面型環線切割機到 3,800 kg 的大型旋轉切割機，全部採微電腦及 PLC 控制，並可搭配 MDWEC 自製鑽石線使用。",
          "MDWEC builds seven categories of wire saw equipment, from a benchtop ring saw to a 3,800 kg rotary machine. All are microcomputer and PLC controlled and run MDWEC's own diamond wire.",
          lang,
        )}
        crumbs={[crumbHome(lang), { name: t("設備", "Equipment", lang), href: "/Equipment" }]}
        lang={lang}
        gem={{ sides: 12, rotate: -90, palette: "ice" }}
      />

      <section className="relative pb-6">
        <div className={WRAP}>
          <KeyFacts facts={KEY_FACTS.equipment[lang]} lang={lang} />
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0" data-speed="0.18">
            <div className="absolute inset-[-25%] grid-fine opacity-50" />
            <div className="prism absolute right-[8%] top-[14%] h-[30vw] w-[30vw] bg-[#b3dcf0] opacity-35" />
          </div>
        </div>
        <div className={WRAP}>
          <SectionHead
            label={ui("productRange", lang)}
            title={t("七類設備", "Seven equipment categories", lang)}
          />
          <div className="mb-5">
            <L
              href="/RingWireSaws"
              lang={lang}
              data-reveal
              className="glass gloss lift group relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[24px] p-7 sm:p-9"
            >
              <div className="pointer-events-none absolute -right-12 -top-16 aspect-square w-56 opacity-55 transition-transform duration-1000 group-hover:scale-110">
                <FacetGem
                  uid="eq-ring"
                  sides={20}
                  rotate={-60}
                  palette={GEM_PALETTES.amber}
                  sweep={false}
                  className="h-full w-full"
                />
              </div>
              <div className="relative max-w-2xl">
                <h2 className="text-[22px] font-medium tracking-tight text-ink sm:text-[26px]">
                  {t("環線切割機 KLDJ 系列", "KLDJ Ring Wire Saws", lang)}
                </h2>
                <p className="mt-2 font-mono text-[14px] tracking-[0.1em] text-steel">
                  {RING_SAWS.length} {t("款機型", "models", lang)}
                </p>
                <p className="mt-4 max-w-xl text-[14px] leading-[1.9] text-ink2">
                  {t(
                    "適用於單材料切割，配合旋轉工作臺可進行同步旋轉切割，切片厚度可調。",
                    "For single-material cutting; with a rotary table they perform synchronised rotary cutting at adjustable slice thickness.",
                    lang,
                  )}
                </p>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {RING_SAWS.map((r) => (
                  <span
                    key={r.slug}
                    className="rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 font-mono text-[14px] text-ink2"
                  >
                    {r.model}
                  </span>
                ))}
              </div>
            </L>
          </div>
          <ProductCards items={EQUIPMENT} lang={lang} />
        </div>
      </section>

      <FaqSection faqs={faqFor("equipment", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

/* ============================================================
   RING WIRE SAW INDEX
   ============================================================ */
const COMPARE_KEYS: [string, string][] = [
  ["工作臺尺寸", "Worktable size"],
  ["最大產品尺寸", "Max. workpiece size"],
  ["工作臺承重", "Worktable load capacity"],
  ["最大線速度", "Max. wire speed"],
  ["加工精度", "Machining accuracy"],
  ["設備重量", "Machine weight"],
];

export function RingIndex({ lang }: { lang: Locale }) {
  const rows = RING_SAWS.map((p) => {
    const flat = p.specs?.flatMap((s) => s.rows) ?? [];
    const get = (zh: string) => flat.find(([label]) => label.zh === zh)?.[1] ?? "—";
    return { p, values: COMPARE_KEYS.map(([zh]) => get(zh)) };
  });

  return (
    <>
      <PageHero
        label={t("設備 — Ring Wire Cutting M/C", "Equipment — Ring Wire Cutting M/C", lang)}
        title={t("環線切割機 KLDJ 系列", "KLDJ Ring Wire Saws", lang)}
        lead={t(
          "十款機型，工作臺尺寸自 200×150 mm 到 Φ1700 mm，承重自 15 kg 到 5,000 kg。全系列採微電腦及 PLC 控制，金鋼砂環線直徑統一為 Φ0.35～0.8 mm，加工表面粗糙度均為 Ra ≤ 1.25。",
          "Ten models with worktables from 200×150 mm to Φ1700 mm and load capacity from 15 kg to 5,000 kg. All are microcomputer and PLC controlled, use Φ0.35–0.8 mm closed-loop diamond wire and achieve Ra ≤ 1.25.",
          lang,
        )}
        crumbs={[
          crumbHome(lang),
          { name: t("設備", "Equipment", lang), href: "/Equipment" },
          { name: t("環線切割機", "Ring Wire Cutting M/C", lang), href: "/RingWireSaws" },
        ]}
        lang={lang}
        gem={{ sides: 20, rotate: -60, palette: "amber" }}
      />

      <section className="relative pb-6">
        <div className={WRAP}>
          <KeyFacts facts={KEY_FACTS["ring-wire-saws"][lang]} lang={lang} />
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className={WRAP}>
          <SectionHead
            label={ui("comparison", lang)}
            title={t("十款機型規格對照", "Ten models compared", lang)}
            lede={t(
              "橫向捲動可看到完整欄位。點擊型號進入該機型的完整規格頁。",
              "Scroll sideways for all columns. Click a model for its full specification.",
              lang,
            )}
          />
          <div className="panel overflow-hidden rounded-[24px]" data-reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1040px] border-collapse text-left">
                <caption className="sr-only">
                  {t("KLDJ 系列十款機型規格對照表", "KLDJ range specification comparison", lang)}
                </caption>
                <thead>
                  <tr className="border-b border-ink/10">
                    <th scope="col" className="label sticky left-0 bg-white/95 px-6 py-4 font-normal">
                      Model
                    </th>
                    {COMPARE_KEYS.map(([zh, en]) => (
                      <th key={en} scope="col" className="label px-5 py-4 font-normal">
                        {lang === "zh" ? zh : en}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(({ p, values }) => (
                    <tr key={p.slug} className="spec-row border-b border-ink/6 last:border-0">
                      <th scope="row" className="sticky left-0 bg-white/95 px-6 py-4 text-left">
                        <L
                          href={p.href}
                          lang={lang}
                          className="font-mono text-[14px] font-medium text-ink transition-colors hover:text-steel"
                        >
                          {p.model}
                        </L>
                      </th>
                      {values.map((v, i) => (
                        <td
                          key={COMPARE_KEYS[i][1]}
                          className="whitespace-nowrap px-5 py-4 font-mono text-[14px] text-ink2"
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20">
        <div className={WRAP}>
          <SectionHead label={ui("models", lang)} title={t("全部十款機型", "All ten models", lang)} />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {RING_SAWS.map((p, i) => (
              <L
                key={p.slug}
                href={p.href}
                lang={lang}
                data-reveal
                style={{ ["--d" as string]: `${(i % 3) * 70}ms` }}
                className="glass gloss lift group relative overflow-hidden rounded-[24px] p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 aspect-square w-40 opacity-55 transition-transform duration-1000 group-hover:scale-110">
                  <FacetGem
                    uid={`ring-${p.slug}`}
                    sides={p.sides}
                    rotate={p.rotate}
                    palette={GEM_PALETTES[p.palette] ?? GEM_PALETTES.ice}
                    sweep={false}
                    className="h-full w-full"
                  />
                </div>
                <div className="relative">
                  <h2 className="font-mono text-[19px] font-medium tracking-[0.02em] text-ink">
                    {p.model}
                  </h2>
                  <div className="prism-rule mt-3 w-8" />
                  <p className="mt-4 text-[14px] leading-[1.9] text-ink2">{p.summary[lang]}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[14px] tracking-[0.1em] text-steel">
                    {ui("specifications", lang)}
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

      <FaqSection faqs={faqFor("ring-wire-saws", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

/* ============================================================
   MATERIALS INDEX
   ============================================================ */
export function MaterialsIndex({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHero
        label={t("物料 — Materiel", "Materiel", lang)}
        title={t("切割耗材", "Cutting consumables", lang)}
        lead={t(
          "鑽石線、冷卻液、AB 膠、犧牲材與耐磨耗導輪 — 一整套為線切割製程設計的耗材系統，彼此配合，而不是各買各的。",
          "Diamond wire, coolant, epoxy adhesive, sacrificial beam and wear-resistant pulleys — one consumable system designed around a single cutting process.",
          lang,
        )}
        crumbs={[crumbHome(lang), { name: t("物料", "Materiel", lang), href: "/Materials" }]}
        lang={lang}
        gem={{ sides: 14, rotate: -90, palette: "jade" }}
      />

      <section className="relative pb-6">
        <div className={WRAP}>
          <KeyFacts facts={KEY_FACTS.materials[lang]} lang={lang} />
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0" data-speed="0.22">
            <div className="absolute inset-[-25%] grid-lines opacity-55" />
            <div className="prism absolute left-[8%] top-[16%] h-[30vw] w-[30vw] bg-[#c6f0e0] opacity-35" />
          </div>
        </div>
        <div className={WRAP}>
          <SectionHead
            label={ui("productRange", lang)}
            title={t("五類耗材", "Five consumable categories", lang)}
          />
          <ProductCards items={MATERIALS} lang={lang} />
        </div>
      </section>

      <WireSpecTables lang={lang} />
      <FaqSection faqs={faqFor("materials", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

/* ============================================================
   OEM
   ============================================================ */
export function OemPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHero
        label={t("代工服務 — OEM Service", "OEM Service", lang)}
        title={t("代工服務", "Subcontract cutting", lang)}
        lead={t(
          "沒有設備也可以用我們的製程。把材料寄過來，我們用自家機台與鑽石線完成截斷、切片與晶粒切割。晶粒切割設備已於台灣、中國、日本、韓國進行專利註冊。",
          "You do not need to own the machine. Send us the material and we will crop, slice or dice it on our own equipment. The dicing machine is patent-registered in Taiwan, China, Japan and Korea.",
          lang,
        )}
        crumbs={[crumbHome(lang), { name: t("代工服務", "OEM Service", lang), href: "/OEM" }]}
        lang={lang}
        gem={{ sides: 9, rotate: -100, palette: "amber" }}
      />

      <section className="relative pb-6">
        <div className={WRAP}>
          <KeyFacts facts={KEY_FACTS.oem[lang]} lang={lang} />
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0" data-speed="0.2">
            <div className="absolute inset-[-25%] grid-fine opacity-45" />
            <div className="prism absolute left-[14%] top-[10%] h-[28vw] w-[28vw] bg-[#cdc2f4] opacity-30" />
          </div>
        </div>
        <div className={WRAP}>
          <SectionHead
            label={t("Services — 三類代工", "Services", lang)}
            title={t("我們可以幫你切什麼", "What we can cut for you", lang)}
            lede={t(
              "每一類代工都對應一台自製機型，點進去可以看到該機型的完整規格。",
              "Each service maps to one of our machines — open it for the full specification.",
              lang,
            )}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {OEM.map((o, i) => (
              <L
                key={o.no}
                href={o.href}
                lang={lang}
                data-reveal
                style={{ ["--d" as string]: `${i * 90}ms` }}
                className="glass gloss lift group relative overflow-hidden rounded-[24px] p-8"
              >
                <span
                  className="pointer-events-none absolute right-6 top-4 font-mono text-[54px] leading-none text-ink/[0.05] transition-colors duration-700 group-hover:text-steel/15"
                  aria-hidden="true"
                >
                  {o.no}
                </span>
                <p className="font-mono text-[14px] tracking-[0.1em] text-steel">{o.no}</p>
                <h2 className="mt-4 text-[19px] font-medium tracking-tight text-ink">{o.name[lang]}</h2>
                <p className="label mt-2 text-[14px] tracking-[0.1em]">{o.line}</p>
                <p className="mt-5 text-[14px] leading-[1.9] text-ink2">{o.body[lang]}</p>
                <div className="mt-5 border-t border-ink/8 pt-4">
                  <p className="label">{ui("materials", lang)}</p>
                  <p className="mt-2 text-[14px] leading-[1.85] text-ink2">{o.materials[lang]}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan to-iris transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </L>
            ))}
          </div>

          <div className="panel mt-8 rounded-[24px] p-8 sm:p-10" data-reveal>
            <p className="label">{t("詢價流程 — How it works", "How it works", lang)}</p>
            <div className="prism-rule mt-3 w-10" />
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {OEM_STEPS.map((s) => (
                <li key={s.no}>
                  <p className="font-mono text-[14px] tracking-[0.1em] text-steel">{s.no}</p>
                  <h3 className="mt-3 text-[15.5px] font-medium text-ink">{s.t[lang]}</h3>
                  <p className="mt-2 text-[14px] leading-[1.85] text-ink2">{s.d[lang]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqFor("oem", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

/* ============================================================
   ABOUT cluster
   ============================================================ */
const aboutCrumbs = (lang: Locale, leaf?: { name: string; href: string }) => [
  crumbHome(lang),
  { name: t("關於微鑽石", "About", lang), href: "/About" },
  ...(leaf ? [leaf] : []),
];

export function AboutIndex({ lang }: { lang: Locale }) {
  const links = [
    { zh: "公司願景", en: "Vision", href: "/introduction", pal: "ice", sides: 9 },
    { zh: "歷史沿革", en: "History", href: "/history", pal: "iris", sides: 13 },
    { zh: "經營理念", en: "Management Philosophy", href: "/management", pal: "jade", sides: 17 },
    { zh: "社會責任", en: "Responsibility", href: "/responsibility", pal: "amber", sides: 21 },
  ];
  return (
    <>
      <PageHero
        label={t("關於微鑽石 — About", "About MDWEC", lang)}
        title={t("以鑽石為企業發展核心", "Diamond is the core of our business", lang)}
        lead={ABOUT_PARAGRAPHS[lang][1]}
        crumbs={aboutCrumbs(lang)}
        lang={lang}
        gem={{ sides: 20, rotate: -96, palette: "ice" }}
      />

      <section className="relative pb-6">
        <div className={WRAP}>
          <KeyFacts facts={KEY_FACTS.about[lang]} lang={lang} />
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className={WRAP}>
          <SectionHead label={ui("sections", lang)} title={t("關於我們的四件事", "Four sections", lang)} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((c, i) => (
              <L
                key={c.href}
                href={c.href}
                lang={lang}
                data-reveal
                style={{ ["--d" as string]: `${i * 80}ms` }}
                className="glass gloss lift group relative overflow-hidden rounded-[24px] p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 aspect-square w-40 opacity-55 transition-transform duration-1000 group-hover:scale-110">
                  <FacetGem
                    uid={`about-${i}`}
                    sides={c.sides}
                    rotate={-90 + i * 14}
                    palette={GEM_PALETTES[c.pal]}
                    sweep={false}
                    className="h-full w-full"
                  />
                </div>
                <div className="relative">
                  <p className="font-mono text-[14px] tracking-[0.1em] text-ink3">0{i + 1}</p>
                  <h2 className="mt-4 text-[18px] font-medium tracking-tight text-ink">
                    {lang === "zh" ? c.zh : c.en}
                  </h2>
                  <p className="label mt-2 text-[14px] tracking-[0.1em]">{c.en}</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-mono text-[14px] tracking-[0.1em] text-steel">
                    {ui("readMore", lang)}
                    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </L>
            ))}
          </div>

          <article className="glass gloss mt-8 rounded-[24px] p-8 sm:p-10" data-reveal>
            {ABOUT_PARAGRAPHS[lang].map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-[15.5px] leading-[2.05] text-ink"
                    : "mt-6 text-[14.5px] leading-[2.05] text-ink2"
                }
              >
                {p}
              </p>
            ))}
          </article>
        </div>
      </section>

      <FaqSection faqs={faqFor("about", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

export function IntroductionPage({ lang }: { lang: Locale }) {
  const facts: [string, string][] = [
    [t("公司名稱", "Company name", lang), COMPANY.name[lang]],
    [t("英文名稱", "Legal name", lang), COMPANY.nameEn],
    [t("創立年份", "Founded", lang), COMPANY.founded],
    [t("所屬集團", "Group", lang), COMPANY.group[lang]],
    [t("總部地址", "Headquarters", lang), COMPANY.address[lang]],
    [t("業務信箱", "Sales e-mail", lang), COMPANY.mail],
  ];
  return (
    <>
      <PageHero
        label={t("關於微鑽石 — Vision", "About — Vision", lang)}
        title={t("公司願景", "Company vision", lang)}
        lead={COMPANY.tagline[lang]}
        crumbs={aboutCrumbs(lang, {
          name: t("公司願景", "Vision", lang),
          href: "/introduction",
        })}
        lang={lang}
        gem={{ sides: 16, rotate: -90, palette: "ice" }}
      />

      <section className="relative pb-20 sm:pb-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <article className="glass gloss rounded-[24px] p-8 sm:p-11" data-reveal>
                {ABOUT_PARAGRAPHS[lang].map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[16px] leading-[2.1] text-ink"
                        : "mt-7 text-[14.5px] leading-[2.1] text-ink2"
                    }
                  >
                    {p}
                  </p>
                ))}
                <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-4">
                  {PROCESSES.map((p) => (
                    <div key={p.en} className="bg-white/85 px-4 py-5 text-center">
                      <dt className="text-[14.5px] font-medium tracking-[0.06em] text-ink">
                        {lang === "zh" ? p.zh : p.en}
                      </dt>
                      <dd className="label mt-1.5">{lang === "zh" ? p.en : ""}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex flex-col gap-5">
                <KeyFacts facts={KEY_FACTS.about[lang]} lang={lang} />
                <div className="panel rounded-[24px] p-7" data-reveal>
                  <p className="label">{t("公司基本資料", "Company data", lang)}</p>
                  <dl className="mt-5 flex flex-col">
                    {facts.map(([k, v]) => (
                      <div key={k} className="border-b border-ink/8 py-4 last:border-0">
                        <dt className="text-[14px] text-ink3">{k}</dt>
                        <dd className="mt-1.5 text-[14px] leading-[1.7] text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqFor("about", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

export function HistoryPage({ lang }: { lang: Locale }) {
  const total = HISTORY.reduce((n, h) => n + h.items[lang].length, 0);
  return (
    <>
      <PageHero
        label={t("關於微鑽石 — History", "About — History", lang)}
        title={t("十七年，一條產線", "Seventeen years, one production line", lang)}
        lead={t(
          `2007 年從碳化矽磨料與回收系統起步，2008 年成為全世界第四家、台灣及中國唯一成功量產鑽石線的企業。以下為 ${HISTORY.length} 個年份、共 ${total} 項發展紀錄。`,
          `Founded in 2007 on SiC abrasive and recycling; by 2008 the fourth company worldwide, and the only one in Taiwan and China, to mass-produce diamond wire. ${total} milestones across ${HISTORY.length} years.`,
          lang,
        )}
        crumbs={aboutCrumbs(lang, { name: t("歷史沿革", "History", lang), href: "/history" })}
        lang={lang}
        gem={{ sides: 9, rotate: -100, palette: "steel" }}
      />

      <section className="relative pb-6">
        <div className={WRAP}>
          <KeyFacts facts={KEY_FACTS.history[lang]} lang={lang} />
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0" data-speed="0.22">
            <div className="absolute inset-[-25%] grid-lines opacity-50" />
            <div className="prism absolute bottom-[14%] left-[6%] h-[30vw] w-[30vw] bg-[#a9dcf2] opacity-35" />
          </div>
        </div>
        <div className={WRAP}>
          <ol className="relative">
            {HISTORY.map((h, i) => (
              <li
                key={h.y}
                data-reveal
                style={{ ["--d" as string]: `${Math.min(i, 4) * 60}ms` }}
                className="tl-item group border-b border-ink/8 py-8 pl-8 last:border-0 sm:pl-10"
              >
                <div className="flex flex-wrap items-baseline gap-4">
                  <h2 className="font-mono text-[26px] font-medium tracking-tight text-ink sm:text-[30px]">
                    {h.y}
                  </h2>
                  <span className="h-px flex-1 bg-ink/8" />
                  <span className="label">
                    {h.items[lang].length} {ui("items", lang)}
                  </span>
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {h.items[lang].map((it) => (
                    <li key={it} className="flex gap-3 text-[14px] leading-[1.9] text-ink2">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-steel/50" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection faqs={faqFor("history", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

export function ManagementPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHero
        label={t("關於微鑽石 — Management Philosophy", "About — Management Philosophy", lang)}
        title={t("由「心」出發", "Management starts from the heart", lang)}
        lead={PHILOSOPHY[lang]}
        crumbs={aboutCrumbs(lang, {
          name: t("經營理念", "Management Philosophy", lang),
          href: "/management",
        })}
        lang={lang}
        gem={{ sides: 11, rotate: -84, palette: "iris" }}
      />

      <section className="relative pb-16 sm:pb-20">
        <div className={WRAP}>
          <div className="grid gap-5 lg:grid-cols-3">
            {PHILOSOPHY_PILLARS.map((p, i) => (
              <div
                key={p.en}
                data-reveal
                style={{ ["--d" as string]: `${i * 90}ms` }}
                className="glass gloss lift rounded-[24px] p-8 sm:p-10"
              >
                <p className="label">{p.en}</p>
                <h2 className="display mt-5 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
                  {p.t[lang]}
                </h2>
                <div className="prism-rule mt-4 w-8" />
                <p className="mt-6 text-[14.5px] leading-[1.95] text-ink2">{p.d[lang]}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <KeyFacts facts={KEY_FACTS.about[lang]} lang={lang} />
          </div>

          <blockquote className="panel mt-8 rounded-[24px] p-8 sm:p-12" data-reveal>
            <p className="text-[clamp(1.05rem,2.2vw,1.4rem)] leading-[1.95] text-ink">
              {t(
                "「以鑽石為企業之發展核心、由『心』出發。」",
                "“Diamond is the core of the enterprise's development; management starts from the heart.”",
                lang,
              )}
            </p>
            <footer className="mt-6 font-mono text-[14px] tracking-[0.1em] text-ink3">
              — {COMPANY.name[lang]}
            </footer>
          </blockquote>
        </div>
      </section>

      <FaqSection faqs={faqFor("about", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

export function ResponsibilityPage({ lang }: { lang: Locale }) {
  const { paragraphs, focus, rights } = RESPONSIBILITY;
  return (
    <>
      <PageHero
        label={t("關於微鑽石 — Responsibility", "About — Responsibility", lang)}
        title={t("社會責任", "Corporate social responsibility", lang)}
        lead={paragraphs[lang][0].slice(0, 120) + "…"}
        crumbs={aboutCrumbs(lang, {
          name: t("社會責任", "Responsibility", lang),
          href: "/responsibility",
        })}
        lang={lang}
        gem={{ sides: 13, rotate: -78, palette: "jade" }}
      />

      <section className="relative pb-16 sm:pb-20">
        <div className={WRAP}>
          <div className="mb-6">
            <KeyFacts facts={KEY_FACTS.about[lang]} lang={lang} />
          </div>
          <article className="glass gloss rounded-[24px] p-8 sm:p-11" data-reveal>
            {paragraphs[lang].map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-[15.5px] leading-[2.1] text-ink"
                    : "mt-7 text-[14.5px] leading-[2.1] text-ink2"
                }
              >
                {p}
              </p>
            ))}
            <div className="mt-10">
              <p className="label">{t("四大面向", "Four focus areas", lang)}</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {focus[lang].map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-steel/25 bg-white/80 px-5 py-2.5 text-[14.5px] font-medium tracking-[0.06em] text-steel"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0" data-speed="0.2">
            <div className="absolute inset-[-25%] grid-fine opacity-45" />
            <div className="prism absolute right-[10%] top-[10%] h-[28vw] w-[28vw] bg-[#cabff3] opacity-30" />
          </div>
        </div>
        <div className={WRAP}>
          <SectionHead
            label={t("人權聲明 — Human rights", "Human rights", lang)}
            title={t("微鑽石人權聲明", "MDWEC human rights statement", lang)}
            lede={rights.intro[lang]}
          />
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="panel rounded-[24px] p-8 sm:p-10" data-reveal>
                <p className="label">{t("我們的承諾", "Our commitments", lang)}</p>
                <dl className="mt-7 flex flex-col">
                  {rights.commitments.map((c) => (
                    <div
                      key={c.t.en}
                      className="border-b border-ink/8 py-5 first:pt-0 last:border-0 last:pb-0"
                    >
                      <dt className="flex items-center gap-3 text-[15.5px] font-medium text-ink">
                        <span className="h-1.5 w-1.5 rotate-45 bg-steel" />
                        {c.t[lang]}
                      </dt>
                      <dd className="mt-2.5 pl-[18px] text-[14px] leading-[1.9] text-ink2">
                        {c.d[lang]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div
                className="glass gloss h-full rounded-[24px] p-8 sm:p-10"
                data-reveal
                style={{ ["--d" as string]: "100ms" }}
              >
                <p className="label">{t("我們的行動", "Our actions", lang)}</p>
                <ul className="mt-7 flex flex-col gap-5">
                  {rights.actions[lang].map((a) => (
                    <li key={a} className="flex gap-3.5 text-[14px] leading-[1.95] text-ink2">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-steel/55" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-9 border-t border-ink/8 pt-7 text-[14px] leading-[2] text-ink2">
                  {rights.closing[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqFor("about", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

/* ============================================================
   NEWS
   ============================================================ */
export function NewsPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHero
        label={t("最新消息 — News", "News", lang)}
        title={t("最新消息", "Latest news", lang)}
        lead={t(
          "公司消息、太陽能相關與技術應用動態。",
          "Company news, solar energy and technology applications.",
          lang,
        )}
        crumbs={[crumbHome(lang), { name: t("最新消息", "News", lang), href: "/news" }]}
        lang={lang}
        gem={{ sides: 17, rotate: -88, palette: "iris" }}
      />

      <section className="relative pb-16 sm:pb-20">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-8">
              {NEWS.map((n) => (
                <article key={n.slug} data-reveal className="glass gloss lift rounded-[24px] p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-steel/25 bg-white/80 px-3 py-1 font-mono text-[14px] tracking-[0.1em] text-steel">
                      {n.category[lang]}
                    </span>
                    <span className="h-px w-6 bg-ink/15" />
                    <time dateTime={n.iso} className="font-mono text-[14px] tracking-[0.1em] text-ink3">
                      {n.date[lang]} · {n.place[lang]}
                    </time>
                  </div>
                  <h2 className="display mt-6 text-[clamp(1.4rem,3.4vw,2.2rem)] text-ink">
                    {n.title[lang]}
                  </h2>
                  <p className="mt-6 max-w-2xl text-[15px] leading-[2] text-ink2">{n.body[lang]}</p>
                </article>
              ))}
              <p className="mt-2 font-mono text-[14px] leading-relaxed text-ink3">
                {t(
                  "※ 更早期的消息正在整理中，如需特定年度的資料，歡迎來信 service@mdwec.com。",
                  "※ Earlier releases are being archived. For a specific year, email service@mdwec.com.",
                  lang,
                )}
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 flex flex-col gap-5">
                <div className="panel rounded-[24px] p-7" data-reveal>
                  <p className="label">{ui("years", lang)}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {NEWS_YEARS.map((y) => (
                      <li
                        key={y}
                        className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 font-mono text-[14px] text-ink2"
                      >
                        {y}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel rounded-[24px] p-7" data-reveal>
                  <p className="label">{ui("categories", lang)}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {NEWS_CATEGORIES[lang].map((c) => (
                      <li
                        key={c}
                        className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-[14px] text-ink2"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <KeyFacts facts={KEY_FACTS.news[lang]} lang={lang} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqFor("news", lang)} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
export function ContactPage({ lang }: { lang: Locale }) {
  const rows: { en: string; k: string; v: string; href?: string }[] = [
    { en: "Headquarters", k: ui("headquarters", lang), v: COMPANY.address[lang] },
    ...(lang === "zh"
      ? [{ en: "Address (EN)", k: "英文地址", v: COMPANY.addressEn }]
      : []),
    { en: "E-mail", k: ui("email", lang), v: COMPANY.mail, href: `mailto:${COMPANY.mail}` },
    {
      en: "Telephone",
      k: ui("telephone", lang),
      v: COMPANY.tel,
      href: `tel:${COMPANY.tel.replace(/\s/g, "")}`,
    },
    { en: "Fax", k: ui("fax", lang), v: COMPANY.fax },
    { en: "LINE", k: ui("officialLine", lang), v: "LINE", href: COMPANY.line },
  ];

  return (
    <>
      <PageHero
        label={t("聯絡我們 — Contact", "Contact us", lang)}
        title={ui("ctaTitle", lang)}
        lead={t(
          "材質、尺寸、目標厚度與產能需求 — 我們會回覆建議的機型、線徑與整套耗材配置。客製化設備與砂漿設備改機同樣歡迎詢問。",
          "Material, dimensions, target thickness and throughput — we will come back with a recommended machine, wire diameter and consumable set. Customised equipment and mortar machine upgrades are welcome too.",
          lang,
        )}
        crumbs={[crumbHome(lang), { name: ui("contactUs", lang), href: "/Contact" }]}
        lang={lang}
        gem={{ sides: 17, rotate: -88, palette: "ice" }}
      />

      <section className="relative pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0" data-speed="0.2">
            <div className="absolute inset-[-25%] grid-lines opacity-55" />
            <div className="prism absolute left-[10%] top-[14%] h-[30vw] w-[30vw] bg-[#a8d8ef] opacity-35" />
          </div>
        </div>
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="glass gloss relative h-full overflow-hidden rounded-[24px] p-8 sm:p-10" data-reveal>
                <div className="pointer-events-none absolute -right-16 -top-16 aspect-square w-52 opacity-50">
                  <FacetGem
                    uid="contact-gem"
                    sides={13}
                    rotate={-78}
                    palette={GEM_PALETTES.ice}
                    sweep={false}
                    className="h-full w-full"
                  />
                </div>
                <div className="relative">
                  <p className="label">{t("聯絡資訊", "Contact details", lang)}</p>
                  <div className="prism-rule mt-3 w-10" />
                  <address className="mt-7 not-italic">
                    <dl className="flex flex-col">
                      {rows.map((r) => (
                        <div key={r.en} className="border-b border-ink/8 py-5 last:border-0">
                          <dt className="label">{r.en}</dt>
                          <p className="mt-2 text-[14px] text-ink3">{r.k}</p>
                          <dd className="mt-1.5 font-mono text-[14px] leading-[1.7] text-ink">
                            {r.href ? (
                              <a
                                href={r.href}
                                target={r.href.startsWith("http") ? "_blank" : undefined}
                                rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-steel transition-colors hover:text-ink"
                              >
                                {r.v}
                              </a>
                            ) : (
                              r.v
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </address>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={`mailto:${COMPANY.mail}`} className="btn btn-primary">
                      <span className="sheen" aria-hidden="true" />
                      <span>{ui("emailUs", lang)}</span>
                    </a>
                    <a
                      href={COMPANY.line}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      <span>{ui("officialLine", lang)}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="panel h-full rounded-[24px] p-8 sm:p-10"
                data-reveal
                style={{ ["--d" as string]: "100ms" }}
              >
                <p className="label">{t("詢價須知", "What to send us", lang)}</p>
                <div className="prism-rule mt-3 w-10" />
                <p className="mt-6 text-[14.5px] leading-[1.95] text-ink2">
                  {t(
                    "提供以下五項資訊，我們可以在最短時間內回覆可行性、建議機型與報價方向。",
                    "With these five details we can come back quickly on feasibility, machine choice and pricing.",
                    lang,
                  )}
                </p>
                <ol className="mt-8 flex flex-col">
                  {ENQUIRY_CHECKLIST.map((c, i) => (
                    <li key={c.k.en} className="flex gap-5 border-b border-ink/8 py-5 last:border-0">
                      <span className="font-mono text-[14px] tracking-[0.1em] text-steel">
                        0{i + 1}
                      </span>
                      <div>
                        <h2 className="text-[15px] font-medium text-ink">{c.k[lang]}</h2>
                        <p className="mt-1.5 text-[14px] leading-[1.9] text-ink2">{c.v[lang]}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 border-t border-ink/8 pt-7">
                  <p className="label">{ui("affiliates", lang)}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {AFFILIATES.map((a) => (
                      <li key={a.href}>
                        <a
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[14px] text-ink2 transition-colors hover:border-steel/40 hover:text-ink"
                        >
                          {typeof a.name === "string" ? a.name : a.name[lang]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <KeyFacts facts={KEY_FACTS.contact[lang]} lang={lang} />
          </div>
        </div>
      </section>

      <FaqSection faqs={faqFor("contact", lang)} lang={lang} />
    </>
  );
}
