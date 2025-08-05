import { ScrollContainer } from "@/components/ScrollContainer";
import React, { PropsWithChildren } from "react";

export const BlogPosts = ({ children }: PropsWithChildren) => {
  return (
    <ScrollContainer>
      <ul>
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </ScrollContainer>
  );
};
