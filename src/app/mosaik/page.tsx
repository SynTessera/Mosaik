import { App } from "@/modules/App";
import { AppNavigation } from "@/blocks/AppRoutes";

import { routes } from "./routes";

const staticParams = {
  view: routes.map((r) => r.slug.split("/")?.pop()),
};
export const generateStaticParams = () => [staticParams];
const Page = async ({ params, children }) => {
  const awaitedParams = await params;
  // if (!staticParams.view.includes(awaitedParams.view[0])) return notFound();

  return (
    <App slug="/mosaik/:view">
      <AppNavigation
        slot="navigation"
        routes={routes}
        route={`/mosaik/${awaitedParams.view}`}
      />
      {children}
    </App>
  );
};

export default Page;
