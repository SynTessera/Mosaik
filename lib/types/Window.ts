import { PropsWithChildren } from "react";
// import { Action } from "./Action";
import { IconName } from "./Icon";
import { FitX, FitY, Sizes } from "./Size";

export type WindowState = {
  maximized: boolean;
  // effects: Action[];
};

export type WindowOptions = {
  collapsed?: boolean;
  autoExpandRoute?: string;
  closePath?: string;
};
export type WindowProps = PropsWithChildren<{
  className?: string;
  title: string;
  icon?: IconName;
  size?: Sizes;
  fit?: [FitX, FitY?];
  options?: WindowOptions;
}>;

export enum WindowActions {
  CLOSE = "CLOSE",
  TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE",
}
