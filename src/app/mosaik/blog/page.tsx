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
      <AppNavigation slot="navigation" routes={routes} route={`/mosaik/blog`} />
    </App>
  );
};

export default Page;
