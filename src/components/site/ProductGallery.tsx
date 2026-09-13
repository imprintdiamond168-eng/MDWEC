import Image from "next/image";
import type { Product } from "@/content/products";
import { productGalleryImages } from "@/content/productImages";
import { ui, type Locale } from "@/lib/i18n";
import { SectionHead } from "./Primitives";

/**
 * The rest of a product's photography — the lead shot is already in the hero,
 * so this picks up from the second image.
 *
 * The library is a mix of studio cut-outs, wide process strips and diagrams,
 * so every frame is a fixed box with `object-contain` — nothing is cropped and
 * nothing dictates the height of its neighbour. `unoptimized` is already set
 * globally in next.config.ts, so these ship as the original files; the `sizes`
 * hints stay anyway so they keep working if optimization is ever turned on.
 */
export default function ProductGallery({ product, lang }: { product: Product; lang: Locale }) {
  const images = productGalleryImages(product.slug);
  if (images.length === 0) return null;

  return (
    <section className="relative pb-10 sm:pb-12">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          label={ui("gallery", lang)}
          title={ui(product.category === "equipment" ? "galleryEquipment" : "galleryMaterial", lang)}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <figure
              key={img.src}
              className="panel gloss overflow-hidden rounded-[20px]"
              data-reveal
              style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
            >
              <div className="flex h-[220px] items-center justify-center bg-white/50 p-5">
                <Image
                  src={img.src}
                  alt={img.alt[lang]}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
              <figcaption className="border-t border-ink/8 px-5 py-3.5 text-[13.5px] leading-[1.75] text-ink3">
                {img.alt[lang]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
