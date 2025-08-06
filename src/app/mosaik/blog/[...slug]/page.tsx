import { makeMosaikPage } from "@/lib/server/makeMosaikPage";
import { fetchBlogPost } from "../../dataSources/strapi";
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

