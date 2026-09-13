"use client";

import { useEffect } from "react";

/**
 * One rAF-throttled scroll listener drives the whole page:
 *  - `[data-speed]`   → sets --py / --p for CSS parallax transforms
 *  - `[data-reveal]`  → adds .is-in once the element enters the viewport
 *  - `<html>`         → --sp (0..1 page scroll progress) for the top progress bar
 *
 * Honours prefers-reduced-motion: reveals still fire, parallax does not.
 */
export default function ScrollFX() {
  useEffect(() => {
    const root = document.documentElement;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let nodes: HTMLElement[] = [];
    let frame = 0;
    let queued = false;

    const collect = () => {
      nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
    };

    const tick = () => {
      queued = false;
      const vh = window.innerHeight || 1;

      // read pass (batched, to avoid layout thrash)
      const offsets = nodes.map((el) => {
        const r = el.getBoundingClientRect();
        return (r.top + r.height / 2 - vh / 2) / vh;
      });

      // write pass
      for (let i = 0; i < nodes.length; i++) {
        const el = nodes[i];
        const speed = Number.parseFloat(el.dataset.speed ?? "0");
        const p = Math.max(-1.8, Math.min(1.8, offsets[i]));
        el.style.setProperty("--p", p.toFixed(4));
        el.style.setProperty("--py", `${(-p * speed * 100).toFixed(2)}px`);
      }

      const max = document.documentElement.scrollHeight - vh;
      root.style.setProperty("--sp", max > 0 ? (window.scrollY / max).toFixed(4) : "0");
    };

    const schedule = () => {
      if (queued) return;
      queued = true;
      frame = requestAnimationFrame(tick);
    };

    const onResize = () => {
      collect();
      schedule();
    };

    collect();
    if (!reduced.matches) {
      schedule();
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", onResize);
    } else {
      // still keep the progress bar honest
      window.addEventListener("scroll", schedule, { passive: true });
      nodes = [];
      schedule();
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return null;
}
