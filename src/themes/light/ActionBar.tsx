import clsx from "clsx";
import classes from "@/themes/light/light.module.css";

export const ActionBar = ({ children }: any) => {
  return (
    <div
      className={clsx(
        "ActionBar",
        classes.ActionBar,
        "flex p-2 justify-end border-b bg-gray-800 items-center"
      )}
    >
      {children}
    </div>
  );
};
