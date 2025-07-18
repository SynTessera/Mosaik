import clsx from "clsx";
import { PropsWithChildren } from "react";
import { settings } from "..";

export const Button = ({
  children,
  label,
  ...props
}: PropsWithChildren<{ className?: string, label: string }>) => {
  return (
    <button
      aria-label={label}
      {...props}
      className={clsx(
        "p-2 rounded-sm shadow-sm m-1 dark:bg-black/20 dark:hover:bg-black/10",
        settings.classNames?.Button,
        props.className
      )}
    >
      {children}
    </button>
  );
};
