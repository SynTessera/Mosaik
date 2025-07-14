export const getThemedComponent = async (
  name: string,
  theme: string = process.env.MOSAIK_ENV || "light"
) => {
  const { settings } = (await import(`@/themes/${theme}/index`)) || {};
  const Cmp = (await import(`@/themes/${theme}/${name}.tsx`))[name];
  return function ThemedComponent(props: any) {
    return <Cmp {...props} theme={settings} />;
  };
};
