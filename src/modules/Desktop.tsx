"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { ViewHostProvider } from "./ViewHost";
import { Slot } from "./Slot";
import { useThemedComponent } from "@/lib/hooks/useThemedComponent";

// --- 1️⃣ Types ---
type DesktopState = {
  windows: string[]; // Simple for now: array of window IDs or slugs
  focusedWindow: string | null;
};

type DesktopAction =
  | { type: "OPEN_WINDOW"; payload: string }
  | { type: "CLOSE_WINDOW"; payload: string }
  | { type: "FOCUS_WINDOW"; payload: string }
  | { type: "RESTORE_STATE"; payload: Partial<DesktopState> };

type DesktopContextValue = {
  state: DesktopState;
  dispatch: React.Dispatch<DesktopAction>;
};

// --- 2️⃣ Create context ---
const DesktopContext = createContext<DesktopContextValue | undefined>(
  undefined
);

export const useDesktop = () => {
  const ctx = useContext(DesktopContext);
  if (!ctx) throw new Error("useDesktop must be used within <Desktop>");
  return ctx;
};

// --- 3️⃣ Reducer for serializable state ---
const initialState: DesktopState = {
  windows: [],
  focusedWindow: null,
};

function desktopReducer(
  state: DesktopState,
  action: DesktopAction
): DesktopState {
  switch (action.type) {
    case "OPEN_WINDOW":
      return {
        ...state,
        windows: [...new Set([...state.windows, action.payload])],
        focusedWindow: action.payload,
      };
    case "CLOSE_WINDOW":
      return {
        ...state,
        windows: state.windows.filter((id) => id !== action.payload),
        focusedWindow:
          state.focusedWindow === action.payload ? null : state.focusedWindow,
      };
    case "FOCUS_WINDOW":
      return {
        ...state,
        focusedWindow: action.payload,
      };
    case "RESTORE_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

// --- 4️⃣ Desktop Provider ---
export function Desktop({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(desktopReducer, initialState);
  const Desktop = useThemedComponent("DesktopLayout") || (() => null);
  // For now: stub for URL sync
  useEffect(() => {
    // TODO: parse pathname/query -> state
    // e.g. ?windows=mail,settings&focus=mail
    // router.replace(...) on state changes
    console.log("DESKTOP");
  }, []);

  const value: DesktopContextValue = { state, dispatch };

  return (
    <DesktopContext.Provider value={value}>
      <div className="desktop">
        <Desktop>
          <ViewHostProvider>
            {children}

            <Slot name="sidebar"></Slot>
            <Slot name="content"></Slot>
          </ViewHostProvider>
        </Desktop>
      </div>
    </DesktopContext.Provider>
  );
}
