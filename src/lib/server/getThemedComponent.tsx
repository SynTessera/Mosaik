import { settings } from "@/themes";
export const getThemedComponent = async (
  name: string,
  theme: string = settings.theme || "default"
) => {
  const { settings } = (await import(`@/themes/${theme}/index`)) || {};
  const Cmp = (await import(`@/themes/${theme}/${name}.tsx`))[name];
  return function ThemedComponent(props: any) {
    return <Cmp {...props} theme={settings} />;
  };
};
