import Blog from "@/app/mosaik/sections/Blog";
import { strapi } from "@/lib/mosaik/dataSources";
import { makeMosaikPage } from "@/lib/server/makeMosaikPage";

export default makeMosaikPage({
  Component: Blog,
  fetcher: strapi.fetchBlogPosts,
  view: "blog",
});
