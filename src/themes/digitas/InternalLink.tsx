import clsx from "clsx";
import Arrow from "@/assets/arrowdiagonal.svg";

export const InternalLink = ({
  children,
  className,
  href = "#",
  ...props
}: any) => (
  <div className={clsx("flex gap-2 items-center uppercase", className)}>
    <a href={href} {...props}>
      {children}
    </a>
    <Arrow />
  </div>
);
