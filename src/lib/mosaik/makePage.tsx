import { fetchRoutes, defaultRoutes } from "./routes";

export function makeMosaikPage({
  Component,
  fetcher,
  view,
  revalidate = 30
}: {
  Component: React.FC<any>;
  fetcher?: (ctx: any) => Promise<any>;
  view?: string | ((ctx: any) => Promise<any>);
  revalidate?: number;
}) {
  return async function Page({ params }: { params: any; searchParams: any }) {
    const resolvedParams = params ? await params : {};
    const section = resolvedParams.section?.[0] ?? view;
    const routes = [...(await fetchRoutes()), ...defaultRoutes];
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