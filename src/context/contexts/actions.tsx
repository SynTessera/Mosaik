import { ActionContext } from "@/types/ActionContext";
import { createContext } from "react";

export const ActionsContext = createContext<ActionContext | undefined>(
  undefined
);
