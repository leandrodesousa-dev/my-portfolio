import { getContentFromUntrustedAPI, getMarkdownContent } from '@/lib/md-to-html';

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