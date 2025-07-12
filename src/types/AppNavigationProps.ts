import { Route } from "./Route";

export type AppNavigationProps = {
  route: string;
  baseUrl: string;
  routes: Route[];
  slot?: string;
};
