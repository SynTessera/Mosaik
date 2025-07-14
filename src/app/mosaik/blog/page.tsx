import Blog from "@/app/mosaik/sections/Blog";
import { makeMosaikPage } from "@/lib/server/makeMosaikPage";
import { strapi } from "../dataSources";

export default makeMosaikPage({
  Component: Blog,
  fetcher: strapi.fetchBlogPosts,
  view: "blog",
});
