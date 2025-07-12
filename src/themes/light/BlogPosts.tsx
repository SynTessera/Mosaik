import { PropsWithChildren } from "react";

export const BlogPosts = ({ children }: PropsWithChildren) => {
  return <ul>{children}</ul>;
};
