import { createContext, useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import defaultTheme from '@/themes'

export const themeContext = createContext<ThemeContext>({
  theme: defaultTheme,
});

export const useThemeContext = () => useContext(themeContext);

export const Provider = themeContext.Provider;