 
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  PropsWithChildren,
} from "react";

type ViewConfig = {
  id: string;
  slot: string;
  component?: React.ReactElement;
  props?: Record<string, any>;
  constraints?: Record<string, any>;
  states?: string[];
  actions?: string[];
  effects?: string[];
};

type ViewHostContextType = {
  registerView: (view: ViewConfig) => void;
  slots: Record<string, React.ReactElement[]>;
  views: ViewConfig[];
};

const ViewHostContext = createContext<ViewHostContextType | undefined>(
  undefined
);

export const ViewHostProvider = ({ children }: PropsWithChildren) => {
  const [views, setViews] = useState<ViewConfig[]>([]);

  const registerView = useCallback(
    (view: ViewConfig) => {
      setViews((prev) => {
        // // Prevent duplicate IDs:
        if (prev.find((v) => v.slot === view.slot))
          return prev.filter((v) => v.slot !== view.slot).concat([view]);
        return [...prev, view];
      });
    },
    [setViews]
  );

  const slots = useMemo(() => {
    const slots: Record<string, React.ReactElement[]> = {};
    for (const view of views) {
      if (!slots[view.slot]) slots[view.slot] = [];
      if (view.component)
        slots[view.slot].push(React.cloneElement(view.component, view.props));
    }
    return slots;
  }, [views]);

  const mem = useMemo(
    () => ({ registerView, slots, views }),
    [registerView, slots, views]
  );
  return (
    <ViewHostContext.Provider value={mem}>{children}</ViewHostContext.Provider>
  );
};

export const useViewHost = (): ViewHostContextType => {
  const ctx = useContext(ViewHostContext);
  if (!ctx) {
    throw new Error("useViewHost must be used within a <ViewHostProvider>");
  }
  return ctx;
};
