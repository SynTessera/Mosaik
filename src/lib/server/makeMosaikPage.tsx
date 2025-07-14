import { App } from "@/modules/App";
import { AppRouter } from "@/modules/UrlDetailView";
import { AppNavigation } from "@/blocks/AppRoutes";
import { routes as staticRoutes, fetchRoutes } from "@/app/mosaik/routes";

export function makeMosaikPage({
  Component,
  fetcher,
  view,
}: {
  Component: React.FC<any>;
  fetcher?: (ctx: any) => Promise<any>;
  view?: string | ((ctx: any) => Promise<any>);
}) {
  return async function Page({ params }: { params: any }) {
    const resolvedParams = params ? await params : {};
    const routes = [...(await fetchRoutes()), ...staticRoutes];
    const data = (await fetcher?.({ params: resolvedParams })) || [];
    const section = resolvedParams.section?.[0] ?? view;

    return (
      <App slug={`/mosaik/${view}`}>
        <AppRouter
          Component={Component}
          data={data}
          routes={routes}
          section={section}
        />
        <AppNavigation
          slot="navigation"
          routes={routes}
          baseUrl="/mosaik"
          slug={section}
        />
      </App>
    );
  };
}
