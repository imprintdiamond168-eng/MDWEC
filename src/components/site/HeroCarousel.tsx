"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HERO_SLIDES, type HeroSlide } from "@/content/company";
import { localePath, ui, type Locale } from "@/lib/i18n";
import FacetGem, { GEM_PALETTES, TechRings } from "./FacetGem";

const DURATION = 7000;

/**
 * Scrim for a slide backed by video, from sm up. Solid paper under the copy,
 * then a fast fall to nothing so the footage reads as footage rather than as a
 * faint texture. Stops are deliberate rather than an even fade: an even one
 * either drowns the video or leaves the headline sitting on bare metal.
 * #f4f6f8 is --paper.
 */
const VIDEO_SCRIM =
  "linear-gradient(to right," +
  " rgb(244 246 248) 0%," +
  " rgb(244 246 248 / 0.93) 24%," +
  " rgb(244 246 248 / 0.34) 46%," +
  " rgb(244 246 248 / 0) 64%)";


const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const getReduced = () => window.matchMedia(REDUCED_QUERY).matches;
const getReducedServer = () => false;

function SlideArt({
  slide,
  uid,
  active,
  motion,
}: {
  slide: HeroSlide;
  uid: string;
  /** this slide is the one on screen */
  active: boolean;
  /** the carousel is allowed to move: in view, and reduced-motion is off */
  motion: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Only the slide you are looking at should be decoding frames — footage
  // running behind three hidden slides is pure battery drain. Reduced motion
  // holds it on the poster.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active && motion) {
      // React does not always land `muted` in the served HTML, and an unmuted
      // video is refused autoplay outright, so set it on the element too.
      v.muted = true;
      void v.play().catch(() => {
        /* browser declined; the poster is already in place */
      });
    } else {
      v.pause();
    }
  }, [active, motion]);

  return (
    <div className="slide-art absolute inset-0">
      {/* Far field. The backdrop trails furthest behind the scroll, the two
          grids progressively less, which is what reads as depth. Every layer is
          oversized by 10% so the parallax offset never exposes an edge. */}
      <div className="absolute inset-0 overflow-hidden">
        {slide.video ? (
          <div className="absolute inset-[-10%]" data-speed="0.3">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={slide.video.src}
              poster={slide.video.poster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        ) : (
          <div
            className="absolute inset-[-10%]"
            data-speed="0.3"
            style={{
              background: `radial-gradient(130% 110% at 76% 24%, ${slide.wash[0]} 0%, ${slide.wash[1]} 48%, #f7f9fb 100%)`,
            }}
          />
        )}
        {/* The grids are drawn for a flat wash. Over footage they read as haze,
            so a video slide gets a fraction of them. */}
        {!slide.video && (
          <div className="absolute inset-[-10%] grid-fine opacity-60" data-speed="0.22" />
        )}
        <div
          className={`absolute inset-[-10%] grid-lines ${slide.video ? "opacity-25" : "opacity-90"}`}
          data-speed="0.15"
        />
      </div>

      {/* Mid field. data-speed goes on a plain wrapper, never on the ring box
          itself — that one already owns its transform for centring. */}
      <div className="pointer-events-none absolute inset-0" data-speed="0.1">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[120vw] -translate-x-1/2 -translate-y-1/2 sm:w-[78vw] lg:w-[54vw]">
          <TechRings className="spin-slower h-full w-full opacity-60" />
        </div>
      </div>

      {/* Near field. A negative speed outruns the scroll, so the gem reads as
          the closest object. Wrapper again, because .gem-float animates
          transform on the inner element. A video slide has no gem: the footage
          is the subject, and the gem sat right on top of it. */}
      {!slide.video && (
        <div className="absolute inset-0" data-speed="-0.12">
          <div className="absolute right-[-26%] top-[36%] aspect-square w-[88%] -translate-y-1/2 sm:right-[-8%] sm:top-1/2 sm:w-[58%] lg:right-[1%] lg:w-[42%]">
            <div className="gem-float h-full w-full">
              <FacetGem
                uid={uid}
                sides={slide.sides}
                rotate={slide.rotate}
                palette={GEM_PALETTES[slide.palette] ?? GEM_PALETTES.ice}
                className="h-full w-full drop-shadow-[0_30px_80px_rgba(44,111,143,0.18)]"
              />
            </div>
          </div>
        </div>
      )}

      {slide.video ? (
        <>
          {/* Narrow screens: the copy runs the full width, so the whole frame
              needs a veil or the text sits on bare footage. */}
          <div className="absolute inset-0 bg-paper/78 sm:hidden" />
          {/* Wider: hold near-solid paper under the copy, then get out of the
              way fast so the footage actually carries the right of the frame. */}
          <div className="absolute inset-0 hidden sm:block" style={{ background: VIDEO_SCRIM }} />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-paper/85 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/88 to-transparent sm:via-paper/70" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper to-transparent" />
        </>
      )}
    </div>
  );
}

export default function HeroCarousel({ lang }: { lang: Locale }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const reduced = useSyncExternalStore(subscribeReduced, getReduced, getReducedServer);
  const rootRef = useRef<HTMLElement>(null);

  const paused = hovered || !inView;

  const go = useCallback((next: number) => {
    setActive(() => (next + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = window.setTimeout(() => go(active + 1), DURATION);
    return () => window.clearTimeout(t);
  }, [active, paused, reduced, go]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(active + 1);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(active - 1);
        }
      }}
      onPointerDown={(e) => {
        drag.current = { x: e.clientX, active: true };
      }}
      onPointerUp={(e) => {
        if (!drag.current.active) return;
        const dx = e.clientX - drag.current.x;
        drag.current.active = false;
        if (Math.abs(dx) > 60) go(active + (dx < 0 ? 1 : -1));
      }}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={ui("carouselLabel", lang)}
    >
      {/* 86svh rather than a full screen — the next section peeks in, so the
          page does not open on a wall of empty space */}
      <div className="relative min-h-[640px] sm:min-h-[86svh]">
        {HERO_SLIDES.map((slide, i) => (
          <article
            key={slide.id}
            className="slide"
            data-active={i === active}
            aria-hidden={i !== active}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${HERO_SLIDES.length} — ${slide.eyebrow[lang]}`}
          >
            <SlideArt
              slide={slide}
              uid={`hero-${slide.id}`}
              active={i === active}
              motion={inView && !reduced}
            />

            <div className="relative z-10 flex min-h-[640px] items-center px-4 pb-36 pt-28 sm:min-h-[86svh] sm:px-6 sm:pb-32 lg:px-10">
              <div className="mx-auto w-full max-w-[1440px]" data-speed="-0.04">
                <div className="slide-in max-w-2xl">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[14px] tracking-[0.1em] text-ink3">
                      {slide.index}
                    </span>
                    <span className="h-px w-10 bg-ink/20" />
                    <span className="font-mono text-[14px] tracking-[0.1em] text-steel">
                      {slide.eyebrow[lang]}
                    </span>
                  </div>

                  {/* Solid ink, not the engraved treatment: see the note on
                      .engrave in globals.css for why that one comes out pale. */}
                  {i === 0 ? (
                    <h1 className="display mt-6 whitespace-pre-line text-[clamp(2rem,5.6vw,4.2rem)] text-ink">
                      {slide.title[lang]}
                    </h1>
                  ) : (
                    <p className="display mt-6 whitespace-pre-line text-[clamp(2rem,5.6vw,4.2rem)] text-ink">
                      {slide.title[lang]}
                    </p>
                  )}

                  <ul className="mt-7 flex flex-col gap-2.5">
                    {slide.lines[lang].map((l) => (
                      <li
                        key={l}
                        className="flex gap-3 text-[14.5px] leading-[1.8] text-ink2 sm:text-[15.5px]"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-steel/55" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link href={localePath(slide.cta.href, lang)} className="btn btn-primary">
                      <span className="sheen" aria-hidden="true" />
                      <span>{slide.cta.label[lang]}</span>
                    </Link>
                    <Link href={`${localePath("/", lang)}#products`} className="btn btn-ghost">
                      <span>{lang === "zh" ? "產品總覽" : "All products"}</span>
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* controls */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-6 sm:px-6 sm:pb-7 lg:px-10">
          <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-4">
            <div className="flex min-w-0 flex-1 items-end gap-2 sm:gap-3">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={ui("goToSlide", lang).replace("{n}", String(i + 1))}
                  aria-current={i === active}
                  className="group min-w-0 flex-1 pt-4 text-left"
                >
                  <span
                    key={`${slide.id}-${active}`}
                    className={`dot-bar block ${
                      i === active ? "" : "opacity-55 group-hover:opacity-100"
                    }`}
                    style={{ ["--dur" as string]: `${DURATION}ms` }}
                    data-state={i === active ? (reduced ? "done" : "active") : "idle"}
                    data-paused={paused ? "true" : "false"}
                  >
                    <i />
                  </span>
                  <span
                    className={`mt-2.5 hidden truncate font-mono text-[14px] tracking-[0.08em] transition-colors duration-500 lg:block ${
                      i === active ? "text-ink" : "text-ink3 group-hover:text-ink2"
                    }`}
                  >
                    {slide.index}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label={ui("prevSlide", lang)}
                className="glass grid h-11 w-11 place-items-center rounded-full text-ink2 transition-colors duration-500 hover:text-ink"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
                  <path d="M13 8H3M7 4L3 8l4 4" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label={ui("nextSlide", lang)}
                className="glass grid h-11 w-11 place-items-center rounded-full text-ink2 transition-colors duration-500 hover:text-ink"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
