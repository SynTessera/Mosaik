import { Action } from "@/types/Action";
import { Button } from "./Button";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export const ActionButton = ({
  children,
  className,
  action,
  onClick,
}: PropsWithChildren<{ className?: string; label: string; onClick: any, action: Action<string, string, object> }>) => {
  return (
    <Button className={clsx(className)} label={action?.type || 'Action Button'} onClick={onClick}>
      {children}
    </Button>
  );
};
