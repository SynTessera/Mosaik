import { createContext, useContext } from "react";
import { ThemeContext } from "./ThemeProvider.js";
import defaultTheme from '@/themes/index.js'

export const themeContext = createContext<ThemeContext>({
  theme: defaultTheme,
});

export const useThemeContext = () => useContext(themeContext);

export const Provider = themeContext.Provider;