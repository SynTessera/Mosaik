import { IconNames } from "@/components/Icon";
import { Theme } from "@/context/ThemeContext";

export type NavigationLinkProps = {
  className?: string;
  href: string;
  label: string;
  icon: IconNames;
  iconOnly?: boolean;
  isActive?: boolean;
  theme: Theme["settings"];
  external: boolean;
};
