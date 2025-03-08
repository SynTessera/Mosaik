import { useThemeContext } from "../context/theme/themeContext.js";
export const useTheme = () => {
    const { theme } = useThemeContext();
    return {
        theme,
    };
};
