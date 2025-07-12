export const getThemedComponent = async (
  name: string,
  theme: string = "light"
) => {
  return (await import(`@/themes/${theme}/${name}.tsx`))[name];
};
