import { Button } from "./Button";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export const ActionButton = ({
  children,
  className,
  label,
  onClick,
}: PropsWithChildren<{ className?: string; label: string; onClick: any }>) => {
  return (
    <Button className={clsx(className)} label={label} onClick={onClick}>
      {children}
    </Button>
  );
};
