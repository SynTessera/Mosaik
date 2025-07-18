import { App } from "@/modules/App";
import { routes as staticRoutes, fetchRoutes } from "@/app/mosaik/routes";
import { getDesktopSlots } from "@/views/getDesktopSlots";
import { StateProvider } from "@/context/StateContext";
import { appReducer } from "@/app/mosaik/reducers";
import { initialState } from "@/app/mosaik/state";
import { DesktopColLayout } from "@/layouts/DesktopColLayout";
import { AppRouter } from "@/modules/UrlDetailView";
import Section from "../sections/Section";

export default async function SectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ section: string[] }>;
}) {
  const routes = [...(await fetchRoutes()), ...staticRoutes];
  const slots = await getDesktopSlots({
    params: await params, // pass shared params if needed
    fetcher: () => Promise.resolve([]), // stub if needed
    routes,
  });

  return (
    <StateProvider reducer={appReducer} initialState={initialState}>
      <App slug="/mosaik">
        <DesktopColLayout slots={slots}>
          <AppRouter
            Component={Section}
            data={[]}
            routes={routes}
            section={(await params).section?.[0]}
          />
          {children}
        </DesktopColLayout>
      </App>
    </StateProvider>
  );
}
