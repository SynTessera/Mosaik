"use client";

import { useRouter } from "next/navigation";
import { useAppState } from "@/context/StateContext";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { createHydratableComponent } from "@/lib/createHydratableComponent ";

export const NavigationLinkClient = createHydratableComponent((props: any) => {
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();
  const router = useRouter();
  return (
    <NavLink
      {...props}
      onClick={() => router.push(props.href)}
      iconOnly={state?.sidebar.expanded === 1}
    />
  );
});
