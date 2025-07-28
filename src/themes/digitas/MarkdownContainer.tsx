import { marked, Renderer } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import bash from "highlight.js/lib/languages/bash";
import powershell from "highlight.js/lib/languages/powershell";
import footnote from "marked-footnote";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import classes from "@/themes/digitas/theme.module.css";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("powershell", powershell);

const renderer = new Renderer();

renderer.code = function ({ text, lang = "bash" }) {
  const validLang = lang && hljs.getLanguage(lang);
  const highlighted = validLang
    ? hljs.highlight(text, { language: lang }).value
    : hljs.highlightAuto(text).value;

  return `<pre><code class="hljs language-${
    lang || "plaintext"
  }">${highlighted}</code></pre>`;
};

marked.use({ renderer });
marked.use(footnote());

export const MarkdownContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const htmlContent = marked(children?.toString() || "");
  const mdContent = (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className={clsx(classes.markdown, "max-w-[80ch] prose prose-invert")}
    />
  );

  return mdContent;
};
