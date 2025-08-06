import { ComponentType } from 'react';

export interface ComponentConfig {
  component: ComponentType<any>;
  displayName?: string;
  defaultProps?: Record<string, any>;
  variants?: {
    [key: string]: {
      className?: string;
      props?: Record<string, any>;
    };
  };
  sizes?: {
    [key: string]: {
      className?: string;
      props?: Record<string, any>;
    };
  };
  wrapper?: {
    component: ComponentType<any>;
    props?: Record<string, any>;
    className?: string;
  };
  className?: string;
  allowedChildren?: string[];
  validation?: {
    props?: Record<string, any>;
    children?: {
      min?: number;
      max?: number;
      types?: string[];
    };
  };
}

export interface ComponentRegistryConfig {
  [key: string]: ComponentConfig;
}

export interface ComponentRenderProps {
  name: string;
  variant?: string;
  size?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}