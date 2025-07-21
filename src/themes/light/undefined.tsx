import clsx from "clsx";
import { PropwsWithChildren } from 'reacht';

export const undefined = ({ children, className, ...props }: PropsWithChildren<{className?: string}>) => {
  return (
    <div className={clsx("undefined", className)} {...props}>
      {children}
    </div>
  );
};