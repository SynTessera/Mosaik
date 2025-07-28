import { getAlias } from "@/lib/util/getAlias";
import { ThemedComponent } from "../ThemedComponent";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { PropsWithChildren } from "react";
import { blocks } from "@/themes/mappings";

export const Content = async ({
  children,
  content,
  ...props
}: PropsWithChildren<{ content: any }>) => {
  if (content.__component === "shared.component") {
    console.log("SEPERATOR", content);
    return (
      <ThemedComponent name={content.name} content={content}>
        {children}
      </ThemedComponent>
    );
  } else if (blocks?.[content.__component]) {
    const Cmp = blocks?.[content.__component];
    const Themed = await getThemedComponent(getAlias(content.__component));
    return (
      <Cmp
        content={content}
        {...props}
        Component={<Themed content={content} {...props} />}
      />
    );
  }
  return (
    <div>
      <ThemedComponent
        key={content.id}
        name={getAlias(content.__component)}
        content={content}
      >
        {children}
      </ThemedComponent>
    </div>
  );
};
