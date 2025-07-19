import { App } from "@/modules/App";
import { routes as staticRoutes, fetchRoutes } from "@/app/mosaik/routes";
import { getDesktopSlots } from "@/slots/getDesktopSlots";
import { AppRouter } from "@/modules/UrlDetailView";
import { StateProvider } from "@/context/StateContext";
import { appReducer } from "@/app/mosaik/reducers";
import { initialState } from "@/app/mosaik/state";
import { DesktopColLayout } from "@/layouts/DesktopColLayout";

export function makeMosaikPage({
  Component,
  fetcher,
  view,
}: {
  Component: React.FC<any>;
  fetcher?: (ctx: any) => Promise<any>;
  view?: string | ((ctx: any) => Promise<any>);
}) {
  return async function Page({
    children,
    params,
    searchParams,
  }: {
    params: any;
    searchParams: any;
  }) {
    const resolvedParams = params ? await params : {};
    const routes = [...(await fetchRoutes()), ...staticRoutes];
    const data = (await fetcher?.({ params: resolvedParams })) || [];
    const section = resolvedParams.section?.[0] ?? view;
    const slots = await getDesktopSlots({
      searchParams: await searchParams,
      params: resolvedParams,
      fetcher: fetcher!,
      routes,
      children,
    });
    return (
      <StateProvider reducer={appReducer} initialState={initialState}>
        <App slug={`/mosaik/${view}`}>
          <DesktopColLayout slots={slots} searchParams={await searchParams}>
            <AppRouter
              Component={Component}
              data={data}
              routes={routes}
              section={section}
            />
          </DesktopColLayout>
        </App>
      </StateProvider>
    );
  };
}
