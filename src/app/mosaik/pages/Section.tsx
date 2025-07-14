import { ScrollContainer } from "@/components/ScrollContainer";
import { MarkdownContainer } from "@/themes/light/MarkdownContainer";
import { ExternalRoute, Route } from "@/types/Route";

const Section = ({
  routes,
  section,
}: {
  routes: Array<Route | ExternalRoute>;
  section: string;
}) => {
  const { content = "" } = routes.find((r) => {
    return (r as Route).slug === section;
  }) || { content: "" };
  return (
    <ScrollContainer>
      <MarkdownContainer>{content}</MarkdownContainer>
    </ScrollContainer>
  );
};

export default Section;
