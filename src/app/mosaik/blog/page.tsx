import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "../routes";
import { AppRouter } from "@/modules/UrlDetailView";
import appConfig from "..";
import { fetchBlogPosts } from "../dataSources/strapi";

const Page = async () => {
  const blogPosts = await fetchBlogPosts();
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  return (
    <App slug="/mosaik/blog">
      <AppRouter
        pages={appConfig.pages}
        page={"blog"}
        data={blogPosts}
        routes={routes}
        params={{ view: "blog" }}
      ></AppRouter>
      <AppNavigation
        slot="navigation"
        routes={routes}
        pathname={`/mosaik/blog`}
        baseUrl="/mosaik"
      />
    </App>
  );
};

export default Page;
