import { BaseClasses, ThemeModuleClasses } from "@/types/Theme.js";

export const baseClasses = <T extends string>(
  classes?: ThemeModuleClasses<BaseClasses | T>
) => {
  const { dimensions, layout, root } = classes || {};
  return [dimensions, layout, root].filter(Boolean);
};
