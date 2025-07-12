import { DataContextShape } from "@/types/DataContextShape";
import { createContext } from "react";

export const DataContext = createContext<DataContextShape | null>(null);
