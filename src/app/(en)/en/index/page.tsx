/**
 * English home page. The segment is literally `index` so the static export
 * writes out/en/index.html — the exact URL the previous site used, and the
 * one Google already has indexed.
 */
import SiteShell from "@/components/site/SiteShell";
import { getPage } from "@/lib/registry";

export const metadata = getPage("/")!.meta("en");

export default function Page() {
  return <SiteShell lang="en">{getPage("/")!.render("en")}</SiteShell>;
}
