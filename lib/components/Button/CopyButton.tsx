import React from "react";
import copy from "copy-to-clipboard";
import clsx from "clsx";
import { IconButton } from "./Button.js";
import { useGlobalNotification } from "../Notification/Notification.js";
import { CopyButtonProps } from "@/types/CopyButton.js";

export const CopyButton = (props: CopyButtonProps) => {
  const { className, copy: text } = props;
  const [, setNotification] = useGlobalNotification();
  return (
    <div className={clsx("", {}, className)}>
      <IconButton
        icon="FaCopy"
        onClick={() => {
          copy(text);
          setNotification("Copied to clipboard.");
        }}
      >
        {text}
      </IconButton>
    </div>
  );
};
