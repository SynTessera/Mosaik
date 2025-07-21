import { Theme } from "@/context/ThemeContext";
import themeClasses from './default/theme.module.css';

export const theme = process.env.MOSAIK_THEME || "default";

export const settings: Theme["settings"] = {
  theme,
  classNames: {
    Button: '',
    Icon: 'p-2 !h-7 !w-7'
  },
  navigation: {
    showTooltip: true,
  },
  userPreferences: {
    mode: "dark",
  },
  preferences: {
    autoMode: ["system"],
  },
};

export { themeClasses }