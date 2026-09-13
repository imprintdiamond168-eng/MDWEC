import Image from "next/image";
import Link from "next/link";
import { AFFILIATES, COMPANY, NAV } from "@/content/company";
import { localePath, ui, type Locale } from "@/lib/i18n";

/**
 * Deliberately short. The full product tree lives in the header mega-menu and
 * on the section index pages; repeating 30 links down here only adds noise.
 */
export default function Footer({ lang }: { lang: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink/8 bg-white/60 pt-8 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* brand + contact */}
          <div className="lg:col-span-5">
            {/* Horizontal lockup: the mark alone is too small to carry the full
                company name, and the footer has the width for it. */}
            <Link
              href={localePath("/", lang)}
              className="inline-flex max-w-full items-center"
            >
              <Image
                src="/images/common/logo-horizontal-web.png"
                alt={COMPANY.name[lang]}
                width={916}
                height={120}
                className="h-9 w-auto max-w-full sm:h-10"
              />
            </Link>

            <p className="mt-4 text-[14px] leading-[1.8] text-ink2">{COMPANY.name[lang]}</p>
            <p className="mt-3 max-w-md text-[14px] leading-[1.9] text-ink2">
              {COMPANY.tagline[lang]}
            </p>

            <address className="mt-6 not-italic">
              <div className="border-b border-ink/8 py-3.5">
                <p className="label text-[14px]">{ui("headquarters", lang)}</p>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink">{COMPANY.address[lang]}</p>
                {lang === "zh" && (
                  <p className="mt-1 font-mono text-[14px] leading-[1.7] text-ink3">
                    {COMPANY.addressEn}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 py-3.5">
                <div>
                  <p className="label text-[14px]">{ui("email", lang)}</p>
                  <a
                    href={`mailto:${COMPANY.mail}`}
                    className="mt-1.5 block font-mono text-[14px] text-steel transition-colors hover:text-ink"
                  >
                    {COMPANY.mail}
                  </a>
                </div>
                <div>
                  <p className="label text-[14px]">{ui("telephone", lang)}</p>
                  <a
                    href={`tel:${COMPANY.tel.replace(/\s/g, "")}`}
                    className="mt-1.5 block font-mono text-[14px] text-ink transition-colors hover:text-steel"
                  >
                    {COMPANY.tel}
                  </a>
                </div>
                <div>
                  <p className="label text-[14px]">{ui("fax", lang)}</p>
                  <p className="mt-1.5 font-mono text-[14px] text-ink">{COMPANY.fax}</p>
                </div>
              </div>
            </address>
          </div>

          {/* top-level sitemap only */}
          <nav className="lg:col-span-4" aria-label={ui("navigation", lang)}>
            <p className="label">{ui("navigation", lang)}</p>
            <div className="prism-rule mt-3 w-10" />
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={localePath(n.href, lang)}
                    className="group inline-flex items-center gap-2 text-[14px] text-ink2 transition-colors hover:text-ink"
                  >
                    <span className="h-px w-0 bg-steel transition-all duration-500 ease-out group-hover:w-3" />
                    {n.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* affiliates */}
          <div className="lg:col-span-3">
            <p className="label">{ui("affiliates", lang)}</p>
            <div className="prism-rule mt-3 w-10" />
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 lg:grid-cols-1">
              {AFFILIATES.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] text-ink2 transition-colors hover:text-ink"
                  >
                    {typeof a.name === "string" ? a.name : a.name[lang]}
                    <svg
                      viewBox="0 0 12 12"
                      className="h-2.5 w-2.5 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3 9L9 3M9 3H4.5M9 3v4.5" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 hairline" />

        <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-center font-mono text-[14px] tracking-[0.06em] text-ink3 sm:text-left">
            © {year} {ui("copyright", lang)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="/sitemap.xml"
              className="font-mono text-[14px] tracking-[0.06em] text-ink3 transition-colors hover:text-ink"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
