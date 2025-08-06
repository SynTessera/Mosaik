import { ActionConfig } from "./ActionConfig";
import { ComponentConfig } from "./ComponentConfig";
import { MobileSlotConfig } from "./MobileSlotConfig";
import { Theme } from "@/context/ThemeContext";
import { ReactNode } from 'react';

export interface ThemeConfig {
  layout: {
    slots: {
      desktop: DesktopSlotConfig;
      mobile: MobileSlotConfig;
    };
    dimensions: {
      sidebar: {
        minWidth: string;
        maxWidth: string;
      };
      header: {
        height: string;
      };
    };
  };
  components: Record<string, ComponentConfig>;
  actions: Record<string, ActionConfig>;
  settings: Theme['settings'];
}

export interface DesktopSlotConfig {
  slots: {
    [key: string]: SlotConfig;
  };
}

export interface SlotConfig {
  component: string;
  allowedBlocks: string[];
  content?: ReactNode;
  className?: string;
  wrapper?: {
    component: string;
    className?: string;
  };
}

export interface SlotRenderConfig {
  name: string;
  config: SlotConfig;
  content?: React.ReactNode;
  actions?: ActionConfig[];
}