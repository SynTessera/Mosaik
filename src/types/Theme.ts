export interface NavigationSettings {
  showTooltip: boolean;
  sidebar?: {
    defaultState: 0 | 1 | 2;
    transitions: boolean;
  };
}

export interface UserPreferences {
  mode: "light" | "dark";
  sidebarBehavior?: "remember" | "reset";
  customColors?: Record<string, string>;
}

export interface SystemPreferences {
  autoMode: ("system" | "setting" | "static")[];
  animations?: boolean;
  reducedMotion?: boolean;
}

export interface ThemeSettings {
  /** Base theme name */
  theme: string;
  /** Custom class name overrides */
  classNames?: Record<string, string>;
  /** Navigation-related settings */
  navigation: NavigationSettings;
  /** User-specific preferences */
  userPreferences: UserPreferences;
  /** System-level preferences */
  preferences: SystemPreferences;
}

export interface Theme {
  settings: ThemeSettings;
}