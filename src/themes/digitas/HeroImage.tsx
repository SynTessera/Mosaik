import clsx from "clsx";
import { HeroImageHeadline } from "./HeroImageHeadline";
import Image from "next/image";
import { coverImageLink } from "@/lib/util/links";

export const HeroImage = ({
  className,
  content: {
    image: { url, height, width },
    headline,
    overline,
  },
}: any) => (
  <div
    className={clsx("relative", className, `h-[${height}px] -mx-[40px]`)}
    style={{ height: "240vh", width: "100vw" }}
  >
    <HeroImageHeadline className="" overline={overline}>
      {headline}
    </HeroImageHeadline>
    <Image
      src={coverImageLink(url)}
      alt={headline}
      className="absolute top-0 object-cover"
      height={height}
      width={width}
      style={{ height: "240vh", width: "100vw" }}
    />
  </div>
);
