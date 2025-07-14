import { PropsWithChildren } from "react";

export const ScrollContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-h-full overflow-y-auto overflow-x-hidden text-ellipsis pr-1 ">
      {children}
    </div>
  );
};
