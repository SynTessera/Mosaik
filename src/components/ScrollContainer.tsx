import { PropsWithChildren } from "react";

export const ScrollContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="scrollable max-h-full overflow-y-auto overflow-x-hidden text-ellipsis pr-1 w-full">
      {children}
    </div>
  );
};
