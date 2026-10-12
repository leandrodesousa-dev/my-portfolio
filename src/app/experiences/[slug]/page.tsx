import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import {
  getMarkdownFrontMatter,
  getRetrieveValidatedContent,
  getSlugs,
} from "@/lib/md-utils";
import styles from "../../page.module.css";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();
  const { frontMatter } = getMarkdownFrontMatter(slug, await getLocale());
  return { title: frontMatter.title };
}

export default async function ExperiencePage({ params }: Params) {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();
  const locale = await getLocale();
  const texts = dictionaries[locale];
  const htmlSeguro = await getRetrieveValidatedContent(slug, locale);
  const { frontMatter } = getMarkdownFrontMatter(slug, locale);

  return (
    <main className={styles.home}>
      <div>
        <h1>{frontMatter.title || texts.experience}</h1>
        <p>{frontMatter.subtitle || texts.experienceDetails}</p>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Markdown HTML is sanitized by DOMPurify in getRetrieveValidatedContent before rendering. */}
        <div dangerouslySetInnerHTML={{ __html: htmlSeguro }} />
      </div>
    </main>
  );
}
