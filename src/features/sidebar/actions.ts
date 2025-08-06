export type SidebarState = 0 | 1 | 2;

export const sidebarActions = {
  expand: (state: { sidebar?: { expanded?: SidebarState } }) => ({
    sidebar: {
      ...state?.sidebar,
      expanded: ((Number(state?.sidebar?.expanded || 0) + 1) % 3) as SidebarState
    }
  })
};