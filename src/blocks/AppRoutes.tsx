import { AppNavigationProps } from "@/types/AppNavigationProps";
import { ExternalRoute, Route } from "@/types/Route";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { NavigationLink } from "./hybrid/NavigationLink";
import { getServerUiState } from "@/lib/util/getServerUIState";

export async function AppNavigation({
  routes,
  slug,
  baseUrl = "",
}: AppNavigationProps) {
  const state = await getServerUiState();
  const Nav = await getThemedComponent("Navigation");
  return (
    <Nav>
      {routes
        .sort((a, b) => a.order - b.order)
        .map((r) => {
          const route = r as Route;
          const externalRoute = r as ExternalRoute;

          return (
            <NavigationLink
              icon={r.icon}
              key={route.slug || externalRoute.href}
              href={externalRoute.href || `${baseUrl}/${route.slug}`}
              label={r.label}
              isActive={slug === route.slug}
              external={!!externalRoute.href}
              iconOnly={state?.sidebar.expanded == 1}
            />
          );
        })}
    </Nav>
  );
}
