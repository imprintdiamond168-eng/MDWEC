"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/content/company";
import { localePath, stripLocale, ui, type Locale } from "@/lib/i18n";

function LangSwitch({ lang, path }: { lang: Locale; path: string }) {
  return (
    <div className="lang-switch" role="group" aria-label={ui("langSwitch", lang)}>
      <Link href={localePath(path, "zh")} aria-current={lang === "zh"} hrefLang="zh-Hant-TW">
        中文
      </Link>
      <Link href={localePath(path, "en")} aria-current={lang === "en"} hrefLang="en">
        EN
      </Link>
    </div>
  );
}

export default function Header({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const logicalPath = stripLocale(pathname.replace(/(.)\/$/, "$1")).path;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the route changes. Adjusting state during render is
  // React's documented pattern; an effect would queue an extra render pass.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setOpenMenu(null);
    setOpenMobile(null);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? logicalPath === "/" : logicalPath.startsWith(href);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-ink/5">
        <div
          className="h-full origin-left bg-gradient-to-r from-cyan via-steel to-iris"
          style={{ transform: "scaleX(var(--sp, 0))" }}
        />
      </div>

      {/* No panel behind the bar: the logo and nav sit straight on the hero
          artwork, separated from it by a single hairline.

          Once the page scrolls, page content passes under the bar and bare
          text over bare text is unreadable, so a full-bleed wash fades in —
          the width of the viewport, not the rounded pill this replaced.

          The wash is a sibling layer, never classes on <header> itself. An
          element with backdrop-filter is a backdrop root for its descendants,
          so blurring the header left the dropdown's .frost panel sampling only
          the bar: once scrolled, the menu turned into a thin see-through sheet
          with the page reading straight through it. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 transition-all duration-700 ease-out ${
          scrolled ? "py-2" : "py-4 sm:py-5"
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-10 bg-paper/72 backdrop-blur-xl backdrop-saturate-150 transition-opacity duration-700 ease-out ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div
            className={`relative flex items-center justify-between transition-all duration-700 ease-out ${
              scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[72px]"
            }`}
          >

            <Link
              href={localePath("/", lang)}
              className="group flex shrink-0 items-center gap-3"
              aria-label={COMPANY.name[lang]}
            >
              <Image
                src="/images/common/logo-mark-web.png"
                alt=""
                width={268}
                height={144}
                priority
                className="h-9 w-auto shrink-0 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-medium tracking-[0.12em] text-ink">
                  {lang === "zh" ? "微鑽石" : "MDWEC"}
                </span>
                <span className="mt-1 font-mono text-[14px] leading-none tracking-[0.14em] text-ink3">
                  {lang === "zh" ? "MDWEC" : "Micron Diamond"}
                </span>
              </span>
            </Link>

            {/* ---------- desktop nav ---------- */}
            <nav
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex"
              aria-label={ui("mainMenu", lang)}
            >
              {NAV.map((item) => {
                const hasMenu = !!(item.children?.length || item.groups?.length);
                const isOpen = openMenu === item.label.en;
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(hasMenu ? item.label.en : null)}
                  >
                    <Link
                      href={localePath(item.href, lang)}
                      className={`nav-link flex items-center gap-1.5 whitespace-nowrap py-2 text-[14px] ${
                        isActive(item.href) ? "!text-ink" : ""
                      }`}
                      aria-expanded={hasMenu ? isOpen : undefined}
                    >
                      {item.label[lang]}
                      {hasMenu && (
                        <svg
                          viewBox="0 0 10 10"
                          className={`h-2 w-2 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M2 4l3 3 3-3" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      )}
                    </Link>

                    {/* The panel slides and toggles visibility, but never
                        animates opacity. An element at opacity between 0 and 1
                        is a backdrop root, which leaves the .frost panel's
                        backdrop-filter with nothing behind it to sample: for
                        the length of the fade the menu was an unblurred sheet
                        with the hero headline reading straight through it, and
                        the blur snapped on the instant opacity reached 1.

                        The transition is on the open state only. `visibility`
                        interpolates as a step that holds `visible` until a
                        transition ends, so a shared transition made the menu
                        crawl 4px upwards and hang there after the pointer had
                        already left. Closing is meant to be instant. */}
                    {hasMenu && (
                      <div
                        className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 ${
                          isOpen
                            ? "pointer-events-auto visible translate-y-0 transition-[transform,visibility] duration-300 ease-out"
                            : "pointer-events-none invisible -translate-y-1 transition-none"
                        }`}
                      >
                        <div className="frost w-max min-w-[280px] max-w-[calc(100vw-2rem)] rounded-[22px] p-6">
                          <div className="flex flex-wrap gap-x-9 gap-y-6">
                            {/* second level that itself has children: 設備 › 環線切割機 › KLDJ… */}
                            {item.groups?.map((g) => (
                              <div key={g.href} className="min-w-[190px]">
                                <Link
                                  href={localePath(g.href, lang)}
                                  className="flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-steel"
                                >
                                  {g.label[lang]}
                                  <span className="rounded-full bg-steel/10 px-2 py-0.5 font-mono text-[14px] leading-none text-steel">
                                    {g.children.length}
                                  </span>
                                </Link>
                                <div className="prism-rule mt-3 w-8" />
                                <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                                  {g.children.map((c) => (
                                    <li key={c.href}>
                                      <Link
                                        href={localePath(c.href, lang)}
                                        className="block py-1 font-mono text-[14px] text-ink2 transition-colors hover:text-steel"
                                      >
                                        {c.label[lang]}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {item.children && (
                              <ul className="flex min-w-[210px] flex-col gap-0.5">
                                {item.children.map((c) => (
                                  <li key={c.href}>
                                    <Link
                                      href={localePath(c.href, lang)}
                                      className="block rounded-xl px-3 py-2.5 text-[14px] text-ink transition-colors hover:bg-steel/[0.07] hover:text-steel"
                                    >
                                      {c.label[lang]}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden md:block">
                <LangSwitch lang={lang} path={logicalPath} />
              </div>

              <Link
                href={localePath("/Contact", lang)}
                className="btn btn-primary hidden h-10 px-5 xl:inline-flex"
              >
                <span className="sheen" aria-hidden="true" />
                <span>{ui("contactUs", lang)}</span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? ui("closeMenu", lang) : ui("openMenu", lang)}
                className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink transition-colors hover:bg-white lg:hidden"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 block h-px w-full bg-current transition-all duration-500 ${
                      open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-all duration-300 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-px w-full bg-current transition-all duration-500 ${
                      open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- mobile drawer ---------- */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-paper/85 backdrop-blur-md transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* This one keeps its opacity fade. The backdrop-root problem that
            rules opacity out for the desktop dropdown does not bite here:
            the drawer covers the screen over a scrim that is already 85%
            paper, so there is nothing behind it for the blur to reveal, and
            a drawer that vanishes mid-slide instead of fading looks broken. */}
        <div
          className={`frost absolute inset-x-3 top-24 max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-[28px] p-6 transition-all duration-700 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="label">{ui("navigation", lang)}</p>
            <LangSwitch lang={lang} path={logicalPath} />
          </div>
          <div className="prism-rule mb-4 w-10" />

          <nav aria-label={ui("mobileMenu", lang)} className="flex flex-col">
            {NAV.map((item) => {
              const hasMenu = !!(item.children?.length || item.groups?.length);
              const expanded = openMobile === item.label.en;
              return (
                <div key={item.href} className="border-b border-ink/8 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={localePath(item.href, lang)}
                      className="flex-1 py-4 text-[19px] font-medium tracking-tight text-ink"
                    >
                      {item.label[lang]}
                    </Link>
                    {hasMenu && (
                      <button
                        type="button"
                        onClick={() => setOpenMobile(expanded ? null : item.label.en)}
                        aria-expanded={expanded}
                        aria-label={item.label[lang]}
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 text-ink2"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className={`h-3 w-3 transition-transform duration-500 ${
                            expanded ? "rotate-45" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M6 1v10M1 6h10" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasMenu && (
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        expanded ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.groups?.map((g) => (
                          <div key={g.href} className="mb-4 rounded-2xl bg-steel/[0.04] p-4">
                            <Link
                              href={localePath(g.href, lang)}
                              className="text-[14px] font-medium text-steel"
                            >
                              {g.label[lang]}
                            </Link>
                            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                              {g.children.map((c) => (
                                <li key={c.href}>
                                  <Link
                                    href={localePath(c.href, lang)}
                                    className="block py-1 font-mono text-[14px] text-ink2"
                                  >
                                    {c.label[lang]}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <ul className="flex flex-col">
                          {item.children?.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={localePath(c.href, lang)}
                                className="block py-2.5 text-[14.5px] text-ink2"
                              >
                                {c.label[lang]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link href={localePath("/Contact", lang)} className="btn btn-primary mt-6 w-full">
            <span className="sheen" aria-hidden="true" />
            <span>{ui("contactUs", lang)}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
