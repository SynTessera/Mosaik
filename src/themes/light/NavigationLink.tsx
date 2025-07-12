import { Icon } from "@/components/Icon";
import clsx from "clsx";
import Link from "next/link";
import classes from "./light.module.css";
import { NavigationLinkProps } from "@/types/NavigationLinkProps";
import ReactDOM from "react-dom";
import { Tooltip } from "react-tooltip";
import { useBody } from "@/lib/hooks/useBody";

export const NavigationLink = ({
  label,
  href,
  icon,
  iconOnly = false,
  isActive = false,
  theme,
  external = false,
}: NavigationLinkProps) => {
  let body;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    body = useBody();
  } catch {
    body = null;
  }
  const id = href.split("/").pop();
  const tooltip =
    theme?.navigation?.showTooltip &&
    body &&
    iconOnly &&
    ReactDOM.createPortal(
      <Tooltip anchorSelect={`#${id}`}>{label}</Tooltip>,
      body
    );
  return (
    // <li className="">
    <>
      <Link
        id={id}
        href={href}
        target={external ? "_blank" : "_self"}
        className={clsx(classes.NavigationLink, "flex gap-2 items-center", {
          [classes.active]: isActive,
        })}
      >
        <Icon icon={icon} containerClsn={clsx({ "mx-auto": iconOnly })} />
        {!iconOnly && label}
      </Link>
      {tooltip}
    </>
  );
};
