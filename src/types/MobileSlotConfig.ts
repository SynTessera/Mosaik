import { SlotConfig } from "./ThemeConfig";

export interface MobileSlotConfig {
  slots: {
    [key: string]: SlotConfig;
  };
  breakpoint?: string;
  drawer?: {
    position: 'left' | 'right' | 'bottom';
    width?: string;
    height?: string;
    closeOnOutsideClick?: boolean;
    overlay?: boolean;
    className?: string;
  };
  navigation?: {
    type: 'drawer' | 'bottom-bar' | 'top-bar';
    component: string;
    className?: string;
    props?: Record<string, any>;
  };
  header?: {
    sticky?: boolean;
    collapsed?: boolean;
    height?: string;
    className?: string;
  };
  content?: {
    scrollable?: boolean;
    padding?: string;
    className?: string;
  };
}

export interface MobileNavigationConfig {
  items: Array<{
    id: string;
    label: string;
    icon?: string;
    route?: string;
    action?: string;
  }>;
  activeIndicator?: 'underline' | 'background' | 'icon';
  showLabels?: boolean;
  className?: string;
}

export interface MobileLayoutConfig {
  layout: 'stacked' | 'drawer' | 'split';
  transitions?: {
    drawer?: string;
    page?: string;
  };
  animation?: {
    duration?: number;
    easing?: string;
  };
}