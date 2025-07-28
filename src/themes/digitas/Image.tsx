import clsx from "clsx";
import NextImage from "next/image";
import { coverImageLink } from "@/lib/util/links";

export const Image = ({
  children,
  className,
  content: {
    image: { url, height, width },
    headline,
  },
}: any) => (
  <div
    className={clsx("relative", className)}
    // style={{ height: "240vh", width: "100vw" }}
  >
    <NextImage
      src={coverImageLink(url)}
      alt={headline}
      className=""
      height={height}
      width={width}
      // style={{ height: "100", width: "100vw" }}
    />
  </div>
);
