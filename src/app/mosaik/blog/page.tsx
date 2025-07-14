import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "../routes";
import { AppRouter } from "@/modules/UrlDetailView";
import { fetchBlogPosts } from "../dataSources/strapi";
import Blog from "../pages/Blog";

const Page = async () => {
  const blogPosts = await fetchBlogPosts();
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  return (
    <App slug="/mosaik/blog">
      <AppRouter
        Component={Blog}
        data={blogPosts}
        routes={routes}
        section="blog"
      ></AppRouter>
      <AppNavigation
        slot="navigation"
        routes={routes}
        slug="blog"
        baseUrl="/mosaik"
      />
    </App>
  );
};

export default Page;
