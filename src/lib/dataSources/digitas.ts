import { PageProps } from "@/types/components/Page";

const fetchMany = async (url: string) => {
  try {
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
  } catch (e) {
    console.log("Error fetching data from Strapi", e);
  }
};

const fetchOne = async (url: string) => {
  return await fetchMany(url);
};


export const fetchSiteConfig = async () => {
  const url = `${process.env.STRAPI_API}/site-config?populate=*`;
  return fetchMany(url);
};

export const fetchPages = async (): Promise<PageProps[]> => {
  // const url = `${process.env.STRAPI_API}/pages`;
  const url = `${process.env.STRAPI_API}/pages?populate[content][populate]=*`;
  // const url = `${process.env.STRAPI_API}/pages?populate[content][on][shared.slider][populate][slides][populate]=image&populate[content][on][shared.hero]=image&populate[content][on][shared.herotext]=image`;

  return fetchMany(url);
};

export const fetchArticle = async (slug: string) => {
  const url = `${process.env.STRAPI_API}/articles/${slug}`;
  // const url = `${process.env.STRAPI_API}/pages?populate=*`;
  // const url = `${process.env.STRAPI_API}/pages?populate[content][on][shared.slider][populate][slides][populate]=image&populate[content][on][shared.hero]=image&populate[content][on][shared.herotext]=image`;

  return fetchOne(url);
};
