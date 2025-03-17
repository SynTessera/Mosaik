import React from "react";
import clsx from "clsx";
import allIcons from "./icons.js";
import { ComponentType } from "react";

export const Icon = ({
  icon,
  children,
  ...rest
}: React.PropsWithChildren<{
  icon: string;
  className?: string;
}>) => {
  const Cmp = (allIcons[icon as keyof typeof allIcons] ||
    allIcons.MdQuestionMark) as ComponentType<Partial<HTMLImageElement>>;
  return (
    <span className={clsx("relative justify-center items-center")}>
      <Cmp {...rest} />
      <span className="absolute">{children}</span>
    </span>
  );
};
