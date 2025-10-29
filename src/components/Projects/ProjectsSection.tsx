import React from 'react';
import ProjectCard from './ProjectCard';
import { getSlugs } from '@/lib/md-utils';
import { MY_PROJECTS, Project } from '@/data/myProjects';
import styles from './Projects.module.css';

function cleanSlug(rawPath: string): string {
    let cleanedSlug = rawPath.split('/').pop();
    if (cleanedSlug && cleanedSlug.endsWith('.md')) {
        cleanedSlug = cleanedSlug.replace(/\.md$/, '');
    }
    return cleanedSlug || '';
}

async function getProjectDataFromSlugs() {
    const slugs = getSlugs();

    if (slugs.length === 0) {
        return [];
    }
    
    const existingSlugs = slugs.map(cleanSlug);
    const finalProjects = MY_PROJECTS.map(manualProject => {
        const isSlugFound = existingSlugs.includes(manualProject.slug);
        if (isSlugFound) {
            return manualProject;
        } else {
            console.warn(`[Aviso] O arquivo Markdown para o slug '${manualProject.slug}' não foi encontrado no disco. O card será omitido.`);
            return null;
        }
    }).filter((project): project is Project => project !== null);
    return finalProjects;
}

export const ProjectsSection = async () => {
    const projects = await getProjectDataFromSlugs();

    if (projects.length === 0) {
        return (
            <section className={styles.projectsSection}>
                <h2 className={styles.sectionTitle}>Minhas Experiências</h2>
                <p style={{ color: '#aaa', marginTop: '20px' }}>
                    Nenhuma experiência encontrada. Crie um arquivo Markdown em /content/experiences.
                </p>
            </section>
        );
    }

    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>
                Minhas Experiências em Destaque
            </h2>

            <div className={styles.projectsGrid}>
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
};