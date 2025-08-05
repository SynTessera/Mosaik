import clsx from "clsx";
import { PropsWithChildren } from "react";

export const FluidContainer = ({ children,
  className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className={clsx("max-w-[1440px] grow", className)}>{children}</div>
    </div>
  );
};
