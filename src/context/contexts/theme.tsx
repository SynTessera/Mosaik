import { createContext } from "react";
import { Theme } from "../ThemeContext";

export const ThemeContext = createContext<Theme | undefined>(undefined);
