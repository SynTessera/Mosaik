import React from "react";
import { Theme } from "../../types/Theme.js";
import { Provider as ThemeContextProvider } from "./themeContext.js";

export type ThemeContext = {
  theme: Theme;
};
export type ThemeProviderProps = React.PropsWithChildren<{
  theme: Theme;
}>;

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme } = props;
  return <ThemeContextProvider value={{ theme }} children={props.children} />;
};
