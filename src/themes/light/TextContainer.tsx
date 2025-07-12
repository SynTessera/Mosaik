import { PropsWithChildren } from "react";

export const TextContainer = ({ children }: PropsWithChildren) => {
  return <p className="max-w-[70ch]">{children}</p>;
};
