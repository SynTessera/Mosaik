export function createHybridServerWrapper(
  componentName: string,
  ClientComponent: any
) {
  return async function ServerWrapper(props: any) {
    const { getThemedComponent } = await import(
      "@/lib/server/getThemedComponent"
    );
    const Themed = await getThemedComponent(componentName);
    // Render THEMED fully on server as fallback HTML and pass it as prop to client wrapper
    const themedElement = <Themed key="test" {...props} />;
    return <ClientComponent Component={themedElement} {...props} />;
  };
}
