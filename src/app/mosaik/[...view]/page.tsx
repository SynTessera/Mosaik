import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "../routes";
import { AppRouter } from "@/modules/UrlDetailView";
import appConfig from "..";
import { fetchBlogPosts } from "../dataSources/strapi";
import { Route } from "@/types/Route";

type PageProps = {
  params: Promise<{ view: string[] }>;
};

export const generateStaticParams = async () => {
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  const noExternalRoutes = routes.filter((r) => !!(r as Route).slug) as Route[];
  return [
    {
      view: noExternalRoutes.map((r) => r.slug.split("/")?.pop()),
    },
  ];
};

const Page = async ({ params }: PageProps) => {
  const awaitedParams = await params;
  const blogPosts = await fetchBlogPosts();
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  const pages = {
    ...appConfig.pages,
    [awaitedParams.view?.[0]]: appConfig.pages?.[":slug"],
  };
  console.log ("IS ACTIVE", awaitedParams.view[0], routes)
  return (
    <App slug="/mosaik/:view">
      <AppRouter
        pages={pages}
        page={awaitedParams.view[0]}
        data={blogPosts}
        routes={routes}
        params={awaitedParams}
      ></AppRouter>
      <AppNavigation
        baseUrl="/mosaik"
        slot="navigation"
        routes={routes}
        slug={awaitedParams.view?.[0]}
      />
    </App>
  );
};

export default Page;
