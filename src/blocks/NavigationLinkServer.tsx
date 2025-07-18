// Server Component
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { NavigationLinkClient } from "./NavigationLinkClient";

export const NavigationLinkServer = async (props: any) => {
  const NavLink = await getThemedComponent("NavigationLink");

  return <NavigationLinkClient Component={<NavLink {...props} />} {...props} />;
};
