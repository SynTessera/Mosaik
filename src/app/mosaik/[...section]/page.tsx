import { routes as staticRoutes } from "@/app/mosaik/routes";

import { DesktopColLayout } from "@/layouts/DesktopColLayout";
import { AppRouter } from "@/modules/UrlDetailView";
import { fetchRoutes } from "../routes";
import { getDesktopSlots } from "@/views/getDesktopSlots";
import Section from "../sections/Section";

export default async function Page({ children, params, searchParams }: any) {
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  const slots = await getDesktopSlots({
    params: await params, // pass shared params if needed
    searchParams: await searchParams,
    fetcher: () => Promise.resolve([]), // stub if needed
    routes,
  });

  return (
    <DesktopColLayout slots={slots} searchParams={await searchParams}>
      <AppRouter
        Component={Section}
        data={[]}
        routes={routes}
        section={(await params).section?.[0]}
      />
      {children}
    </DesktopColLayout>
  );
}
