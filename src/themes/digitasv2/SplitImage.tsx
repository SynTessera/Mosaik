import clsx from "clsx";
import { themeClasses } from "..";
import { Image } from "./Image";
import { coverImageLink } from "@/lib/util/links";

export const SplitImage = ({
  content: { headline, children },
}: any) => (
  <div
    className={clsx(
      themeClasses.DesktopContent,
      "text-[7rem] relative px-[40px]"
    )}
  >
    <Image
      content={{ image: { url: coverImageLink(url), width: 800, height: 700 } }}
      className="absolute top-0"
    />
    <h2 className=""></h2>
  </div>
);
