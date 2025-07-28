import { settings } from "@/themes";

export const getThemedComponent = async (
  name: string,
  theme: string = settings.theme || "default"
) => {
  let mod;
  try {
    mod = await import(`@/themes/${theme}/${name}.tsx`);
  } catch {
    mod = await import(`@/themes/default/${name}.tsx`);
  }

  const Cmp = mod[name] || mod.default;

  if (!Cmp) throw new Error(`Component ${name} not found in theme ${theme}`);

  return function ThemedComponent(props: any) {
    return <Cmp {...props} theme={settings} />;
  };
};
