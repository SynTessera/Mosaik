import { fetchMOTD } from "@/app/mosaik/dataSources/strapi";
import { AppNavigation } from "@/blocks/AppRoutes";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { MOTDProps } from "@/themes/default/MOTD";

export const getSectionSlots = async ({
  params,
  searchParams,
  routes,
}: any) => {
  const motd = await fetchMOTD();

  return {
    motd: (
      <div>
        {motd?.enabled && !params.slug && (
          <ThemedComponent<MOTDProps>
            name="MOTD"
            severity={motd?.severity}
            message={motd?.message}
          />
        )}
      </div>
    ),
    navigation: (
      <div>
        <AppNavigation
          baseUrl="/mosaik"
          slug={params.section?.[0]}
          routes={routes}
          searchParams={searchParams}
        />
      </div>
    ),
  };
};
