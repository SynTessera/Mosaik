import { createContext, useContext } from "react";
import defaultTheme from '../../themes/index.js';
export const themeContext = createContext({
    theme: defaultTheme,
});
export const useThemeContext = () => useContext(themeContext);
export const Provider = themeContext.Provider;
