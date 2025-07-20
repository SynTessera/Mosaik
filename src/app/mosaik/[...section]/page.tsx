import { routes as staticRoutes } from "@/app/mosaik/routes";

import { AppRouter } from "@/modules/UrlDetailView";
import { fetchRoutes } from "../routes";
import Section from "../sections/Section";

export default async function Page({ params }: any) {
  const routes = [...(await fetchRoutes()), ...staticRoutes];

  return (
    <AppRouter
      Component={Section}
      data={[]}
      routes={routes}
      section={(await params).section?.[0]}
    />
  );
}
