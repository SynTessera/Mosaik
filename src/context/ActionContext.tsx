"use client";

import React, { PropsWithChildren, useContext } from "react";
import { ActionsContext } from "./contexts/actions";
import { Action } from "@/types/Action";

export function ActionProvider({
  actions,
  children,
}: PropsWithChildren<{
  actions: Record<string, Action<string, string, object>>;
}>) {
  return (
    <ActionsContext.Provider value={{ actions }}>
      {children}
    </ActionsContext.Provider>
  );
}

export const useActions = () => {
  return useContext(ActionsContext);
};
