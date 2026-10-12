import { MY_PROJECTS, type Project } from "@/data/myProjects";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { localizeProject } from "@/lib/i18n/projects";
import { getLocale } from "@/lib/i18n/server";
import { getSlugs } from "@/lib/md-utils";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function cleanSlug(rawPath: string): string {
  let cleanedSlug = rawPath.split("/").pop();
  if (cleanedSlug?.endsWith(".md")) {
    cleanedSlug = cleanedSlug.replace(/\.md$/, "");
  }
  return cleanedSlug || "";
}

async function getProjectDataFromSlugs() {
  const slugs = getSlugs();

  if (slugs.length === 0) {
    return [];
  }

  const existingSlugs = slugs.map(cleanSlug);
  const finalProjects = MY_PROJECTS.map((manualProject) => {
    const isSlugFound = existingSlugs.includes(manualProject.slug);
    if (isSlugFound) {
      return manualProject;
    } else {
      console.warn(
        `[Aviso] O arquivo Markdown para o slug '${manualProject.slug}' não foi encontrado no disco. O card será omitido.`,
      );
      return null;
    }
  }).filter((project): project is Project => project !== null);
  return finalProjects;
}

export const ProjectsSection = async () => {
  const locale = await getLocale();
  const texts = dictionaries[locale];
  const projects = (await getProjectDataFromSlugs()).map((project) =>
    localizeProject(project, locale),
  );

  if (projects.length === 0) {
    return (
      <section
        className={styles.projectsSection}
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title" className={styles.sectionTitle}>
          {texts.experience}
        </h2>
        <p>{texts.emptyExperience}</p>
      </section>
    );
  }

  return (
    <section
      className={styles.projectsSection}
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className={styles.sectionTitle}>
        {texts.experience}
      </h2>

      <div className={styles.projectsGrid} lang={locale}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};
