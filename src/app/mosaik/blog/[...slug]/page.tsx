import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "@/app/mosaik/routes";
import { AppRouter } from "@/modules/UrlDetailView";
import appConfig from "@/app/mosaik";
import { fetchBlogPost } from "@/app/mosaik/dataSources/strapi";

const staticParams = {
  view: staticRoutes.map((r) => r.slug.split("/")?.pop()),
};
export const generateStaticParams = () => [staticParams];
const Page = async ({ params }: any) => {
  const resParams = await params;
  const id = resParams.slug?.[0]?.split("-").pop();
  const blogPost = await fetchBlogPost(id);
  console.log ("BLOGPOST", blogPost)
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  return (
    <App slug="/mosaik/blog/:slug">
      <AppRouter
        pages={appConfig.pages}
        page={"blog/:slug"}
        data={[blogPost]}
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
