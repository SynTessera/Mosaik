"use client";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { View } from "../modules/View";
import { useAppState } from "@/context/StateContext";
import { AppNavigationProps } from "@/types/AppNavigationProps";

export function AppNavigation({ routes, route, slot = "navigation" }: AppNavigationProps) {
  const Nav = useThemedComponent("Navigation");
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();
  return (
    <View id="Navigation" slot={slot}>
      <Nav>
        {routes.map((r) => (
          <NavLink
            icon={r.icon}
            key={r.slug}
            href={r.slug}
            label={r.label}
            isActive={route === r.slug}
            iconOnly={state?.sidebar.collapsed === true}
          />
        ))}
      </Nav>
    </View>
  );
}
