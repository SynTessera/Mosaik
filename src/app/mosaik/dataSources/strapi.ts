export const fetchBlogPosts = async () => {
  const url = `${process.env.STRAPI_API}/blog-posts?[pagination][pageSize]=1000&populate=*`;
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

export const fetchBlogPost = async (id: string) => {
  const url = `${process.env.STRAPI_API}/blog-posts/${id}?populate=*`;
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

export const fetchSections = async () => {
  const url = `${process.env.STRAPI_API}/sections?populate=*`;
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

export const fetchMOTD = async () => {
  const url = `${process.env.STRAPI_API}/motd?populate=*`;
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

import { Page } from "@/types/content/Page";

export async function fetchMetadata(path: string): Promise<Page> {
  const res = await fetch(
    `${process.env.STRAPI_API}/pages?filters[pathname][$eq]=${path}&populate=*`
  );

  if (!res.ok) {
    console.warn("Failed to fetch metadata for", path, res.status);
    return {
      title: "Mosaik",
      description: "Composable headless UI architecture",
    };
  }

  const data = await res.json();
  const page = data?.data?.[0];

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
