import { fetchBlogPost } from "@/lib/mosaik/dataSources/strapi";
import { makeMosaikPage } from "@/lib/server/makeMosaikPage";
import { BlogPost } from "@/themes/default/BlogPost";

export default makeMosaikPage({
  Component: BlogPost,
  fetcher: async function fetch({ params }) {
    const id = (await params).slug?.[0]?.split("-").pop();
    const blogPost = await fetchBlogPost(id);
    return [blogPost];
  },
  view: "blog",
});

export const revalidate = 30;