import React from "react";
import { Provider as ThemeContextProvider } from "./themeContext";
export const ThemeProvider = (props) => {
    const { theme } = props;
    return <ThemeContextProvider value={{ theme }} children={props.children}/>;
};
