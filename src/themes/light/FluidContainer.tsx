import { PropsWithChildren } from "react";

export const FluidContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-[1440px] ">{children}</div>
    </div>
  );
};
