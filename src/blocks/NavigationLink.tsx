"use client";

import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

export const NavigationLink = (props: any) => {
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();

  return <NavLink {...props} iconOnly={state?.sidebar.expanded === 1} />;
};
