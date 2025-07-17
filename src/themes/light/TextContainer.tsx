import clsx from "clsx";
import { PropsWithChildren } from "react";

export const TextContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <p className={clsx("max-w-[70ch]", className)}>{children}</p>;
};
