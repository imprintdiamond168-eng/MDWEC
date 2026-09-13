import type { Product } from "./products";
import type { Faq } from "./faq";
import type { LA, Locale, LS } from "@/lib/i18n";

/** find a spec value by matching either language of the row label */
const find = (p: Product, zhKey: string, enKey: string) =>
  p.specs
    ?.flatMap((t) => t.rows)
    .find(([label]) => label.zh.includes(zhKey) || label.en.toLowerCase().includes(enKey.toLowerCase()))?.[1];

const nameOf = (p: Product, lang: Locale) =>
  p.model ? `${p.name[lang]}（${p.model}）`.replace("（", lang === "en" ? " (" : "（").replace("）", lang === "en" ? ")" : "）") : p.name[lang];

/**
 * Question/answer pairs generated from a product's published specs.
 * Every answer repeats the product name so it stays quotable out of context.
 */
export function productFaqs(p: Product): Faq[] {
  const zh = nameOf(p, "zh");
  const en = nameOf(p, "en");
  const out: Faq[] = [];

  const pair = (qz: string, qe: string, az: string, ae: string) =>
    out.push({ q: { zh: qz, en: qe }, a: { zh: az, en: ae } });

  pair(
    `${zh}適用於什麼加工？`,
    `What is the ${en} used for?`,
    `${p.summary.zh}${p.application.zh.length ? ` ${p.application.zh.join(" ")}` : ""}`,
    `${p.summary.en}${p.application.en.length ? ` ${p.application.en.join(" ")}` : ""}`,
  );

  const work =
    find(p, "工件尺寸", "workpiece dimension") ??
    find(p, "最大產品尺寸", "max. workpiece") ??
    find(p, "工作臺尺寸", "worktable size");
  const load = find(p, "工作臺承重", "load capacity");
  if (work) {
    pair(
      `${zh}可以加工多大的工件？`,
      `What workpiece size can the ${en} handle?`,
      `${zh}的最大加工尺寸為 ${work}${load ? `，工作臺承重 ${load}` : ""}。實際可加工尺寸需一併考量工件形狀與夾持方式，建議提供工件圖面由 MDWEC 評估。`,
      `The ${en} takes workpieces up to ${work}${load ? `, with a worktable load capacity of ${load}` : ""}. The usable envelope also depends on workpiece shape and clamping, so send a drawing and MDWEC will confirm.`,
    );
  }

  const speed =
    find(p, "線速度", "wire speed") ?? find(p, "線材運行速度", "wire running speed") ?? find(p, "速度", "speed");
  const dia = find(p, "線徑", "wire diameter") ?? find(p, "金鋼砂環線直徑", "ring wire diameter");
  if (speed || dia) {
    pair(
      `${zh}的線速度與適用線徑是多少？`,
      `What wire speed and wire diameter does the ${en} use?`,
      `${zh}${speed ? `最大線速度為 ${speed}` : ""}${speed && dia ? "，" : ""}${dia ? `適用鑽石線線徑為 ${dia}` : ""}。搭配 MDWEC 自製鑽石線使用，可較傳統游離磨料製程縮短約 50% 的切割時間。`,
      `The ${en}${speed ? ` runs at up to ${speed}` : ""}${speed && dia ? " and" : ""}${dia ? ` takes diamond wire of ${dia}` : ""}. Paired with MDWEC's own diamond wire it cuts roughly 50% faster than a conventional loose-abrasive process.`,
    );
  }

  const acc = find(p, "加工精度", "machining accuracy");
  const ra = find(p, "加工表面粗糙度", "surface roughness");
  const pos = find(p, "定位精度", "positioning accuracy");
  if (acc || ra || pos) {
    const bz = [pos && `定位精度 ${pos}`, acc && `加工精度 ${acc}`, ra && `加工表面粗糙度 ${ra}`].filter(Boolean);
    const be = [
      pos && `positioning accuracy ${pos}`,
      acc && `machining accuracy ${acc}`,
      ra && `surface roughness ${ra}`,
    ].filter(Boolean);
    pair(
      `${zh}的加工精度如何？`,
      `How accurate is the ${en}?`,
      `${zh}的公開規格為${bz.join("、")}。實際精度會受材料特性、線徑與進給速度影響，以試切結果為準。`,
      `Published figures for the ${en} are ${be.join(", ")}. Actual accuracy depends on material, wire diameter and feed rate; a trial cut is definitive.`,
    );
  }

  const size =
    find(p, "設備主體尺寸", "machine dimensions") ??
    find(p, "安裝尺寸", "installation dimension") ??
    find(p, "設備尺寸", "equipment size") ??
    find(p, "尺寸", "size");
  const weight = find(p, "設備重量", "machine weight") ?? find(p, "重量", "weight");
  const power =
    find(p, "設備的功率", "power rating") ??
    find(p, "電源", "power supply") ??
    find(p, "工作電壓", "operating voltage") ??
    find(p, "電力", "utility");
  if (size || weight || power) {
    const bz = [size && `機台尺寸 ${size}`, weight && `重量 ${weight}`, power && `電力需求 ${power}`].filter(Boolean);
    const be = [
      size && `machine dimensions of ${size}`,
      weight && `a weight of ${weight}`,
      power && `a power requirement of ${power}`,
    ].filter(Boolean);
    pair(
      `${zh}的機台尺寸與廠務需求？`,
      `What are the footprint and facility requirements of the ${en}?`,
      `${zh}的${bz.join("、")}。安裝前請確認廠房承重、電力與壓縮空氣配置。`,
      `The ${en} has ${be.join(", ")}. Check floor loading, power and compressed air supply before installation.`,
    );
  }

  pair(
    `${zh}可以客製化嗎？`,
    `Can the ${en} be customised?`,
    `可以。MDWEC 提供客製化設備與物料服務，並具備砂漿切割設備改機技術，可依材料、尺寸與產能需求調整規格。詢價請提供材質、工件尺寸、目標厚度與產能需求，聯絡信箱 service@mdwec.com。`,
    `Yes. MDWEC provides customised equipment and consumables and has mortar sawing machine upgrade technology, so specifications can be adapted to your material, dimensions and throughput. To enquire, send the material, workpiece size, target thickness and volume to service@mdwec.com.`,
  );

  return out;
}

/** Short, quotable statements for a product page (GEO). */
export function productKeyFacts(p: Product): LA {
  const zh = nameOf(p, "zh");
  const en = nameOf(p, "en");
  const z: string[] = [];
  const e: string[] = [];

  const speed =
    find(p, "線速度", "wire speed") ?? find(p, "線材運行速度", "wire running speed") ?? find(p, "速度", "speed");
  const work =
    find(p, "工件尺寸", "workpiece dimension") ??
    find(p, "最大產品尺寸", "max. workpiece") ??
    find(p, "工作臺尺寸", "worktable size");
  const acc = find(p, "加工精度", "machining accuracy");
  const weight = find(p, "設備重量", "machine weight") ?? find(p, "重量", "weight");
  const dia = find(p, "線徑", "wire diameter") ?? find(p, "金鋼砂環線直徑", "ring wire diameter");

  if (work) {
    z.push(`${zh}的最大加工尺寸為 ${work}。`);
    e.push(`The ${en} takes workpieces up to ${work}.`);
  }
  if (speed) {
    z.push(`${zh}的最大線速度為 ${speed}。`);
    e.push(`The ${en} runs at a maximum wire speed of ${speed}.`);
  }
  if (dia) {
    z.push(`${zh}適用的鑽石線線徑為 ${dia}。`);
    e.push(`The ${en} uses diamond wire of ${dia}.`);
  }
  if (acc) {
    z.push(`${zh}的加工精度為 ${acc}。`);
    e.push(`The ${en} achieves a machining accuracy of ${acc}.`);
  }
  if (weight) {
    z.push(`${zh}的設備重量為 ${weight}。`);
    e.push(`The ${en} weighs ${weight}.`);
  }

  z.push(`${zh}由微鑽石線材設備有限公司（MDWEC）製造，總部位於台灣新北市三重區。`);
  e.push(
    `The ${en} is manufactured by Micron Diamond Wire & Equipment Co., Ltd. (MDWEC), based in New Taipei City, Taiwan.`,
  );

  return { zh: z, en: e };
}

/**
 * A meta description that is unique per product and carries real numbers.
 * Chinese snippets show ~70-80 characters, English ~155, so we cap at 158.
 */
export function productDescription(p: Product, lang: Locale): string {
  const name = nameOf(p, lang);
  const work =
    find(p, "工件尺寸", "workpiece dimension") ??
    find(p, "最大產品尺寸", "max. workpiece") ??
    find(p, "工作臺尺寸", "worktable size");
  const speed =
    find(p, "線速度", "wire speed") ?? find(p, "線材運行速度", "wire running speed") ?? find(p, "速度", "speed");
  const acc = find(p, "加工精度", "machining accuracy");
  const dia = find(p, "線徑", "wire diameter") ?? find(p, "金鋼砂環線直徑", "ring wire diameter");

  const bits =
    lang === "zh"
      ? [work && `最大加工尺寸 ${work}`, speed && `最大線速度 ${speed}`, dia && `線徑 ${dia}`, acc && `加工精度 ${acc}`]
      : [work && `up to ${work}`, speed && `${speed} wire speed`, dia && `wire ${dia}`, acc && `accuracy ${acc}`];

  const kept = bits.filter(Boolean).slice(0, 3) as string[];
  const head = `MDWEC ${name}${lang === "zh" ? "：" : " — "}${p.summary[lang].replace(/\s+/g, " ").trim()}`;
  const tail = kept.length ? `${lang === "zh" ? " 規格：" : " Specs: "}${kept.join(lang === "zh" ? "、" : ", ")}.` : "";
  return (head + tail).slice(0, 158);
}

/** Exported for pages that want a plain-string product title. */
export function productTitle(p: Product, lang: Locale): string {
  return nameOf(p, lang);
}

export type { LS };
