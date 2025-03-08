import React from "react";
import { Theme } from "../../types/Theme";
export type ThemeContext = {
    theme: Theme;
};
export type ThemeProviderProps = React.PropsWithChildren<{
    theme: Theme;
}>;
export declare const ThemeProvider: (props: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
