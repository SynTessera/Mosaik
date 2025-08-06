import { useState, useEffect, RefObject } from "react";
import { getMedianColorFromImageRef } from "../util/getMedianColor";

export const useImageColor = (
  imgRef: RefObject<HTMLImageElement | null>
): { r: number; g: number; b: number } | null => {
  const [color, setColor] = useState<{ r: number; g: number; b: number } | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => {
      const result = getMedianColorFromImageRef(imgRef);
      if (result) setColor(result);
    };

    if (img.complete) {
      // Image is already loaded
      handleLoad();
    } else {
      img.addEventListener("load", handleLoad);
      return () => img.removeEventListener("load", handleLoad);
    }
  }, [imgRef]);

  return color;
};
