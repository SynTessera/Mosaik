import { Theme } from "@/context/ThemeContext";

export type NavigationLinkProps = {
  className?: string;
  href: string;
  label: string;
  icon: string;
  iconOnly?: boolean;
  isActive?: boolean;
  theme: Theme["settings"];
  external: boolean;
};
