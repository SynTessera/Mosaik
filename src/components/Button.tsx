"use client";

import clsx from "clsx";
import { Icon } from "./Icon";
import ReactDOM from "react-dom";
import { useRef, useState } from "react";
import { PlacesType, Tooltip } from "react-tooltip";
import Link from "next/link";
import { useBody } from "@/lib/hooks/useBody";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";

export type ButtonProps = {
  tooltip?: string;
  variant?: string;
  allowDisabledClick?: boolean;
  onDisabledClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tooltipPlacement?: PlacesType;
  href?: string;
};
export type ReactButton = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps;

export const Button = ({
  className,
  children,
  onClick,
  tooltip,
  variant,
  allowDisabledClick,
  onDisabledClick,
  disabled,
  id,
  tooltipPlacement,
  href,
  ...rest
}: ReactButton) => {
  const body = useBody();
  const Cmp = href ? Link : "button";
  const props = {} as any;
  if (href) props.href = href;
  return (
    <>
      <Cmp
        id={id}
        title={rest.title}
        onClick={(e) => {
          if (disabled && allowDisabledClick) {
            onDisabledClick?.(e as any);
          } else {
            onClick?.(e as any);
          }
        }}
        className={clsx(
          "select-none p-1 rounded-sm shadow-sm flex items-center w-max h-max leading-[1rem] cursor-pointer",
          "backdrop-blur-[2px]",
          "disabled:bg-white/10 disabled:hover:!bg-white/10 ",
          className,
          "hover:border-[1.5px]",
          {
            "bg-gray-500 cursor-default": disabled && allowDisabledClick,
            "border-[1.5px]": true,
            "bg-white/20 hover:bg-white/40": !disabled,
            "border-black": variant === "noborder",
            "border-white/50": variant !== "noborder",
            "hover:border-white/70": 1,
            "text-white": !disabled,
            "text-gray-400": disabled,
          }
        )}
        {...rest}
        {...props}
        disabled={!allowDisabledClick && disabled}
      >
        {children}
      </Cmp>
      {body &&
        ReactDOM.createPortal(
          <Tooltip
            key={tooltip}
            anchorSelect={"#" + id}
            place={tooltipPlacement}
            className="z-[10000]"
          >
            {tooltip}
          </Tooltip>,
          body
        )}
    </>
  );
};

export type IconButtonProps = ReactButton & {
  round?: boolean;
  icon?: string;
  iconClsn?: string;
  allowDisabledClick?: boolean;
};
export const IconButton = ({
  className,
  iconClsn = "p-[4px]",
  round,
  tooltip,
  icon,
  allowDisabledClick,
  onDisabledClick,
  ...rest
}: IconButtonProps) => {
  return (
    <Button
      className={clsx(
        "IconButton",
        " flex items-center justify-center w-full  disabled:text-gray-400",
        className,
        {
          "text-gray-400": rest.disabled,
          "!rounded-[200px]": round,
        }
        // "!m-0"
      )}
      tooltip={tooltip}
      {...rest}
      disabled={rest.disabled}
      allowDisabledClick={allowDisabledClick}
      onDisabledClick={onDisabledClick}
    >
      {icon && (
        <Icon
          className={clsx(
            " w-fit h-fit pointer-events-none cursor-grab",
            iconClsn
          )}
          icon={icon}
        />
      )}
      {rest.children}
    </Button>
  );
};

export const MenuButton = ({
  className,
  tooltip,
  icon,
  ...rest
}: IconButtonProps) => {
  const [menuOpen, setMenuOpen] = useState<number[] | null>(null);
  const [x, y] = menuOpen || [0, 0];
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {
    setMenuOpen(null);
  });
  return (
    <div>
      <div ref={ref}>
        <Button
          onClick={() => {
            const { x, y, width } = ref.current?.getBoundingClientRect() || {
              x: 0,
              y: 0,
              width: 0,
            };
            setMenuOpen([x + width - 8, y]);
          }}
          className={clsx("relative flex justify-center", className)}
          tooltip={tooltip}
          {...rest}
        >
          {icon && <Icon icon={icon} containerClsn={rest.iconClsn} />}
        </Button>
      </div>
      {ReactDOM.createPortal(
        <div
          className={clsx(
            "absolute bottom-[100%] translate-x-5 lg:translate-x-0 bg-black/70 z-[4000] w-max h-[100px]",
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
