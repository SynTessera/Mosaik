import { Route } from "./Route";

export type AppNavigationProps = {
  route: string;
  routes: Route[];
  slot?: string;
};
