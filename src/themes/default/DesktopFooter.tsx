import clsx from "clsx";
export const DesktopFooter = ({ className }: any) => (
  <div
    className={clsx("p-4 border-t dark:border-t-gray-800 mt-auto", className)}
  >
    <small>v0.0.1</small>
  </div>
);
