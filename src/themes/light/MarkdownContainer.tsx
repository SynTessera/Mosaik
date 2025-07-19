import { marked, Renderer } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import bash from "highlight.js/lib/languages/bash";
import powershell from "highlight.js/lib/languages/powershell";
import footnote from "marked-footnote";
import { PropsWithChildren } from "react";
import clsx from "clsx";

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

  return (
    <article className="bg-white/20 dark:bg-black/20 p-2 md:p-4 post ">
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className={clsx("max-w-[80ch] prose prose-invert", className)}
      />
    </article>
  );
};
