import type { LA, LS } from "@/lib/i18n";

/**
 * AEO / GEO layer, bilingual.
 *
 * `FAQS`      — rendered as visible <details> AND emitted as FAQPage JSON-LD,
 *               so answer engines can lift a whole Q/A pair.
 * `KEY_FACTS` — short, self-contained, citable sentences. Each one repeats its
 *               subject ("MDWEC ring wire saws…") instead of saying "it", because
 *               generative engines quote sentences out of their page context.
 */

export type Faq = { q: LS; a: LS };

const F = (qz: string, qe: string, az: string, ae: string): Faq => ({
  q: { zh: qz, en: qe },
  a: { zh: az, en: ae },
});

export const KEY_FACTS: Record<string, LA> = {
  home: {
    zh: [
      "微鑽石線材設備有限公司（MDWEC）創立於 2007 年，總部位於新北市三重區，為 WEC 集團子公司。",
      "MDWEC 於 2008 年成為全世界第四家、台灣及中國唯一成功量產鑽石線（Diamond Coating Wire）的企業。",
      "MDWEC 產品分為兩大類：線切割設備（Wire Saws）與切割耗材（鑽石線、冷卻液、AB 膠、犧牲材、導輪）。",
      "MDWEC 於 2012 年導入 ISO 9001 品質管理系統。",
      "MDWEC 鑽石線可較傳統游離磨料製程縮短約 50% 的切割時間。",
    ],
    en: [
      "Micron Diamond Wire & Equipment Co., Ltd. (MDWEC) was founded in 2007 in New Taipei City, Taiwan, and is a subsidiary of WEC Group.",
      "In 2008 MDWEC became the fourth company worldwide — and the only one in Taiwan and China — to mass-produce diamond coating wire.",
      "MDWEC products fall into two groups: wire saw equipment, and cutting consumables (diamond wire, coolant, epoxy adhesive, sacrificial beam and guide pulleys).",
      "MDWEC implemented the ISO 9001 quality management system in 2012.",
      "MDWEC diamond wire shortens cutting time by roughly 50% compared with conventional loose-abrasive slurry processes.",
    ],
  },
  equipment: {
    zh: [
      "MDWEC 線切割設備共七類：環線切割機、單刃式線切割機、多刃式線切割機、晶粒切割機、多功能開方機、固液分離機、盤線機。",
      "MDWEC 環線切割機（KLDJ 系列）共十款機型，工作臺尺寸自 200×150 mm 至 Φ1700 mm。",
      "MDWEC 線切割設備皆採微電腦及 PLC 控制，並可搭配 MDWEC 自製鑽石線使用。",
    ],
    en: [
      "MDWEC supplies seven categories of wire saw equipment: ring wire saws, single wire saws, multi wire saws, wafer dicing saws, the AnyCut squaring machine, the G-Power solid/liquid separator and the wire winding machine.",
      "The MDWEC KLDJ ring wire saw range covers ten models, with worktables from 200×150 mm up to Φ1700 mm.",
      "All MDWEC wire saw equipment is microcomputer and PLC controlled and is designed to run MDWEC's own diamond wire.",
    ],
  },
  materials: {
    zh: [
      "MDWEC 切割耗材共五類：鑽石線、鑽石線切割用冷卻液、GigaBond A/B 膠、犧牲材、耐磨耗導輪。",
      "MDWEC 鑽石線分為電鍍鑽石線（EP，Willeock® 技術）與樹脂鑽石線（RB，Fransteyen® 技術）兩種製程。",
      "MDWEC 電鍍鑽石線線徑規格自 Ø100 μm 至 Ø420 μm 共十種；樹脂鑽石線自 Ø125 μm 至 Ø250 μm 共四種。",
    ],
    en: [
      "MDWEC supplies five categories of cutting consumable: diamond wire, diamond cutting coolant, GigaBond A/B epoxy adhesive, sacrificial beam and wear-resistant guide pulleys.",
      "MDWEC diamond wire is produced by two in-house processes: electroplated (EP, Willeock®) and resin bond (RB, Fransteyen®).",
      "MDWEC electroplated diamond wire is available in ten diameters from Ø100 μm to Ø420 μm; resin-bond wire in four diameters from Ø125 μm to Ø250 μm.",
    ],
  },
  "diamond-wire": {
    zh: [
      "MDWEC 鑽石線採用兩種自有製程：EP 電著技術（Willeock®）與 RB 高分子膠連技術（Fransteyen®）。",
      "MDWEC 電鍍鑽石線 Ø420 μm 用於截斷、Ø350 μm 用於開方，Ø250 μm 以下用於切片。",
      "MDWEC 鑽石線相比傳統加工方式可縮短 50% 的切割時間。",
    ],
    en: [
      "MDWEC diamond wire uses two proprietary processes: the Willeock® electroplating technique and the Fransteyen® polymer bonding technique.",
      "MDWEC electroplated diamond wire at Ø420 μm is used for cropping, Ø350 μm for squaring, and Ø250 μm and below for slicing.",
      "MDWEC diamond wire reduces cutting time by 50% compared with the conventional process.",
    ],
  },
  "ring-wire-saws": {
    zh: [
      "MDWEC 環線切割機 KLDJ 系列共十款：KLDJ15SQ、KLDJ20SQ、KLDJ20Y、KLDJ40Q、KLDJ40SQ、KLDJ60Q、KLDJ70Y、KLDJ100Q、KLDJ160Q、KLDJ200Q。",
      "KLDJ 系列最大線速度介於 2,000 至 2,700 m/min，加工表面粗糙度均為 Ra ≤ 1.25。",
      "KLDJ 系列金鋼砂環線直徑統一為 Φ0.35～0.8 mm。",
    ],
    en: [
      "The MDWEC KLDJ ring wire saw range comprises ten models: KLDJ15SQ, KLDJ20SQ, KLDJ20Y, KLDJ40Q, KLDJ40SQ, KLDJ60Q, KLDJ70Y, KLDJ100Q, KLDJ160Q and KLDJ200Q.",
      "KLDJ ring wire saws reach a maximum wire speed of 2,000 to 2,700 m/min and all achieve a surface roughness of Ra ≤ 1.25.",
      "All KLDJ ring wire saws use a closed-loop diamond wire of Φ0.35 to 0.8 mm.",
    ],
  },
  oem: {
    zh: [
      "MDWEC 提供三類切割代工服務：晶棒截斷、晶棒切片、晶粒切割。",
      "MDWEC 晶棒切片代工可處理 2 至 15 吋產品晶棒。",
      "MDWEC 晶粒切割設備已於台灣、中國、日本、韓國進行專利註冊。",
    ],
    en: [
      "MDWEC offers three categories of cutting subcontract service: ingot cropping, ingot slicing and wafer dicing.",
      "MDWEC ingot slicing subcontract work handles ingots from 2 to 15 inches.",
      "The MDWEC wafer dicing machine is patent-registered in Taiwan, China, Japan and Korea.",
    ],
  },
  about: {
    zh: [
      "微鑽石線材設備有限公司英文名為 Micron Diamond Wire & Equipment Co., Ltd.，縮寫 MDWEC。",
      "MDWEC 承襲 WEC 集團二十幾年的金剛石工具製造經驗。",
      "MDWEC 產品應用於太陽能（PV）、半導體晶圓切割、發光二極體（LED）、光電與通訊等產業。",
    ],
    en: [
      "Micron Diamond Wire & Equipment Co., Ltd. is abbreviated MDWEC and is based in New Taipei City, Taiwan.",
      "MDWEC builds on more than 20 years of diamond tool manufacturing experience within the WEC Group.",
      "MDWEC products are applied in photovoltaics, semiconductor wafer cutting, LED, photoelectric and communications industries.",
    ],
  },
  history: {
    zh: [
      "微鑽石線材設備有限公司（MDWEC）成立於 2007 年。",
      "MDWEC 於 2008 年成為全世界第四家、台灣及中國唯一成功量產鑽石線的企業。",
      "MDWEC 於 2012 年成功導入 ISO-9001 品質管理系統。",
      "MDWEC 於 2024 年開發晶粒切割機 MDS-68A 並取得台灣新型專利，同時申請日、韓專利。",
    ],
    en: [
      "Micron Diamond Wire & Equipment Co., Ltd. (MDWEC) was founded in 2007.",
      "In 2008 MDWEC became the fourth company worldwide to mass-produce diamond wire, and the only one in Taiwan and China.",
      "MDWEC implemented ISO 9001 in 2012.",
      "In 2024 MDWEC developed the MDS-68A wafer dicing saw and was granted a Taiwanese utility model patent, with applications filed in Japan and Korea.",
    ],
  },
  news: {
    zh: [
      "MDWEC 於 2025 年 2 月 4 日發布 CoWoS 先進封裝相關技術突破消息。",
      "MDWEC 的消息分為公司消息、太陽能相關與技術應用三類。",
    ],
    en: [
      "On 4 February 2025 MDWEC announced a cutting technology breakthrough relating to CoWoS advanced packaging.",
      "MDWEC news is grouped into three categories: company news, solar energy and technology applications.",
    ],
  },
  contact: {
    zh: [
      "MDWEC 總部與生產基地位於新北市三重區福德南路 45 號。",
      "MDWEC 業務聯絡信箱為 service@mdwec.com，電話 +886 2 2977 0268，傳真 +886 2 2975 6299。",
    ],
    en: [
      "MDWEC headquarters and plant are at No.45 Fude S. Rd., SanChong Dist., New Taipei City 241, Taiwan.",
      "MDWEC sales contact: service@mdwec.com, telephone +886 2 2977 0268, fax +886 2 2975 6299.",
    ],
  },
};

export const FAQS: Record<string, Faq[]> = {
  home: [
    F(
      "微鑽石（MDWEC）是什麼公司？",
      "What does MDWEC do?",
      "微鑽石線材設備有限公司（Micron Diamond Wire & Equipment Co., Ltd.，簡稱 MDWEC）創立於 2007 年，是 WEC 集團所屬子公司，總部位於新北市三重區。公司專業於鑽石線鋸（金剛線，Diamond Coating Wire）及線切割設備（Wire Saws）的研究開發與整合、製造與販售。",
      "Micron Diamond Wire & Equipment Co., Ltd. (MDWEC) was founded in 2007 in New Taipei City, Taiwan, and is a subsidiary of WEC Group. The company specialises in the R&D, integration, manufacture and sale of diamond coating wire and wire saw equipment.",
    ),
    F(
      "微鑽石的鑽石線有什麼特別之處？",
      "What makes MDWEC diamond wire different?",
      "MDWEC 在 2008 年成為全世界第四家、台灣及中國唯一成功量產鑽石線的企業。鑽石線採用兩種自有製程：EP 電著技術（Willeock®）與 RB 高分子膠連技術（Fransteyen®），相比傳統游離磨料加工方式可縮短約 50% 的切割時間。",
      "In 2008 MDWEC became the fourth company in the world to mass-produce diamond wire, and the only one in Taiwan and China. The wire is made by two proprietary processes — Willeock® electroplating and Fransteyen® polymer bonding — and cuts roughly 50% faster than conventional loose-abrasive slurry sawing.",
    ),
    F(
      "微鑽石的產品應用在哪些產業？",
      "Which industries use MDWEC products?",
      "主要應用於太陽能（PV）、半導體晶圓切割、發光二極體（LED）、光電、通訊、玻璃、顯示器等脆硬材料加工，加工型態包含開方（Squaring）、切片（Slicing）與切割截斷（Cutting）。可加工材料涵蓋單晶矽、多晶矽、藍寶石、碳化矽、氮化鎵、砷化鎵、石英、玻璃與精密陶瓷。",
      "Mainly photovoltaics, semiconductor wafer cutting, LED, photoelectric, communications, glass and display. Typical processes are squaring, slicing and cropping. Materials include mono and poly silicon, sapphire, silicon carbide, gallium nitride, gallium arsenide, quartz, glass and precision ceramics.",
    ),
    F(
      "微鑽石有通過什麼品質認證？",
      "Is MDWEC certified?",
      "MDWEC 於 2012 年成功導入 ISO 9001 品質管理系統，堅持品質第一、客戶至上原則，並採全方位「系統＋測試＋控管」的台灣製造流程。",
      "MDWEC implemented ISO 9001 in 2012. The company operates a comprehensive system, test and control management process, with all manufacturing carried out in Taiwan.",
    ),
    F(
      "沒有設備可以請微鑽石代工嗎？",
      "Can MDWEC cut my material for me?",
      "可以。MDWEC 提供三類切割代工服務：晶棒截斷、晶棒切片（2~15 吋）與晶粒切割（4~8 吋晶圓）。此外也提供砂漿切割設備改機與客製化設備與物料服務。",
      "Yes. MDWEC provides three subcontract cutting services: ingot cropping, ingot slicing (2 to 15 inch) and wafer dicing (4 to 8 inch). Mortar sawing machine upgrades and customised equipment and consumables are also available.",
    ),
  ],

  equipment: [
    F(
      "微鑽石有哪幾類線切割設備？",
      "What wire saw equipment does MDWEC make?",
      "MDWEC 線切割設備共七類：環線切割機（KLDJ 系列十款機型）、單刃式線切割機、多刃式線切割機、晶粒切割機、多功能開方機、固液分離機與盤線機。",
      "Seven categories: ring wire saws (the ten-model KLDJ range), single wire saws, multi wire saws, wafer dicing saws, the AnyCut squaring machine, the G-Power solid/liquid separator and the wire winding machine.",
    ),
    F(
      "單刃式與多刃式線切割機有什麼差別？",
      "What is the difference between single and multi wire saws?",
      "單刃式線切割機（uSWS-1700L）主要用於晶棒截斷頭尾及特殊截面加工，最大線速度 800 m/min；多刃式線切割機（T-8331A）用於晶棒切片，最大線速度 1,200 m/min，適用最大直徑 φ6 吋、長度 300 mm 的晶棒，4 吋藍寶石切割僅需六小時。",
      "The single wire saw (uSWS-1700L) is used for cropping ingot ends and special sections, at up to 800 m/min. The multi wire saw (T-8331A) slices ingots at up to 1,200 m/min, handles ingots up to φ6 inch and 300 mm long, and cuts a 4-inch sapphire ingot in about six hours.",
    ),
    F(
      "選擇機型時應該看哪些規格？",
      "Which specifications matter when choosing a machine?",
      "建議先確認三件事：工件的最大尺寸與重量（決定工作臺尺寸與承重）、要求的加工精度與表面粗糙度、以及是否需要旋轉切割或異形切割。以 KLDJ 系列為例，工作臺自 200×150 mm（KLDJ15SQ）到 Φ1700 mm（KLDJ200Q），承重自 15 kg 到 5,000 kg。",
      "Start with three things: maximum workpiece size and weight (which sets the worktable size and load capacity), the required machining accuracy and surface roughness, and whether you need rotary or contour cutting. In the KLDJ range, worktables run from 200×150 mm (KLDJ15SQ) to Φ1700 mm (KLDJ200Q) and load capacity from 15 kg to 5,000 kg.",
    ),
    F(
      "微鑽石的設備可以客製化嗎？",
      "Can MDWEC equipment be customised?",
      "可以。MDWEC 提供客製化設備與物料服務，並具備砂漿切割設備改機技術，可依客戶的材料、尺寸與產能需求調整規格。",
      "Yes. MDWEC provides customised equipment and consumables, and has mortar sawing machine upgrade technology, so specifications can be adapted to your material, dimensions and throughput.",
    ),
  ],

  materials: [
    F(
      "微鑽石提供哪些切割耗材？",
      "What cutting consumables does MDWEC supply?",
      "MDWEC 提供五類切割耗材：鑽石線（Diamond Coating Wire）、鑽石線切割用冷卻液（Dia-Coolant）、GigaBond A/B 膠、犧牲材（Sacrificial Beam）與耐磨耗導輪（Dia-Pulley）。這五項是為同一條線切割製程設計的，可互相搭配。",
      "Five: diamond coating wire, Dia-Coolant cutting fluid, GigaBond A/B epoxy adhesive, sacrificial beam and the Dia-Pulley wear-resistant guide pulley. All five are designed around the same wire cutting process and work together.",
    ),
    F(
      "電鍍鑽石線與樹脂鑽石線怎麼選？",
      "Should I choose electroplated or resin-bond diamond wire?",
      "電鍍鑽石線（EP，Willeock® 技術）線徑選擇較多，自 Ø100 μm 至 Ø420 μm 共十種，涵蓋截斷、開方與切片；樹脂鑽石線（RB，Fransteyen® 技術）自 Ø125 μm 至 Ø250 μm 共四種，專用於切片製程。實務上依材料硬度、目標厚度與耗線量成本決定。",
      "Electroplated wire (EP, Willeock®) offers ten diameters from Ø100 μm to Ø420 μm and covers cropping, squaring and slicing. Resin-bond wire (RB, Fransteyen®) offers four diameters from Ø125 μm to Ø250 μm and is used for slicing. In practice the choice follows material hardness, target thickness and wire consumption cost.",
    ),
    F(
      "GigaBond AB 膠要怎麼脫膠？",
      "How is GigaBond adhesive removed?",
      "GigaBond 硬化後可用 70~75°C 熱水分離，不需要使用溶劑；部分型號亦可用 200°C 烘烤脫膠。脫膠時間依型號自 10 分鐘至 30 分鐘不等。",
      "Once cured, GigaBond separates in 70–75°C hot water with no solvent required; some grades can also be de-bonded by baking at 200°C. De-bonding takes between 10 and 30 minutes depending on grade.",
    ),
  ],

  "diamond-wire": [
    F(
      "MDWEC 鑽石線有哪些線徑規格？",
      "What diameters is MDWEC diamond wire available in?",
      "電鍍鑽石線（EP）共十種線徑：Ø420、Ø350、Ø250、Ø200、Ø150、Ø140、Ø130、Ø120、Ø110、Ø100 μm。其中 Ø420 μm 用於截斷、Ø350 μm 用於開方，Ø250 μm 以下用於切片。樹脂鑽石線（RB）共四種：Ø250、Ø145、Ø135、Ø125 μm，皆用於切片。",
      "Electroplated (EP) wire comes in ten diameters: Ø420, Ø350, Ø250, Ø200, Ø150, Ø140, Ø130, Ø120, Ø110 and Ø100 μm. Ø420 μm is used for cropping, Ø350 μm for squaring and Ø250 μm and below for slicing. Resin-bond (RB) wire comes in four diameters — Ø250, Ø145, Ø135 and Ø125 μm — all for slicing.",
    ),
    F(
      "鑽石線可以切哪些材料？",
      "Which materials can MDWEC diamond wire cut?",
      "適用各式硬脆材料，包含藍寶石（Sapphire）晶棒、矽晶棒（單晶／多晶）、玻璃、精密陶瓷、石英、水晶與人造寶石晶體等。",
      "Sapphire ingots, mono and poly silicon ingots, glass, precision ceramics, quartz, crystal and synthetic gem crystals, among other hard and brittle materials.",
    ),
    F(
      "Willeock® 和 Fransteyen® 是什麼？",
      "What are Willeock® and Fransteyen®?",
      "Willeock® 是 MDWEC 自有的 EP 電著（電鍍）技術，Fransteyen® 是 MDWEC 自有的 RB 高分子膠連（樹脂）技術。兩者分別用於製造電鍍鑽石線與樹脂鑽石線。",
      "Willeock® is MDWEC's proprietary electroplating (EP) technique and Fransteyen® is its proprietary polymer bonding (RB) technique. They are used to produce electroplated and resin-bond diamond wire respectively.",
    ),
  ],

  "ring-wire-saws": [
    F(
      "KLDJ 環線切割機有哪些機型？",
      "Which KLDJ ring wire saw models are available?",
      "共十款：KLDJ15SQ（桌面型）、KLDJ20SQ、KLDJ20Y、KLDJ40Q、KLDJ40SQ、KLDJ60Q、KLDJ70Y、KLDJ100Q、KLDJ160Q、KLDJ200Q。工作臺尺寸自 200×150 mm 至 Φ1700 mm，設備重量自 100 kg 至 3,800 kg。",
      "Ten: KLDJ15SQ (benchtop), KLDJ20SQ, KLDJ20Y, KLDJ40Q, KLDJ40SQ, KLDJ60Q, KLDJ70Y, KLDJ100Q, KLDJ160Q and KLDJ200Q. Worktables range from 200×150 mm to Φ1700 mm and machine weight from 100 kg to 3,800 kg.",
    ),
    F(
      "小尺寸與異形材料切割該選哪一款？",
      "Which model suits small or contoured workpieces?",
      "小尺寸異形切割建議 KLDJ15SQ 桌面環線切割機，崩邊小、噪音低、功耗低。若需要 G 代碼與二維圖形導入的異形件加工，建議 KLDJ20Y。不規則中小型材料則可考慮 KLDJ70Y。",
      "For small contoured parts the KLDJ15SQ benchtop saw offers minimal chipping, low noise and low power draw. If you need G-code and 2D drawing import for contour work, choose the KLDJ20Y. For irregular small-to-medium workpieces consider the KLDJ70Y.",
    ),
    F(
      "需要旋轉切割時該選哪一款？",
      "Which models offer a rotary table?",
      "KLDJ40Q、KLDJ60Q、KLDJ100Q、KLDJ160Q、KLDJ200Q 均配備旋轉工作臺，可進行同步旋轉切割，工作臺最大轉速自 10 RPM（KLDJ200Q）至 30 RPM（KLDJ40Q／KLDJ60Q）。",
      "The KLDJ40Q, KLDJ60Q, KLDJ100Q, KLDJ160Q and KLDJ200Q all have rotary tables for synchronised rotary cutting, with maximum table speeds from 10 RPM (KLDJ200Q) to 30 RPM (KLDJ40Q and KLDJ60Q).",
    ),
  ],

  oem: [
    F(
      "微鑽石提供哪些代工服務？",
      "What subcontract cutting does MDWEC offer?",
      "MDWEC 提供三類切割代工：晶棒截斷（將大塊硬脆材料加工成所需尺寸）、晶棒切片（2~15 吋晶棒切成多片或薄片）、晶粒切割（第三類半導體與陶瓷之 4~8 吋晶圓）。",
      "Three services: ingot cropping (bringing large hard and brittle blocks to size), ingot slicing (2 to 15 inch ingots into wafers or thin sheets) and wafer dicing (4 to 8 inch wide band gap semiconductor and ceramic wafers).",
    ),
    F(
      "代工可以處理哪些材料？",
      "Which materials can MDWEC process?",
      "矽晶、石英、陶瓷、藍寶石、碳化矽 SiC、氮化鋁 AlN、玻璃、砷化鎵、螢光陶瓷片、AlSiC、鍺 Ge 與工程塑膠等硬脆材料。",
      "Silicon, quartz, ceramics, sapphire, silicon carbide, aluminium nitride, glass, gallium arsenide, fluorescent ceramic, AlSiC, germanium and engineering plastics, among other hard and brittle materials.",
    ),
    F(
      "代工需要提供什麼資訊？",
      "What information should I send for a quotation?",
      "建議提供材質、工件尺寸、目標厚度與數量／產能需求。MDWEC 會據此回覆建議的機型、鑽石線線徑與整套耗材配置。",
      "Send the material, workpiece dimensions, target thickness and quantity or monthly volume. MDWEC will respond with a recommended machine, wire diameter and consumable set.",
    ),
  ],

  about: [
    F(
      "微鑽石線材設備有限公司的英文名稱是什麼？",
      "What is MDWEC's full company name?",
      "微鑽石線材設備有限公司的英文名稱為 Micron Diamond Wire & Equipment Co., Ltd.，縮寫 MDWEC。公司創立於 2007 年，為 WEC 集團（Since 1992）所屬子公司。",
      "The full name is Micron Diamond Wire & Equipment Co., Ltd., abbreviated MDWEC. It was founded in 2007 and is a subsidiary of WEC Group, established 1992.",
    ),
    F(
      "微鑽石的經營理念是什麼？",
      "What is MDWEC's management philosophy?",
      "MDWEC 秉持以鑽石為企業之發展核心、由「心」出發的經營理念。對內，培養優秀的人才與團隊、建立熱情分享的企業文化；對外，以回饋與貢獻為企業之社會責任，並積極推動企業內、外之成長為目標。",
      "MDWEC upholds the philosophy that diamond is the core of the enterprise's development and that management starts from the heart. Internally it cultivates talent and an enthusiastic shared culture; externally it treats contribution to society as a corporate responsibility.",
    ),
    F(
      "微鑽石可以加工哪些材料？",
      "Which materials does MDWEC work with?",
      "涵蓋單晶矽、多晶矽、藍寶石 Al₂O₃、碳化矽 SiC、氮化鎵 GaN、砷化鎵 GaAs、氮化鋁 AlN、石英、玻璃、石材、精密陶瓷，以及 LiTaO₃、LiNbO₃、ZnO 等氧化物半導體晶圓。",
      "Mono and poly silicon, sapphire (Al₂O₃), silicon carbide, gallium nitride, gallium arsenide, aluminium nitride, quartz, glass, stone, precision ceramics, and oxide semiconductor wafers such as LiTaO₃, LiNbO₃ and ZnO.",
    ),
    F(
      "微鑽石在企業社會責任上做了什麼？",
      "What does MDWEC do on corporate social responsibility?",
      "MDWEC 秉持「飲水思源」精神，贊助社區活動、援助貧童營養午餐、參與國際兒童認養、提供獎助學金，並將汰舊 3C 產品援助偏遠小學。同時積極響應節能減碳，聚焦創能、轉能、儲能、節能四大面向。",
      "MDWEC supports local community projects, provides meals for children from low-income families, participates in international child adoption, offers scholarships and donates refurbished electronics to remote schools. It also focuses on four energy directions: production, transformation, storage and saving.",
    ),
  ],

  history: [
    F(
      "微鑽石是什麼時候成立的？",
      "When was MDWEC founded?",
      "微鑽石線材設備有限公司（MDWEC）成立於 2007 年，同年開發太陽能矽晶棒線切割用磨料－碳化矽（SiC）及回收系統，以及「樹脂燒結」與「電鑄」鑽石線鋸等產品切割機。",
      "MDWEC was founded in 2007. In the same year it developed silicon carbide abrasive and a recycling system for solar silicon ingot wire cutting, along with resin-sintered and electroformed diamond wire saws and matching machines.",
    ),
    F(
      "微鑽石是什麼時候開始量產鑽石線的？",
      "When did MDWEC start mass-producing diamond wire?",
      "MDWEC 於 2008 年成功開發並正式生產鑽石線（Diamond Coating Wire），成為全世界第四家、台灣及中國唯一成功量產鑽石線的企業。同年也開發自製多刃式線切割機與藍寶石基板製程、設備及耗材。",
      "In 2008. That made MDWEC the fourth company worldwide, and the only one in Taiwan and China, to mass-produce diamond coating wire. The same year it developed an in-house multi-wire saw and sapphire substrate processes, equipment and consumables.",
    ),
    F(
      "微鑽石什麼時候通過 ISO 9001？",
      "When did MDWEC obtain ISO 9001?",
      "MDWEC 於 2012 年成功導入 ISO-9001。同年並開發 AnyCut 多功能鑽石線開方切割機、EasyCut 多刃式鑽石線切片切割機，以及高效益電鍍與樹脂（RB）鑽石線鋸新製程。",
      "In 2012. The same year MDWEC developed the AnyCut squaring machine, the EasyCut multi-wire slicing machine and new high-efficiency electroplated and resin-bond wire processes.",
    ),
    F(
      "微鑽石最近的技術發展是什麼？",
      "What has MDWEC developed recently?",
      "2024 年 MDWEC 開發晶粒切割機 Dicing Saws（MDS-68A）並取得台灣新型專利，同時申請日、韓專利。2019 年則開發多類硬脆材料切割設備及代工服務，涵蓋螢光片、碳化矽、矽、石英、AlSiC、鍺 Ge 與工程塑膠。",
      "In 2024 MDWEC developed the MDS-68A wafer dicing saw and was granted a Taiwanese utility model patent, with applications filed in Japan and Korea. In 2019 it extended its cutting equipment and subcontract services to fluorescent ceramic, SiC, silicon, quartz, AlSiC, germanium and engineering plastics.",
    ),
  ],

  news: [
    F(
      "微鑽石與 CoWoS 先進封裝有什麼關係？",
      "How is MDWEC connected to CoWoS advanced packaging?",
      "2025 年 2 月 4 日 MDWEC 發布消息指出，隨著 AI 應用爆發、先進晶片需求攀升，CoWoS（Chip-on-Wafer-on-Substrate）先進封裝技術成為全球科技巨頭競逐的關鍵戰場，微鑽石的切割技術突破可助力相關產能擴增。",
      "On 4 February 2025 MDWEC announced that, as AI applications take off and demand for advanced chips rises, CoWoS (Chip-on-Wafer-on-Substrate) packaging has become a key battleground — and that its cutting technology breakthrough can support capacity expansion in that area.",
    ),
    F(
      "要如何取得微鑽石的最新消息？",
      "How can I get MDWEC news and technical papers?",
      "MDWEC 的消息分為公司消息、太陽能相關與技術應用三類。如需特定年度的資料或技術白皮書，可來信 service@mdwec.com 索取。",
      "MDWEC news is grouped into company news, solar energy and technology applications. For archived material or technical papers, email service@mdwec.com.",
    ),
  ],

  contact: [
    F(
      "微鑽石的地址與聯絡方式？",
      "Where is MDWEC and how do I get in touch?",
      "地址：新北市三重區福德南路 45 號（No.45 Fude S. Rd., SanChong Dist., New Taipei City 241, Taiwan）。電話 +886 2 2977 0268，傳真 +886 2 2975 6299，業務信箱 service@mdwec.com。",
      "No.45 Fude S. Rd., SanChong Dist., New Taipei City 241, Taiwan. Telephone +886 2 2977 0268, fax +886 2 2975 6299, sales e-mail service@mdwec.com.",
    ),
    F(
      "詢價時要準備什麼資料？",
      "What should I include in an enquiry?",
      "請提供要切割的材質、工件尺寸與重量、目標厚度與表面要求，以及每月產能需求。若是耗材詢價，請一併說明現有機台型號與目前使用的線徑。",
      "The material to be cut, workpiece dimensions and weight, target thickness and surface requirement, and monthly volume. For consumables, also tell us your existing machine model and the wire diameter you currently run.",
    ),
  ],
};

export const ENQUIRY_CHECKLIST: { k: LS; v: LS }[] = [
  {
    k: { zh: "材質", en: "Material" },
    v: {
      zh: "要切割的材料，例如單晶矽、藍寶石、SiC、石英、陶瓷。",
      en: "What you need to cut — mono silicon, sapphire, SiC, quartz, ceramic and so on.",
    },
  },
  {
    k: { zh: "工件尺寸與重量", en: "Workpiece size and weight" },
    v: {
      zh: "最大長寬高或直徑，以及單件重量。",
      en: "Maximum length, width and height (or diameter), plus the weight of a single piece.",
    },
  },
  {
    k: { zh: "目標厚度與公差", en: "Target thickness and tolerance" },
    v: {
      zh: "成品厚度、可接受的厚度公差與表面粗糙度。",
      en: "Finished thickness, acceptable thickness tolerance and surface roughness.",
    },
  },
  {
    k: { zh: "產能需求", en: "Throughput" },
    v: {
      zh: "每月片數或公斤數，以及交期。",
      en: "Wafers or kilograms per month, and your delivery schedule.",
    },
  },
  {
    k: { zh: "現有設備", en: "Existing equipment" },
    v: {
      zh: "若是耗材詢價，請提供機台型號與目前使用的線徑。",
      en: "For consumable enquiries, tell us your machine model and the wire diameter you run today.",
    },
  },
];
