import { ScrollContainer } from "@/components/ScrollContainer";
import React, { PropsWithChildren } from "react";

export const BlogPosts = ({ children }: PropsWithChildren) => {
  return (
    <ScrollContainer>
      <ul>
        {React.Children.map(children, (child) => (
          <li className="odd:bg-amber-900 even:bg-blue-900">{child}</li>
        ))}
      </ul>
    </ScrollContainer>
  );
};
