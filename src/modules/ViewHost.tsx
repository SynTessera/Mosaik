"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

type ViewConfig = {
  id: string;
  slot: string;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  constraints?: Record<string, any>;
  states?: string[];
  actions?: string[];
  effects?: string[];
};

type ViewHostContextType = {
  registerView: (view: ViewConfig) => void;
  slots: Record<string, React.ReactNode[]>;
  views: React.ReactNode[];
};

const ViewHostContext = createContext<ViewHostContextType | undefined>(
  undefined
);

export const ViewHostProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [views, setViews] = useState<ViewConfig[]>([]);

  const registerView = useCallback(
    (view: ViewConfig) => {
      console.log("REGISTER VIEW", view);
      setViews((prev) => {
        // Prevent duplicate IDs:
        if (prev.find((v) => v.slot === view.slot))
          return prev.filter((v) => v.slot !== view.slot).concat([view]);
        return [...prev, view];
      });
    },
    [setViews       ]
  );

  console.log ("VIEWS", views)
  // --- Here you could later apply constraints, state graph, URL solving:
  const slots = useMemo(() => {
    const slots: Record<string, React.ReactNode[]> = {};
    for (const view of views) {
      if (!slots[view.slot]) slots[view.slot] = [];
      slots[view.slot].push(React.createElement(view.component, view.props));
    }
    return slots;
  }, [views]);

  const mem = useMemo(() => ({ registerView, slots }), [registerView, slots]);
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

// The actual mounting of slots:
export const ViewHost = () => {
  const { slots } = useViewHost();

  return (
    <>
      {Object.entries(slots).map(([slotName, elements]) => (
        <React.Fragment key={slotName}>
          {elements.map((element, i) => (
            <React.Fragment key={i}>{element}</React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
