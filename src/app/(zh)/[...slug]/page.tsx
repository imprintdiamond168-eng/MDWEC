import { notFound } from "next/navigation";
import SiteShell from "@/components/site/SiteShell";
import { ALL_PATHS, getPage } from "@/lib/registry";

/** Every Traditional Chinese page except the home page. */
export function generateStaticParams() {
  return ALL_PATHS.filter((p) => p !== "/").map((p) => ({ slug: p.split("/").filter(Boolean) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  return getPage("/" + slug.join("/"))?.meta("zh") ?? {};
}

export default async function Page({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) notFound();
  return <SiteShell lang="zh">{page.render("zh")}</SiteShell>;
}
