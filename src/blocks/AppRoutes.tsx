import { View } from "../modules/View";
import { AppNavigationProps } from "@/types/AppNavigationProps";
import { ExternalRoute, Route } from "@/types/Route";
import { getThemedComponent } from "@/lib/server/getThemedComponent";

export async function AppNavigation({
  routes,
  slug,
  slot = "navigation",
  baseUrl = "",
}: AppNavigationProps) {
  const Nav = await getThemedComponent("Navigation");
  const NavLink = await getThemedComponent("NavigationLinkClient");
  return (
    <View id="Navigation" slot={slot}>
      <Nav>
        {routes
          .sort((a, b) => a.order - b.order)
          .map((r) => {
            const route = r as Route;
            const externalRoute = r as ExternalRoute;
            return (
              <NavLink
                icon={r.icon}
                key={route.slug || externalRoute.href}
                href={externalRoute.href || `${baseUrl}/${route.slug}`}
                label={r.label}
                isActive={slug === route.slug}
                external={!!externalRoute.href}
              />
            );
          })}
      </Nav>
    </View>
  );
}
