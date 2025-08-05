import clsx from "clsx";
import { HeroTextHeadline } from "./HeroTextHeadline";
import { HeroTextContent } from "./HeroTextContent";
import Image from "next/image";
import { coverImageLink } from "@/lib/util/links";
import { Seperator } from "./Seperator";

export const HeroText = ({ children, className, content }: any) => (
  <div
    className={clsx(
      "relative bg-digitas flex justify-between items-start",
      "pt-[7rem]",
      { "pb-[7rem]": !content.seperator, "pb-[2rem]": content.seperator },
      className
    )}
  >
    <div>
      <HeroTextHeadline children={content.headline} />
      {content.content && <HeroTextContent children={content.content} />}
    </div>
    {content?.image && (
      <Image
        src={coverImageLink(content.image.url)}
        alt={content.headline}
        width={content.image.width}
        height={content.image.height}
      />
    )}
    {content?.seperator && <Seperator />}
  </div>
);
