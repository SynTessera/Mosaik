import { ScrollContainer } from "@/components/ScrollContainer";
import { MarkdownContainer } from "@/themes/light/MarkdownContainer";
import { ExternalRoute, Route } from "@/types/Route";

const Section = ({
  content,
}: {
  content: string;
}) => {
  return (
    <ScrollContainer>
      <MarkdownContainer>{content}</MarkdownContainer>
    </ScrollContainer>
  );
};

export default Section;
