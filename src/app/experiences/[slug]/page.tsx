import {
  getMarkdownFrontMatter,
  getRetrieveValidatedContent,
} from "@/lib/md-utils";

interface Params {
  params: {
    slug: string;
  };
}

export default async function ExperiencePage({ params }: Params) {
  const { slug } = await params;
  const htmlSeguro = await getRetrieveValidatedContent(slug);
  const { frontMatter } = getMarkdownFrontMatter(slug);

  return (
    <div id="main-content">
      <div className="landing-content-container">
        <h1 className="text-4xl font-bold mb-4">
          {frontMatter.title || "Experiência"}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {frontMatter.subtitle || "Detalhes do Projeto"}
        </p>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Markdown HTML is sanitized by DOMPurify in getRetrieveValidatedContent before rendering. */}
        <div dangerouslySetInnerHTML={{ __html: htmlSeguro }} />
      </div>
    </div>
  );
}
