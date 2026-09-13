import type { ReactNode } from "react";
import { ui, type Locale } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";
import ScrollFX from "./ScrollFX";
import ContactFab from "./ContactFab";

/**
 * Page chrome shared by both language trees.
 *
 * The single wrapper element is load-bearing, not decoration. A page whose
 * root is a fragment hands Next's scroll handler every top-level node as a
 * candidate scroll target; it walks them and calls scrollIntoView(), and the
 * fixed-position ones here (.noise at inset:-50%, the fixed header, the
 * contact button) cannot be scrolled to, so the document ends up pinned to the
 * bottom on every client-side navigation. One root node means one candidate,
 * whose top edge is the top of the document — so Next resets to the top and
 * stops, which is the behaviour we want.
 *
 * It also carries the column layout that <body> used to impose on these
 * children directly, so <main className="flex-1"> still fills the viewport.
 */
export default function SiteShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <div className="flex w-full flex-1 flex-col">
      <ScrollFX />
      <div className="noise" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:shadow-lg"
      >
        {ui("skipToContent", lang)}
      </a>
      <Header lang={lang} />
      {/*
        tabIndex={-1} is what makes the skip link above actually work. Without
        it the href="#main" jump moves the scroll position but leaves focus on
        <body>, so the next Tab press returns to the header nav — exactly what
        skipping was meant to avoid. Focus here is programmatic and the jump is
        its own visual feedback, so the container takes no focus ring.
      */}
      <main id="main" tabIndex={-1} className="relative flex-1 outline-none">
        {children}
      </main>
      <Footer lang={lang} />
      <ContactFab lang={lang} />
    </div>
  );
}
