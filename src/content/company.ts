import type { LA, LS } from "@/lib/i18n";

/**
 * Company / editorial content, bilingual.
 *
 * Chinese is transcribed from mdwec.com.tw; English is transcribed from the
 * site's own /en/ pages rather than machine-translated, so the wording matches
 * what MDWEC already publishes.
 */

/** TODO: replace with the real official LINE link before going live. */
export const LINE_URL = "https://line.me/R/ti/p/@mdwec";

export const COMPANY = {
  name: {
    zh: "微鑽石線材設備有限公司",
    en: "Micron Diamond Wire & Equipment Co., Ltd.",
  } as LS,
  short: { zh: "微鑽石", en: "MDWEC" } as LS,
  nameZh: "微鑽石線材設備有限公司",
  nameEn: "Micron Diamond Wire & Equipment Co., Ltd.",
  abbr: "MDWEC",
  founded: "2007",
  group: {
    zh: "WEC 集團子公司（Since 1992）",
    en: "A subsidiary of WEC Group (since 1992)",
  } as LS,
  tagline: {
    zh: "專業於鑽石線鋸（金剛線）及線切割設備的研究開發與整合、製造與販售。",
    en: "R&D, integration, manufacturing and sales of Diamond Coating Wire and Wire Saws.",
  } as LS,
  address: {
    zh: "新北市三重區福德南路 45 號",
    en: "No.45 Fude S. Rd., SanChong Dist., New Taipei City 241, Taiwan",
  } as LS,
  addressZh: "新北市三重區福德南路 45 號",
  addressEn: "No.45 Fude S. Rd., SanChong Dist., New Taipei City 241, Taiwan",
  tel: "+886 2 2977 0268",
  fax: "+886 2 2975 6299",
  mail: "service@mdwec.com",
  line: LINE_URL,
};

/* ============================================================
   Navigation — labels taken from the zh and en versions of the site
   ============================================================ */
export type NavChild = { label: LS; href: string };
export type NavItem = {
  label: LS;
  /** omitted for menu-only sections: they open a dropdown but have no page */
  href?: string;
  /** a sub-branch that itself has children (設備 › 環線切割機 › KLDJ…) */
  groups?: { label: LS; href: string; children: NavChild[] }[];
  children?: NavChild[];
};

export const NAV: NavItem[] = [
  {
    label: { zh: "設備", en: "Equipment" },
    groups: [
      {
        label: { zh: "環線切割機", en: "Ring Wire Cutting M/C" },
        href: "/RingWireSaws",
        children: [
          { label: { zh: "KLDJ15SQ", en: "KLDJ15SQ" }, href: "/KLDJ15SQ-RingWireSaws" },
          { label: { zh: "KLDJ20SQ", en: "KLDJ20SQ" }, href: "/KLDJ20SQ-RingWireSaws" },
          { label: { zh: "KLDJ20Y", en: "KLDJ20Y" }, href: "/KLDJ20Y-RingWireSaws" },
          { label: { zh: "KLDJ40Q", en: "KLDJ40Q" }, href: "/KLDJ40Q-RingWireSaws" },
          { label: { zh: "KLDJ40SQ", en: "KLDJ40SQ" }, href: "/KLDJ40SQ-RingWireSaws" },
          { label: { zh: "KLDJ60Q", en: "KLDJ60Q" }, href: "/KLDJ60Q-RingWireSaws" },
          { label: { zh: "KLDJ70Y", en: "KLDJ70Y" }, href: "/KLDJ70Y-RingWireSaws" },
          { label: { zh: "KLDJ100Q", en: "KLDJ100Q" }, href: "/KLDJ100Q-RingWireSaws" },
          { label: { zh: "KLDJ160Q", en: "KLDJ160Q" }, href: "/KLDJ160Q-RingWireSaws" },
          { label: { zh: "KLDJ200Q", en: "KLDJ200Q" }, href: "/KLDJ200Q-RingWireSaws" },
        ],
      },
    ],
    children: [
      { label: { zh: "單刃式線切割機", en: "Single Wire Saws M/C" }, href: "/SingleWireSaws" },
      { label: { zh: "多刃式線切割機", en: "Multi Wire Saws M/C" }, href: "/MultiWireSaws" },
      { label: { zh: "晶粒切割機", en: "Dicing Saws M/C" }, href: "/DicingSaws" },
      { label: { zh: "多功能開方機", en: "AnyCut — Squaring M/C" }, href: "/AnyCut" },
      { label: { zh: "固液分離機", en: "G-Power — Solid/Liquid Separator" }, href: "/G-Power" },
      { label: { zh: "盤線機", en: "Wire Winding Machine" }, href: "/MWD-1205" },
    ],
  },
  {
    label: { zh: "物料", en: "Materiel" },
    children: [
      { label: { zh: "鑽石線", en: "Diamond Wire" }, href: "/DiamondWire" },
      { label: { zh: "冷卻液", en: "Diamond Coolant" }, href: "/Coolant" },
      { label: { zh: "AB 膠", en: "Epoxy Adhesives" }, href: "/GigaBond" },
      { label: { zh: "犧牲材", en: "Beam" }, href: "/Beam" },
      { label: { zh: "耐磨耗導輪", en: "Pulley" }, href: "/Pulley" },
    ],
  },
  { label: { zh: "代工服務", en: "OEM Service" }, href: "/OEM" },
  {
    label: { zh: "關於微鑽石", en: "About" },
    children: [
      { label: { zh: "公司願景", en: "Vision" }, href: "/introduction" },
      { label: { zh: "歷史沿革", en: "History" }, href: "/history" },
      { label: { zh: "經營理念", en: "Management Philosophy" }, href: "/management" },
      { label: { zh: "社會責任", en: "Responsibility" }, href: "/responsibility" },
    ],
  },
  { label: { zh: "最新消息", en: "News" }, href: "/news" },
  { label: { zh: "聯絡我們", en: "Contact Us" }, href: "/Contact" },
];

/* ============================================================
   Homepage slider — six messages, verbatim from both language versions
   ============================================================ */
export type HeroSlide = {
  id: string;
  index: string;
  eyebrow: LS;
  title: LS;
  lines: LA;
  cta: { label: LS; href: string };
  palette: string;
  sides: number;
  rotate: number;
  /** Radial wash used as the slide's backdrop when it has no video. */
  wash: [string, string];
  /**
   * Optional background footage. When present it takes the place of the wash,
   * and `poster` is what shows before the file decodes — and instead of it for
   * anyone who has asked for reduced motion.
   */
  video?: { src: string; poster: string };
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "wire",
    index: "01",
    eyebrow: { zh: "鑽石線鋸 · 金剛線", en: "Diamond Coating Wire" },
    title: {
      zh: "專業於鑽石線鋸\n與線切割設備",
      en: "We Are Professional in\nDiamond Coating Wire\nand Wire Saws",
    },
    lines: {
      zh: [
        "專業於鑽石線鋸（金剛線）Diamond Coating Wire",
        "線切割設備 Wire Saws",
        "研究開發與整合、製造與販售",
      ],
      en: [
        "Diamond Coating Wire and Wire Saws",
        "R&D, Integration, Manufacturing and Sellings",
        "More than 20 years of diamond tool manufacturing",
      ],
    },
    cta: { label: { zh: "認識鑽石線", en: "Explore Diamond Wire" }, href: "/DiamondWire" },
    palette: "ice",
    sides: 12,
    rotate: -90,
    wash: ["#dbeefb", "#f2f7fb"],
    video: { src: "/video/video-1.mp4", poster: "/video/video-1-poster.jpg" },
  },
  {
    id: "quality",
    index: "02",
    eyebrow: { zh: "MIT 鑽石線 · 品質至上", en: "MIT Supreme Quality of Diamond Wire" },
    title: {
      zh: "全方位 系統＋測試\n＋控管，台灣製造",
      en: "Comprehensive System,\nTest and Control Management,\nMade in Taiwan",
    },
    lines: {
      zh: [
        "榮獲 ISO 9001 品質認證",
        "堅持品質第一、客戶至上原則",
        "全方位 系統＋測試＋控管，台灣製造",
      ],
      en: [
        "ISO 9001 Quality Certification Awarded",
        "Persist in Quality and Customer-oriented Principle",
        "Comprehensive System, Test and Control Management, and Made in Taiwan",
      ],
    },
    cta: { label: { zh: "經營理念", en: "Management Philosophy" }, href: "/management" },
    palette: "iris",
    sides: 16,
    rotate: -78,
    wash: ["#e7e3fa", "#f5f4fc"],
  },
  {
    id: "equipment",
    index: "03",
    eyebrow: {
      zh: "專業線切割設備製造",
      en: "Professional Sawing Equipment Manufacturing",
    },
    title: {
      zh: "超過 20 年\n專業鑽石切割技術",
      en: "More Than 20 Years of\nProfessional Diamond\nSawing Technology",
    },
    lines: {
      zh: [
        "超過 20 年專業鑽石切割技術",
        "應用範圍涵蓋 科技、光電 等產業",
        "擁有多數知名大廠商之優越銷售實績",
      ],
      en: [
        "More Than 20 Years of Professional Diamond Sawing Technology",
        "Applications Range from Science and Technology to Optoelectronics Industries",
        "Reach a Great Sales Achievement with The Well-known Large Companies",
      ],
    },
    cta: { label: { zh: "環線切割機 KLDJ 系列", en: "KLDJ ring wire saws" }, href: "/RingWireSaws" },
    palette: "steel",
    sides: 9,
    rotate: -100,
    wash: ["#e3e9ef", "#f4f7fa"],
  },
  {
    id: "rd",
    index: "04",
    eyebrow: {
      zh: "精益求精的研發精神",
      en: "The Spirit of Excellence in Research and Development",
    },
    title: {
      zh: "在瞬息萬變的市場裡\n勇於創新",
      en: "Keep Innovating in\nThe Rapid Changing Markets",
    },
    lines: {
      zh: [
        "在瞬息萬變的市場裡勇於創新",
        "領先業界之超細微粉鍍覆技術",
        "發展化學機械式矽片質絨技術",
      ],
      en: [
        "Keep Innovating in The Rapid Changing Markets",
        "The Industrial leading Technology of Micron Diamond Powder Plating",
        "Development of The Chemical Mechanical Silicon Ingot Flocking Technology",
      ],
    },
    cta: { label: { zh: "歷史沿革", en: "Our history" }, href: "/history" },
    palette: "jade",
    sides: 11,
    rotate: -84,
    wash: ["#dff3ec", "#f2faf7"],
  },
  {
    id: "service",
    index: "05",
    eyebrow: { zh: "以客為尊的服務團隊", en: "Customer-oriented Service Team" },
    title: {
      zh: "客製化 設備＋物料\n專業服務",
      en: "Customized Equipment\nand Material,\nand Professional Advice",
    },
    lines: {
      zh: [
        "客製化 設備＋物料 專業",
        "具備 砂漿切割設備改機 技術",
        "推陳出新的其他切割相關代工服務",
      ],
      en: [
        "Customized Equipment and Material, and Professional Advice",
        "Have The Mortar Sawing Machine Improvement Technology",
        "Provide Other Sawing Innovation OEM Services",
      ],
    },
    cta: { label: { zh: "代工服務", en: "OEM Service" }, href: "/OEM" },
    palette: "amber",
    sides: 18,
    rotate: -70,
    wash: ["#fbeedb", "#fdf7ee"],
  },
  {
    id: "strategy",
    index: "06",
    eyebrow: { zh: "銳不可擋的策略進擊", en: "Aggressive Strategy Management" },
    title: {
      zh: "活絡鑽石切割技術\n之多方面運用",
      en: "Facilitate Wide Applications\nin Diamond Sawing Technology",
    },
    lines: {
      zh: [
        "積極尋找策略聯盟夥伴",
        "目標進行太陽能電站整合",
        "活絡鑽石切割技術之多方面運用",
      ],
      en: [
        "Actively Seeking The Strategic Associated Partners",
        "Target The Solar Power Station Integration",
        "Facilitate Wide Applications in Diamond Sawing Technology",
      ],
    },
    cta: { label: { zh: "聯絡我們", en: "Contact Us" }, href: "/Contact" },
    palette: "rose",
    sides: 14,
    rotate: -66,
    wash: ["#fbe6ef", "#fdf4f8"],
  },
];

export const HERO_STATS: { k: LS; v: string; u: LS }[] = [
  { k: { zh: "創立年份", en: "Founded" }, v: "2007", u: { zh: "", en: "" } },
  { k: { zh: "鑽石加工經驗", en: "Years in diamond" }, v: "20", u: { zh: "年 +", en: "yrs +" } },
  { k: { zh: "全球量產鑽石線", en: "Worldwide" }, v: "4", u: { zh: "第 4 家", en: "th to mass-produce" } },
  { k: { zh: "品質認證", en: "Certified" }, v: "ISO", u: { zh: "9001", en: "9001" } },
];

export const APPLICATIONS: LA = {
  zh: [
    "太陽能 PV",
    "半導體晶圓",
    "發光二極體 LED",
    "光電",
    "通訊",
    "玻璃",
    "顯示器",
    "藍寶石 Al₂O₃",
    "碳化矽 SiC",
    "氮化鎵 GaN",
    "砷化鎵 GaAs",
    "石英 · 水晶",
    "精密陶瓷",
    "第三類半導體",
  ],
  en: [
    "PV / Solar",
    "Semiconductor wafer",
    "LED",
    "Photoelectric",
    "Communications",
    "Glass",
    "Display",
    "Sapphire Al₂O₃",
    "Silicon carbide SiC",
    "Gallium nitride GaN",
    "Gallium arsenide GaAs",
    "Quartz · Crystal",
    "Precision ceramic",
    "Wide band gap semiconductors",
  ],
};

/* ============================================================
   About
   ============================================================ */
export const ABOUT_PARAGRAPHS: LA = {
  zh: [
    "微鑽石線材設備有限公司（Micron Diamond Wire & Equipment Co., Ltd. – MDWEC）創立於 2007 年，為 WEC 集團所屬子公司（Since 1992），秉持著以「人才為本」，用心經營的理念，以新的視野與積極的態度投入研發，透過與顧客之間的策略聯盟，不斷發掘新產品的應用，掌握市場雙向脈動，更藉由投資未來創造產品附加價值，來滿足客戶的需求，以延續企業競爭優勢、開拓新市場。",
    "微鑽石（MDWEC）承襲了二十幾年的金剛石工具製造經驗，專業於金剛石線鋸（Diamond Coating Wire）及線切割設備（Wire Saws）的研究開發、整合、製造與銷售。",
    "產品主要應用於太陽能（PV）、半導體晶圓切割、發光二極體（LED）、光電、通訊、玻璃、顯示器等脆硬材料加工，如開方（Squaring）、切片（Slicing）、切割截斷（Cutting）等。",
    "其他如單刃式及多刃式等線切割製程，適用於各種不同硬脆材料的切片與切斷加工，如石材、石英、玻璃、氧化物半導體晶圓（LiTaO₃、LiNbO₃、Li₂B₄O₇、藍寶石 Al₂O₃、ZnO 等）、化合物半導體晶圓（GaAs、AlN、InAs 等）單晶矽、多晶矽、陶瓷等各種先進材料。",
  ],
  en: [
    "Micron Diamond Wire & Equipment Co., Ltd. (MDWEC) is a subsidiary of WEC Group, which was established in 2007. The talented employees and managing business with heart are our essential conceptual framework. We aggressively keep Researching & Developing with up-to-date vision. Through strategic-partnership with customers, we constantly develop new product applications and master the market demand in order to keep investing to create supplementary value for existing products to meet our customer's needs. All these efforts continue to keep us competitive and predominant in the market.",
    "MDWEC has more than 20 years of experience in Diamond Tools Manufacture. We specialize in developing unique coating technology, production, total solution and marketing for Diamond Coating Wire and Wire Saws equipments.",
    "Our products are mainly applied to the fields of PV, semiconductors, LED, photoelectric, communications, glass, display, hard and brittle materials, etc. The major processes are squaring, slicing, sawing and cutting.",
    "Our products are also available in slicing various hard and brittle materials, including Stones, Quartz, Glass, Semiconductor Wafer (LiTaO₃, LiNbO₃, Li₂B₄O₇, Sapphire, ZnO, GaAs, AlN, InAs, etc.), mono/poly silicon, ceramic, and other advanced materials with single and multiple wire blade sawing.",
  ],
};

export const PHILOSOPHY: LS = {
  zh: "微鑽石（MDWEC）擁有超過 20 年的專業鑽石經驗，秉持著以鑽石為企業之發展核心、由「心」出發的經營理念。對內，培養優秀的人才與團隊、建立熱情分享的企業文化；對外，以回饋與貢獻為企業之社會責任，並積極推動企業內、外之成長為目標。",
  en: "Micron Diamond Wire & Equipment Co., Ltd. (MDWEC) has over 20 years of professional experience in diamond with the business philosophy of upholding 'diamond is the core of the enterprise development' and 'the management theory starts from heart'. Internally, we cultivate excellent talents and team, and build an enthusiastic shared corporate culture; externally, we aim to contribute our corporate social responsibility to society and actively promote enterprise's internal and external growth as our ultimate goals.",
};

export const PHILOSOPHY_PILLARS: { t: LS; en: string; d: LS }[] = [
  {
    t: { zh: "對內", en: "Internally" },
    en: "Internal",
    d: {
      zh: "培養優秀的人才與團隊、建立熱情分享的企業文化。",
      en: "Cultivate excellent talents and teams, and build an enthusiastic shared corporate culture.",
    },
  },
  {
    t: { zh: "對外", en: "Externally" },
    en: "External",
    d: {
      zh: "以回饋與貢獻為企業之社會責任。",
      en: "Contribute our corporate social responsibility to society.",
    },
  },
  {
    t: { zh: "目標", en: "Our goal" },
    en: "Goal",
    d: {
      zh: "積極推動企業內、外之成長。",
      en: "Actively promote the enterprise's internal and external growth.",
    },
  },
];

export const RESPONSIBILITY = {
  paragraphs: {
    zh: [
      "微鑽石（MDWEC）秉持著「飲水思源」的精神，結合社會志工與員工共同扶助弱勢團體，擴大企業對社會的正面影響力。在社區及社會方面，微鑽石積極扮演社區服務的角色，每年贊助社區活動及美化環境計畫，援助貧童營養午餐及參與國際兒童認養行動，提供獎助學金及人道援助，並整理企業內汰舊 3C 產品，援助偏遠小學，幫助學校教育方面的需要、促使員工成為社區的義工與捐助慈善事業。",
      "長期以來在整個產業供應鏈中，除了致力於符合國際各項產品環保規範之外，更積極響應節能減碳行動方案，以其在超硬磨料及光電產業發展超過 20 年之核心價值與優勢，跨足新能源、新光源、新動能、新材料及資源再利用等相關產業，聚焦於創能、轉能、儲能及節能四大面向，擘劃企業未來營運方向及成長，積極結合企業經營和社會責任之投入，發揮影響力，讓你我未來更美好，並以實際行動來愛護地球。",
    ],
    en: [
      "MDWEC upholds the “grateful” spirits to associate with the community volunteers and MDWEC employees to actively assist the underprivileged minority and contribute to society. Every year, MDWEC supports various local community projects and environment improvement plans. In addition, the donations have been made to supply meals to the children from low-income families, to participate in the international child adoption, and to provide scholarships and humanitarian aid. Moreover, MDWEC employees engage in recycling outdated 3C-products to support the remote elementary schools for assisting in educational needs. As a result, our employees become the volunteers in the community and get involved in charitable work.",
      "MDWEC has been in the industry supply-chain over a long period of time and has been aiming to meet the international environmental regulations; additionally, we actively participate in energy saving and carbon reduction projects. With the past 20 years of experiences, MDWEC's core value and competitive advantage in super-abrasives and opto-electronics industry have promoted us to step across other related-industries such as new energy, new light-source, green energy, new material and resource recycling. We focus on four directions: energy production, energy transformation, energy storage and energy saving.",
      "MDWEC follows the market trends and customer's needs by setting the operation directions and goals, combining business management and social responsibility to bring the positive impacts to society; furthermore, we subsequently make a better future for all of us.",
    ],
  } as LA,
  focus: {
    zh: ["創能", "轉能", "儲能", "節能"],
    en: ["Energy production", "Energy transformation", "Energy storage", "Energy saving"],
  } as LA,
  rights: {
    intro: {
      zh: "微鑽石線材設備有限公司承諾尊重並維護所有員工、合作夥伴及社會大眾的人權。我們深信，企業的永續發展必須建立在尊重人性尊嚴與公平正義的基礎之上。",
      en: "Micron Diamond Wire & Equipment Co., Ltd. is committed to respecting and upholding the human rights of all employees, business partners and the wider community. We believe sustainable business must be built on respect for human dignity and fairness.",
    } as LS,
    commitments: [
      {
        t: { zh: "尊重人性尊嚴", en: "Respect for human dignity" },
        d: {
          zh: "遵循《聯合國世界人權宣言》及國際勞工組織（ILO）核心勞工標準，保障每一位員工的基本權利。",
          en: "We follow the UN Universal Declaration of Human Rights and the ILO core labour standards, protecting the fundamental rights of every employee.",
        },
      },
      {
        t: { zh: "禁止歧視", en: "No discrimination" },
        d: {
          zh: "我們反對任何形式的歧視，包括性別、年齡、種族、宗教、殘疾、性取向或政治立場。",
          en: "We oppose discrimination of any kind, including on the basis of gender, age, race, religion, disability, sexual orientation or political position.",
        },
      },
      {
        t: { zh: "安全與健康", en: "Safety and health" },
        d: {
          zh: "提供安全、健康的工作環境，並持續改善職場安全措施。",
          en: "We provide a safe and healthy working environment and continuously improve workplace safety measures.",
        },
      },
      {
        t: { zh: "公平勞動", en: "Fair labour" },
        d: {
          zh: "確保合理工時、合法薪酬，嚴禁強迫勞動與童工。",
          en: "We ensure reasonable working hours and lawful pay, and strictly prohibit forced labour and child labour.",
        },
      },
      {
        t: { zh: "言論與結社自由", en: "Freedom of expression and association" },
        d: {
          zh: "尊重員工依法享有的言論自由與結社權利。",
          en: "We respect employees' lawful rights to freedom of expression and association.",
        },
      },
      {
        t: { zh: "供應鏈責任", en: "Supply chain responsibility" },
        d: {
          zh: "要求合作夥伴與供應商同樣遵守人權原則，共同推動責任商業行為。",
          en: "We require partners and suppliers to observe the same human rights principles and to promote responsible business conduct.",
        },
      },
    ],
    actions: {
      zh: [
        "建立透明的申訴與回饋管道，確保員工能安全表達意見。",
        "定期檢視並改善人權政策，確保符合最新的國際標準與在地法規。",
        "推動培訓與教育，提升全體員工對人權的認知與尊重。",
      ],
      en: [
        "Maintain transparent grievance and feedback channels so employees can speak up safely.",
        "Review and improve the human rights policy regularly to meet current international standards and local regulations.",
        "Provide training and education to raise awareness of and respect for human rights across the company.",
      ],
    } as LA,
    closing: {
      zh: "微鑽石線材設備有限公司相信，尊重人權不僅是法律責任，更是企業文化與社會責任的重要核心。我們將持續努力，確保所有利害關係人都能在公平、尊嚴與安全的環境中成長與合作。",
      en: "MDWEC believes that respecting human rights is not only a legal duty but a core part of our corporate culture and social responsibility. We will continue to ensure that every stakeholder can grow and collaborate in a fair, dignified and safe environment.",
    } as LS,
  },
};

export const HISTORY: { y: string; items: LA }[] = [
  {
    y: "2024",
    items: {
      zh: ["開發 晶粒切割機 Dicing Saws（MDS-68A）並取得台灣新型專利，同時申請日、韓專利"],
      en: [
        "Developed the MDS-68A Wafer Dicing Saw; utility model patent granted in Taiwan, applications filed in Japan and Korea",
      ],
    },
  },
  {
    y: "2019",
    items: {
      zh: [
        "開發 多類硬脆材料切割設備及代工服務，如螢光片、碳化矽、矽、石英、AlSiC、鍺 Ge、工程塑膠…",
      ],
      en: [
        "Developed cutting equipment and OEM services for a wider range of hard and brittle materials: fluorescent ceramic, SiC, silicon, quartz, AlSiC, germanium and engineering plastics",
      ],
    },
  },
  {
    y: "2013",
    items: {
      zh: ["開發 藍寶石觸控螢幕、鑽石磨棒、碳化矽（SiC）切割、研磨、拋光製程及耗材、大單晶鑽石"],
      en: [
        "Developed sapphire touch panels, diamond grinding rods, SiC cutting / grinding / polishing processes and consumables, and large single-crystal diamond",
      ],
    },
  },
  {
    y: "2012",
    items: {
      zh: [
        "成功導入 ISO-9001",
        "開發 AnyCut 多功能鑽石線開方（Squaring）切割機",
        "開發 EasyCut 多刃式鑽石線切片（Slicing）切割機",
        "開發 高效益電鍍鑽石線鋸新製程（提升品質與使用壽命）",
        "開發 高效益樹脂（RB）鑽石線鋸新製程（提升品質與減少耗線量 4 米／片）",
      ],
      en: [
        "ISO 9001 successfully implemented",
        "Developed the AnyCut multi-purpose diamond wire squaring machine",
        "Developed the EasyCut multi-wire diamond slicing machine",
        "Developed a high-efficiency electroplated diamond wire process (better quality and longer life)",
        "Developed a high-efficiency resin-bond (RB) diamond wire process (4 m/wafer less wire consumption)",
      ],
    },
  },
  {
    y: "2011",
    items: {
      zh: [
        "成立 貴重儀器中心並與各大學等學術界合作交流",
        "開發 PV 矽芯片分機",
        "開發 單刃式線切割截斷機",
        "開發 PV 單、多晶鑽石線切片製程",
      ],
      en: [
        "Established a precision instrument centre and began academic collaboration with universities",
        "Developed a PV silicon chip separator",
        "Developed the single-wire cropping machine",
        "Developed PV mono/poly diamond wire slicing processes",
      ],
    },
  },
  {
    y: "2010",
    items: {
      zh: [
        "開發 鑽石線切割用冷卻液（Dia-Coolant）",
        "開發 鑽石線專用耐磨耗導輪（Dia-Pulley）",
        "開發 固、液分離機 G-Power（Solid／Liquid Separator）",
      ],
      en: [
        "Developed Dia-Coolant for diamond wire cutting",
        "Developed the Dia-Pulley wear-resistant guide pulley",
        "Developed the G-Power solid/liquid separator",
      ],
    },
  },
  {
    y: "2009",
    items: {
      zh: ["成功開發 GigaBond Epoxy Adhesives（AB 膠）", "開發 多刃式線切割機（Multi-Wire Saws）"],
      en: ["Successfully developed GigaBond epoxy adhesives", "Developed multi-wire saw machines"],
    },
  },
  {
    y: "2008",
    items: {
      zh: [
        "成功開發並正式生產 鑽石線（Diamond Coating Wire）",
        "成為全世界第四家、台灣及中國唯一成功量產鑽石線的企業",
        "開發 自製多刃式線切割機",
        "開發 藍寶石基板製程、設備及耗材",
      ],
      en: [
        "Successfully developed and began mass production of Diamond Coating Wire",
        "Became the fourth company worldwide — and the only one in Taiwan and China — to mass-produce diamond wire",
        "Developed an in-house multi-wire saw machine",
        "Developed sapphire substrate processes, equipment and consumables",
      ],
    },
  },
  {
    y: "2007",
    items: {
      zh: [
        "成立 微鑽石線材設備有限公司（MDWEC）",
        "開發 太陽能矽晶棒線切割用磨料－碳化矽（SiC）及回收系統",
        "開發〝樹脂燒結〞及〝電鑄〞鑽石線鋸（Diamond Coating Wire）等產品切割機",
      ],
      en: [
        "Micron Diamond Wire & Equipment Co., Ltd. (MDWEC) founded",
        "Developed silicon carbide (SiC) abrasive and a recycling system for solar silicon ingot wire cutting",
        "Developed resin-sintered and electroformed diamond wire saws and the matching cutting machines",
      ],
    },
  },
];

export const NEWS = [
  {
    slug: "cowos-2025",
    year: "2025",
    iso: "2025-02-04",
    date: { zh: "2025 年 2 月 4 日", en: "4 February 2025" } as LS,
    place: { zh: "台北訊", en: "Taipei" } as LS,
    category: { zh: "技術應用", en: "Technology" } as LS,
    title: {
      zh: "微鑽石技術突破，助力台積電 CoWoS 產能擴增",
      en: "MDWEC technology breakthrough supports TSMC CoWoS capacity expansion",
    } as LS,
    body: {
      zh: "隨著 AI 應用爆發，先進晶片需求攀升，CoWoS（Chip-on-Wafer-on-Substrate）先進封裝技術成為全球科技巨頭競逐的關鍵戰場。",
      en: "As AI applications take off and demand for advanced chips climbs, CoWoS (Chip-on-Wafer-on-Substrate) advanced packaging has become a key battleground for the world's technology leaders.",
    } as LS,
  },
];

export const NEWS_YEARS = ["2025", "2024", "2016"];
export const NEWS_CATEGORIES: LA = {
  zh: ["公司消息", "太陽能相關", "技術應用"],
  en: ["Company news", "Solar energy", "Technology"],
};

export const AFFILIATES = [
  { name: "WEC Group", href: "https://www.wec.com.tw" },
  { name: { zh: "阿里山鑽石 Alishan Diamond", en: "Alishan Diamond" }, href: "https://www.alishandiamond.com/" },
  { name: "Imprint Diamond", href: "https://www.imprint-diamond.com/" },
  { name: "Facebook", href: "https://www.facebook.com/wecgroup" },
  { name: "YouTube", href: "https://www.youtube.com/user/WECGroup1992" },
] as { name: string | LS; href: string }[];

export const PROCESSES: { zh: string; en: string }[] = [
  { zh: "開方", en: "Squaring" },
  { zh: "切片", en: "Slicing" },
  { zh: "截斷", en: "Cutting" },
  { zh: "晶粒切割", en: "Dicing" },
];

/* ============================================================
   Home showcases — two picture rows carried over from the old
   mdwec.com.tw home page. Chinese is the original wording.
   ============================================================ */
export type ShowcaseItem = { src: string; w: number; h: number; caption: LS };
export type Showcase = { id: string; title: LS; items: ShowcaseItem[] };

export const HOME_SHOWCASES: Showcase[] = [
  {
    id: "service",
    title: { zh: "以客為尊的服務團隊", en: "A service team built around the customer" },
    items: [
      {
        src: "/images/team/team7.jpg",
        w: 600,
        h: 600,
        caption: { zh: "客製化 設備＋物料 專業", en: "Custom equipment and materials, together" },
      },
      {
        src: "/images/team/team8.jpg",
        w: 600,
        h: 600,
        caption: { zh: "具備 砂漿切割設備改機 技術", en: "Retrofitting slurry saws to diamond wire" },
      },
      {
        src: "/images/team/team11.jpg",
        w: 600,
        h: 600,
        caption: {
          zh: "推陳出新的其他切割相關代工服務",
          en: "Contract cutting services that keep expanding",
        },
      },
    ],
  },
  {
    id: "strategy",
    title: { zh: "銳不可擋的策略進擊", en: "A strategy that keeps moving" },
    items: [
      {
        src: "/images/team/team10.jpg",
        w: 600,
        h: 600,
        caption: { zh: "積極尋找策略聯盟夥伴", en: "Actively seeking strategic alliance partners" },
      },
      {
        src: "/images/team/team9.jpg",
        w: 600,
        h: 600,
        caption: { zh: "目標進行太陽能電站整合", en: "Working towards solar power plant integration" },
      },
      {
        src: "/images/team/team12.jpg",
        w: 600,
        h: 600,
        caption: {
          zh: "活絡鑽石切割技術之多方面運用",
          en: "Widening where diamond cutting technology is applied",
        },
      },
    ],
  },
];

/* ============================================================
   Clients — the "專業線切割設備製造 / 我們的客戶" block from the old
   home page. Company names are transcribed exactly as they are set
   in each logo, so they are not translated.
   ============================================================ */
export const CLIENT_SECTION = {
  title: { zh: "專業線切割設備製造", en: "Professional Sawing Equipment Manufacturing" } as LS,
  points: {
    zh: [
      "超過 20 年專業鑽石切割技術",
      "應用範圍涵蓋 科技、光電 等產業",
      "擁有多數知名大廠商之優越銷售實績",
    ],
    en: [
      "More Than 20 Years of Professional Diamond Sawing Technology",
      "Applications Range from Science and Technology to Optoelectronics Industries",
      "Reach a Great Sales Achievement with The Well-known Large Companies",
    ],
  } as LA,
  clientsTitle: { zh: "我們的客戶", en: "Our customers" } as LS,
  /** 135×105 each — small files, so they are laid out small on purpose. */
  logos: [
    { name: "國碩集團", src: "/images/client-logos/client1.jpg" },
    { name: "SAS 中美矽晶製品股份有限公司", src: "/images/client-logos/client2.jpg" },
    { name: "AUO 友達光電", src: "/images/client-logos/client3.jpg" },
    { name: "Danen 達能科技", src: "/images/client-logos/client4.jpg" },
    { name: "Green Energy Technology", src: "/images/client-logos/client5.jpg" },
    { name: "MOTECH 茂迪股份有限公司", src: "/images/client-logos/client6.jpg" },
    { name: "昱成光能 UTECH SOLAR", src: "/images/client-logos/client7.jpg" },
    { name: "EVERSOL", src: "/images/client-logos/client8.jpg" },
  ],
  banner: {
    src: "/images/stock3/32.jpg",
    w: 1200,
    h: 447,
    caption: {
      zh: "擁有多數知名大廠商之優越銷售實績",
      en: "Reach a Great Sales Achievement with The Well-known Large Companies",
    } as LS,
  },
};
