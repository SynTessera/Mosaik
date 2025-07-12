import { ScrollContainer } from "@/components/ScrollContainer";
import { MarkdownContainer } from "@/themes/light/MarkdownContainer";
import { Route } from "@/types/Route";

const Section = ({ routes, view }: { routes: Route[]; view: string }) => {
  const { content = "" } = routes.find((r) => {
    return r.slug === view;
  }) || { content: "" };
  return (
    <ScrollContainer>
      <MarkdownContainer>{content}</MarkdownContainer>
    </ScrollContainer>
  );
};

export default Section;
