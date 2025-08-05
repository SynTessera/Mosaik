import { settings } from "@/themes";

export const getClientComponent = async (
  name: string,
  theme: string = settings.theme || "default"
) => {
  let mod;
  try {
    mod = await import(`@/blocks/${theme}/client/${name}.tsx`);
  } catch {
    console.warn(`Component ${`@/blocks/${theme}/client/${name}.tsx`} not found in theme ${theme}, falling back to default.`);
  }

  const Cmp = mod[name] || mod.default;

  if (!Cmp) throw new Error(`Component ${name} not found in theme ${theme}`);

  return function ThemedComponent(props: any) {
    return <Cmp {...props} theme={settings} />;
  };
};
