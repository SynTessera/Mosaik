export type Route = {
  slug: string;
  label: string;
  icon: string;
  content?: string;
  order: number;
};

export type ExternalRoute = {
  href: string;
  label: string;
  icon: string;
  content?: string;
  order: number;
};

export type Routes = Array<Route | ExternalRoute>;
