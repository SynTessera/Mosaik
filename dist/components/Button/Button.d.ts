import React from "react";
import { AnchorHTMLAttributes } from "react";
import { PlacesType } from "react-tooltip";
import { LinkProps } from "react-router";
import { FitX, Sizes } from "../../types/Size.js";
import { ColorMode } from "../../types/Theme.js";
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
export type ReactButton<T extends keyof ButtonAttributeMap = "button"> = ButtonProps<T> & ButtonAttributeMap[T];
export declare const Button: <T extends keyof ButtonAttributeMap = "button">({ className, children, onClick, tooltip, allowDisabledClick, onDisabledClick, id, tooltipPlacement, as, size, fit, colorMode, ...rest }: ReactButton<T>) => import("react/jsx-runtime").JSX.Element;
export type IconButtonProps<T extends keyof ButtonAttributeMap> = ReactButton<T> & {
    round?: boolean;
    icon?: string;
    iconClsn?: string;
    allowDisabledClick?: boolean;
};
export declare const IconButton: <T extends keyof ButtonAttributeMap>({ className, iconClsn, round, tooltip, icon, allowDisabledClick, onDisabledClick, ...rest }: IconButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
export type LinkButtonProps = IconButtonProps<"a"> & {
    active?: boolean;
};
export declare const LinkButton: ({ as, active, to, ...rest }: LinkButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const MenuButton: <T extends keyof ButtonAttributeMap>({ className, tooltip, icon, ...rest }: IconButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
