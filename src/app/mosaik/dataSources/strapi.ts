import { Page } from "@/types/content/Page";

const fetchMany = async (url: string) => {
  const prom = await fetch(url, {
    headers: {
      Authorization: process.env.STRAPI_TOKEN || "",
    },
    next: {
      revalidate: 30,
    },
  });
  const json = await prom.json();
  return json.data;
};

const fetchOne = async (url: string) => {
  return (await fetchMany(url))?.[0];
};

export const fetchBlogPosts = async () => {
  const url = `${process.env.STRAPI_API}/blog-posts?[pagination][pageSize]=1000&populate=*`;
  return fetchMany(url);
};

export const fetchBlogPost = async (id: string) => {
  const url = `${process.env.STRAPI_API}/blog-posts/${id}?populate=*`;
  return fetchMany(url);
};

export const fetchSections = async () => {
  const url = `${process.env.STRAPI_API}/sections?populate=*`;
  return fetchMany(url);
};

export const fetchSection = async (slug: string) => {
  const url = `${process.env.STRAPI_API}/sections?filters[slug][$eq]=${slug}&populate=*`;
  return fetchOne(url);
};

export const fetchMOTD = async () => {
  const url = `${process.env.STRAPI_API}/motd?populate=*`;
  return fetchMany(url);
};

export async function fetchMetadata(path: string): Promise<Page> {
  const url = `${process.env.STRAPI_API}/pages?filters[pathname][$eq]=${path}&populate=*`;
  const page = await fetchOne(url);

  if (!page && path !== "*") {
    return fetchMetadata("*");
  }
  return (
    page || {
      title: "Mosaik",
      description: "Composable headless UI architecture",
    }
  );
}
