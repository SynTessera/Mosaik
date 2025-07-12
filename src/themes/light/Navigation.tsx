import { NavigationLinkProps } from "@/types/NavigationLinkProps";
import { PropsWithChildren } from "react";

export const Navigation = ({
  children,
}: PropsWithChildren<NavigationLinkProps>) => {
  return <nav>{children}</nav>;
};
