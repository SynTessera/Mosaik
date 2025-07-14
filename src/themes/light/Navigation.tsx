import { NavigationLinkProps } from "@/types/NavigationLinkProps";
import { PropsWithChildren } from "react";

export const Navigation = ({
  children,
}: PropsWithChildren<NavigationLinkProps>) => {
  return <nav className="overflow-y-auto max-h-full">{children}</nav>;
};
