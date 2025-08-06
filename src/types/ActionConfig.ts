import { IconNames } from "@/components/Icon";

export interface ActionConfig {
  id: string;
  component: string;
  icon?: IconNames;
  label?: string;
  handler: (...args: any[]) => void | Promise<void>;
  props?: Record<string, any>;
  disabled?: boolean;
  hidden?: boolean;
  order?: number;
  group?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  permissions?: string[];
}

export interface ActionBarConfig {
  actions: ActionConfig[];
  orientation?: 'horizontal' | 'vertical';
  spacing?: number;
  className?: string;
  wrapper?: {
    component: string;
    className?: string;
  };
}

export interface ActionGroupConfig {
  id: string;
  label?: string;
  actions: string[];
  order?: number;
  className?: string;
}

export type ActionRegistry = Record<string, ActionConfig>;
export type ActionGroupRegistry = Record<string, ActionGroupConfig>;