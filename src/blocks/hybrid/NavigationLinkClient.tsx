"use client";

import { useAppState } from "@/context/StateContext";
import { createClientWrapper } from "@/lib/createClientWrapper";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const NavigationLinkClient = createClientWrapper((props: any) => {
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();
  return <NavLink {...props} iconOnly={state?.sidebar.expanded === 1} />;
});
