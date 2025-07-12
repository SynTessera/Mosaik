import { Theme } from "@/context/ThemeContext";

export type NavigationLinkProps = {
  href: string;
  label: string;
  icon: string;
  iconOnly?: boolean;
  isActive?: boolean;
  theme: Theme['settings'];
};
