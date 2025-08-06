"use client";

import { useImageColor } from "@/lib/hooks/useImageColor";
import { PropsWithChildren, useRef } from "react";
import NextImage from "next/image";
import { useMatchMedia } from "@/lib/hooks/useMatchMedia";

export const ImageColorContainer = ({
  children,
  imgUrl,
}: PropsWithChildren<{ imgUrl: string }>) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const medianColor = useImageColor(imgRef);
  const isDark = useMatchMedia("(prefers-color-scheme: dark)");
  return (
    <div
      style={{
        backgroundColor: medianColor
          ? `rgba(${medianColor.r}, ${medianColor.g}, ${medianColor.b},${
              isDark ? "0.55" : "0.25"
            })`
          : "transparent",
      }}
    >
      <NextImage
        ref={imgRef}
        src={imgUrl}
        className="absolute opacity-0"
        alt={"Blog Post Cover Image"}
        height={128}
        width={128}
      />
      {children}
    </div>
  );
};
