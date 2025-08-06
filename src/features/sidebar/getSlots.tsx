import { SidebarActionBar } from '@/blocks/hybrid/SidebarActionBar';
import { getServerUiState } from '@/lib/util/getServerUIState';
import { sidebarActions } from './actions';
import { ThemedComponent } from '@/blocks/ThemedComponent';
import { SidebarContent } from '@/blocks/hybrid/SidebarContent';

export interface SidebarSlots {
  sidebarHeader: JSX.Element;
  sidebarContent: JSX.Element;
}

export async function getSidebarSlots(): Promise<SidebarSlots> {
  const state = await getServerUiState();
  const actions = sidebarActions;

  return {
    sidebarHeader: (
      <div className="w-full">
        <ThemedComponent name="SidebarHeader">
          <SidebarActionBar actions={actions} />
        </ThemedComponent>
      </div>
    ),
    sidebarContent: (
      <div className="h-full">
        <ThemedComponent name="SidebarContent">
          <SidebarContent state={state} />
        </ThemedComponent>
      </div>
    )
  };
}