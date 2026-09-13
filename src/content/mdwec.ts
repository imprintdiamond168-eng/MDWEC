/**
 * Content sourced from mdwec.com.tw (微鑽石線材設備有限公司).
 * Wording is kept as close to the original site as possible.
 */

export const COMPANY = {
  zh: "微鑽石線材設備有限公司",
  short: "微鑽石",
  en: "Micron Diamond Wire & Equipment Co., Ltd.",
  abbr: "MDWEC",
  founded: "2007",
  group: "WEC 集團子公司（Since 1992）",
  tagline: "專業於鑽石線鋸（金剛線）及線切割設備的研究開發與整合、製造與販售。",
  address: "新北市三重區福德南路 45 號",
  addressEn: "No.45 Fude S. Rd., SanChong Dist., New Taipei City 241, Taiwan",
  tel: "+886 2 2977 0268",
  fax: "+886 2 2975 6299",
  mail: "service@mdwec.com",
};

/* ============================================================
   Navigation — mirrors the mdwec.com.tw menu tree
   ============================================================ */
export type NavChild = { label: string; href: string; en?: string };
export type NavItem = {
  label: string;
  en: string;
  href?: string;
  children?: NavChild[];
  groups?: { label: string; href: string; children: NavChild[] }[];
};

export const NAV: NavItem[] = [
  {
    label: "設備",
    en: "EQUIPMENT",
    href: "/Equipment",
    groups: [
      {
        label: "環線切割機",
        href: "/RingWireSaws",
        children: [
          { label: "KLDJ15SQ", href: "/KLDJ15SQ-RingWireSaws" },
          { label: "KLDJ20SQ", href: "/KLDJ20SQ-RingWireSaws" },
          { label: "KLDJ20Y", href: "/KLDJ20Y-RingWireSaws" },
          { label: "KLDJ40Q", href: "/KLDJ40Q-RingWireSaws" },
          { label: "KLDJ40SQ", href: "/KLDJ40SQ-RingWireSaws" },
          { label: "KLDJ60Q", href: "/KLDJ60Q-RingWireSaws" },
          { label: "KLDJ70Y", href: "/KLDJ70Y-RingWireSaws" },
          { label: "KLDJ100Q", href: "/KLDJ100Q-RingWireSaws" },
          { label: "KLDJ160Q", href: "/KLDJ160Q-RingWireSaws" },
          { label: "KLDJ200Q", href: "/KLDJ200Q-RingWireSaws" },
        ],
      },
    ],
    children: [
      { label: "單刃式線切割機", href: "/SingleWireSaws", en: "Single Wire Saws" },
      { label: "多刃式線切割機", href: "/MultiWireSaws", en: "Multi Wire Saws" },
      { label: "晶粒切割機", href: "/DicingSaws", en: "Dicing Saws" },
      { label: "多功能開方機", href: "/AnyCut", en: "AnyCut" },
      { label: "固液分離機", href: "/G-Power", en: "G-Power" },
      { label: "盤線機", href: "/MWD-1205", en: "Coiling Machine" },
    ],
  },
  {
    label: "物料",
    en: "MATERIALS",
    href: "/Materials",
    children: [
      { label: "鑽石線", href: "/DiamondWire", en: "Diamond Coating Wire" },
      { label: "冷卻液", href: "/Coolant", en: "Dia-Coolant" },
      { label: "AB膠", href: "/GigaBond", en: "GigaBond" },
      { label: "犧牲材", href: "/Beam", en: "Sacrificial Beam" },
      { label: "耐磨耗導輪", href: "/Pulley", en: "Dia-Pulley" },
    ],
  },
  { label: "代工服務", en: "OEM", href: "/OEM" },
  {
    label: "關於微鑽石",
    en: "ABOUT",
    href: "/About",
    children: [
      { label: "公司願景", href: "/introduction", en: "Introduction" },
      { label: "歷史沿革", href: "/history", en: "History" },
      { label: "經營理念", href: "/management", en: "Management" },
      { label: "社會責任", href: "/responsibility", en: "Responsibility" },
    ],
  },
  { label: "最新消息", en: "NEWS", href: "/news" },
  { label: "聯絡我們", en: "CONTACT", href: "/Contact" },
];

/* ============================================================
   Home — the six messages that run on the MDWEC homepage slider
   ============================================================ */
export type HeroSlide = {
  id: string;
  index: string;
  en: string;
  kicker: string;
  title: string;
  lines: string[];
  cta: { label: string; href: string };
  palette: string;
  sides: number;
  rotate: number;
  wash: [string, string];
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "wire",
    index: "01",
    en: "DIAMOND COATING WIRE",
    kicker: "鑽石線鋸 · 金剛線",
    title: "專業於鑽石線鋸\n與線切割設備",
    lines: [
      "專業於鑽石線鋸（金剛線）Diamond Coating Wire",
      "線切割設備 Wire Saws",
      "研究開發與整合、製造與販售",
    ],
    cta: { label: "認識鑽石線", href: "/DiamondWire" },
    palette: "ice",
    sides: 12,
    rotate: -90,
    wash: ["#dbeefb", "#f2f7fb"],
  },
  {
    id: "quality",
    index: "02",
    en: "MADE IN TAIWAN",
    kicker: "MIT 鑽石線 · 品質至上",
    title: "全方位 系統＋測試\n＋控管，台灣製造",
    lines: [
      "榮獲 ISO 9001 品質認證",
      "堅持品質第一、客戶至上原則",
      "全方位 系統＋測試＋控管，台灣製造",
    ],
    cta: { label: "經營理念", href: "/management" },
    palette: "iris",
    sides: 16,
    rotate: -78,
    wash: ["#e7e3fa", "#f5f4fc"],
  },
  {
    id: "equipment",
    index: "03",
    en: "WIRE SAW MANUFACTURING",
    kicker: "專業線切割設備製造",
    title: "超過 20 年\n專業鑽石切割技術",
    lines: [
      "超過 20 年專業鑽石切割技術",
      "應用範圍涵蓋 科技、光電 等產業",
      "擁有多數知名大廠商之優越銷售實績",
    ],
    cta: { label: "瀏覽全部設備", href: "/Equipment" },
    palette: "steel",
    sides: 9,
    rotate: -100,
    wash: ["#e3e9ef", "#f4f7fa"],
  },
  {
    id: "rd",
    index: "04",
    en: "RESEARCH & DEVELOPMENT",
    kicker: "精益求精的研發精神",
    title: "在瞬息萬變的市場裡\n勇於創新",
    lines: [
      "在瞬息萬變的市場裡勇於創新",
      "領先業界之超細微粉鍍覆技術",
      "發展化學機械式矽片質絨技術",
    ],
    cta: { label: "歷史沿革", href: "/history" },
    palette: "jade",
    sides: 11,
    rotate: -84,
    wash: ["#dff3ec", "#f2faf7"],
  },
  {
    id: "service",
    index: "05",
    en: "CUSTOMISED SERVICE",
    kicker: "以客為尊的服務團隊",
    title: "客製化 設備＋物料\n專業服務",
    lines: [
      "客製化 設備＋物料 專業",
      "具備 砂漿切割設備改機 技術",
      "推陳出新的其他切割相關代工服務",
    ],
    cta: { label: "代工服務", href: "/OEM" },
    palette: "amber",
    sides: 18,
    rotate: -70,
    wash: ["#fbeedb", "#fdf7ee"],
  },
  {
    id: "strategy",
    index: "06",
    en: "STRATEGIC EXPANSION",
    kicker: "銳不可擋的策略進擊",
    title: "活絡鑽石切割技術\n之多方面運用",
    lines: [
      "積極尋找策略聯盟夥伴",
      "目標進行太陽能電站整合",
      "活絡鑽石切割技術之多方面運用",
    ],
    cta: { label: "聯絡我們", href: "/Contact" },
    palette: "rose",
    sides: 14,
    rotate: -66,
    wash: ["#fbe6ef", "#fdf4f8"],
  },
];

export const HERO_STATS = [
  { k: "創立年份", v: "2007", u: "", en: "Founded" },
  { k: "鑽石加工經驗", v: "20", u: "年 +", en: "Years in diamond" },
  { k: "全球量產鑽石線", v: "第 4", u: "家", en: "4th worldwide" },
  { k: "品質認證", v: "ISO", u: "9001", en: "Certified" },
];

export const APPLICATIONS = [
  "太陽能 PV",
  "半導體晶圓",
  "發光二極體 LED",
  "光電",
  "通訊",
  "藍寶石 Al₂O₃",
  "碳化矽 SiC",
  "氮化鎵 GaN",
  "砷化鎵 GaAs",
  "石英 · 玻璃",
  "精密陶瓷",
  "第三類半導體",
];

/* ============================================================
   About
   ============================================================ */
export const ABOUT_PARAGRAPHS = [
  "微鑽石線材設備有限公司（Micron Diamond Wire & Equipment Co., Ltd. – MDWEC）創立於 2007 年，為 WEC 集團所屬子公司（Since 1992），秉持著以「人才為本」，用心經營的理念，以新的視野與積極的態度投入研發，透過與顧客之間的策略聯盟，不斷發掘新產品的應用，掌握市場雙向脈動，更藉由投資未來創造產品附加價值，來滿足客戶的需求，以延續企業競爭優勢、開拓新市場。",
  "微鑽石（MDWEC）承襲了二十幾年的金剛石工具製造經驗，專業於金剛石線鋸（Diamond Coating Wire）及線切割設備（Wire Saws）的研究開發、整合、製造與銷售。",
  "產品主要應用於太陽能（PV）、半導體晶圓切割、發光二極體（LED）、光電、通訊等脆硬材料加工，如開方（Squaring）、切片（Slicing）、切割截斷（Cutting）等。",
  "其他如單刃式及多刃式等線切割製程，適用於各種不同硬脆材料的切片與切斷加工，如石材、石英、玻璃、氧化物半導體晶圓（LiTaO₃、LiNbO₃、Li₂B₄O₇、藍寶石 Al₂O₃、ZnO 等）、化合物半導體晶圓（GaAs、AlN、InAs 等）單晶矽、多晶矽、陶瓷等各種先進材料。",
];

export const PHILOSOPHY =
  "微鑽石（MDWEC）擁有超過 20 年的專業鑽石經驗，秉持著以鑽石為企業之發展核心、由「心」出發的經營理念。對內，培養優秀的人才與團隊、建立熱情分享的企業文化；對外，以回饋與貢獻為企業之社會責任，並積極推動企業內、外之成長為目標。";

export const RESPONSIBILITY = {
  paragraphs: [
    "微鑽石（MDWEC）秉持著「飲水思源」的精神，結合社會志工與員工共同扶助弱勢團體，擴大企業對社會的正面影響力。在社區及社會方面，微鑽石積極扮演社區服務的角色，每年贊助社區活動及美化環境計畫，援助貧童營養午餐及參與國際兒童認養行動，提供獎助學金及人道援助，並整理企業內汰舊 3C 產品，援助偏遠小學，幫助學校教育方面的需要、促使員工成為社區的義工與捐助慈善事業。",
    "長期以來在整個產業供應鏈中，除了致力於符合國際各項產品環保規範之外，更積極響應節能減碳行動方案，以其在超硬磨料及光電產業發展超過 20 年之核心價值與優勢，跨足新能源、新光源、新動能、新材料及資源再利用等相關產業，聚焦於創能、轉能、儲能及節能四大面向，擘劃企業未來營運方向及成長，積極結合企業經營和社會責任之投入，發揮影響力，讓你我未來更美好，並以實際行動來愛護地球。",
  ],
  focus: ["創能", "轉能", "儲能", "節能"],
  rights: {
    intro:
      "微鑽石線材設備有限公司承諾尊重並維護所有員工、合作夥伴及社會大眾的人權。我們深信，企業的永續發展必須建立在尊重人性尊嚴與公平正義的基礎之上。",
    commitments: [
      {
        t: "尊重人性尊嚴",
        d: "遵循《聯合國世界人權宣言》及國際勞工組織（ILO）核心勞工標準，保障每一位員工的基本權利。",
      },
      { t: "禁止歧視", d: "我們反對任何形式的歧視，包括性別、年齡、種族、宗教、殘疾、性取向或政治立場。" },
      { t: "安全與健康", d: "提供安全、健康的工作環境，並持續改善職場安全措施。" },
      { t: "公平勞動", d: "確保合理工時、合法薪酬，嚴禁強迫勞動與童工。" },
      { t: "言論與結社自由", d: "尊重員工依法享有的言論自由與結社權利。" },
      { t: "供應鏈責任", d: "要求合作夥伴與供應商同樣遵守人權原則，共同推動責任商業行為。" },
    ],
    actions: [
      "建立透明的申訴與回饋管道，確保員工能安全表達意見。",
      "定期檢視並改善人權政策，確保符合最新的國際標準與在地法規。",
      "推動培訓與教育，提升全體員工對人權的認知與尊重。",
    ],
    closing:
      "微鑽石線材設備有限公司相信，尊重人權不僅是法律責任，更是企業文化與社會責任的重要核心。我們將持續努力，確保所有利害關係人都能在公平、尊嚴與安全的環境中成長與合作。",
  },
};

export const HISTORY = [
  {
    y: "2024",
    items: ["開發 晶粒切割機 Dicing Saws（MDS-68A）並取得台灣新型專利，同時申請日、韓專利"],
  },
  {
    y: "2019",
    items: [
      "開發 多類硬脆材料切割設備及代工服務，如螢光片、碳化矽、矽、石英、AlSiC、鍺 Ge、工程塑膠等",
    ],
  },
  {
    y: "2013",
    items: ["開發 藍寶石觸控螢幕、鑽石磨棒、碳化矽（SiC）切割、研磨、拋光製程及耗材、大單晶鑽石"],
  },
  {
    y: "2012",
    items: [
      "成功導入 ISO-9001",
      "開發 AnyCut 多功能鑽石線開方（Squaring）切割機",
      "開發 EasyCut 多刃式鑽石線切片（Slicing）切割機",
      "開發 高效益電鍍鑽石線鋸新製程（提升品質與使用壽命）",
      "開發 高效益樹脂（RB）鑽石線鋸新製程（提升品質與減少耗線量 4 米／片）",
    ],
  },
  {
    y: "2011",
    items: [
      "成立 貴重儀器中心並與各大學等學術界合作交流",
      "開發 PV 矽芯片分機",
      "開發 單刃式線切割截斷機",
      "開發 PV 單、多晶鑽石線切片製程",
    ],
  },
  {
    y: "2010",
    items: [
      "開發 鑽石線切割用冷卻液（Dia-Coolant）",
      "開發 鑽石線專用耐磨耗導輪（Dia-Pulley）",
      "開發 固、液分離機 G-Power（Solid／Liquid Separator）",
    ],
  },
  {
    y: "2009",
    items: ["成功開發 GigaBond Epoxy Adhesives（AB 膠）", "開發 多刃式線切割機（Multi-Wire Saws）"],
  },
  {
    y: "2008",
    items: [
      "成功開發並正式生產 鑽石線（Diamond Coating Wire）",
      "成為全世界第四家、台灣及中國唯一成功量產鑽石線的企業",
      "開發 自製多刃式線切割機",
      "開發 藍寶石基板製程、設備及耗材",
    ],
  },
  {
    y: "2007",
    items: [
      "成立 微鑽石線材設備有限公司（MDWEC）",
      "開發 太陽能矽晶棒線切割用磨料－碳化矽（SiC）及回收系統",
      "開發〝樹脂燒結〞及〝電鑄〞鑽石線鋸（Diamond Coating Wire）等產品切割機",
    ],
  },
];

export const NEWS = [
  {
    slug: "cowos-2025",
    year: "2025",
    date: "2025 年 2 月 4 日",
    place: "台北訊",
    category: "技術應用",
    title: "微鑽石技術突破，助力台積電 CoWoS 產能擴增",
    body: "隨著 AI 應用爆發，先進晶片需求攀升，CoWoS（Chip-on-Wafer-on-Substrate）先進封裝技術成為全球科技巨頭競逐的關鍵戰場。",
  },
];

export const NEWS_YEARS = ["2025", "2024", "2016"];
export const NEWS_CATEGORIES = ["公司消息", "太陽能相關", "技術應用"];

/* ============================================================
   Products
   ============================================================ */
export type SpecTable = { title?: string; rows: [string, string][] };

export type Product = {
  slug: string;
  /** route this product lives at */
  href: string;
  name: string;
  en: string;
  model?: string;
  category: "equipment" | "material";
  /** ring-wire-saw models are grouped under one parent page */
  group?: "ring";
  summary: string;
  application: string[];
  features: string[];
  specs?: SpecTable[];
  related?: string[];
  palette: string;
  sides: number;
  rotate: number;
};

/** Feature list shared by the ring wire saw range (as printed on each model page). */
const RING_FEATURES = [
  "環線式鑽石鋸線，往覆式運轉，微電腦及 PLC 控制",
  "高速線設計，搭配 MDWEC 鑽石線，縮短 50% 工時，成本低，提高生產力",
  "可設定搖擺功能，優異的完工厚度控制及完工表面",
  "適用於高硬度、易碎材質；通用性的工作台面設計，適合廣泛形狀的工件切割應用",
  "線損低（Kerfs-off），減少下一階段的加工時間（Lapping & Polishing），可降低工時、人力及材料的損耗",
  "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
];

type RingSpec = {
  slug: string;
  model: string;
  name: string;
  summary: string;
  rows: [string, string][];
  palette: string;
  sides: number;
  rotate: number;
};

const RING_MODELS: RingSpec[] = [
  {
    slug: "kldj15sq",
    model: "KLDJ15SQ",
    name: "KLDJ15S 桌面環線切割機",
    summary: "此款機型適用於小尺寸材料切割，可進行異形切割，崩邊小，噪音低，功耗低。",
    palette: "ice",
    sides: 8,
    rotate: -90,
    rows: [
      ["工作臺尺寸", "200×150 mm"],
      ["直線軸行程", "X180×Y100 mm"],
      ["最大產品尺寸", "150×180×100 mm"],
      ["工作臺承重", "15 Kg"],
      ["最大線速度", "2,500 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.03 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "1,210 mm"],
      ["主導輪盤直徑", "Φ180 mm"],
      ["副導輪盤直徑", "Φ180 mm"],
      ["氣缸最大推力", "500 N"],
      ["螢幕大小", "7″"],
      ["設備的功率", "1.5 Kw"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "100 Kg"],
      ["設備主體尺寸", "640×560×1560 mm"],
    ],
  },
  {
    slug: "kldj20sq",
    model: "KLDJ20SQ",
    name: "KLDJ20SQ 環線切割機",
    summary: "此款機型適用於單片材料切割，配合旋轉工作台，可進行同步旋轉切割，切片厚度可調，省時又省力。",
    palette: "iris",
    sides: 10,
    rotate: -84,
    rows: [
      ["工作臺尺寸", "200×280 mm"],
      ["直線軸行程", "Y250×Z250 mm"],
      ["最大產品尺寸", "200×250×230 mm"],
      ["工作臺承重", "50 Kg"],
      ["工作臺最大轉速", "—"],
      ["最大線速度", "2,000 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.03 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "1,790 mm"],
      ["主導輪盤直徑", "Φ260 mm"],
      ["副導輪盤直徑", "Φ180 mm (2PCS)"],
      ["氣缸最大推力", "377 N"],
      ["觸控式螢幕大小", "7″"],
      ["設備的功率", "4 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "400 Kg"],
      ["設備主體尺寸", "1000×800×1850 mm"],
    ],
  },
  {
    slug: "kldj20y",
    model: "KLDJ20Y",
    name: "KLDJ20Y 環線切割機",
    summary:
      "採用環線切割，支持 G 代碼、二維圖形導入，操作簡單，張力穩定，適合各種異形件切割加工，切割效率高。",
    palette: "jade",
    sides: 12,
    rotate: -78,
    rows: [
      ["工作臺尺寸", "200×280 mm"],
      ["直線軸行程", "X250×Y250 mm"],
      ["最大產品尺寸", "200×250×230 mm"],
      ["工作臺承重", "50 Kg"],
      ["工作臺最大轉速", "—"],
      ["最大線速度", "2,000 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.05 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "1,790 mm"],
      ["主導輪盤直徑", "Φ260 mm"],
      ["副導輪盤直徑", "Φ180 mm (2PCS)"],
      ["氣缸最大推力", "377 N"],
      ["螢幕大小", "19″"],
      ["設備的功率", "3 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "400 Kg"],
      ["設備主體尺寸", "1000×800×1850 mm"],
    ],
  },
  {
    slug: "kldj40q",
    model: "KLDJ40Q",
    name: "KLDJ40Q 環線切割機",
    summary: "此款機型適用於單材料切割，配合旋轉工作臺，可進行同步旋轉切割，切片厚度可調，省時又省力。",
    palette: "amber",
    sides: 14,
    rotate: -72,
    rows: [
      ["工作臺尺寸", "Φ400 mm"],
      ["直線軸行程", "Y270×Z300 mm"],
      ["最大產品尺寸", "Φ400×300 mm"],
      ["工作臺承重", "200 Kg"],
      ["工作臺最大轉速", "30 RPM"],
      ["最大線速度", "2,000 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.03 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "2,180 mm"],
      ["主導輪盤直徑", "Φ260 mm"],
      ["副導輪盤直徑", "Φ260 mm"],
      ["氣缸最大推力", "377 N"],
      ["觸控式螢幕大小", "7″"],
      ["設備的功率", "4 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "1,200 Kg"],
      ["設備主體尺寸", "1180×1200×1700 mm"],
    ],
  },
  {
    slug: "kldj40sq",
    model: "KLDJ40SQ",
    name: "KLDJ40SQ 環線切割機",
    summary: "此款機型適用於小型材料切割，可疊加材料切割，可選配旋轉工作台，線弓小，不易崩邊。",
    palette: "rose",
    sides: 9,
    rotate: -96,
    rows: [
      ["工作臺尺寸", "400×420 mm"],
      ["直線軸行程", "Y400×Z350 mm"],
      ["最大產品尺寸", "400×400×300 mm"],
      ["工作臺承重", "200 Kg"],
      ["工作臺最大轉速", "—"],
      ["最大線速度", "2,000 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.03 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "2,650 mm"],
      ["主導輪盤直徑", "Φ260 mm"],
      ["副導輪盤直徑", "Φ180 mm (3PCS)"],
      ["氣缸最大推力", "377 N"],
      ["觸控式螢幕大小", "7″"],
      ["設備的功率", "3.5 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "1,000 Kg"],
      ["設備主體尺寸", "1350×1050×1850 mm"],
    ],
  },
  {
    slug: "kldj60q",
    model: "KLDJ60Q",
    name: "KLDJ60Q 環線切割機",
    summary:
      "這款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
    palette: "steel",
    sides: 16,
    rotate: -66,
    rows: [
      ["工作臺尺寸", "Φ600 mm"],
      ["直線軸行程", "Y380×Z350 mm"],
      ["最大產品尺寸", "Φ600×350 mm"],
      ["工作臺承重", "300 Kg"],
      ["工作臺最大轉速", "30 RPM"],
      ["最大線速度", "2,700 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.05 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "3,730 mm"],
      ["主導輪盤直徑", "Φ350 mm"],
      ["副導輪盤直徑", "Φ260 mm (3PCS)"],
      ["氣缸最大推力", "377 N"],
      ["觸控式螢幕大小", "7″"],
      ["設備的功率", "5 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "1,500 Kg"],
      ["設備主體尺寸", "1510×1680×1850 mm"],
    ],
  },
  {
    slug: "kldj70y",
    model: "KLDJ70Y",
    name: "KLDJ70Y 環線切割機",
    summary:
      "此款切割機主要用於中小型材料的切割，可進行不規則材料的加工，線弓小，不易崩邊，切片厚度可調，省時又省力。",
    palette: "ice",
    sides: 11,
    rotate: -102,
    rows: [
      ["工作臺尺寸", "800×800 mm"],
      ["直線軸行程", "X750×Y700 mm"],
      ["最大產品尺寸", "700×700×300 mm"],
      ["工作臺承重", "300 Kg"],
      ["最大線速度", "2,000 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.2 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "4,330 mm"],
      ["主導輪盤直徑", "Φ260 mm"],
      ["副導輪盤直徑", "Φ260 mm (3PCS)"],
      ["氣缸最大推力", "377 N"],
      ["螢幕大小", "19″"],
      ["設備的功率", "5 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "380V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "2,000 Kg"],
      ["設備主體尺寸", "2370×1680×1900 mm"],
    ],
  },
  {
    slug: "kldj100q",
    model: "KLDJ100Q",
    name: "KLDJ100Q 環線切割機",
    summary:
      "此款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
    palette: "iris",
    sides: 18,
    rotate: -60,
    rows: [
      ["工作臺尺寸", "Φ850 mm"],
      ["直線軸行程", "Y580×Z500 mm"],
      ["最大產品尺寸", "Φ1000×500 mm"],
      ["工作臺承重", "800 Kg"],
      ["工作臺最大轉速", "20 RPM"],
      ["最大線速度", "2,700 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.15 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "4,620 mm"],
      ["主導輪盤直徑", "Φ350 mm"],
      ["副導輪盤直徑", "Φ260 mm (3PCS)"],
      ["氣缸最大推力", "377 N"],
      ["觸控式螢幕大小", "7″"],
      ["設備的功率", "6.5 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "2,000 Kg"],
      ["設備主體尺寸", "1760×2250×2000 mm"],
    ],
  },
  {
    slug: "kldj160q",
    model: "KLDJ160Q",
    name: "KLDJ160Q 環線切割機",
    summary:
      "此款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
    palette: "jade",
    sides: 20,
    rotate: -54,
    rows: [
      ["工作臺尺寸", "Φ1400 mm"],
      ["直線軸行程", "Y900×Z600 mm"],
      ["最大產品尺寸", "Φ1600×600 mm"],
      ["工作臺承重", "3,000 Kg"],
      ["工作臺最大轉速", "20 RPM"],
      ["最大線速度", "2,700 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.01 mm"],
      ["加工精度", "≤ 0.2 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "6,380 mm"],
      ["主導輪盤直徑", "Φ350 mm"],
      ["副導輪盤直徑", "Φ260 mm (3PCS)"],
      ["氣缸最大推力", "377 N"],
      ["觸控式螢幕大小", "7″"],
      ["設備的功率", "6.5 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "3,000 Kg"],
      ["設備主體尺寸", "2300×3200×2100 mm"],
    ],
  },
  {
    slug: "kldj200q",
    model: "KLDJ200Q",
    name: "KLDJ200Q 環線切割機",
    summary:
      "此款機型適用於中大型材料的切割，採用總線絕對值，開機無需回機械原點，運絲平穩，線弓小，省時又省力。",
    palette: "amber",
    sides: 22,
    rotate: -48,
    rows: [
      ["工作臺尺寸", "Φ1700 mm"],
      ["直線軸行程", "Y1180×Z600 mm"],
      ["最大產品尺寸", "Φ2000×600 mm"],
      ["工作臺承重", "5,000 Kg"],
      ["工作臺最大轉速", "10 RPM"],
      ["最大線速度", "2,700 m/min"],
      ["加工效率", "0.1～1000 mm/min"],
      ["金鋼砂環線直徑", "Φ0.35～0.8 mm"],
      ["定位精度", "± 0.02 mm"],
      ["加工精度", "≤ 0.25 mm"],
      ["加工表面粗糙度", "Ra ≤ 1.25"],
      ["金剛砂線長", "7,700 mm"],
      ["主導輪盤直徑", "Φ350 mm"],
      ["副導輪盤直徑", "Φ260 mm (3PCS)"],
      ["氣缸最大推力", "377 N"],
      ["觸控式螢幕大小", "7″"],
      ["設備的功率", "7.5 Kw"],
      ["氣源壓力", "0.6～0.8 MPa"],
      ["工作電壓", "220V 50Hz ±10%"],
      ["環境溫度", "10℃～30℃"],
      ["設備重量", "3,800 Kg"],
      ["設備主體尺寸", "2750×3950×2100 mm"],
    ],
  },
];

/** KLDJ200Q carries an extended application block on the source site. */
const KLDJ200Q_APPLICATION = [
  "設備用途：玉石切割、石墨材料、光伏材料、貴重金屬等材料切割。",
  "加工尺寸範圍：最大高度 600 mm、直徑 1700 mm、最大重量 5000 KG。",
  "可根據設定的切割厚度，完成不同規格厚度的切割，成片厚度最小可達 5 mm。",
  "切割效率高，切割面光潔平整。",
  "設備操作簡便，上崗培訓時間短，穩定性好，有效產能高。",
  "切割時殘餘應力小、切縫窄。",
  "具有旋轉精度高、振動小等機械特性。",
];

export const RING_SAWS: Product[] = RING_MODELS.map((m) => ({
  slug: m.slug,
  href: `/RingWireSaws/${m.slug}`,
  name: m.name,
  en: "Ring Wire Saws",
  model: m.model,
  category: "equipment" as const,
  group: "ring" as const,
  summary: m.summary,
  application: m.slug === "kldj200q" ? KLDJ200Q_APPLICATION : [m.summary],
  features: RING_FEATURES,
  specs: [{ rows: m.rows }],
  related: ["coolant", "gigabond"],
  palette: m.palette,
  sides: m.sides,
  rotate: m.rotate,
}));

export const EQUIPMENT: Product[] = [
  {
    slug: "anycut",
    href: "/AnyCut",
    name: "多功能開方機",
    en: "Multi-purpose Squaring",
    model: "AnyCut · uAWS-1500",
    category: "equipment",
    summary:
      "AnyCut 系列線切割機結合了「單刃及多刃」自製設備的成功開發經驗與「實際切割製程的應用」，滿足了客戶在各式工件大小上的切割、截斷和開方需求。特別適用於「單／多晶矽晶棒」及「藍寶石晶棒」的多用途開方切塊加工，搭配 MDWEC 各種規格的高效能鑽石線鋸，可充分提升您對完工精度及高效產能的雙重需求。",
    application: [
      "適用於多種高硬度易碎材料，如矽晶、石英、陶瓷、藍寶石、玻璃等材料的多用途開方切塊加工。",
    ],
    features: [
      "搭載 PLC 人機微電腦控制，精準掌握切割過程資訊及加工狀況",
      "往覆式運轉設計、彈性模組化的切割參數",
      "配備高線速度設計，可變換調整最佳值",
      "搭配 MDWEC 鑽石線，可縮短 50% 切割工時，降低操作成本，提高生產力",
      "泛用於高硬度易碎之材質，通用性的工作台面設計，適合廣泛的工件開方切塊應用",
      "線損低（Kerfs-off），減少下一階段的工時（Lapping & Polishing），並降低人力及材料的損耗",
      "人機介面系統溝通順暢，操作與維修簡單，耗材壽命長，更換簡單，備品取得容易",
    ],
    specs: [
      {
        title: "AnyCut（uAWS-1500）",
        rows: [
          ["工件尺寸", "Max. 500×500×300 mm"],
          ["線材運行速度", "Max. 600 m/min"],
          ["導線", "Ø170 mm"],
          ["導線數量", "5 sets"],
          ["搖擺度", "0 ~ ±7"],
          ["Z Table stroke", "600 mm"],
          ["Z In feed rate", "0.01 ~ 150 mm/min"],
          ["線徑", "Ø 0.15 ~ 0.35 mm"],
          ["線張力", "Max. 40 N or less"],
          ["體機容量", "200 L"],
          ["安裝尺寸", "W2000 × D2300 × H2300 mm"],
          ["機器重量", "3,500 KG"],
        ],
      },
    ],
    related: ["coolant", "gigabond"],
    palette: "ice",
    sides: 8,
    rotate: -90,
  },
  {
    slug: "single-wire-saws",
    href: "/SingleWireSaws",
    name: "單刃式線切割機",
    en: "Single Wire Saws",
    model: "uSWS-1600 / uSWS-1700L",
    category: "equipment",
    summary:
      "累積多年自製設備技術開發經驗，成功開發出 uSWS-1600 單刃式截斷切割設備，適合單／多晶矽晶棒及藍寶石晶棒截斷頭尾及特殊用途的截面加工。此設備結合 MDWEC 高效能鑽石鋸線及相關切割技術可減少游離磨料的廢棄物，降低環境汙染；與傳統製程比較，能提供最佳化完工精度及高效產能。",
    application: [
      "適用於截斷大塊形狀及多種硬脆（高硬度）材料，如矽晶、石英、陶瓷、藍寶石、玻璃、砷化鎵等材料。",
    ],
    features: [
      "單刃式鑽石鋸線，往覆式運轉，微電腦及 PLC 控制",
      "高速線設計，搭配 MDWEC 鑽石線，縮短 50% 工時，成本低，提高生產力",
      "可設定搖擺功能，優異的完工厚度控制及完工表面",
      "適用於高硬度、易碎材質；通用性的工作台面設計，適合廣泛形狀的工件切割應用",
      "線損低（Kerfs-off），減少下一階段的加工時間（Lapping & Polishing），可降低工時、人力及材料的損耗",
      "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
    ],
    specs: [
      {
        title: "uSWS-1700L",
        rows: [
          ["工件尺寸", "Max. 600 (H) × 600 (W) × 400 (D)"],
          ["線材運行速度", "Max. 800 m/min"],
          ["導線", "Ø163 mm"],
          ["導線數量", "6 sets"],
          ["搖擺度", "0 ~ ±3"],
          ["Z Table stroke", "780 mm"],
          ["Z In feed rate", "0.01 ~ 150 mm/min"],
          ["線徑", "Ø 0.15 ~ 0.35 mm"],
          ["線張力", "Max. 60 N or less"],
          ["體機容量", "100 L"],
          ["安裝尺寸", "2620 (H) × 1700 (W) × 1050 (D)"],
          ["機器重量", "2,500 KG"],
        ],
      },
    ],
    related: ["coolant", "gigabond", "beam"],
    palette: "steel",
    sides: 10,
    rotate: -84,
  },
  {
    slug: "multi-wire-saws",
    href: "/MultiWireSaws",
    name: "多刃式線切割機",
    en: "Multi Wire Saws",
    model: "T-8331A",
    category: "equipment",
    summary:
      "微鑽石新設計發展鑽石線專用切割機（T-8331A），運用獨特技術並搭配鑽石線的特性，可以改善切割完工品質、比傳統機台縮短一半的切割加工時間，增加產能。",
    application: ["應用於藍寶石、碳化矽及氮化鎵（GaN）等硬脆材料產品。"],
    features: [
      "T-8331A 適用最大直徑為 φ6-inch 及 300 mm 長度的晶棒",
      "兩倍產能（4-inch 只需六小時，是傳統鑽石切割的一半時間）",
      "低的加工成本（Running cost）及低的鑽石線消耗（4-inch 藍寶石只需 15 m／wafer）",
      "搖擺圓柱機構結合導輪（Wire Guides）使切割硬脆材更有效益",
      "設備優異的剛性結構，讓搖擺圓柱結構更加穩固",
      "自由轉體線材管理系統使線材高速運轉時，可以維持相對的扭力、偏斜拉扯、張力平衡",
      "高速及精確的加工可靠度，可在高負荷張力下確保高線速度 1,200 m/min 及高速往復 1.5 sec 加速度／減速度切割運動",
      "可針對不同的特性來設定不同的工作條件、線速度、搖擺速度、搖擺角度等",
      "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
    ],
    specs: [
      {
        title: "T-8331A",
        rows: [
          ["工件尺寸", "Max. 600 (H) × 600 (W) × 400 (D)"],
          ["線材運行速度", "Max. 1,200 m/min"],
          ["導線", "Ø170 mm"],
          ["導線數量", "Single Wire"],
          ["搖擺度", "± 3"],
          ["Z Table stroke", "600 mm"],
          ["Z In feed rate", "0.01 ~ 150 mm/min"],
          ["線徑", "Ø 0.15 ~ 0.42 mm"],
          ["線張力", "Max. 60 N or less"],
          ["體機容量", "200 L"],
          ["安裝尺寸", "W2387 × D2330 × H1412 mm"],
          ["機器重量", "2,800 KG"],
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
    name: "晶粒切割機",
    en: "Dicing Saws",
    model: "MDS-68A",
    category: "equipment",
    summary:
      "特別開發針對第三類半導體、陶瓷等脆硬材料之 4~8 吋晶圓，提供良好切割端面及效率的晶粒切割加工設備。2024 年取得台灣新型專利，同時申請日、韓專利。",
    application: [
      "特別開發針對第三類半導體、陶瓷等脆硬材料之 4~8 吋晶圓，提供良好切割端面及效率的晶粒切割加工設備。",
      "Dicing saw 鋸片 — 螢光陶瓷片；MDS-68A 鋸片 — 螢光陶瓷片。",
    ],
    features: [
      "單刃式鑽石鋸線，往覆式運轉，微電腦及 PLC 控制",
      "高速線設計，搭配 MDWEC 鑽石線，縮短 50% 工時，成本低，提高生產力",
      "可設定搖擺功能，優異的完工厚度控制及完工表面",
      "適用於高硬度、易碎材質；通用性的工作台面設計，適合廣泛形狀的工件切割應用",
      "線損低（Kerfs-off），減少下一階段的加工時間（Lapping & Polishing），可降低工時、人力及材料的損耗",
      "人機介面系統溝通順暢，操作維修簡單，耗材壽命長、易更換、取得容易",
    ],
    specs: [
      {
        title: "設備外觀 Equipment",
        rows: [
          ["型號 Model No.", "MDS-68A Wafer Dicing Saws"],
          ["尺寸 Size", "1500 (L) × 1800 (W) × 1750 (H) mm"],
          ["重量 Weight", "2,000 kg（約）"],
        ],
      },
      {
        title: "鑽石線 Diamond Wire",
        rows: [
          ["線速度 Wire Speed", "2,000 meter/min.（max.）"],
          ["儲線量 Wire Storage", "8 ~ 20 km（依線徑而異）"],
          ["張力控制 Tension", "5 ~ 20 N"],
          ["線徑 Diameter", "0.08 ~ 0.15 mm"],
        ],
      },
      {
        title: "切割規範 Dicing Parameter",
        rows: [
          ["切割模式 Cutting mode", "往／復式 Forward / Backward"],
          ["工件厚度", "0.1 mm (min.) ~ 10 mm (max.)"],
          ["工件尺寸", "1 ~ 203.2 mm（8＂ wafer）"],
          ["CCD 對位精度", "± 0.01 mm"],
          ["旋轉精度", "± 0.01 mm"],
        ],
      },
      {
        title: "廠務需求 Facility",
        rows: [
          ["電力 Electric Power", "220V, 50/60HZ, 3 Phase"],
          ["空壓氣體 CDA", "0.4 ~ 0.6 MPa"],
          ["耗氣量 Air consumption", "100 Liter/min（約）"],
          ["切割液／冷卻水", "純水／水，依切割品質耗水量調整"],
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
    name: "固液分離機",
    en: "Solid / Liquid Separator",
    model: "G-Power · UST-3100 / UST-3200",
    category: "equipment",
    summary:
      "為物理分離裝置，主要利用離心力及比重差異過濾並分離固體（顆粒）及液體，尤其適合在線切割製程上，它能提升切割效益與完工品質、降低線損、延長冷卻潤滑油和線材的使用壽命、減少設備故障、減少環境汙染及人力維護的成本。",
    application: ["適用在相關機械加工過程中，需要分離出排屑物以保持冷卻潤滑油的效益。"],
    features: [
      "搭配切割研磨等循環箱使用，可降低表面磨料阻塞（增加自銳性），增加鑽石線及工具的壽命與效益",
      "特殊分離裝置，可以濾除大部分切屑顆粒",
      "分離後的淤泥殘渣，可輕易被移除",
      "提升加工環境整潔、避免管路阻塞",
      "適用廣泛性的油性或水性切削液",
    ],
    specs: [
      {
        title: "UST-3100",
        rows: [
          ["轉速 R.P.M.", "3,100"],
          ["最大流量", "100 L/min"],
          ["電源", "AC 220V / 3phase / 30A"],
          ["操作", "Touch Screen"],
          ["設備尺寸", "650 (W) × 1380 (D) × 1768 (H) mm"],
          ["重量", "600 Kg"],
          ["氣動", "5 Kgf/cm²"],
          ["泥漿箱", "140 L"],
          ["重力", "1,500"],
        ],
      },
      {
        title: "UST-3200",
        rows: [
          ["轉速 R.P.M.", "3,100"],
          ["最大流量", "200 L/min"],
          ["電源", "AC 220V / 3phase / 30A"],
          ["操作", "Touch Screen"],
          ["設備尺寸", "890 (W) × 1550 (D) × 2300 (H) mm"],
          ["重量", "790 Kg"],
          ["氣動", "5 Kgf/cm²"],
          ["泥漿箱", "149 L"],
          ["重力", "2,000"],
        ],
      },
    ],
    related: ["coolant"],
    palette: "rose",
    sides: 11,
    rotate: -66,
  },
  {
    slug: "coiling-machine",
    href: "/MWD-1205",
    name: "盤線機",
    en: "Precision Coiling Machine",
    model: "MWD-1205",
    category: "equipment",
    summary:
      "微鑽石累積多年自製設備技術開發經驗，成功開發出 MWD-1205 一對多精密盤線設備，適用於多種線軸盤線需求，依客戶張力、線距（pitch）需求，以程式化排線精準控制，操作簡易，大大提升線軸周轉效益與縮短生產時間。可依客戶需求制訂特殊規格。",
    application: ["主要應用於盤整鑽石線成品，將成品線整理在各款尺寸線軸上。"],
    features: [
      "人性化：操作介面簡單，參數及設定一目了然，不需額外的矯正作業即可作業",
      "標準化：具備多組記憶，可記憶多組線軸規格參數，操作方便可直接選用，毋須重新設定",
      "程式化：經由參數設定後，啟動程式運算來自動化排線，不須額外再調整",
      "彈性化：可依客戶需求調整盤線張力，導輪與治具更換容易，備品取得容易",
    ],
    specs: [
      {
        title: "MWD-1205",
        rows: [
          ["材料", "High Carbon Wire"],
          ["線徑", "Ø 0.087 ~ 0.42 mm"],
          ["速度", "Machine speed max. 800 m/min；Normal working 200 ~ 700 m/min"],
          ["張力", "6 N ~ 50 N"],
          ["線距", "0.21 ~ 1.5 mm"],
          ["梭型", "TA100 / MB80 / 安永 / PV-500D / T8252B / MB50"],
          ["效用", "ELECTRIC: AC 3P 220V 50/60Hz；CONTROL: AC 1P 220V 60Hz；AIR: 6 KG/CM²"],
          ["尺寸", "1930 × 1440 × 1830 mm"],
          ["重量", "2,600 KG"],
        ],
      },
    ],
    related: ["diamond-wire"],
    palette: "amber",
    sides: 20,
    rotate: -60,
  },
];

export const MATERIALS: Product[] = [
  {
    slug: "diamond-wire",
    href: "/DiamondWire",
    name: "鑽石線",
    en: "Diamond Coating Wire",
    category: "material",
    summary:
      "微鑽石成功整合鑽石磨料製造與應用經驗，結合本公司獨特的 EP 電著技術（Willeock®）與 RB 高分子膠連技術（Fransteyen®），製造出優異的電鍍鑽石線（EP diamond wires）及樹脂鑽石線（RB diamond wires），在業界應用中，展現傑出的切削效率、良好的完工品質與具成本競爭力的加工應用。",
    application: [
      "適用各式材料，如藍寶石（Sapphire）晶棒、矽晶棒（單晶／多晶）、玻璃、精密陶瓷、石英、水晶、人造寶石晶體等材料。",
    ],
    features: [
      "良好的線徑控制、線材的外形均一",
      "傑出的線材張力與強度",
      "優異的切割效率",
      "相比傳統加工方式，縮短 50% 的切割時間",
      "加工精準度與完工表面佳",
      "可搭配各種不同設備應用",
    ],
    related: ["single-wire-saws", "multi-wire-saws", "gigabond", "coolant"],
    palette: "ice",
    sides: 14,
    rotate: -90,
  },
  {
    slug: "coolant",
    href: "/Coolant",
    name: "鑽石線切割用冷卻液",
    en: "Dia-Coolant · DWS 系列",
    category: "material",
    summary:
      "DWS 系列是專為線切割加工所研發之冷卻液，可有效滲入切削區降低切割工件時因熱產生之阻抗，並提升切削率及改善切割表面，能確實降低工件翹曲。此款水性冷卻切削液具有良好的生物分解作用，不會造成環境污染及額外廢水處理負擔。",
    application: [
      "應用的加工領域為單／多晶矽晶棒切割、砷化鎵晶棒切割、玻璃石英晶棒切割，及其他硬脆材料切割皆可使用。",
    ],
    features: [
      "優異滲入性",
      "有效提升工件表面品質",
      "濃縮液（3~5%）",
      "用清水清洗即可，水性清潔性強",
      "有效延長鑽石線壽命",
      "無刺鼻味",
    ],
    specs: [
      {
        title: "包裝規格",
        rows: [
          ["小桶", "5 加侖／桶"],
          ["中桶", "10 加侖／桶"],
          ["大桶", "1 噸／桶"],
        ],
      },
    ],
    related: ["diamond-wire", "g-power"],
    palette: "jade",
    sides: 12,
    rotate: -84,
  },
  {
    slug: "gigabond",
    href: "/GigaBond",
    name: "GigaBond A/B 膠",
    en: "GigaBond Epoxy Adhesives",
    category: "material",
    summary:
      "GigaBond 是兩液混合型之環氧化物接著劑，分別由樹脂（A）劑及硬化（B）劑所組成，具有不易燃特性。GigaBond 可以在短時間內膠合工件，硬化後立即上機開始加工，後續製程脫膠部分，在溫熱水中做分離作業即可。",
    application: ["本產品特別適用於半導體、水晶、瓷器、磁性材料之棒材（Ingot）及塊材（Block）的切斷加工。"],
    features: [
      "優異的抓著力與強度",
      "快速硬化",
      "使用熱水即可脫膠，無需使用溶劑或烘烤進行脫膠",
      "容易混合（重量比 A : B = 2 : 1）",
      "適合大面積黏貼作業",
      "不自燃、無惡臭、無添加任何金屬成分",
      "可依客戶需求訂做客製化產品",
    ],
    specs: [
      {
        title: "GigaBond V1 / V7",
        rows: [
          ["黏度 cps (25°C)", "V1 — A 165,000 ±15,000／B 42,000 ±7,000　｜　V7 — A 25,000 ±5,000／B 25,000 ±5,000"],
          ["外觀", "A 紅褐色／B 白色"],
          ["凝膠時間", "V1 3~5 分鐘　｜　V7 5~8 分鐘"],
          ["黏結強度", "V1 0.5 小時後 80 kg/cm²　｜　V7 2 小時後 100 kg/cm²"],
          ["最大強度", "V1 1 小時後 100 kg/cm²　｜　V7 6 小時後 200 kg/cm²"],
          ["硬度", "85 ± 5D"],
          ["混合比例", "A : B = 1 : 1"],
          ["應用", "藍寶石切片、固定治具"],
          ["脫膠", "70°C 熱水／200°C 烘烤"],
          ["脫膠時間", "10 分鐘／30 分鐘"],
          ["包裝", "A : 1KG／B : 1KG"],
        ],
      },
      {
        title: "GigaBond V9",
        rows: [
          ["黏度 cps (25°C)", "A 150,000 ±15,000／B 50,000 ±10,000"],
          ["外觀", "A 紅褐色／B 白色"],
          ["凝膠時間", "3 ~ 7 分鐘"],
          ["黏結強度", "2 小時後 100 kg/cm²"],
          ["最大強度", "4 小時後 150 kg/cm²"],
          ["硬度", "85 ± 5D"],
          ["混合比例", "A : B = 1 : 1"],
          ["應用", "藍寶石切片、固定治具"],
          ["脫膠", "70°C 熱水／200°C 烘烤"],
          ["脫膠時間", "20 分鐘／30 分鐘"],
          ["包裝", "A : 1KG／B : 1KG"],
        ],
      },
      {
        title: "GigaBond S4 / S7",
        rows: [
          ["黏度 cps (25°C)", "S4 — A 70,000 ±10,000／B 16,000 ±5,000　｜　S7 — A 20,000 ±5,000／B 3,000 ±1,000"],
          ["外觀", "A 紅褐色／B 乳白色"],
          ["凝膠時間", "S4 20 分鐘　｜　S7 10 分鐘"],
          ["黏結強度", "2 小時後 200 kg/cm²"],
          ["最大強度", "6 小時後 240 kg/cm²"],
          ["硬度", "85 ± 5D"],
          ["混合比例", "A : B = 2 : 1"],
          ["應用", "矽切片"],
          ["脫膠", "75°C 熱水"],
          ["脫膠時間", "15 分鐘"],
          ["包裝", "A : 1KG／B : 0.5KG"],
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
    name: "犧牲材",
    en: "Sacrificial Beam",
    category: "material",
    summary:
      "提升各種晶棒切割工藝的效率，以及用於保持晶棒固定的樹脂板底座等。搭配微鑽石開發的 AB 雙劑型環氧樹脂膠提供良好的固定，我司提供一整套適用於此工藝的優秀產品。",
    application: [
      "應用的加工領域為單、多晶矽晶棒切割、氮化鋁晶棒切割、碳化矽、石英晶棒切割，及其他硬脆材料切割時皆可使用。",
    ],
    features: [
      "提升各種晶棒切割工藝的效率",
      "用於保持晶棒固定的樹脂板底座",
      "搭配 GigaBond AB 雙劑型環氧樹脂膠，提供良好的固定",
    ],
    related: ["single-wire-saws", "multi-wire-saws", "gigabond", "coolant"],
    palette: "steel",
    sides: 7,
    rotate: -102,
  },
  {
    slug: "pulley",
    href: "/Pulley",
    name: "耐磨耗導輪",
    en: "Dia-Pulley",
    category: "material",
    summary:
      "針對各種鑽石線切割機開發耐磨耗導輪（Dia-Pulley），材質特性具有耐磨耗、耐化學腐蝕、抗張強度高、耐高壓荷重、吸震性強、可保持切割製程中高程載機械運作及減震緩衝等良好特性。",
    application: ["可應用於切割製程中之鑽石線導輪。"],
    features: [
      "使用高分子聚乙烯",
      "可使用延長 20% 以上壽命",
      "降低工件材料線損",
      "降低鑽石線因導輪磨耗所造成的斷線頻率",
      "降低導輪更換頻率",
      "提高切割機生產產能",
    ],
    specs: [
      {
        title: "規格",
        rows: [["尺寸規格", "耐磨耗導輪 Pulley 尺寸規格可依客戶需求訂製。"]],
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

/** 電鍍鑽石線 EP — 線徑規格 */
export const WIRE_EP: [string, string, string][] = [
  ["Ø 420 μm", "Core Ø 350 μm", "截斷 Cutting"],
  ["Ø 350 μm", "Core Ø 250 μm", "開方 Squaring"],
  ["Ø 250 μm", "Core Ø 180 μm", "切片 Slicing"],
  ["Ø 200 μm", "Core Ø 160 μm", "切片 Slicing"],
  ["Ø 150 μm", "Core Ø 120 μm", "切片 Slicing"],
  ["Ø 140 μm", "Core Ø 120 μm", "切片 Slicing"],
  ["Ø 130 μm", "Core Ø 110 μm", "切片 Slicing"],
  ["Ø 120 μm", "Core Ø 100 μm", "切片 Slicing"],
  ["Ø 110 μm", "Core Ø 90 μm", "切片 Slicing"],
  ["Ø 100 μm", "Core Ø 80 μm", "切片 Slicing"],
];

/** 樹脂鑽石線 RB — 線徑規格 */
export const WIRE_RB: [string, string, string][] = [
  ["Ø 250 μm", "Core Ø 180 μm", "切片 Slicing"],
  ["Ø 145 μm", "Core Ø 120 μm", "切片 Slicing"],
  ["Ø 135 μm", "Core Ø 110 μm", "切片 Slicing"],
  ["Ø 125 μm", "Core Ø 100 μm", "切片 Slicing"],
];

export const OEM = [
  {
    no: "01",
    name: "晶棒截斷機",
    en: "Ingot Cutting",
    body: "截斷大塊形狀及多種硬脆（高硬度）材料加工成所需尺寸。",
    materials: "矽晶、石英、陶瓷、藍寶石、SiC、玻璃、砷化鎵等材料晶棒。",
    href: "/SingleWireSaws",
  },
  {
    no: "02",
    name: "晶棒切片機",
    en: "Ingot Slicing",
    body: "可將 2~15 吋產品晶棒切割成多片或薄片。",
    materials: "矽晶、石英、SiC、AlN、陶瓷、PIG／PIC 等。",
    href: "/MultiWireSaws",
  },
  {
    no: "03",
    name: "晶粒切割機",
    en: "Wafer Dicing",
    body: "特別開發針對第三類半導體、陶瓷等脆硬材料之 4~8 吋晶圓，提供良好切割端面及效率的晶粒切割加工設備。台／中國／日／韓專利註冊。",
    materials: "第三類半導體、陶瓷、螢光陶瓷片等 4~8 吋晶圓。",
    href: "/DicingSaws",
  },
];

export const AFFILIATES = [
  { name: "WEC Group", href: "https://www.wec.com.tw" },
  { name: "阿里山鑽石 Alishan Diamond", href: "https://www.alishandiamond.com/" },
  { name: "Imprint Diamond", href: "https://www.imprint-diamond.com/" },
  { name: "Facebook", href: "https://www.facebook.com/wecgroup" },
  { name: "YouTube", href: "https://www.youtube.com/user/WECGroup1992" },
];
