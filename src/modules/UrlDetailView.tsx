/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExternalRoute, Route } from "@/types/Route";

export const AppRouter = ({
  Component,
  data,
  routes,
  section,
}: {
  Component: React.FC<{
    data: any;
    routes: Array<Route | ExternalRoute>;
    section: string;
  }>;
  data: any;
  routes?: Array<Route | ExternalRoute>;
  section: string;
}) => {
  return <Component data={data} routes={routes || []} section={section} />;
};
