import fs from "node:fs";
import path from "node:path";
import DOMPurify, { type WindowLike } from "dompurify";
import matter from "gray-matter";
import { JSDOM } from "jsdom";
import { remark } from "remark";
import html from "remark-html";

const POSTS_PATH = path.join(process.cwd(), "content/experiences");
const FILENAME = "experience_example.md";

function getParsedMarkdown() {
  const fullPath = path.join(POSTS_PATH, FILENAME);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data: frontMatter, content } = matter(fileContents);

  return {
    frontMatter,
    content,
  };
}

async function getMarkdownContentHtml() {
  const { content } = getParsedMarkdown();
  const processedContent = await remark().use(html).process(content);

  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
}

export function getMarkdownFrontMatter() {
  const { frontMatter } = getParsedMarkdown();

  return {
    frontMatter,
  };
}

export async function getRetrieveValidatedContent() {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window as WindowLike);

  const { contentHtml } = await getMarkdownContentHtml();
  const conteudoSanitizado = purify.sanitize(contentHtml);
  return conteudoSanitizado;
}
