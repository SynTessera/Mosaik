import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from "./Button.js";
import copy from "copy-to-clipboard";
import clsx from "clsx";
import { useGlobalNotification } from "../Notification/Notification.js";
export const CopyButton = (props) => {
    const { className, copy: text } = props;
    const [, setNotification] = useGlobalNotification();
    return (_jsx("div", { className: clsx("", {}, className), children: _jsx(IconButton, { icon: "FaCopy", onClick: () => {
                copy(text);
                setNotification("Copied to clipboard.");
            } }) }));
};
