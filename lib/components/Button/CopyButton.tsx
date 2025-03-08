import React from "react";
import { IconButton } from "./Button";
import copy from "copy-to-clipboard";
import clsx from "clsx";
import { useGlobalNotification } from "../Notification/Notification";
import { CopyButtonProps } from "@/types/CopyButton";

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
      ></IconButton>
    </div>
  );
};
