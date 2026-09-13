import Image from "next/image";
import { productLeadImage } from "@/content/productImages";
import type { Locale } from "@/lib/i18n";

/**
 * The lead product photograph, shown in the left column of the page hero.
 *
 * The library mixes tall studio cut-outs (464×800) with wide process strips
 * (840×164), so the frame is a fixed 4:3 box and the file is contained inside
 * it — no crop, and the column keeps the same height whichever product you
 * land on. Returns nothing when a product has no photograph, in which case the
 * hero falls back to its single-column layout with the gem.
 *
 * No visible caption here: it only repeated the title sitting next to it. The
 * description still travels as `alt`, for screen readers and for search.
 */
export default function ProductHeroMedia({ slug, lang }: { slug: string; lang: Locale }) {
  const image = productLeadImage(slug);
  if (!image) return null;

  return (
    <div className="panel gloss flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[24px] bg-white/55 p-6 sm:p-8">
      <Image
        src={image.src}
        alt={image.alt[lang]}
        width={image.w}
        height={image.h}
        priority
        sizes="(min-width: 1024px) 560px, 100vw"
        className="max-h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}
