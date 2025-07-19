import { AppNavigationProps } from "@/types/AppNavigationProps";
import { ExternalRoute, Route } from "@/types/Route";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { NavigationLink } from "./hybrid/NavigationLink";

export async function AppNavigation({
  routes,
  searchParams,
  slug,
  baseUrl = "",
}: AppNavigationProps) {
  const Nav = await getThemedComponent("Navigation");
console.log ("APP NAV", searchParams)
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
              href={externalRoute.href || `${baseUrl}/${route.slug}?sidebarExpanded=${searchParams.sidebarExpanded || "2"}`}
              label={r.label}
              isActive={slug === route.slug}
              external={!!externalRoute.href}
              iconOnly={searchParams?.sidebarExpanded == "1"}
            />
          );
        })}
    </Nav>
  );
}
