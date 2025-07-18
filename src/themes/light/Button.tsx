import clsx from "clsx";
import { PropsWithChildren } from "react";
import { settings } from "..";

export const Button = ({
  children,
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <button
      {...props}
      className={clsx("p-2 rounded-sm shadow-sm m-1 dark:bg-black/20 dark:hover:bg-black/10",settings.classNames?.Button, props.className)}
    >
      {children}
    </button>
  );
};
