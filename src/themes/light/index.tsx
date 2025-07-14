/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from "@/context/ThemeContext";

export const settings: Theme["settings"] = {
  theme: "light",
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
