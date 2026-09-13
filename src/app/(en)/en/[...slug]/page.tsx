import { notFound } from "next/navigation";
import SiteShell from "@/components/site/SiteShell";
import { ALL_PATHS, getPage } from "@/lib/registry";

/** Every English page except the English home page. */
export function generateStaticParams() {
  return ALL_PATHS.filter((p) => p !== "/").map((p) => ({ slug: p.split("/").filter(Boolean) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/en/[...slug]">) {
  const { slug } = await params;
  return getPage("/" + slug.join("/"))?.meta("en") ?? {};
}

export default async function Page({ params }: PageProps<"/en/[...slug]">) {
  const { slug } = await params;
  const page = getPage("/" + slug.join("/"));
  if (!page) notFound();
  return <SiteShell lang="en">{page.render("en")}</SiteShell>;
}
