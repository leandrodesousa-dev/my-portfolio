import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const POSTS_PATH = path.join(process.cwd(), 'content/experiences');
const FILENAME = 'experience_example.md';

async function getMarkdownContent() {
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

import DOMPurify from 'dompurify';

async function getContentFromUntrustedAPI() {
  const { JSDOM } = await import('jsdom');
  const window = new JSDOM('').window;
  const purify = DOMPurify(window);

  const { frontMatter, contentHtml } = await getMarkdownContent();
  const conteudoSanitizado = purify.sanitize(contentHtml);
  return conteudoSanitizado;
}

export default async function Home() {
  const { frontMatter, contentHtml } = await getMarkdownContent();
  const htmlSeguro = await getContentFromUntrustedAPI();

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">
        {frontMatter.title || "Meu Portfólio iOS"}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {frontMatter.subtitle || "Especialista em MVVM-C e Clean Architecture"}
      </p>
      <div 
        className="prose prose-lg" 
        dangerouslySetInnerHTML={{ __html: htmlSeguro }} 
      />
    </div>
  );
}