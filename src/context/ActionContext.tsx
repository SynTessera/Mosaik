"use client";

import React, { PropsWithChildren, useContext } from "react";
import { ActionsContext } from "./contexts/actions";
import { Action } from "@/types/Action";

export function ActionProvider<P>({
  actions,
  children,
}: PropsWithChildren<{
  actions: Record<string, (payload?: P) => Action<string, string, P>>;
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
