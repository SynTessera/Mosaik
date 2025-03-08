import { jsx as _jsx } from "react/jsx-runtime";
import { Provider as ThemeContextProvider } from "./themeContext";
export const ThemeProvider = (props) => {
    const { theme } = props;
    return _jsx(ThemeContextProvider, { value: { theme }, children: props.children });
};
