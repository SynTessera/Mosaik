import { ExternalRoute, Route } from "./Route";

export type AppNavigationProps = {
  slug: string;
  baseUrl: string;
  routes: Array<Route | ExternalRoute>;
  slot?: string;
  searchParams: any;
};
