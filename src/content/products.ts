import type { LA, LS } from "@/lib/i18n";

/**
 * Product data, bilingual.
 *
 * Spec *values* are language-neutral (numbers and SI units), so only the row
 * labels carry translations. English prose is transcribed from mdwec.com.tw/en/.
 */

const S = (zh: string, en: string): LS => ({ zh, en });

export type SpecRow = [LS, string];
export type SpecTable = { title?: string; rows: SpecRow[] };

export type Product = {
  slug: string;
  href: string;
  name: LS;
  /** English product-line label, used as the eyebrow in both languages */
  line: string;
  model?: string;
  category: "equipment" | "material";
  group?: "ring";
  summary: LS;
  application: LA;
  features: LA;
  specs?: SpecTable[];
  related?: string[];
  palette: string;
  sides: number;
  rotate: number;
};

/* ============================================================
   Ring wire saws — one shared label set, ten value sets
   ============================================================ */
const RING_LABELS: LS[] = [
  S("工作臺尺寸", "Worktable size"),
  S("直線軸行程", "Linear axis travel"),
  S("最大產品尺寸", "Max. workpiece size"),
  S("工作臺承重", "Worktable load capacity"),
  S("工作臺最大轉速", "Max. worktable speed"),
  S("最大線速度", "Max. wire speed"),
  S("加工效率", "Feed rate"),
  S("金鋼砂環線直徑", "Diamond ring wire diameter"),
  S("定位精度", "Positioning accuracy"),
  S("加工精度", "Machining accuracy"),
  S("加工表面粗糙度", "Surface roughness"),
  S("金剛砂線長", "Wire loop length"),
  S("主導輪盤直徑", "Main guide wheel dia."),
  S("副導輪盤直徑", "Sub guide wheel dia."),
  S("氣缸最大推力", "Max. cylinder thrust"),
  S("觸控式螢幕大小", "Touch screen size"),
  S("設備的功率", "Power rating"),
  S("氣源壓力", "Air supply pressure"),
  S("工作電壓", "Operating voltage"),
  S("環境溫度", "Ambient temperature"),
  S("設備重量", "Machine weight"),
  S("設備主體尺寸", "Machine dimensions"),
];

const RING_FEATURES: LA = {
  zh: [
    "環線式鑽石鋸線，往覆式運轉，微電腦及 PLC 控制",
    "高速線設計，搭配 MDWEC 鑽石線，縮短 50% 工時，成本低，提高生產力",
    "可設定搖擺功能，優異的完工厚度控制及完工表面",
    "適用於高硬度、易碎材質；通用性的工作台面設計，適合廣泛形狀的工件切割應用",
    "線損低（Kerfs-off），減少下一階段的加工時間（Lapping & Polishing），可降低工時、人力及材料的損耗",
    "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
  ],
  en: [
    "Closed-loop diamond wire, reciprocating travel, microcomputer and PLC control",
    "High wire-speed design; with MDWEC diamond wire it shortens cutting time by 50%, lowers cost and raises productivity",
    "Optional rocking function for excellent thickness control and surface finish",
    "Suitable for hard and brittle materials; the versatile worktable design suits a wide range of workpiece shapes",
    "Low kerf loss reduces the following lapping and polishing stage, cutting labour, time and material waste",
    "User-friendly interface, easy to operate and maintain, long consumable life and readily available spare parts",
  ],
};

type RingSpec = {
  slug: string;
  model: string;
  name: LS;
  summary: LS;
  /** values in RING_LABELS order; "—" where the model has no such figure */
  v: string[];
  palette: string;
  sides: number;
  rotate: number;
};

const RING_DATA: RingSpec[] = [
  {
    slug: "kldj15sq",
    model: "KLDJ15SQ",
    name: S("KLDJ15S 桌面環線切割機", "KLDJ15S Benchtop Ring Wire Saw"),
    summary: S(
      "此款機型適用於小尺寸材料切割，可進行異形切割，崩邊小，噪音低，功耗低。",
      "A benchtop model for small workpieces and contour cutting, with minimal edge chipping, low noise and low power consumption.",
    ),
    v: [
      "200×150 mm", "X180×Y100 mm", "150×180×100 mm", "15 Kg", "—",
      "2,500 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.03 mm",
      "Ra ≤ 1.25", "1,210 mm", "Φ180 mm", "Φ180 mm", "500 N",
      "7″", "1.5 Kw", "—", "220V 50Hz ±10%", "10℃～30℃", "100 Kg", "640×560×1560 mm",
    ],
    palette: "ice", sides: 8, rotate: -90,
  },
  {
    slug: "kldj20sq",
    model: "KLDJ20SQ",
    name: S("KLDJ20SQ 環線切割機", "KLDJ20SQ Ring Wire Saw"),
    summary: S(
      "此款機型適用於單片材料切割，配合旋轉工作台，可進行同步旋轉切割，切片厚度可調，省時又省力。",
      "For single-piece cutting. With the rotary table it performs synchronised rotary cutting at an adjustable slice thickness, saving both time and effort.",
    ),
    v: [
      "200×280 mm", "Y250×Z250 mm", "200×250×230 mm", "50 Kg", "—",
      "2,000 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.03 mm",
      "Ra ≤ 1.25", "1,790 mm", "Φ260 mm", "Φ180 mm (2 PCS)", "377 N",
      "7″", "4 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "400 Kg", "1000×800×1850 mm",
    ],
    palette: "iris", sides: 10, rotate: -84,
  },
  {
    slug: "kldj20y",
    model: "KLDJ20Y",
    name: S("KLDJ20Y 環線切割機", "KLDJ20Y Ring Wire Saw"),
    summary: S(
      "採用環線切割，支持 G 代碼、二維圖形導入，操作簡單，張力穩定，適合各種異形件切割加工，切割效率高。",
      "Closed-loop wire cutting with G-code and 2D drawing import. Simple to operate, with stable tension and high efficiency on contoured parts.",
    ),
    v: [
      "200×280 mm", "X250×Y250 mm", "200×250×230 mm", "50 Kg", "—",
      "2,000 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.05 mm",
      "Ra ≤ 1.25", "1,790 mm", "Φ260 mm", "Φ180 mm (2 PCS)", "377 N",
      "19″", "3 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "400 Kg", "1000×800×1850 mm",
    ],
    palette: "jade", sides: 12, rotate: -78,
  },
  {
    slug: "kldj40q",
    model: "KLDJ40Q",
    name: S("KLDJ40Q 環線切割機", "KLDJ40Q Ring Wire Saw"),
    summary: S(
      "此款機型適用於單材料切割，配合旋轉工作臺，可進行同步旋轉切割，切片厚度可調，省時又省力。",
      "For single-material cutting. With the rotary table it performs synchronised rotary cutting at an adjustable slice thickness.",
    ),
    v: [
      "Φ400 mm", "Y270×Z300 mm", "Φ400×300 mm", "200 Kg", "30 RPM",
      "2,000 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.03 mm",
      "Ra ≤ 1.25", "2,180 mm", "Φ260 mm", "Φ260 mm", "377 N",
      "7″", "4 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "1,200 Kg", "1180×1200×1700 mm",
    ],
    palette: "amber", sides: 14, rotate: -72,
  },
  {
    slug: "kldj40sq",
    model: "KLDJ40SQ",
    name: S("KLDJ40SQ 環線切割機", "KLDJ40SQ Ring Wire Saw"),
    summary: S(
      "此款機型適用於小型材料切割，可疊加材料切割，可選配旋轉工作台，線弓小，不易崩邊。",
      "For small workpieces, including stacked cutting. An optional rotary table is available; wire bow is small and edge chipping minimal.",
    ),
    v: [
      "400×420 mm", "Y400×Z350 mm", "400×400×300 mm", "200 Kg", "—",
      "2,000 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.03 mm",
      "Ra ≤ 1.25", "2,650 mm", "Φ260 mm", "Φ180 mm (3 PCS)", "377 N",
      "7″", "3.5 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "1,000 Kg", "1350×1050×1850 mm",
    ],
    palette: "rose", sides: 9, rotate: -96,
  },
  {
    slug: "kldj60q",
    model: "KLDJ60Q",
    name: S("KLDJ60Q 環線切割機", "KLDJ60Q Ring Wire Saw"),
    summary: S(
      "這款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
      "For medium and large workpieces. Absolute bus encoders remove the need to home the axes at start-up; wire travel is stable and wire bow small.",
    ),
    v: [
      "Φ600 mm", "Y380×Z350 mm", "Φ600×350 mm", "300 Kg", "30 RPM",
      "2,700 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.05 mm",
      "Ra ≤ 1.25", "3,730 mm", "Φ350 mm", "Φ260 mm (3 PCS)", "377 N",
      "7″", "5 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "1,500 Kg", "1510×1680×1850 mm",
    ],
    palette: "steel", sides: 16, rotate: -66,
  },
  {
    slug: "kldj70y",
    model: "KLDJ70Y",
    name: S("KLDJ70Y 環線切割機", "KLDJ70Y Ring Wire Saw"),
    summary: S(
      "此款切割機主要用於中小型材料的切割，可進行不規則材料的加工，線弓小，不易崩邊，切片厚度可調，省時又省力。",
      "Mainly for small and medium workpieces, including irregular shapes. Small wire bow, minimal chipping and adjustable slice thickness.",
    ),
    v: [
      "800×800 mm", "X750×Y700 mm", "700×700×300 mm", "300 Kg", "—",
      "2,000 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.2 mm",
      "Ra ≤ 1.25", "4,330 mm", "Φ260 mm", "Φ260 mm (3 PCS)", "377 N",
      "19″", "5 Kw", "0.6～0.8 MPa", "380V 50Hz ±10%", "10℃～30℃", "2,000 Kg", "2370×1680×1900 mm",
    ],
    palette: "ice", sides: 11, rotate: -102,
  },
  {
    slug: "kldj100q",
    model: "KLDJ100Q",
    name: S("KLDJ100Q 環線切割機", "KLDJ100Q Ring Wire Saw"),
    summary: S(
      "此款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
      "For medium and large workpieces. Absolute bus encoders remove the need to home the axes at start-up; wire travel is stable and wire bow small.",
    ),
    v: [
      "Φ850 mm", "Y580×Z500 mm", "Φ1000×500 mm", "800 Kg", "20 RPM",
      "2,700 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.15 mm",
      "Ra ≤ 1.25", "4,620 mm", "Φ350 mm", "Φ260 mm (3 PCS)", "377 N",
      "7″", "6.5 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "2,000 Kg", "1760×2250×2000 mm",
    ],
    palette: "iris", sides: 18, rotate: -60,
  },
  {
    slug: "kldj160q",
    model: "KLDJ160Q",
    name: S("KLDJ160Q 環線切割機", "KLDJ160Q Ring Wire Saw"),
    summary: S(
      "此款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
      "For medium and large workpieces. Absolute bus encoders remove the need to home the axes at start-up; wire travel is stable and wire bow small.",
    ),
    v: [
      "Φ1400 mm", "Y900×Z600 mm", "Φ1600×600 mm", "3,000 Kg", "20 RPM",
      "2,700 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.01 mm", "≤ 0.2 mm",
      "Ra ≤ 1.25", "6,380 mm", "Φ350 mm", "Φ260 mm (3 PCS)", "377 N",
      "7″", "6.5 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "3,000 Kg", "2300×3200×2100 mm",
    ],
    palette: "jade", sides: 20, rotate: -54,
  },
  {
    slug: "kldj200q",
    model: "KLDJ200Q",
    name: S("KLDJ200Q 環線切割機", "KLDJ200Q Ring Wire Saw"),
    summary: S(
      "此款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
      "The largest model in the range, for medium and large workpieces up to Φ2000×600 mm and 5,000 kg.",
    ),
    v: [
      "Φ1700 mm", "Y1180×Z600 mm", "Φ2000×600 mm", "5,000 Kg", "10 RPM",
      "2,700 m/min", "0.1～1000 mm/min", "Φ0.35～0.8 mm", "± 0.02 mm", "≤ 0.25 mm",
      "Ra ≤ 1.25", "7,700 mm", "Φ350 mm", "Φ260 mm (3 PCS)", "377 N",
      "7″", "7.5 Kw", "0.6～0.8 MPa", "220V 50Hz ±10%", "10℃～30℃", "3,800 Kg", "2750×3950×2100 mm",
    ],
    palette: "amber", sides: 22, rotate: -48,
  },
];

/** KLDJ200Q carries an extended application block on the source site. */
const KLDJ200Q_APPLICATION: LA = {
  zh: [
    "設備用途：玉石切割、石墨材料、光伏材料、貴重金屬等材料切割。",
    "加工尺寸範圍：最大高度 600 mm、直徑 1700 mm、最大重量 5000 KG。",
    "可根據設定的切割厚度，完成不同規格厚度的切割，成片厚度最小可達 5 mm。",
    "切割效率高，切割面光潔平整。",
    "設備操作簡便，上崗培訓時間短，穩定性好，有效產能高。",
    "切割時殘餘應力小、切縫窄。",
    "具有旋轉精度高、振動小等機械特性。",
  ],
  en: [
    "Applications: jade and gemstone, graphite, photovoltaic materials and precious metals.",
    "Working envelope: max. height 600 mm, diameter 1700 mm, max. weight 5,000 kg.",
    "Cuts to a programmed thickness; minimum slice thickness 5 mm.",
    "High cutting efficiency with a clean, flat cut face.",
    "Simple to operate with short operator training, stable and productive.",
    "Low residual stress and a narrow kerf.",
    "High rotational accuracy and low vibration.",
  ],
};

export const RING_SAWS: Product[] = RING_DATA.map((m) => ({
  slug: m.slug,
  href: `/${m.model}-RingWireSaws`,
  name: m.name,
  line: "Ring Wire Cutting M/C",
  model: m.model,
  category: "equipment" as const,
  group: "ring" as const,
  summary: m.summary,
  application:
    m.slug === "kldj200q"
      ? KLDJ200Q_APPLICATION
      : { zh: [m.summary.zh], en: [m.summary.en] },
  features: RING_FEATURES,
  specs: [
    {
      rows: RING_LABELS.map((label, i) => [label, m.v[i]] as SpecRow).filter(([, v]) => v !== "—"),
    },
  ],
  related: ["coolant", "gigabond"],
  palette: m.palette,
  sides: m.sides,
  rotate: m.rotate,
}));

/* ============================================================
   Other equipment
   ============================================================ */
export const EQUIPMENT: Product[] = [
  {
    slug: "anycut",
    href: "/AnyCut",
    name: S("多功能開方機 AnyCut", "AnyCut — Squaring M/C"),
    line: "AnyCut — Squaring",
    model: "uAWS-1500",
    category: "equipment",
    summary: S(
      "AnyCut 系列線切割機結合了「單刃及多刃」自製設備的成功開發經驗與「實際切割製程的應用」，滿足了客戶在各式工件大小上的切割、截斷和開方需求。特別適用於「單／多晶矽晶棒」及「藍寶石晶棒」的多用途開方切塊加工，搭配 MDWEC 各種規格的高效能鑽石線鋸，可充分提升您對完工精度及高效產能的雙重需求。",
      "With our successful development experience in single- and multi-wire machines and in real cutting-process applications, MDWEC developed the AnyCut wire saw to meet customer requirements across different workpiece sizes in cutting and cropping — especially for mono/polycrystalline silicon and sapphire ingots. Combined with MDWEC diamond-coated saw wire it fully enhances work completion and productivity.",
    ),
    application: {
      zh: ["適用於多種高硬度易碎材料，如矽晶、石英、陶瓷、藍寶石、玻璃等材料的多用途開方切塊加工。"],
      en: [
        "This product can be applied to truncate large, irregularly-shaped, hard and brittle materials such as silicon crystal, quartz, ceramics, sapphire, glass, gallium arsenide, and so on.",
      ],
    },
    features: {
      zh: [
        "搭載 PLC 人機微電腦控制，精準掌握切割過程資訊及加工狀況",
        "往覆式運轉設計、彈性模組化的切割參數",
        "配備高線速度設計，可變換調整最佳值",
        "搭配 MDWEC 鑽石線，可縮短 50% 切割工時，降低操作成本，提高生產力",
        "泛用於高硬度易碎之材質，通用性的工作台面設計，適合廣泛的工件開方切塊應用",
        "線損低（Kerfs-off），減少下一階段的工時（Lapping & Polishing），並降低人力及材料的損耗",
        "人機介面系統溝通順暢，操作與維修簡單，耗材壽命長，更換簡單，備品取得容易",
      ],
      en: [
        "The PLC program control can accurately master the cutting processes",
        "Reciprocal wire travel direction, optional modular sawing parameters",
        "Adjustable high wire-speed design",
        "Combining with MDWEC Diamond-Coated Wire can shorten the cutting time by 50%, lower cost and enhance the productivity",
        "Suitable for slicing brittle & hard materials, the versatile working-platform design can be applied to a wide range of workpiece cutting",
        "The low kerf-loss reduces lapping & polishing time for the next stage and the waste of manpower and consumable",
        "The user-friendly computer-interfaced system is easy to operate and maintain, long consumable life, simple consumable replacement, and easy to acquire spare parts",
      ],
    },
    specs: [
      {
        title: "AnyCut (uAWS-1500)",
        rows: [
          [S("工件尺寸", "Workpiece dimension"), "Max. 500×500×300 mm"],
          [S("線材運行速度", "Wire running speed"), "Max. 600 m/min"],
          [S("導線", "Wire guide"), "Ø170 mm"],
          [S("導線數量", "Number of wire guides"), "5 sets"],
          [S("搖擺度", "Rocking degree"), "0 ~ ±7"],
          [S("Z 軸行程", "Z table stroke"), "600 mm"],
          [S("Z 軸進給", "Z in-feed rate"), "0.01 ~ 150 mm/min"],
          [S("線徑", "Wire diameter"), "Ø 0.15 ~ 0.35 mm"],
          [S("線張力", "Wire tension"), "Max. 40 N or less"],
          [S("體機容量", "Volume of the tank"), "200 L"],
          [S("安裝尺寸", "Installation dimension"), "W2000 × D2300 × H2300 mm"],
          [S("機器重量", "Machine weight"), "3,500 KG"],
        ],
      },
    ],
    related: ["coolant", "gigabond", "pulley"],
    palette: "ice",
    sides: 8,
    rotate: -90,
  },
  {
    slug: "single-wire-saws",
    href: "/SingleWireSaws",
    name: S("單刃式線切割機", "Single Wire Saws M/C"),
    line: "Single Wire Saws",
    model: "uSWS-1600 / uSWS-1700L",
    category: "equipment",
    summary: S(
      "累積多年自製設備技術開發經驗，成功開發出 uSWS-1600 單刃式截斷切割設備，適合單／多晶矽晶棒及藍寶石晶棒截斷頭尾及特殊用途的截面加工。此設備結合 MDWEC 高效能鑽石鋸線及相關切割技術可減少游離磨料的廢棄物，降低環境汙染；與傳統製程比較，能提供最佳化完工精度及高效產能。",
      "MDWEC has great experience of equipment development over the years and has developed the μSWS-1600 Single Wire Saw Machine for the front and end truncation of mono/polycrystalline silicon and sapphire ingots. Combined with MDWEC diamond-coated saw wire and related technologies, it reduces waste from abrasive lapping/polishing and environmental pollution. Compared with conventional processes it provides precise work completion and high productivity.",
    ),
    application: {
      zh: ["適用於截斷大塊形狀及多種硬脆（高硬度）材料，如矽晶、石英、陶瓷、藍寶石、玻璃、砷化鎵等材料。"],
      en: [
        "This product can be applied to truncate large, irregularly-shaped, hard and brittle materials such as silicon crystal, quartz, ceramics, sapphire, glass, gallium arsenide, and so on.",
      ],
    },
    features: {
      zh: [
        "單刃式鑽石鋸線，往覆式運轉，微電腦及 PLC 控制",
        "高速線設計，搭配 MDWEC 鑽石線，縮短 50% 工時，成本低，提高生產力",
        "可設定搖擺功能，優異的完工厚度控制及完工表面",
        "適用於高硬度、易碎材質；通用性的工作台面設計，適合廣泛形狀的工件切割應用",
        "線損低（Kerfs-off），減少下一階段的加工時間（Lapping & Polishing），可降低工時、人力及材料的損耗",
        "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
      ],
      en: [
        "Single diamond wire saw design, reciprocal wire travel direction, PLC program control",
        "High wire-speed design; combining with MDWEC Diamond-Coated Wire can shorten the cutting time by 50%, lower cost and enhance the productivity",
        "Rocking options are available for improving excellent surface completion and thickness control",
        "Suitable for slicing brittle & hard materials, the versatile working-platform design can be applied to a wide range of workpiece cutting",
        "The low kerf-loss reduces lapping & polishing time for the next stage and the waste of manpower and consumable",
        "The user-friendly computer-interfaced system is easy to operate and maintain, long consumable life, simple consumable replacement, and easy to acquire spare parts",
      ],
    },
    specs: [
      {
        title: "uSWS-1700L",
        rows: [
          [S("工件尺寸", "Workpiece dimension"), "Max. 600 (H) × 600 (W) × 400 (D)"],
          [S("線材運行速度", "Wire running speed"), "Max. 800 m/min"],
          [S("導線", "Wire guide"), "Ø163 mm"],
          [S("導線數量", "Number of wire guides"), "6 sets"],
          [S("搖擺度", "Rocking degree"), "0 ~ ±3"],
          [S("Z 軸行程", "Z table stroke"), "780 mm"],
          [S("Z 軸進給", "Z in-feed rate"), "0.01 ~ 150 mm/min"],
          [S("線徑", "Wire diameter"), "Ø 0.15 ~ 0.35 mm"],
          [S("線張力", "Wire tension"), "Max. 60 N or less"],
          [S("體機容量", "Volume of the tank"), "100 L"],
          [S("安裝尺寸", "Installation dimension"), "2620 (H) × 1700 (W) × 1050 (D)"],
          [S("機器重量", "Machine weight"), "2,500 KG"],
        ],
      },
    ],
    related: ["coolant", "gigabond", "beam", "pulley"],
    palette: "steel",
    sides: 10,
    rotate: -84,
  },
  {
    slug: "multi-wire-saws",
    href: "/MultiWireSaws",
    name: S("多刃式線切割機", "Multi Wire Saws M/C"),
    line: "Multi Wire Saws",
    model: "T-8331A",
    category: "equipment",
    summary: S(
      "鑽石線專用切割機（T-8331A），運用獨特技術並搭配鑽石線的特性，可以改善切割完工品質、比傳統機台縮短一半的切割加工時間，增加產能。",
      "MDWEC acts as an agent for the Multi Wire Saws Machine (T-8331A), a diamond-wire dedicated machine designed by Toyo Advanced Technologies Co., Ltd. Using its unique technology together with the characteristics of diamond wire, it improves cutting quality, halves the cutting time versus conventional machines and raises productivity.",
    ),
    application: {
      zh: ["應用於藍寶石、碳化矽及氮化鎵（GaN）等硬脆材料產品。"],
      en: [
        "This product can be applied to hard and brittle materials such as sapphire, silicon carbide (SiC), gallium nitride (GaN), etc.",
      ],
    },
    features: {
      zh: [
        "T-8331A 適用最大直徑為 φ6-inch 及 300 mm 長度的晶棒",
        "兩倍產能（4-inch 只需六小時，是傳統鑽石切割的一半時間）",
        "高加工精密度：TTV 10 μm、Bow 10 μm",
        "低的加工成本（Running cost）及低的鑽石線消耗（4-inch 藍寶石只需 15 m／wafer）",
        "搖擺圓柱機構結合導輪（Wire Guides）使切割硬脆材更有效益",
        "設備優異的剛性結構，讓搖擺圓柱結構更加穩固",
        "自由轉體線材管理系統使線材高速運轉時，可以維持相對的扭力、偏斜拉扯、張力平衡",
        "高速及精確的加工可靠度，可在高負荷張力下確保高線速度 1,200 m/min 及高速往復 1.5 sec 加速度／減速度切割運動",
        "可針對不同的特性來設定不同的工作條件、線速度、搖擺速度、搖擺角度等",
        "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
      ],
      en: [
        "T-8331A is applied to cut up to φ6-inch and 300 mm length ingots",
        "Double productivity (φ4-inch only needs 6 hours)",
        "High-precision processing of TTV 10 μm and Bow 10 μm",
        "Low running cost and wire consumption (15 m/wafer for φ4-inch sapphire ingot)",
        "The rocking column mechanism holding the wire guides is more effective for cutting hard and brittle materials",
        "Excellent rigid structure keeps the rocking column mechanism more stable",
        "Twist-free wire management system maintains wire torque, skewing balance and tension control at high speed",
        "High-speed and accurate process assures 1,200 m/min wire speed and 1.5 sec reciprocating acceleration/deceleration under heavy-loaded tension",
        "The integrated cutting position can be set by different work conditions, such as wire speed, rocking speed and angle",
        "The user-friendly computer-interfaced system is easy to operate and maintain",
      ],
    },
    specs: [
      {
        title: "T-8331A",
        rows: [
          [S("工件尺寸", "Workpiece dimension"), "Max. 600 (H) × 600 (W) × 400 (D)"],
          [S("線材運行速度", "Wire running speed"), "Max. 1,200 m/min"],
          [S("導線", "Wire guide"), "Ø170 mm"],
          [S("導線數量", "Number of wire guides"), "Single wire"],
          [S("搖擺度", "Rocking degree"), "± 3"],
          [S("Z 軸行程", "Z table stroke"), "600 mm"],
          [S("Z 軸進給", "Z in-feed rate"), "0.01 ~ 150 mm/min"],
          [S("線徑", "Wire diameter"), "Ø 0.15 ~ 0.42 mm"],
          [S("線張力", "Wire tension"), "Max. 60 N or less"],
          [S("體機容量", "Volume of the tank"), "200 L"],
          [S("安裝尺寸", "Installation dimension"), "W2387 × D2330 × H1412 mm"],
          [S("機器重量", "Machine weight"), "2,800 KG"],
        ],
      },
    ],
    related: ["coolant", "gigabond", "pulley"],
    palette: "iris",
    sides: 13,
    rotate: -78,
  },
  {
    slug: "dicing-saws",
    href: "/DicingSaws",
    name: S("晶粒切割機", "Wafer Dicing Saws"),
    line: "Dicing Saws",
    model: "MDS-68A",
    category: "equipment",
    summary: S(
      "特別開發針對第三類半導體、陶瓷等脆硬材料之 4~8 吋晶圓，提供良好切割端面及效率的晶粒切割加工設備。2024 年取得台灣新型專利，同時申請日、韓專利。",
      "Specially developed for cutting 4 to 8 inch wafers of brittle and hard materials such as wide band gap semiconductors and ceramics, this equipment provides excellent cutting edges and efficient grain cutting. Utility model patent granted in Taiwan in 2024, with applications filed in Japan and Korea.",
    ),
    application: {
      zh: [
        "特別開發針對第三類半導體、陶瓷等脆硬材料之 4~8 吋晶圓，提供良好切割端面及效率的晶粒切割加工設備。",
        "Dicing Saw 鋸片 — 螢光陶瓷片；MDS-68A 鋸片 — 螢光陶瓷片。",
      ],
      en: [
        "Specially developed for cutting 4 to 8 inch wafers of brittle and hard materials such as wide band gap semiconductors and ceramics.",
        "Dicing Saw Blade — fluorescent ceramic blade; MDS-68A Blade — fluorescent ceramic blade.",
      ],
    },
    features: {
      zh: [
        "單刃式鑽石鋸線，往覆式運轉，微電腦及 PLC 控制",
        "高速線設計，搭配 MDWEC 鑽石線，縮短 50% 工時，成本低，提高生產力",
        "可設定搖擺功能，優異的完工厚度控制及完工表面",
        "適用於高硬度、易碎材質；通用性的工作台面設計，適合廣泛形狀的工件切割應用",
        "線損低（Kerfs-off），減少下一階段的加工時間（Lapping & Polishing）",
        "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
      ],
      en: [
        "Single-edge diamond wire saw with reciprocating operation, controlled by microcomputer and PLC",
        "High-speed wire design paired with MDWEC diamond wire, reducing processing time by 50%, lowering costs and boosting productivity",
        "Oscillation function can be set for superior control of finished thickness and surface quality",
        "Suitable for high-hardness, brittle materials; versatile worktable design allows cutting a wide variety of workpiece shapes",
        "Low wire loss (kerf-off), minimising subsequent lapping and polishing time and reducing labour, time and material waste",
        "User-friendly interface ensures smooth operation, simple maintenance, long consumable lifespan and easy access to replacement parts",
      ],
    },
    specs: [
      {
        title: "Equipment",
        rows: [
          [S("型號", "Model No."), "MDS-68A Wafer Dicing Saws"],
          [S("尺寸", "Size"), "1500 (L) × 1800 (W) × 1750 (H) mm"],
          [S("重量", "Weight"), "2,000 kg (approx.)"],
        ],
      },
      {
        title: "Diamond Wire",
        rows: [
          [S("線速度", "Wire speed"), "2,000 meter/min. (max.)"],
          [S("儲線量", "Wire storage / length"), "8 ~ 20 km (diameter dependent)"],
          [S("張力控制", "Tension"), "5 ~ 20 N"],
          [S("線徑", "Diameter"), "0.08 ~ 0.15 mm"],
        ],
      },
      {
        title: "Dicing Parameter",
        rows: [
          [S("切割模式", "Cutting mode"), "Forward / Backward"],
          [S("工件厚度", "Thickness of workpiece"), "0.1 mm (min.) ~ 10 mm (max.)"],
          [S("工件尺寸", "Size of workpiece"), "1 ~ 203.2 mm (8″ wafer)"],
          [S("CCD 對位精度", "CCD alignment accuracy"), "± 0.01 mm"],
          [S("旋轉精度", "Rotary accuracy"), "± 0.01 mm"],
        ],
      },
      {
        title: "Facility",
        rows: [
          [S("電力", "Electric power"), "220V, 50/60 Hz, 3 phase"],
          [S("空壓氣體", "CDA"), "0.4 ~ 0.6 MPa"],
          [S("耗氣量", "Air consumption"), "100 Liter/min (approx.)"],
          [S("切割液／冷卻水", "Coolant"), "DI water / water, adjusted to cutting quality"],
        ],
      },
    ],
    related: ["coolant", "gigabond", "diamond-wire"],
    palette: "jade",
    sides: 15,
    rotate: -72,
  },
  {
    slug: "g-power",
    href: "/G-Power",
    name: S("固液分離機 G-Power", "G-Power — Solid/Liquid Separator"),
    line: "G-Power",
    model: "UST-3100 / UST-3200",
    category: "equipment",
    summary: S(
      "為物理分離裝置，主要利用離心力及比重差異過濾並分離固體（顆粒）及液體，尤其適合在線切割製程上，它能提升切割效益與完工品質、降低線損、延長冷卻潤滑油和線材的使用壽命、減少設備故障、減少環境汙染及人力維護的成本。",
      "G-Power is a physical separation apparatus that uses centrifugal force and specific density difference to filter and separate solids (particles) from liquid. It is especially suitable for wire-cutting processes as it enhances cutting efficiency and completion quality, extends coolant/lubricant usage life, reduces wire wear, equipment down-time and environmental pollution, and controls maintenance cost.",
    ),
    application: {
      zh: ["適用在相關機械加工過程中，需要分離出排屑物以保持冷卻潤滑油的效益。"],
      en: [
        "G-Power can be applied to machining processes where cutting residues must be separated to maintain coolant/lubricant effectiveness.",
      ],
    },
    features: {
      zh: [
        "搭配切割研磨等循環箱使用，可降低表面磨料阻塞（增加自銳性），增加鑽石線及工具的壽命與效益",
        "特殊分離裝置，可以濾除大部分切屑顆粒",
        "分離後的淤泥殘渣，可輕易被移除",
        "提升加工環境整潔、避免管路阻塞",
        "適用廣泛性的油性或水性切削液",
      ],
      en: [
        "Combined with the circulation tank of cutting and grinding machines it reduces surface abrasive blocking (increasing diamond self-sharpening) and extends wire and tool life",
        "The special separating installation can filter most of the residues",
        "After separation, the residues can be easily removed",
        "Improves operating cleanliness and avoids pipeline clogging",
        "Can be applied to oil-based or water-based cutting fluids",
      ],
    },
    specs: [
      {
        title: "UST-3100",
        rows: [
          [S("轉速", "Rotating speed R.P.M."), "3,100"],
          [S("最大流量", "Maximum flow"), "100 L/min"],
          [S("電源", "Power supply"), "AC 220V / 3 phase / 30A"],
          [S("操作", "Operation"), "Touch screen"],
          [S("設備尺寸", "Equipment size"), "650 (W) × 1380 (D) × 1768 (H) mm"],
          [S("重量", "Weight"), "600 Kg"],
          [S("氣動", "Pneumatic"), "5 Kgf/cm²"],
          [S("泥漿箱", "Slurry tank"), "140 L"],
          [S("重力", "Gravity"), "1,500"],
        ],
      },
      {
        title: "UST-3200",
        rows: [
          [S("轉速", "Rotating speed R.P.M."), "3,100"],
          [S("最大流量", "Maximum flow"), "200 L/min"],
          [S("電源", "Power supply"), "AC 220V / 3 phase / 30A"],
          [S("操作", "Operation"), "Touch screen"],
          [S("設備尺寸", "Equipment size"), "890 (W) × 1550 (D) × 2300 (H) mm"],
          [S("重量", "Weight"), "790 Kg"],
          [S("氣動", "Pneumatic"), "5 Kgf/cm²"],
          [S("泥漿箱", "Slurry tank"), "149 L"],
          [S("重力", "Gravity"), "2,000"],
        ],
      },
    ],
    related: ["coolant", "gigabond"],
    palette: "rose",
    sides: 11,
    rotate: -66,
  },
  {
    slug: "coiling-machine",
    href: "/MWD-1205",
    name: S("精密盤線機", "Wire Winding Machine"),
    line: "Wire Winding Machine",
    model: "MWD-1205",
    category: "equipment",
    summary: S(
      "微鑽石累積多年自製設備技術開發經驗，成功開發出 MWD-1205 一對多精密盤線設備，適用於多種線軸盤線需求，依客戶張力、線距（pitch）需求，以程式化排線精準控制，操作簡易，大大提升線軸周轉效益與縮短生產時間。可依客戶需求制訂特殊規格。",
      "MDWEC has great experience of equipment development over the years and has developed the MWD-1205 Wire Winding Machine for various wire spool winding purposes. According to the customer's requirement of wire tension and wire pitch, this machine has a programmable wire rolling system to accurately control the winding process. It is easy to operate, enhances spool turnover efficiency and shortens production time. The machine can be customised.",
    ),
    application: {
      zh: ["主要應用於盤整鑽石線成品，將成品線整理在各款尺寸線軸上。"],
      en: [
        "This machine is mainly used in consolidating and winding the diamond wire products on different sizes of wire spools.",
      ],
    },
    features: {
      zh: [
        "人性化：操作介面簡單，參數及設定一目了然，不需額外的矯正作業即可作業",
        "標準化：具備多組記憶，可記憶多組線軸規格參數，操作方便可直接選用，毋須重新設定",
        "程式化：經由參數設定後，啟動程式運算來自動化排線，不須額外再調整",
        "彈性化：可依客戶需求調整盤線張力，導輪與治具更換容易，備品取得容易",
      ],
      en: [
        "User-friendly: simple interface, parameters and settings clearly at a glance, operable without additional adjustment",
        "Standardisation: multiple memory sets store spool specifications for direct recall without re-setting",
        "Programmability: after setting parameters the machine winds automatically without further adjustment",
        "Flexibility: winding tension adjustable to requirement, easy pulley and fixture changes, readily available spare parts",
      ],
    },
    specs: [
      {
        title: "MWD-1205",
        rows: [
          [S("材料", "Material"), "High carbon wire"],
          [S("線徑", "Wire dia."), "Ø 0.087 ~ 0.42 mm"],
          [S("速度", "Speed"), "Max. 800 m/min；working 200 ~ 700 m/min"],
          [S("張力", "Tension"), "6 N ~ 50 N"],
          [S("線距", "Pitch"), "0.21 ~ 1.5 mm"],
          [S("梭型", "Bobbin type"), "TA100 / MB80 / 安永 / PV-500D / T8252B / MB50"],
          [S("電力", "Utility"), "AC 3P 220V 50/60 Hz；control AC 1P 220V 60 Hz；air 6 KG/CM²"],
          [S("尺寸", "Size"), "1930 × 1440 × 1830 mm"],
          [S("重量", "Weight"), "2,600 KG"],
        ],
      },
    ],
    related: ["diamond-wire"],
    palette: "amber",
    sides: 20,
    rotate: -60,
  },
];

/* ============================================================
   Materials
   ============================================================ */
export const MATERIALS: Product[] = [
  {
    slug: "diamond-wire",
    href: "/DiamondWire",
    name: S("鑽石線", "Diamond Wire"),
    line: "Diamond Coating Wire",
    category: "material",
    summary: S(
      "微鑽石成功整合鑽石磨料製造與應用經驗，結合本公司獨特的 EP 電著技術（Willeock®）與 RB 高分子膠連技術（Fransteyen®），製造出優異的電鍍鑽石線（EP diamond wires）及樹脂鑽石線（RB diamond wires），在業界應用中，展現傑出的切削效率、良好的完工品質與具成本競爭力的加工應用。",
      "MDWEC has more than 20 years of experience in the manufacture and application of super hard abrasives. With the unique techniques of electroplating (Willeock®) and polymer glue (Fransteyen®), we have successfully developed excellent diamond wire that displays outstanding cutting and slicing performance, perfect completion quality and highly competitive new applications.",
    ),
    application: {
      zh: [
        "適用各式材料，如藍寶石（Sapphire）晶棒、矽晶棒（單晶／多晶）、玻璃、精密陶瓷、石英、水晶、人造寶石晶體等材料。",
      ],
      en: [
        "This product can be applied to various materials such as Sapphire Ingot, Silicon Ingot (mono/poly), Precision Glass Ceramic, Quartz, Crystal, Synthetic Crystal, etc.",
      ],
    },
    features: {
      zh: [
        "良好的線徑控制、線材的外形均一",
        "傑出的線材張力與強度",
        "優異的切割效率",
        "相比傳統加工方式，縮短 50% 的切割時間",
        "加工精準度與完工表面佳",
        "可搭配各種不同設備應用",
      ],
      en: [
        "Good wire diameter control and uniform appearance",
        "Outstanding wire strength and tension technology",
        "Excellent cutting ability",
        "Compared to the conventional process, it reduces 50% of cutting time",
        "Good machining accuracy and surface completion",
        "Can be used with various device applications",
      ],
    },
    related: ["single-wire-saws", "multi-wire-saws", "gigabond", "coolant"],
    palette: "ice",
    sides: 14,
    rotate: -90,
  },
  {
    slug: "coolant",
    href: "/Coolant",
    name: S("鑽石線切割用冷卻液", "Diamond Coolant"),
    line: "Dia-Coolant · DWS Series",
    category: "material",
    summary: S(
      "DWS 系列是專為線切割加工所研發之冷卻液，可有效滲入切削區降低切割工件時因熱產生之阻抗，並提升切削率及改善切割表面，能確實降低工件翹曲。此款水性冷卻切削液具有良好的生物分解作用，不會造成環境污染及額外廢水處理負擔。",
      "The DWS series is developed for abrasive wire sawing. It efficiently penetrates the cutting area to reduce the resistance from heat generated during cutting, improves the cutting rate and surface completion, and effectively avoids workpiece warping. It features good biological decomposition and will not cause environmental pollution or wastewater treatment costs.",
    ),
    application: {
      zh: [
        "應用的加工領域為單／多晶矽晶棒切割、砷化鎵晶棒切割、玻璃石英晶棒切割，及其他硬脆材料切割皆可使用。",
      ],
      en: [
        "This product can be applied to hard and brittle materials cutting such as Silicon Ingot (mono/poly), Gallium Arsenide, Glass and Quartz.",
      ],
    },
    features: {
      zh: [
        "優異滲入性",
        "有效提升工件表面品質",
        "濃縮液（3~5%）",
        "用清水清洗即可，水性清潔性強",
        "有效延長鑽石線壽命",
        "無刺鼻味",
      ],
      en: [
        "Good penetration properties",
        "Effectively improves workpiece surface quality",
        "Concentrated solution (3 ~ 5%)",
        "Can be cleaned with water, good waterborne cleaning",
        "Effectively extends diamond wire service life",
        "No pungent smell",
      ],
    },
    specs: [
      {
        title: "Packaging",
        rows: [
          [S("小桶", "Small pail"), "5 Gallon / Pail"],
          [S("中桶", "Medium pail"), "10 Gallon / Pail"],
          [S("大桶", "Bulk"), "1 Ton / Pail"],
        ],
      },
    ],
    related: ["diamond-wire", "g-power", "pulley"],
    palette: "jade",
    sides: 12,
    rotate: -84,
  },
  {
    slug: "gigabond",
    href: "/GigaBond",
    name: S("GigaBond A/B 膠", "GigaBond Epoxy Adhesives"),
    line: "Epoxy Adhesives",
    category: "material",
    summary: S(
      "GigaBond 是兩液混合型之環氧化物接著劑，分別由樹脂（A）劑及硬化（B）劑所組成，具有不易燃特性。GigaBond 可以在短時間內膠合工件，硬化後立即上機開始加工，後續製程脫膠部分，在溫熱水中做分離作業即可。",
      "GigaBond is a two-part epoxy adhesive consisting of a resin (A) and a hardener (B), and is non-flammable. It bonds workpieces in a short time and the assembly can go straight onto the machine after curing; de-bonding is simply a matter of separation in warm water.",
    ),
    application: {
      zh: ["本產品特別適用於半導體、水晶、瓷器、磁性材料之棒材（Ingot）及塊材（Block）的切斷加工。"],
      en: [
        "This product is especially suitable for cutting ingots and blocks of semiconductor, crystal, porcelain and magnetic materials.",
      ],
    },
    features: {
      zh: [
        "優異的抓著力與強度",
        "快速硬化",
        "使用熱水即可脫膠，無需使用溶劑或烘烤進行脫膠",
        "容易混合（重量比 A : B = 2 : 1）",
        "適合大面積黏貼作業",
        "不自燃、無惡臭、無添加任何金屬成分",
        "可依客戶需求訂做客製化產品",
      ],
      en: [
        "Excellent adhesion and strength",
        "Fast curing",
        "De-bonds in hot water — no solvent or baking required",
        "Easy to mix (weight ratio A : B = 2 : 1)",
        "Suitable for large-area bonding",
        "Non-flammable, odourless, contains no metallic components",
        "Can be customised to customer requirements",
      ],
    },
    specs: [
      {
        title: "GigaBond V1 / V7",
        rows: [
          [S("黏度 cps (25°C)", "Viscosity cps (25°C)"), "V1 — A 165,000 ±15,000 / B 42,000 ±7,000　|　V7 — A 25,000 ±5,000 / B 25,000 ±5,000"],
          [S("外觀", "Appearance"), "A reddish brown / B white"],
          [S("凝膠時間", "Gel time"), "V1 3~5 min　|　V7 5~8 min"],
          [S("黏結強度", "Bond strength"), "V1 80 kg/cm² after 0.5 h　|　V7 100 kg/cm² after 2 h"],
          [S("最大強度", "Max. strength"), "V1 100 kg/cm² after 1 h　|　V7 200 kg/cm² after 6 h"],
          [S("硬度", "Hardness"), "85 ± 5D"],
          [S("混合比例", "Mixing ratio"), "A : B = 1 : 1"],
          [S("應用", "Application"), "Sapphire slicing, fixture bonding"],
          [S("脫膠", "De-bonding"), "70°C hot water / 200°C baking"],
          [S("脫膠時間", "De-bonding time"), "10 min / 30 min"],
          [S("包裝", "Packaging"), "A : 1KG / B : 1KG"],
        ],
      },
      {
        title: "GigaBond V9",
        rows: [
          [S("黏度 cps (25°C)", "Viscosity cps (25°C)"), "A 150,000 ±15,000 / B 50,000 ±10,000"],
          [S("外觀", "Appearance"), "A reddish brown / B white"],
          [S("凝膠時間", "Gel time"), "3 ~ 7 min"],
          [S("黏結強度", "Bond strength"), "100 kg/cm² after 2 h"],
          [S("最大強度", "Max. strength"), "150 kg/cm² after 4 h"],
          [S("硬度", "Hardness"), "85 ± 5D"],
          [S("混合比例", "Mixing ratio"), "A : B = 1 : 1"],
          [S("應用", "Application"), "Sapphire slicing, fixture bonding"],
          [S("脫膠", "De-bonding"), "70°C hot water / 200°C baking"],
          [S("脫膠時間", "De-bonding time"), "20 min / 30 min"],
          [S("包裝", "Packaging"), "A : 1KG / B : 1KG"],
        ],
      },
      {
        title: "GigaBond S4 / S7",
        rows: [
          [S("黏度 cps (25°C)", "Viscosity cps (25°C)"), "S4 — A 70,000 ±10,000 / B 16,000 ±5,000　|　S7 — A 20,000 ±5,000 / B 3,000 ±1,000"],
          [S("外觀", "Appearance"), "A reddish brown / B milky white"],
          [S("凝膠時間", "Gel time"), "S4 20 min　|　S7 10 min"],
          [S("黏結強度", "Bond strength"), "200 kg/cm² after 2 h"],
          [S("最大強度", "Max. strength"), "240 kg/cm² after 6 h"],
          [S("硬度", "Hardness"), "85 ± 5D"],
          [S("混合比例", "Mixing ratio"), "A : B = 2 : 1"],
          [S("應用", "Application"), "Silicon slicing"],
          [S("脫膠", "De-bonding"), "75°C hot water"],
          [S("脫膠時間", "De-bonding time"), "15 min"],
          [S("包裝", "Packaging"), "A : 1KG / B : 0.5KG"],
        ],
      },
    ],
    related: ["single-wire-saws", "multi-wire-saws", "coolant", "beam"],
    palette: "amber",
    sides: 9,
    rotate: -96,
  },
  {
    slug: "beam",
    href: "/Beam",
    name: S("犧牲材", "Beam"),
    line: "Sacrificial Beam",
    category: "material",
    summary: S(
      "提升各種晶棒切割工藝的效率，以及用於保持晶棒固定的樹脂板底座等。搭配微鑽石開發的 AB 雙劑型環氧樹脂膠提供良好的固定，我司提供一整套適用於此工藝的優秀產品。",
      "Enhancing the efficiency of various crystal rod cutting techniques, including resin plate bases used for securing the crystal rods. Paired with the MDWEC-developed A/B two-component epoxy resin glue, it offers excellent fixation. Our company provides a complete set of high-quality products suitable for this process.",
    ),
    application: {
      zh: [
        "應用的加工領域為單、多晶矽晶棒切割、氮化鋁晶棒切割、碳化矽、石英晶棒切割，及其他硬脆材料切割時皆可使用。",
      ],
      en: [
        "This technology can be applied to the cutting of monocrystalline and polycrystalline silicon rods, aluminium nitride rods, silicon carbide, quartz rods, and other hard and brittle materials.",
      ],
    },
    features: {
      zh: [
        "提升各種晶棒切割工藝的效率",
        "用於保持晶棒固定的樹脂板底座",
        "搭配 GigaBond AB 雙劑型環氧樹脂膠，提供良好的固定",
      ],
      en: [
        "Enhances the efficiency of crystal rod cutting processes",
        "Resin plate base used for securing crystal rods",
        "Paired with GigaBond A/B two-component epoxy for excellent fixation",
      ],
    },
    related: ["single-wire-saws", "multi-wire-saws", "gigabond", "coolant"],
    palette: "steel",
    sides: 7,
    rotate: -102,
  },
  {
    slug: "pulley",
    href: "/Pulley",
    name: S("耐磨耗導輪", "Pulley"),
    line: "Dia-Pulley",
    category: "material",
    summary: S(
      "針對各種鑽石線切割機開發耐磨耗導輪（Dia-Pulley），材質特性具有耐磨耗、耐化學腐蝕、抗張強度高、耐高壓荷重、吸震性強、可保持切割製程中高程載機械運作及減震緩衝等良好特性。",
      "MDWEC developed the Dia-Pulley for a variety of diamond wire sawing and abrasion applications. It features abrasion resistance, chemical resistance, high tensile strength, high pressure load capacity and strong vibration absorption, maintaining high-load machinery operation and excellent buffering and damping during the cutting process.",
    ),
    application: {
      zh: ["可應用於切割製程中之鑽石線導輪。"],
      en: ["This product can be applied as the diamond wire guide pulley in the cutting process."],
    },
    features: {
      zh: [
        "使用高分子聚乙烯",
        "可使用延長 20% 以上壽命",
        "降低工件材料線損",
        "降低鑽石線因導輪磨耗所造成的斷線頻率",
        "降低導輪更換頻率",
        "提高切割機生產產能",
      ],
      en: [
        "Contains high molecular weight polyethylene",
        "Improves service life by more than 20% for diamond wire applications",
        "Reduces material loss",
        "Reduces wire break frequency caused by pulley wear and damage",
        "Reduces pulley replacement frequency",
        "Improves the capacity of wire saws",
      ],
    },
    specs: [
      {
        title: "Specification",
        rows: [
          [S("尺寸規格", "Specifications & size"), "Customisable to requirement / 可依客戶需求訂製"],
        ],
      },
    ],
    related: ["single-wire-saws", "multi-wire-saws", "coolant"],
    palette: "iris",
    sides: 16,
    rotate: -78,
  },
];

export const ALL_PRODUCTS: Product[] = [...EQUIPMENT, ...RING_SAWS, ...MATERIALS];

export function findProduct(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

/** Wire diameter tables — Chinese and English application labels */
export const WIRE_EP: [string, string, LS][] = [
  ["Ø 420 μm", "Core Ø 350 μm", S("截斷", "Cropping")],
  ["Ø 350 μm", "Core Ø 250 μm", S("開方", "Squaring")],
  ["Ø 250 μm", "Core Ø 180 μm", S("切片", "Slicing")],
  ["Ø 200 μm", "Core Ø 160 μm", S("切片", "Slicing")],
  ["Ø 150 μm", "Core Ø 120 μm", S("切片", "Slicing")],
  ["Ø 140 μm", "Core Ø 120 μm", S("切片", "Slicing")],
  ["Ø 130 μm", "Core Ø 110 μm", S("切片", "Slicing")],
  ["Ø 120 μm", "Core Ø 100 μm", S("切片", "Slicing")],
  ["Ø 110 μm", "Core Ø 90 μm", S("切片", "Slicing")],
  ["Ø 100 μm", "Core Ø 80 μm", S("切片", "Slicing")],
];

export const WIRE_RB: [string, string, LS][] = [
  ["Ø 250 μm", "Core Ø 180 μm", S("切片", "Slicing")],
  ["Ø 145 μm", "Core Ø 120 μm", S("切片", "Slicing")],
  ["Ø 135 μm", "Core Ø 110 μm", S("切片", "Slicing")],
  ["Ø 125 μm", "Core Ø 100 μm", S("切片", "Slicing")],
];

export const OEM: { no: string; name: LS; line: string; body: LS; materials: LS; href: string }[] = [
  {
    no: "01",
    name: S("晶棒截斷機", "Ingot Cropping"),
    line: "Single Wire Saws",
    body: S(
      "截斷大塊形狀及多種硬脆（高硬度）材料加工成所需尺寸。",
      "Truncating large, irregularly-shaped, hard and brittle materials down to the required size.",
    ),
    materials: S(
      "矽晶、石英、陶瓷、藍寶石、SiC、玻璃、砷化鎵等材料晶棒。",
      "Silicon crystal, quartz, ceramics, sapphire, SiC, glass and gallium arsenide ingots.",
    ),
    href: "/SingleWireSaws",
  },
  {
    no: "02",
    name: S("晶棒切片機", "Ingot Slicing"),
    line: "Multi Wire Saws",
    body: S(
      "可將 2~15 吋產品晶棒切割成多片或薄片。",
      "Slicing 2 to 15 inch ingots into multiple wafers or thin sheets.",
    ),
    materials: S(
      "矽晶、石英、SiC、AlN、陶瓷、PIG／PIC 等。",
      "Silicon, quartz, SiC, AlN, ceramics, PIG / PIC and similar materials.",
    ),
    href: "/MultiWireSaws",
  },
  {
    no: "03",
    name: S("晶粒切割機", "Wafer Dicing"),
    line: "Wafer Dicing Saws",
    body: S(
      "特別開發針對第三類半導體、陶瓷等脆硬材料之 4~8 吋晶圓，提供良好切割端面及效率的晶粒切割加工設備。台／中國／日／韓專利註冊。",
      "Specially developed for cutting 4 to 8 inch wafers of brittle and hard materials such as wide band gap semiconductors and ceramics, providing excellent cutting edges and efficient grain cutting. Patent registration in Taiwan / China / Japan / Korea.",
    ),
    materials: S(
      "第三類半導體、陶瓷、螢光陶瓷片等 4~8 吋晶圓。",
      "Wide band gap semiconductors, ceramics and fluorescent ceramic wafers, 4 to 8 inch.",
    ),
    href: "/DicingSaws",
  },
];

export const OEM_STEPS: { no: string; t: LS; d: LS }[] = [
  {
    no: "01",
    t: S("提供需求", "Send your requirement"),
    d: S(
      "材質、工件尺寸與重量、目標厚度、數量或月產能。",
      "Material, workpiece size and weight, target thickness, quantity or monthly volume.",
    ),
  },
  {
    no: "02",
    t: S("製程評估", "Process assessment"),
    d: S(
      "MDWEC 評估可行性，回覆建議機型、線徑與耗材配置。",
      "MDWEC assesses feasibility and recommends a machine, wire diameter and consumable set.",
    ),
  },
  {
    no: "03",
    t: S("試切", "Trial cut"),
    d: S(
      "小批量試切，確認切面品質、厚度公差與良率。",
      "A small trial run confirms cut quality, thickness tolerance and yield.",
    ),
  },
  {
    no: "04",
    t: S("量產", "Production"),
    d: S(
      "確認條件後排程量產，並可討論設備採購或改機方案。",
      "Once conditions are agreed we schedule production, and can discuss equipment purchase or machine upgrades.",
    ),
  },
];
