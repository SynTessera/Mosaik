import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "./routes";
import { AppRouter } from "@/modules/UrlDetailView";
import appConfig from ".";
import { fetchBlogPosts } from "./dataSources/strapi";

const Page = async () => {
  const blogPosts = await fetchBlogPosts();
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  return (
    <App slug="/mosaik">
      <AppRouter
        pages={appConfig.pages}
        page={"about"}
        data={blogPosts}
        routes={routes}
        params={{ view: "about" }}
      ></AppRouter>
      <AppNavigation
        slot="navigation"
        routes={routes}
        route={`/mosaik/about`}
      />
    </App>
  );
};

export default Page;
