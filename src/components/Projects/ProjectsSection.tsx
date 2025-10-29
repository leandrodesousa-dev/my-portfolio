import React from 'react';
import ProjectCard from './ProjectCard';
import { MY_PROJECTS, Project } from '@/data/myProjects';
import styles from './Projects.module.css';

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>
                Minhas Experiências
            </h2>
            <div className={styles.projectsGrid}>
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
};

export const DynamicProjectsSection = () => {
    const projectsData = MY_PROJECTS;
    
    return <ProjectsSection projects={projectsData} />;
};