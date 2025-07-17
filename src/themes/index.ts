import light from "./light/theme.module.css";
import { Theme } from "@/context/ThemeContext";

export const theme = process.env.MOSAIK_THEME || "light";

export const themeClasses = light;

export const settings: Theme["settings"] = {
  theme,
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
