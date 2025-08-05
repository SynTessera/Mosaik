import clsx from "clsx";
import { themeClasses } from "..";

export const AnimatedBlock = ({
  children,
  boxRef,
  triggerRef,
  content: { className },
}: any) => (
  <div className={clsx({
    "h-[100vh]": className?.includes("h-[100vh]"),
    "top-[7rem]": className?.includes("top-[7rem]"),
    "top-0": className?.includes("top-0"),
    "sticky": className?.includes("sticky"),
  })} ref={boxRef}>
    {children}
  </div>
);
