import { WIRE_EP, WIRE_RB } from "@/content/products";
import type { LS, Locale } from "@/lib/i18n";
import { SectionHead } from "./Primitives";

type Row = [string, string, LS];

function Table({
  title,
  en,
  rows,
  lang,
}: {
  title: string;
  en: string;
  rows: Row[];
  lang: Locale;
}) {
  const head =
    lang === "zh"
      ? ["線徑 Diameter", "線芯 Core", "應用 Application"]
      : ["Diameter", "Core", "Application"];
  return (
    <div className="panel overflow-hidden rounded-[24px]" data-reveal>
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/8 px-7 py-5">
        <h3 className="text-[16px] font-medium tracking-[0.04em] text-ink">{title}</h3>
        <p className="font-mono text-[14px] tracking-[0.1em] text-steel">{en}</p>
      </div>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{`${title} ${en}`}</caption>
        <thead>
          <tr className="border-b border-ink/8">
            {head.map((h) => (
              <th key={h} scope="col" className="label px-7 py-3 text-[14px] font-normal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="spec-row border-b border-ink/6 last:border-0">
              <th
                scope="row"
                className="px-7 py-3.5 text-left font-mono text-[14px] font-normal text-ink"
              >
                {r[0]}
              </th>
              <td className="px-7 py-3.5 font-mono text-[14px] text-ink2">{r[1]}</td>
              <td className="px-7 py-3.5 text-[14px] text-ink2">{r[2][lang]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WireSpecTables({ lang }: { lang: Locale }) {
  return (
    <section className="relative pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          label={lang === "zh" ? "Specifications — 線徑規格" : "Specifications"}
          title={lang === "zh" ? "鑽石線線徑對照表" : "Diamond wire diameter table"}
          lede={
            lang === "zh"
              ? "電鍍鑽石線（EP）共十種線徑，涵蓋截斷、開方與切片；樹脂鑽石線（RB）共四種，專用於切片。"
              : "Electroplated (EP) wire covers ten diameters for cropping, squaring and slicing; resin-bond (RB) wire covers four diameters for slicing."
          }
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <Table
            title={lang === "zh" ? "電鍍鑽石線" : "EP Diamond Wire"}
            en="Willeock®"
            rows={WIRE_EP}
            lang={lang}
          />
          <Table
            title={lang === "zh" ? "樹脂鑽石線" : "RB Diamond Wire"}
            en="Fransteyen®"
            rows={WIRE_RB}
            lang={lang}
          />
        </div>
        <p className="mt-6 font-mono text-[14px] leading-relaxed text-ink3">
          {lang === "zh"
            ? "※ 線徑規格可依製程需求客製。Willeock® 為 MDWEC 自有 EP 電著技術，Fransteyen® 為 RB 高分子膠連技術。"
            : "※ Diameters can be customised to your process. Willeock® is MDWEC's own electroplating technique; Fransteyen® its polymer bonding technique."}
        </p>
      </div>
    </section>
  );
}
