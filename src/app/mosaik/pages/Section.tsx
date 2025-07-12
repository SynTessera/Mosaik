import { ScrollContainer } from "@/components/ScrollContainer";
import { MarkdownContainer } from "@/themes/light/MarkdownContainer";

const Section = ({ routes, view }) => {
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
