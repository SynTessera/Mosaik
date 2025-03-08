import React from "react";
import clsx from "clsx";
import { Icon } from "../Icon";
import ReactDOM from "react-dom";
import {
  AnchorHTMLAttributes,
  ComponentType,
  ElementType,
  useRef,
  useState,
} from "react";
import { useOnClickOutside } from "@/hooks";
import { PlacesType, Tooltip } from "react-tooltip";
import { Link, LinkProps, useLocation } from "react-router";
import { FitX, Sizes } from "@/types/Size";
import { ColorMode } from "@/types/Theme";
import { useTheme } from "@/hooks/useTheme";
import { baseClasses } from "@/utils/theme";
import styles from "./Button.module.css";

export type ButtonElements = "button" | "a";
export type ButtonAttributeMap = {
  button: React.ButtonHTMLAttributes<HTMLButtonElement>;
  a: LinkProps;
};
export type ButtonHrefAttributeMap = {
  button: never;
  a: Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "hrefLang">;
};
export type ButtonProps<Element extends ButtonElements = "button"> = {
  disabled?: boolean;
  tooltip?: string;
  variant?: string;
  allowDisabledClick?: boolean;
  onDisabledClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tooltipPlacement?: PlacesType;
  as?: Element;
  href?: ButtonHrefAttributeMap[Element]["href"];
  size?: Sizes;
  fit?: [FitX, FitX?];
  outline?: boolean;
  colorMode?: ColorMode;
};

export type ReactButton<T extends keyof ButtonAttributeMap = "button"> =
  ButtonProps<T> & ButtonAttributeMap[T];

export const Button = <T extends keyof ButtonAttributeMap = "button">({
  className,
  children,
  onClick,
  tooltip,
  allowDisabledClick,
  onDisabledClick,
  id,
  tooltipPlacement,
  as = "button" as T,
  size = Sizes.auto,
  fit = [FitX.auto],
  colorMode,
  ...rest
}: ReactButton<T>) => {
  const linkProps: { to?: string } = {};
  const { disabled } = rest as any;
  const { theme } = useTheme();
  let Cmp: ComponentType<ButtonAttributeMap[T]> | ElementType = "button";

  if (as === "a") {
    Cmp = Link;
    linkProps.to = rest.href;
  }

  return (
    <>
      <Cmp
        id={id}
        title={rest.title}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (disabled && allowDisabledClick) {
            onDisabledClick?.(e);
          } else {
            (onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e);
          }
        }}
        className={clsx(
          "select-none p-1 rounded-sm shadow-sm text-white flex items-center leading-[1rem] group",
          "backdrop-blur-[2px]",
          "disabled:bg-gray-400  disabled:text-gray-600",
          baseClasses(styles),
          styles[size],
          baseClasses(theme.classes.button),
          className,
          {
            "w-auto h-auto": !className && fit?.[0] !== FitX.fill,
            "h-6 w-6 p-0": size === Sizes.sm,
            "h-8 w-8 p-0": size === Sizes.md,
            "w-full max-w-full": fit?.[0] === FitX.fill,
            "bg-gray-500 cursor-default": disabled && allowDisabledClick,
            "border-white/50 hover:border-white/70 disabled:hover:border-white/50":
              colorMode === ColorMode.light,
            "!border-black hover:border-black/70 !text-black/70":
              colorMode === ColorMode.dark,
          }
        )}
        {...(rest as any)}
        disabled={!allowDisabledClick && disabled}
      >
        {children}
        <div className="absolute w-full h-full bg-black/0 hover:bg-black/10  z-20 group-disabled:hidden left-0" />
      </Cmp>
      {ReactDOM.createPortal(
        <Tooltip
          anchorSelect={"#" + id}
          place={tooltipPlacement}
          className="z-[10000]"
        >
          {tooltip}
        </Tooltip>,
        document.querySelector("dialog[open]") || document.body
      )}
    </>
  );
};

export type IconButtonProps<T extends keyof ButtonAttributeMap> =
  ReactButton<T> & {
    round?: boolean;
    icon?: string;
    iconClsn?: string;
    allowDisabledClick?: boolean;
  };
export const IconButton = <T extends keyof ButtonAttributeMap>({
  className,
  iconClsn = "",
  round,
  tooltip,
  icon,
  allowDisabledClick,
  onDisabledClick,
  ...rest
}: IconButtonProps<T>) => {
  return (
    <Button
      className={clsx(
        "IconButton",
        " flex items-center justify-center  disabled:text-gray-400 gap-1 ",
        className,
        {
          "text-gray-400": rest.disabled,
          "!rounded-[200px]": round,
        }
      )}
      tooltip={tooltip}
      {...(rest as any)}
      disabled={rest.disabled}
      allowDisabledClick={allowDisabledClick}
      onDisabledClick={onDisabledClick}
    >
      {icon && (
        <Icon
          className={clsx(
            // "p-[4px]",
            "pointer-events-none cursor-grab h-full w-full",
            iconClsn
          )}
          icon={icon}
        />
      )}
      {rest.children}
    </Button>
  );
};

export type LinkButtonProps = IconButtonProps<"a"> & { active?: boolean };
export const LinkButton = ({
  as = "a",
  active,
  to,
  ...rest
}: LinkButtonProps) => {
  const LinkIconButton = IconButton<"a">;
  const location = useLocation();
  return (
    <LinkIconButton
      as={as}
      to={to}
      {...rest}
      className={clsx("!border-0 !pr-2 items-center", rest.className, {
        "!bg-black/10 hover:!bg-black/15 ": !active || location.pathname !== to,
        "!bg-black/20": active && location.pathname !== to,
        "!bg-black/30": active && location.pathname === to,
      })}
      iconClsn={clsx(rest.iconClsn, "!text-white", {
        "!text-yellow-500/80": active && location.pathname !== to,
        "!text-yellow-500": active && location.pathname === to,
      })}
    />
  );
};
export const MenuButton = <T extends keyof ButtonAttributeMap>({
  className,
  tooltip,
  icon,
  ...rest
}: IconButtonProps<T>) => {
  const [menuOpen, setMenuOpen] = useState<number[] | null>(null);
  const [x, y] = menuOpen || [0, 0];
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => {
    setMenuOpen(null);
  });
  const ButtonButton = Button as any;
  return (
    <div>
      <div ref={ref}>
        <ButtonButton
          onClick={() => {
            const { x, y, width } = ref.current?.getBoundingClientRect() || {
              x: 0,
              y: 0,
              width: 0,
            };
            setMenuOpen([x + width - 8, y]);
          }}
          className={clsx("relative", className)}
          tooltip={tooltip}
          {...(rest as any)}
        >
          {icon && <Icon icon={icon} />}
        </ButtonButton>
      </div>
      {ReactDOM.createPortal(
        <div
          className={clsx(
            "absolute bottom-[100%] z-[4000] w-[100px] h-[100px]",
            {
              hidden: !menuOpen,
            }
          )}
          style={{
            left: x - 48,
            top: y,
          }}
        >
          {rest.children}
        </div>,
        document.body
      )}
    </div>
  );
};
