import { AppNavigation } from "@/blocks/AppRoutes";

export const getPageSlots = async ({ params, routes }: any) => {
  return {
    navigation: (
      <div>
        <AppNavigation
          baseUrl="/mosaik"
          slug={params.section?.[0]}
          routes={routes}
        />
      </div>
    ),
  };
};
