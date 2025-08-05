import { getAlias } from "./util/getAlias";

export function createHybridServerWrapper(
  componentName: string,
  ClientComponent: any
) {
  return async function ServerWrapper({ component, ...props }: any) {
    const { getThemedComponent } = await import(
      "@/lib/server/getThemedComponent"
    );
    const Themed = await getThemedComponent(componentName);
    const Childs = component?.__component
      ? await getThemedComponent(getAlias(component.__component))
      : () => null;
    // Render THEMED fully on server as fallback HTML and pass it as prop to client wrapper
    const themedElement = (
      <Themed
        {...props}
        component={component}
        children={
          component?.__component ? <Childs content={component} /> : <div>TEST</div>
        }
      />
    );
    
    return (
      <ClientComponent
        Component={themedElement}
        component={component}
        {...props}
      />
    );
  };
}
