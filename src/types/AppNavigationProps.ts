import { ExternalRoute, Route } from "./Route";

export type AppNavigationProps = {
  pathname: string;
  baseUrl: string;
  routes: Array<Route | ExternalRoute>;
  slot?: string;
};
