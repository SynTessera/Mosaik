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
