"use client";

import { usePathname } from "next/navigation";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { createHydratableComponent } from "@/lib/createHydratableComponent ";

export const NavigationLinkClient = createHydratableComponent((props: any) => {
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();
  const pathname = usePathname();
  return (
    <NavLink
      {...props}
      iconOnly={state?.sidebar.expanded === 1}
      isActive={props.href.includes(pathname)}
    />
  );
});
