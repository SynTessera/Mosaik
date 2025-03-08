export enum ColorMode {
  "dark" = "dark",
  "light" = "light",
}

export const COLOR_MODES = [ColorMode.dark, ColorMode.light];

export type BaseClasses = "root" | "dimensions" | "layout";
export type ColorModeClasses = ColorMode.dark | ColorMode.light;
export type ThemeModuleClasses<C extends string = BaseClasses> = Record<
  C,
  string
>;
export type PaperClasses = BaseClasses | ColorModeClasses;
export type ButtonClasses = BaseClasses | ColorModeClasses;
export type Theme = {
  classes: Partial<{
    desktop: ThemeModuleClasses;
    window: ThemeModuleClasses;
    actionBar: ThemeModuleClasses;
    article: ThemeModuleClasses;
    paper: ThemeModuleClasses<PaperClasses>;
    button: ThemeModuleClasses<ButtonClasses>;
    dropdown: ThemeModuleClasses<ButtonClasses>;
  }>;
};
