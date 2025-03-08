import React from "react";
import { useEffect } from "react";
import { IconButton } from "../Button";
import { Icon } from "../Icon";
import { useState } from "tesseract";
export const GlobalNotification = () => {
    const [title, setNotification] = useGlobalNotification();
    useEffect(() => {
        const to = setTimeout(() => setNotification(""), 5000);
        return () => clearTimeout(to);
    });
    return (<div className="backdrop-blur-sm fixed top-2 right-1/2 translate-x-1/2 bg-blue-500/70 rounded-md font-semibold z-[1000] p-1 gap-0 flex items-center justify-between">
      <Icon icon="FaInfo" className="!text-blue-200 h-8 w-8 p-2 rounded-md bg-black/20 mr-2"></Icon>
      <div className="p-2 bg-black/30 rounded-md text-white ">{title}</div>
      <IconButton 
    // round
    className="!rounded-md !ml-1" icon="FaX" onClick={() => setNotification("")}></IconButton>
    </div>);
};
export const useGlobalNotification = () => {
    return useState("", GlobalNotification);
};
