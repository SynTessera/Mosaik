import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "../routes";
import { AppRouter } from "@/modules/UrlDetailView";
import appConfig from "..";
import { fetchBlogPosts } from "../dataSources/strapi";

const staticParams = {
  view: staticRoutes.map((r) => r.slug.split("/")?.pop()),
};
export const generateStaticParams = () => [staticParams];
const Page = async ({ params, children }) => {
  const awaitedParams = await params;
  const blogPosts = await fetchBlogPosts();
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  return (
    <App slug="/mosaik/:view">
      <AppRouter
        pages={appConfig.pages}
        page={awaitedParams.view[0]}
        data={blogPosts}
        routes={routes}
        params={awaitedParams}
      ></AppRouter>
      <AppNavigation
        slot="navigation"
        routes={routes}
        route={`/mosaik/${awaitedParams.view}`}
      />
    </App>
  );
};

export default Page;
