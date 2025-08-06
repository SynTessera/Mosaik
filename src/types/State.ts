export interface SidebarState {
  expanded: 0 | 1 | 2;
  lastState?: SidebarState;
  animation?: boolean;
}

export interface State {
  sidebar: SidebarState;
  theme?: string;
  preferences?: Record<string, any>;
}