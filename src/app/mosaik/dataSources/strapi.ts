export const fetchBlogPosts = async () => {
    const url = `${process.env.STRAPI_API}/blog-posts?[pagination][pageSize]=1000&populate=*`;
    const prom = await fetch(url, {
        headers: {
            "Authorization": process.env.STRAPI_TOKEN || ''
        }
    });
    const json = await prom.json();
    return json.data;
}

export const fetchSections = async () => {
    const url = `${process.env.STRAPI_API}/sections?[pagination][pageSize]=1000&populate=*`;
    const prom = await fetch(url, {
        headers: {
            "Authorization": process.env.STRAPI_TOKEN || ''
        }
    });
    const json = await prom.json();
    return json.data;
}