/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import clsx from "clsx";
import classes from "./light.module.css";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Theme } from "@/context/ThemeContext";

import { Navigation } from "./Navigation";
import { NavigationLink } from "./NavigationLink";
import { TextContainer } from "./TextContainer";

// === Theme settings ===

export const settings: Theme["settings"] = {
  navigation: {
    showTooltip: true,
  },
  userPreferences: {
    mode: "dark",
  },
  preferences: {
    autoMode: ["system"],
  },
};

// === Individual static slot exports ===

export const DesktopLayout = ({ children, theme }: any) => (
  <div
    className={clsx("w-screen h-screen flex", {
      "bg-white": theme.userPreferences.mode === "light",
      "bg-info-100": theme.userPreferences.mode === "dark",
    })}
  >
    {children}
  </div>
);

export const DesktopSidebar = ({ children }: any) => (
  <div className={classes.DesktopSidebar}>{children}</div>
);

export const DesktopContent = ({ children }: any) => (
  <main
    className={clsx(
      classes.DesktopContent,
      "flex-1 p-4 bg-info-100 max-w-full w-full h-full overflow-hidden"
    )}
  >
    {children}
  </main>
);

export const DesktopFooter = ({}: any) => (
  <div className="p-4 border-t dark:border-t-gray-800 mt-auto">
    <small>v1.0.0</small>
  </div>
);

export const ActionBar = ({ children }: any) => {
  return (
    <div className="flex p-2 justify-end border-b bg-gray-800">{children}</div>
  );
};

export const CollapseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} className="p-2 m-1">
      <Icon icon="FaChevronLeft" className="!h-8 !w-8" />
    </Button>
  );
};

export const ExpandButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} className="p-2 m-1">
      <Icon icon="FaChevronRight" className="!h-8 !w-8" />
    </Button>
  );
};

export { Navigation, NavigationLink, TextContainer };
