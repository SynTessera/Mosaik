import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "../routes";
import { AppRouter } from "@/modules/UrlDetailView";
import { fetchBlogPosts } from "../dataSources/strapi";
import { Route } from "@/types/Route";
import Section from "../pages/Section";

type PageProps = {
  params: Promise<{ section: string[] }>;
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
  const section = awaitedParams.section?.[0];
  const routes = [...(await fetchRoutes()), ...staticRoutes];

  return (
    <App slug="/mosaik/:view">
      <AppRouter
        Component={Section}
        data={blogPosts}
        routes={routes}
        section={section}
      ></AppRouter>
      <AppNavigation
        baseUrl="/mosaik"
        slot="navigation"
        routes={routes}
        slug={section}
      />
    </App>
  );
};

export default Page;
