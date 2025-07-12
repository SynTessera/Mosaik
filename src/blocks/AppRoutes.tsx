"use client";

import { useThemedComponent } from "@/lib/hooks/useThemedComponent";
import { View } from "../modules/View";
import { useAppState } from "@/context/StateContext";
import { AppNavigationProps } from "@/types/AppNavigationProps";
import { ExternalRoute, Route } from "@/types/Route";

export function AppNavigation({
  routes,
  slug,
  slot = "navigation",
  baseUrl = "",
}: AppNavigationProps) {
  const Nav = useThemedComponent("Navigation");
  const NavLink = useThemedComponent("NavigationLink");
  const { state } = useAppState();
  return (
    <View id="Navigation" slot={slot}>
      <Nav>
        {routes.map((r) => {
          const route = r as Route;
          const externalRoute = r as ExternalRoute;
          return (
            <NavLink
              icon={r.icon}
              key={route.slug || externalRoute.href}
              href={externalRoute.href || `${baseUrl}/${route.slug}`}
              label={r.label}
              isActive={slug === route.slug}
              iconOnly={state?.sidebar.collapsed === true}
              external={!!externalRoute.href}
            />
          );
        })}
      </Nav>
    </View>
  );
}
