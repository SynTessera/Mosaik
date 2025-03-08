import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { Icon } from "../Icon/index.js";
import ReactDOM from "react-dom";
import { useRef, useState, } from "react";
import { useOnClickOutside } from "../../hooks/index.js";
import { Tooltip } from "react-tooltip";
import { Link, useLocation } from "react-router";
import { FitX, Sizes } from "../../types/Size.js";
import { ColorMode } from "../../types/Theme.js";
import { useTheme } from "../../hooks/useTheme.js";
import { baseClasses } from "../../utils/theme.js";
import styles from "~/components/Button/Button.module.css";
export const Button = ({ className, children, onClick, tooltip, allowDisabledClick, onDisabledClick, id, tooltipPlacement, as = "button", size = Sizes.auto, fit = [FitX.auto], colorMode, ...rest }) => {
    const linkProps = {};
    const { disabled } = rest;
    const { theme } = useTheme();
    let Cmp = "button";
    if (as === "a") {
        Cmp = Link;
        linkProps.to = rest.href;
    }
    return (_jsxs(_Fragment, { children: [_jsxs(Cmp, { id: id, title: rest.title, onClick: (e) => {
                    if (disabled && allowDisabledClick) {
                        onDisabledClick?.(e);
                    }
                    else {
                        onClick?.(e);
                    }
                }, className: clsx("select-none p-1 rounded-sm shadow-sm text-white flex items-center leading-[1rem] group", "backdrop-blur-[2px]", "disabled:bg-gray-400  disabled:text-gray-600", baseClasses(styles), styles[size], baseClasses(theme.classes.button), className, {
                    "w-auto h-auto": !className && fit?.[0] !== FitX.fill,
                    "h-6 w-6 p-0": size === Sizes.sm,
                    "h-8 w-8 p-0": size === Sizes.md,
                    "w-full max-w-full": fit?.[0] === FitX.fill,
                    "bg-gray-500 cursor-default": disabled && allowDisabledClick,
                    "border-white/50 hover:border-white/70 disabled:hover:border-white/50": colorMode === ColorMode.light,
                    "!border-black hover:border-black/70 !text-black/70": colorMode === ColorMode.dark,
                }), ...rest, disabled: !allowDisabledClick && disabled, children: [children, _jsx("div", { className: "absolute w-full h-full bg-black/0 hover:bg-black/10  z-20 group-disabled:hidden left-0" })] }), ReactDOM.createPortal(_jsx(Tooltip, { anchorSelect: "#" + id, place: tooltipPlacement, className: "z-[10000]", children: tooltip }), document.querySelector("dialog[open]") || document.body)] }));
};
export const IconButton = ({ className, iconClsn = "", round, tooltip, icon, allowDisabledClick, onDisabledClick, ...rest }) => {
    return (_jsxs(Button, { className: clsx("IconButton", " flex items-center justify-center  disabled:text-gray-400 gap-1 ", className, {
            "text-gray-400": rest.disabled,
            "!rounded-[200px]": round,
        }), tooltip: tooltip, ...rest, disabled: rest.disabled, allowDisabledClick: allowDisabledClick, onDisabledClick: onDisabledClick, children: [icon && (_jsx(Icon, { className: clsx(
                // "p-[4px]",
                "pointer-events-none cursor-grab h-full w-full", iconClsn), icon: icon })), rest.children] }));
};
export const LinkButton = ({ as = "a", active, to, ...rest }) => {
    const LinkIconButton = (IconButton);
    const location = useLocation();
    return (_jsx(LinkIconButton, { as: as, to: to, ...rest, className: clsx("!border-0 !pr-2 items-center", rest.className, {
            "!bg-black/10 hover:!bg-black/15 ": !active || location.pathname !== to,
            "!bg-black/20": active && location.pathname !== to,
            "!bg-black/30": active && location.pathname === to,
        }), iconClsn: clsx(rest.iconClsn, "!text-white", {
            "!text-yellow-500/80": active && location.pathname !== to,
            "!text-yellow-500": active && location.pathname === to,
        }) }));
};
export const MenuButton = ({ className, tooltip, icon, ...rest }) => {
    const [menuOpen, setMenuOpen] = useState(null);
    const [x, y] = menuOpen || [0, 0];
    const ref = useRef(null);
    useOnClickOutside(ref, () => {
        setMenuOpen(null);
    });
    const ButtonButton = Button;
    return (_jsxs("div", { children: [_jsx("div", { ref: ref, children: _jsx(ButtonButton, { onClick: () => {
                        const { x, y, width } = ref.current?.getBoundingClientRect() || {
                            x: 0,
                            y: 0,
                            width: 0,
                        };
                        setMenuOpen([x + width - 8, y]);
                    }, className: clsx("relative", className), tooltip: tooltip, ...rest, children: icon && _jsx(Icon, { icon: icon }) }) }), ReactDOM.createPortal(_jsx("div", { className: clsx("absolute bottom-[100%] z-[4000] w-[100px] h-[100px]", {
                    hidden: !menuOpen,
                }), style: {
                    left: x - 48,
                    top: y,
                }, children: rest.children }), document.body)] }));
};
