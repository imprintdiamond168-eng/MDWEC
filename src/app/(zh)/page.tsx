import SiteShell from "@/components/site/SiteShell";
import { getPage } from "@/lib/registry";

export const metadata = getPage("/")!.meta("zh");

export default function Page() {
  return <SiteShell lang="zh">{getPage("/")!.render("zh")}</SiteShell>;
}
