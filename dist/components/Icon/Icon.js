import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import allIcons from "./icons";
export const Icon = ({ icon, children, ...rest }) => {
    const Cmp = (allIcons[icon] ||
        allIcons.MdQuestionMark);
    return (_jsxs("span", { className: clsx("relative justify-center items-center"), children: [_jsx(Cmp, { ...rest }), _jsx("span", { className: "absolute", children: children })] }));
};
