import { routes as staticRoutes } from "@/app/mosaik/routes";

import { fetchRoutes } from "../routes";
import Section from "../sections/Section";
import { AppRouter } from "@/modules/UrlDetailView";

import type { Metadata } from "next";
import { fetchMetadata } from "../dataSources/strapi";
import { Page } from "@/types/content/Page";
import { coverImageLink } from "@/lib/util/links";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const meta: Page = await fetchMetadata(`/mosaik/${(await params).section}`);
  console.log ("META", meta);
  const title = meta.ogTitle || meta.twitterTitle || meta.title || "";
  const description =
    meta.ogDescription || meta.twitterDescription || meta.description || "";

  const imageUrl = meta.ogImage?.url || meta.twitterImage?.url || undefined;

  return {
    title,
    description,
    robots: meta.robots || "index, follow",
    alternates: {
      canonical: meta.canonicalUrl || undefined,
    },
    openGraph: {
      title: meta.ogTitle || title,
      description: meta.ogDescription || description,
      type: "website",
      url: meta.canonicalUrl || undefined,
      images: imageUrl ? [{ url: coverImageLink(imageUrl) }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: meta.twitterTitle || title,
      description: meta.twitterDescription || description,
      images: imageUrl ? [coverImageLink(imageUrl)] : undefined,
    },
  };
}

export default async function DynamicPage({ params }: any) {
  const routes = [...(await fetchRoutes()), ...staticRoutes];

  return (
    <AppRouter
      Component={Section}
      data={[]}
      routes={routes}
      section={(await params).section?.[0]}
    />
  );
}
