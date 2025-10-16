import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const POSTS_PATH = path.join(process.cwd(), 'content/experiences');
const FILENAME = 'experience_example.md';

function getParsedMarkdown() {
  const fullPath = path.join(POSTS_PATH, FILENAME);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);

  return {
    frontMatter,
    content,
  };
}

async function getMarkdownContentHtml() {
  const { content } = getParsedMarkdown();
  const processedContent = await remark()
    .use(html)
    .process(content);
  
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
  const window = new JSDOM('').window;
  const purify = DOMPurify(window as any);

  const { contentHtml } = await getMarkdownContentHtml();
  const conteudoSanitizado = purify.sanitize(contentHtml);
  return conteudoSanitizado;
}