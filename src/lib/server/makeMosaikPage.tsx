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
  return async function Page({ params }: { params: any; searchParams: any }) {
    const resolvedParams = params ? await params : {};
    const section = resolvedParams.section?.[0] ?? view;
    const routes = [...(await fetchRoutes()), ...staticRoutes];
    const data = (await fetcher?.({ params: resolvedParams })) || [];

    return (
      <Component
        data={data}
        routes={routes}
        section={section}
      />
    );
  };
}
