import clsx from "clsx";

export const DesktopLayout = ({ children, theme }: any) => {
  return (
    <div
      className={clsx("w-full h-full flex max-w-screen max-h-screen overflow-hidden", {
        "bg-white": theme.userPreferences.mode === "light",
        "bg-info-100": theme.userPreferences.mode === "dark",
      })}
    >
      {children}
    </div>
  );
};
