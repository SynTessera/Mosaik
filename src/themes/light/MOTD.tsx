import { Icon } from "@/components/Icon";
import clsx from "clsx";
import { PropsWithChildren } from "react";

export type MOTDProps = PropsWithChildren<{
  className?: string;
  message: string;
  severity: "info" | "warning" | "success" | "error";
}>;
export const MOTD = ({ message, className, severity }: MOTDProps) => {
  return (
    <div
      className={clsx(
        "p-3 rounded-b-sm border border-black/40 flex gap-2 items-center mx-2",
        {
          "bg-orange-400": severity === "warning",
        },
        className
      )}
    >
      <Icon icon={clsx({ FaExclamationTriangle: severity === "warning" }) as any} className="h-6 w-6" />
      {message}
    </div>
  );
};
