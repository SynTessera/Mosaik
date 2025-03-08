import { useThemeContext } from "../context/theme/themeContext";

export const useTheme = () => {
  const { theme } = useThemeContext();

  return {
    theme,
  };
};
