import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html';
import DOMPurify from 'dompurify';
import { remark } from 'remark';
import { JSDOM } from 'jsdom';

const POSTS_PATH = path.join(process.cwd(), 'content/experiences');

export function getSlugs() {
  return fs.readdirSync(POSTS_PATH)
    .filter(file => path.extname(file) === '.md')
    .map(file => file.replace(/\.md$/, ''));
}

function getParsedMarkdown(slug: string) {
  const fullPath = path.join(POSTS_PATH, `${slug}.md`); 
  if (!fs.existsSync(fullPath)) {
    throw new Error("Arquivo Markdown não encontrado: ${slug}.md");
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);

  return { frontMatter, content };
}

export function getMarkdownFrontMatter(slug: string) {
  const { frontMatter } = getParsedMarkdown(slug);
  return { frontMatter };
}

async function getMarkdownContentHtml(slug: string) {
  const { content } = getParsedMarkdown(slug);
  const processedContent = await remark()
    .use(html)
    .process(content);
  
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
}

export async function getRetrieveValidatedContent(slug: string) {
  const window = new JSDOM('').window;
  const purify = DOMPurify(window as any);

  const { contentHtml } = await getMarkdownContentHtml(slug);
  const conteudoSanitizado = purify.sanitize(contentHtml);
  return conteudoSanitizado;
}