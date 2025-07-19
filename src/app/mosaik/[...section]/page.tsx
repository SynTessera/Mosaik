import { routes as staticRoutes } from "@/app/mosaik/routes";

import { DesktopColLayout } from "@/layouts/DesktopColLayout";
import { AppRouter } from "@/modules/UrlDetailView";
import { fetchRoutes } from "../routes";
import { getDesktopSlots } from "@/slots/getDesktopSlots";
import Section from "../sections/Section";

export default async function Page({ params, searchParams }: any) {
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  const slots = await getDesktopSlots({
    params: await params, // pass shared params if needed
    searchParams: await searchParams,
    fetcher: () => Promise.resolve([]), // stub if needed
    routes,
    children: (
      <AppRouter
        Component={Section}
        data={[]}
        routes={routes}
        section={(await params).section?.[0]}
      />
    ),
  });

  return (
    <DesktopColLayout
      slots={slots}
      searchParams={await searchParams}
    ></DesktopColLayout>
  );
}
