"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/content/company";
import { ui, type Locale } from "@/lib/i18n";

/**
 * Floating contact button, bottom-right on every page.
 * Expands to two channels: e-mail and the official LINE account.
 */
export default function ContactFab({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="contact-fab" data-open={open} ref={ref}>
      <div className="options" role="group" aria-label={ui("contactOptions", lang)}>
        <a
          className="opt glass"
          href={`mailto:${COMPANY.mail}?subject=${encodeURIComponent(
            lang === "zh" ? "產品詢價 — MDWEC" : "Product enquiry — MDWEC",
          )}`}
          tabIndex={open ? 0 : -1}
        >
          <span className="ico" style={{ background: "#16455e" }} aria-hidden="true">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor">
              <rect x="2.5" y="4.5" width="15" height="11" rx="2" strokeWidth="1.5" />
              <path d="M3 6l7 5 7-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>
            <span className="block font-medium">E-mail</span>
            <span className="block font-mono text-[14px] text-ink3">{COMPANY.mail}</span>
          </span>
        </a>

        <a
          className="opt glass"
          href={COMPANY.line}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
        >
          <span className="ico" style={{ background: "#06C755" }} aria-hidden="true">
            {/* LINE mark, simplified */}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 3C6.8 3 2.5 6.4 2.5 10.6c0 3.8 3.4 7 8 7.5.3.1.7.2.8.5.1.3.1.7 0 1l-.1.8c0 .2-.2.9.8.5s5.3-3.1 7.2-5.3c1.3-1.4 1.9-2.9 1.9-4.6C21.5 6.4 17.2 3 12 3zM8.3 13H6.6c-.2 0-.4-.2-.4-.4V9.2c0-.2.2-.4.4-.4s.4.2.4.4v3h1.3c.2 0 .4.2.4.4s-.2.4-.4.4zm2-.4c0 .2-.2.4-.4.4s-.4-.2-.4-.4V9.2c0-.2.2-.4.4-.4s.4.2.4.4v3.4zm4-.0c0 .2-.1.3-.3.4h-.1c-.1 0-.3-.1-.3-.2l-1.4-1.9v1.7c0 .2-.2.4-.4.4s-.4-.2-.4-.4V9.2c0-.2.1-.3.3-.4h.1c.1 0 .2.1.3.2l1.4 1.9V9.2c0-.2.2-.4.4-.4s.4.2.4.4v3.4zm2.8-2.1c.2 0 .4.2.4.4s-.2.4-.4.4h-1.2v.8h1.2c.2 0 .4.2.4.4s-.2.4-.4.4h-1.6c-.2 0-.4-.2-.4-.4V9.2c0-.2.2-.4.4-.4h1.6c.2 0 .4.2.4.4s-.2.4-.4.4h-1.2v.8h1.2z" />
            </svg>
          </span>
          <span>
            <span className="block font-medium">{ui("officialLine", lang)}</span>
            <span className="block font-mono text-[14px] text-ink3">LINE</span>
          </span>
        </a>
      </div>

      <button
        type="button"
        className="trigger relative"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? ui("closeContact", lang) : ui("openContact", lang)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" aria-hidden="true">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
