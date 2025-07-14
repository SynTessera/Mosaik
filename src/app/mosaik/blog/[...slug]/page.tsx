import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "@/app/mosaik/routes";
import { AppRouter } from "@/modules/UrlDetailView";
import { fetchBlogPost } from "@/app/mosaik/dataSources/strapi";
import Blog from "../../pages/Blog";

const Page = async ({ params }: any) => {
  const resParams = await params;
  const id = resParams.slug?.[0]?.split("-").pop();
  const blogPost = await fetchBlogPost(id);
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  return (
    <App slug="/mosaik/blog/:slug">
      <AppRouter
        Component={Blog}
        data={[blogPost]}
        routes={routes}
        section="blog"
      ></AppRouter>
      <AppNavigation
        slot="navigation"
        routes={routes}
        baseUrl="/mosaik"
        slug="blog"
      />
    </App>
  );
};

export default Page;
