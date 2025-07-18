"use client";

import { Icon } from "@/components/Icon";
import clsx from "clsx";
import Link from "next/link";
import { themeClasses as classes } from "@/themes";
import { NavigationLinkProps } from "@/types/NavigationLinkProps";
// import { Tooltip } from "react-tooltip";

export const NavigationLink = ({
  label,
  href,
  icon,
  iconOnly = false,
  isActive = false,
  external = false,
  className,
}: NavigationLinkProps) => {
  const id = href.split("/").pop();
  return (
    <Link
      id={id}
      href={href}
      target={external ? "_blank" : "_self"}
      className={clsx(
        classes.NavigationLink,
        "flex gap-2 items-center",
        {
          [classes.active]: isActive,
        },
        className
      )}
    >
      <Icon icon={icon} className={clsx({ "mx-auto": iconOnly })} />
      {!iconOnly && label}
    </Link>
  );
};
