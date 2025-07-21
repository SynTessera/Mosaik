import { ScrollContainer } from "@/components/ScrollContainer";
import { MarkdownContainer } from "@/themes/light/MarkdownContainer";

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
