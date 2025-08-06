import { ReactNode } from 'react';
import { fetchMOTD } from "@/app/mosaik/dataSources/strapi";
import { AppNavigation } from "@/blocks/AppRoutes";
import { ThemedComponent } from "@/blocks/ThemedComponent";
import { Routes } from "@/types/Route";
import { MOTDProps } from '@/types/MOTD';

interface GetSectionSlotsParams {
  params: { slug?: string[]; section?: string[] };
  searchParams?: Record<string, string>;
  fetcher?: (ctx: any) => Promise<any>;
  routes: Routes;
}

interface SectionSlots {
  motd: JSX.Element;
  navigation: JSX.Element;
}

export async function getSectionSlots({
  params,
  searchParams,
  routes,
}: GetSectionSlotsParams): Promise<SectionSlots> {
  const motd = await fetchMOTD();

  return {
    motd: (
      <div className="w-full">
        {motd?.enabled && !params.slug && (
          <ThemedComponent<MOTDProps>
            name="MOTD"
            severity={motd.severity}
            message={motd.message}
            className="mb-4"
          />
        )}
      </div>
    ),
    navigation: (
      <div className="w-full h-full">
        <ThemedComponent name="Navigation">
          <AppNavigation
            baseUrl="/mosaik"
            slug={params.section?.[0] ?? ""}
            routes={routes}
            searchParams={searchParams}
          />
        </ThemedComponent>
      </div>
    )
  };
}