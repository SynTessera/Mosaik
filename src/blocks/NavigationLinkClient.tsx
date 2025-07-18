"use client";

import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { createClientWrapper } from "@/lib/createClientWrapper";

const NavigationLinkClientInner = (props: any) => {
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();

  return <NavLink {...props} iconOnly={state?.sidebar.expanded === 1} />;
};

export const NavigationLinkClient = createClientWrapper(
  NavigationLinkClientInner
);
