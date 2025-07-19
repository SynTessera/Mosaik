import { AppNavigation } from "@/blocks/AppRoutes";

export const getPageSlots = async ({ params, searchParams, routes }: any) => {
  return {
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
