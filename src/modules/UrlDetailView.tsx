/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExternalRoute, Route } from "@/types/Route";
import { View } from "./View";

export const AppRouter = ({
  pages,
  page,
  data,
  routes,
  params,
}: {
  pages: Record<string, React.FC<any>>;
  page: string | (() => React.FC<any>);
  data: any;
  routes?: Array<Route | ExternalRoute>;
  params: any;
}) => {
  let Cmp;
  if (typeof page === "function") {
    Cmp = page() || (() => null);
  } else {
    Cmp = pages[page] || (() => null);
  }
  return (
    <View id={page.toString()} slot="app">
      <Cmp data={data} routes={routes} view={params.view[0]} />
    </View>
  );
};
