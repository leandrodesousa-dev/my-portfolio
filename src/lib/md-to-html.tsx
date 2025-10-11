import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import DOMPurify from 'dompurify';

const POSTS_PATH = path.join(process.cwd(), 'content/experiences');
const FILENAME = 'experience_example.md';

export async function getMarkdownContent() {
  const fullPath = path.join(POSTS_PATH, FILENAME);
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data: frontMatter, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  
  const contentHtml = processedContent.toString();

  return {
    frontMatter,
    contentHtml,
  };
}

export async function getContentFromUntrustedAPI() {
  const { JSDOM } = await import('jsdom');
  const window = new JSDOM('').window;
  const purify = DOMPurify(window);

  const { frontMatter, contentHtml } = await getMarkdownContent();
  const conteudoSanitizado = purify.sanitize(contentHtml);
  return conteudoSanitizado;
}