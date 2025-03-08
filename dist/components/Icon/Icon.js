import React from "react";
import clsx from "clsx";
import allIcons from "./icons";
export const Icon = ({ icon, children, ...rest }) => {
    const Cmp = (allIcons[icon] ||
        allIcons.MdQuestionMark);
    return (<span className={clsx("relative justify-center items-center")}>
      <Cmp {...rest}/>
      <span className="absolute">{children}</span>
    </span>);
};
