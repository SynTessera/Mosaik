import { Content } from "@/blocks/digitas/Content";
import { getThemedComponent } from "@/lib/server/getThemedComponent";

export const Section = async ({ content: {children, ...props} }: any) => {
  const Cmp = await getThemedComponent("Section");
  return (
    <Cmp {...props}>
      {children.map((c) => (
        <Content key={c.id} content={c} />
      ))}
    </Cmp>
  );
};
