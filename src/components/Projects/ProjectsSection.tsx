import React from 'react';
import ProjectCard from './ProjectCard';
import { getSlugs } from '@/lib/md-utils';
import { MY_PROJECTS, Project } from '@/data/myProjects';
import styles from './Projects.module.css';

async function getProjectDataFromSlugs() {
    const slugs = getSlugs(); 
    
    if (slugs.length === 0) {
        return [];
    }

    const projectsWithSlugs = MY_PROJECTS.map((project, index) => ({
        ...project,
        slug: slugs[index]
    }));
    
    return projectsWithSlugs;
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