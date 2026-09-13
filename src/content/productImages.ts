import type { LS } from "@/lib/i18n";

/**
 * Product photography, keyed by product slug.
 *
 * The files came across from the previous MDWEC site and live under
 * `public/images/`. Each machine keeps the folder it arrived in
 * (`KLDJ200Q/...`); shared process shots and diagrams sit in `avatars/`,
 * `products/`, `news/` and `stock/`.
 *
 * `w`/`h` are the file's real pixel size, read off disk when this table was
 * written. `next/image` needs them to reserve the right box before the file
 * arrives, which is what stops the page jumping as it loads. Swap a file and
 * you have to swap the numbers with it.
 */

const S = (zh: string, en: string): LS => ({ zh, en });

export type ProductImage = {
  /** absolute, from the site root */
  src: string;
  w: number;
  h: number;
  alt: LS;
};

/**
 * The first entry of each list is the lead image: it renders large, the rest
 * follow as a thumbnail row. A product with no entry renders no gallery.
 */
const PRODUCT_IMAGES: Record<string, ProductImage[]> = {
  "kldj15sq": [
    { src: "/images/KLDJ15SQ/2865e2e3-958d-4a1d-94a8-7818e22d5395.png", w: 464, h: 800, alt: S("KLDJ15S 桌面環線切割機機台外觀", "KLDJ15S benchtop ring wire saw") },
    { src: "/images/KLDJ15SQ/ecf1668e-980e-4973-9031-e4cd92b31616.jpg", w: 800, h: 800, alt: S("KLDJ15S 正面外觀", "KLDJ15S front view") },
    { src: "/images/KLDJ15SQ/7cf45373-272d-45e9-a12c-eabe2f9e4393.jpg", w: 800, h: 800, alt: S("KLDJ15S 切割區與導輪", "KLDJ15S cutting chamber and guide wheels") },
  ],
  "kldj20sq": [
    { src: "/images/KLDJ20SQ/5cae58ef-49bf-428a-9126-1b03778c7d8d.png", w: 454, h: 600, alt: S("KLDJ20SQ 環線切割機機台外觀", "KLDJ20SQ ring wire saw") },
    { src: "/images/KLDJ20SQ/9826711a-52ed-4302-9f0f-9df8c5af5a82.jpg", w: 1706, h: 1280, alt: S("KLDJ20SQ 正面外觀", "KLDJ20SQ front view") },
    { src: "/images/KLDJ20SQ/1d8b3c4c-3406-4316-b8b0-12cefb526596.jpg", w: 1920, h: 1440, alt: S("KLDJ20SQ 切割區與工作台", "KLDJ20SQ cutting chamber and worktable") },
  ],
  "kldj20y": [
    { src: "/images/KLDJ20Y/35a82e36-b6e6-4fce-b614-a45db5d1337d.png", w: 620, h: 1010, alt: S("KLDJ20Y 環線切割機機台外觀", "KLDJ20Y ring wire saw") },
    { src: "/images/KLDJ20Y/b48aef82-b861-4f53-bf1a-bbdd4e3352be.jpeg", w: 1085, h: 1628, alt: S("KLDJ20Y 機台與控制臂", "KLDJ20Y machine with pendant control arm") },
    { src: "/images/KLDJ20Y/fd23ad49-0642-460f-8f6e-77a7580e6837.jpeg", w: 1267, h: 1232, alt: S("KLDJ20Y 切割區與導輪盤", "KLDJ20Y cutting chamber and guide wheels") },
  ],
  "kldj40q": [
    { src: "/images/KLDJ40Q/7c330dc6-8be6-430b-9626-7e299392cd96.jpg", w: 550, h: 666, alt: S("KLDJ40Q 環線切割機機台外觀", "KLDJ40Q ring wire saw") },
  ],
  "kldj40sq": [
    { src: "/images/KLDJ40SQ/8d7e79a6-b9e3-4807-bcdf-41428cdeedbb-1.png", w: 919, h: 1200, alt: S("KLDJ40SQ 環線切割機機台外觀", "KLDJ40SQ ring wire saw") },
    { src: "/images/KLDJ40SQ/075e38fe-4fba-4be6-a637-8b50dcc5ba24.png", w: 1600, h: 1200, alt: S("KLDJ40SQ 正面外觀", "KLDJ40SQ front view") },
    { src: "/images/KLDJ40SQ/ab0a4a4a-d2c1-4e55-abcb-b0689bd2c12b.jpg", w: 1600, h: 1200, alt: S("KLDJ40SQ 切割區與工作台", "KLDJ40SQ cutting chamber and worktable") },
  ],
  "kldj60q": [
    { src: "/images/KLDJ60Q/90e72219-153d-481e-801b-fcdf4d78f453.png", w: 596, h: 602, alt: S("KLDJ60Q 環線切割機機台外觀", "KLDJ60Q ring wire saw") },
    { src: "/images/KLDJ60Q/159deeaa-4d38-407c-9ea1-f73a89b3cbb3.jpg", w: 800, h: 800, alt: S("KLDJ60Q 正面外觀", "KLDJ60Q front view") },
    { src: "/images/KLDJ60Q/5e4be621-8f6d-40f2-a70e-6e4118fb38f4.jpg", w: 800, h: 800, alt: S("KLDJ60Q 旋轉工作台", "KLDJ60Q rotary worktable") },
  ],
  "kldj70y": [
    { src: "/images/KLDJ70Y/9d231d71-c030-4756-8c60-d311b60448ed.jpg", w: 1706, h: 1280, alt: S("KLDJ70Y 環線切割機機台外觀", "KLDJ70Y ring wire saw") },
  ],
  "kldj100q": [
    { src: "/images/KLDJ100Q/9d49dafb-0c01-4264-9691-26b2b9a967cc.jpg", w: 800, h: 800, alt: S("KLDJ100Q 環線切割機機台外觀", "KLDJ100Q ring wire saw") },
    { src: "/images/KLDJ100Q/478001aa-4a08-4b2c-850d-73d6b5f6fefc.jpg", w: 800, h: 800, alt: S("KLDJ100Q 正面外觀", "KLDJ100Q front view") },
    { src: "/images/KLDJ100Q/0a3f7ffb-37cb-4d5f-b79e-7b4e9c0f9324.jpg", w: 800, h: 800, alt: S("KLDJ100Q 切割區與旋轉工作台", "KLDJ100Q cutting chamber and rotary worktable") },
  ],
  "kldj160q": [
    { src: "/images/KLDJ160Q/d4e5f85f-01e9-4d13-93c4-a2bf9fa3da28.png", w: 800, h: 800, alt: S("KLDJ160Q 環線切割機機台外觀", "KLDJ160Q ring wire saw") },
    { src: "/images/KLDJ160Q/659acdcc-064c-4c3d-a094-3b652d05e145.jpg", w: 800, h: 800, alt: S("KLDJ160Q 正面外觀", "KLDJ160Q front view") },
    { src: "/images/KLDJ160Q/68046b40-24f8-40fd-82bc-fa9bc590d2ed.jpg", w: 800, h: 800, alt: S("KLDJ160Q 切割區與旋轉工作台", "KLDJ160Q cutting chamber and rotary worktable") },
  ],
  "kldj200q": [
    { src: "/images/KLDJ200Q/bdc9d7be-68d3-43b8-85bb-e7e177b9d35f.png", w: 1464, h: 1060, alt: S("KLDJ200Q 環線切割機機台外觀", "KLDJ200Q ring wire saw") },
    { src: "/images/KLDJ200Q/7fb5afed-c2c8-4d03-a0d5-6dda68391e11.jpg", w: 1920, h: 1440, alt: S("KLDJ200Q 正面外觀", "KLDJ200Q front view") },
    { src: "/images/KLDJ200Q/e63b2cca-92b4-4756-bd4c-75d4ce6d2472.jpg", w: 1920, h: 1440, alt: S("KLDJ200Q 側前方外觀", "KLDJ200Q three-quarter view") },
    { src: "/images/KLDJ200Q/222be63b-9273-4a4c-aae3-d687da9a4af9.jpg", w: 1600, h: 1200, alt: S("KLDJ200Q 大型旋轉工作台", "KLDJ200Q large rotary worktable") },
    { src: "/images/KLDJ200Q/4f07d276-effe-4327-97e1-2d532a815fed.jpg", w: 1920, h: 1440, alt: S("KLDJ200Q 切割區內部", "KLDJ200Q cutting chamber interior") },
  ],
  "anycut": [
    { src: "/images/avatars/anycut.jpg", w: 1920, h: 1920, alt: S("AnyCut uAWS-1500 多功能開方機", "AnyCut uAWS-1500 squaring machine") },
  ],
  "single-wire-saws": [
    { src: "/images/news/2025-01MDWEC-Single-Wire-Saws.jpg", w: 616, h: 533, alt: S("單刃式線切割機機台外觀", "Single wire saw machine") },
    { src: "/images/avatars/IMG_1343.jpg", w: 1920, h: 1920, alt: S("單刃式線切割機機台外觀（另一機型）", "Single wire saw machine, alternate model") },
    { src: "/images/products/single-wire-saws-01.png", w: 874, h: 779, alt: S("晶棒截斷加工中", "Ingot being cropped on the machine") },
    { src: "/images/products/0530wec-31874.jpg", w: 800, h: 650, alt: S("晶棒截斷與冷卻液沖洗", "Ingot cropping with coolant flooding the kerf") },
    { src: "/images/products/saw15.jpg", w: 840, h: 164, alt: S("截斷製程實例", "Cropping process examples") },
    { src: "/images/products/saw38.jpg", w: 840, h: 361, alt: S("機構配置示意：冷卻液循環、熱交換器、鋼線管理", "Machine layout: coolant circulation, heat exchanger, wire management") },
  ],
  "multi-wire-saws": [
    { src: "/images/avatars/multi-wire-saws.png", w: 985, h: 789, alt: S("多刃式線切割機 T-8331A", "Multi wire saw T-8331A") },
    { src: "/images/products/multi-wire-saws-01.jpg", w: 823, h: 823, alt: S("線切割機切斷示意圖", "Wire saw slicing schematic") },
    { src: "/images/products/multi-wire-saws-02.jpg", w: 1200, h: 823, alt: S("各尺寸切片成品", "Sliced wafers in a range of diameters") },
    { src: "/images/avatars/uMWF-1G200.jpg", w: 1920, h: 1920, alt: S("uMWF-1G200 多刃式線切割機", "uMWF-1G200 multi wire saw") },
    { src: "/images/avatars/uMWF-1G450.jpg", w: 1920, h: 1920, alt: S("uMWF-1G450 多刃式線切割機", "uMWF-1G450 multi wire saw") },
  ],
  "dicing-saws": [
    { src: "/images/avatars/DicingSaws.jpg", w: 1920, h: 1920, alt: S("晶粒切割機 MDS-68A", "MDS-68A wafer dicing saw") },
    { src: "/images/products/dicing-saws-01.png", w: 986, h: 562, alt: S("晶圓切割示意", "Wafer dicing schematic") },
    { src: "/images/products/DicingSaws01.jpg", w: 421, h: 315, alt: S("切割端面與切割道", "Cut edges and dicing streets") },
    { src: "/images/products/DicingSaws02.jpg", w: 421, h: 315, alt: S("切割完成的晶粒", "Diced chips after cutting") },
    { src: "/images/backgrounds/DICINGSAWS01.jpg", w: 1920, h: 1080, alt: S("MDS-68A 晶粒切割機主視覺", "MDS-68A wafer dicing saw key visual") },
  ],
  "g-power": [
    { src: "/images/avatars/gpower.jpg", w: 1920, h: 1920, alt: S("G-Power UST-3100／UST-3200 固液分離機", "G-Power UST-3100 / UST-3200 solid-liquid separator") },
  ],
  "coiling-machine": [
    { src: "/images/avatars/mwd.jpg", w: 1920, h: 1920, alt: S("MWD-1205 精密盤線機", "MWD-1205 wire winding machine") },
  ],
  "diamond-wire": [
    { src: "/images/avatars/wire.jpg", w: 1920, h: 1920, alt: S("鑽石線線軸", "Diamond wire spools") },
    { src: "/images/products/saw18.jpg", w: 831, h: 327, alt: S("電鍍線與樹脂線結構及 SEM 表面", "Electroplated and resin-bonded wire structure with SEM surfaces") },
    { src: "/images/stock/39.jpg", w: 600, h: 600, alt: S("出貨用鑽石線線軸", "Diamond wire spools ready to ship") },
  ],
  "coolant": [
    { src: "/images/avatars/coolant.jpg", w: 1920, h: 1920, alt: S("DWS 系列冷卻液沖洗切割區", "DWS series coolant flooding the cutting zone") },
  ],
  "gigabond": [
    { src: "/images/avatars/gigabond.jpg", w: 3456, h: 2872, alt: S("GigaBond A／B 膠系列", "GigaBond A/B epoxy adhesive range") },
    { src: "/images/products/saw42.gif", w: 370, h: 168, alt: S("承載與接著配置示意", "Bonding and carrier arrangement") },
    { src: "/images/products/epoxy_clip_image002.gif", w: 576, h: 331, alt: S("承載治具與 V／S 系列使用位置", "Carrier fixture with V- and S-series bond lines") },
    { src: "/images/products/saw_19-2.jpg", w: 440, h: 194, alt: S("硬化強度與熱水浸泡強度曲線", "Cured strength and hot-water immersion strength") },
  ],
  "beam": [
    { src: "/images/avatars/Beam.jpg", w: 1920, h: 1920, alt: S("犧牲材（Beam）", "Sacrificial beams") },
    { src: "/images/products/saw13-1.jpg", w: 667, h: 235, alt: S("犧牲材與應用實例", "Sacrificial beams and application examples") },
  ],
  "pulley": [
    { src: "/images/avatars/pully.jpg", w: 1920, h: 1920, alt: S("Dia-Pulley 耐磨耗導輪", "Dia-Pulley wear-resistant guide pulleys") },
    { src: "/images/products/saw13.jpg", w: 450, h: 239, alt: S("Dia-Pulley 與他牌使用 20 小時後比較", "Dia-Pulley versus another brand after 20 hours") },
  ],
};

export function productImages(slug: string): ProductImage[] {
  return PRODUCT_IMAGES[slug] ?? [];
}

/** The lead shot, which sits beside the title in the hero. */
export function productLeadImage(slug: string): ProductImage | undefined {
  return productImages(slug)[0];
}

/** Everything after the lead shot — the grid further down the page. */
export function productGalleryImages(slug: string): ProductImage[] {
  return productImages(slug).slice(1);
}
