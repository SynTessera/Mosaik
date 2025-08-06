export type SidebarState = 0 | 1 | 2;

export interface SidebarConfig {
  defaultState: SidebarState;
  transitions: boolean;
  behavior: 'remember' | 'reset';
}