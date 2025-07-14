import clsx from "clsx";

export const DesktopLayout = ({ children, theme }: any) => {
  return (
    <div
      className={clsx("w-screen h-screen flex", {
        "bg-white": theme.userPreferences.mode === "light",
        "bg-info-100": theme.userPreferences.mode === "dark",
      })}
    >
      {children}
    </div>
  );
};
