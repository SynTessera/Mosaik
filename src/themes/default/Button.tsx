import clsx from "clsx";
import { PropsWithChildren } from "react";
import { settings } from "..";

export const Button = ({
  children,
  label,
  className,
  ...props
}: PropsWithChildren<{ className?: string; label: string; onClick: any }>) => {
  return (
    <button
      aria-label={label || "Button"}
      {...props}
      className={clsx(
        "p-2 rounded-sm shadow-sm m-1",
        "cursor-pointer disabled:cursor-default",
        " !bg-white/30 hover:!bg-white/40 dark:bg-black/20 dark:hover:bg-black/10",
        settings.classNames?.Button,
        className
      )}
    >
      {children}
    </button>
  );
};
