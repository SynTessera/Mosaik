import { AppNavigationProps } from "@/types/AppNavigationProps";
import { ExternalRoute, Route } from "@/types/Route";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { NavigationLinkServer } from "./NavigationLinkServer";

export async function AppNavigation({
  routes,
  slug,
  baseUrl = "",
}: AppNavigationProps) {
  const Nav = await getThemedComponent("Navigation");

  return (
    <Nav>
      {routes
        .sort((a, b) => a.order - b.order)
        .map((r) => {
          const route = r as Route;
          const externalRoute = r as ExternalRoute;
          return (
            <NavigationLinkServer
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
  );
}
