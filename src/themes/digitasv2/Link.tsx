import clsx from "clsx";
import NextLink from "next/link";
export const Link = ({className, ...props}: any) => {
  return (
    <NextLink  {...props} className={clsx("text-blue-500 underline", className)}/>
  );
};
