import { getAlias } from "@/lib/util/getAlias";
import { ThemedComponent } from "../ThemedComponent";
import { getThemedComponent } from "@/lib/server/getThemedComponent";
import { PropsWithChildren } from "react";
import { blocks } from "@/themes/mappings";
import { getClientComponent } from "@/lib/server/getClientComponent";

export const Content = async ({
  children,
  content,
  component,
  ...props
}: PropsWithChildren<{ content: any; component?: any }>) => {
  if (content.__component === "shared.component") {
    return (
      <ThemedComponent name={content.name} content={content}>
        {children}
      </ThemedComponent>
    );
  } else if (content.__component === "shared.clientcomponent") {
    const Cmp = await getClientComponent(content.componentName);
    return <Cmp content={content}>{children}</Cmp>;
  } else if (blocks?.[content.__component]) {
    const dynamicComponent = component?.[0];
    const Cmp = blocks?.[content.__component];
    return (
      <Cmp
        {...props}
        content={content}
        component={dynamicComponent}
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
