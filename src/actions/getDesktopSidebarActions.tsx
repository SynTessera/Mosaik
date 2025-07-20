import { collapse, expand } from "@/app/mosaik/actions";
import { State } from "@/types/State";

export const getDesktopSidebarActions = ({
  serverState,
}: {
  serverState: State;
}) => {
  const actions = {} as Record<string, any>;

  actions.expand = expand();    
  if (Number(serverState.sidebar.expanded) < 2) actions.expand = expand();
  if (serverState.sidebar.expanded == 2) actions.collapse = collapse();

  return actions;
};
