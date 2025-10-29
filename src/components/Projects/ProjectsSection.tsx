// src/components/Projects/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { MOCK_PROJECTS, Project } from '@/data/mockProjects'; // 🔑 Importa os dados
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

// Componente que será usado na Landing Page
export const DynamicProjectsSection = () => {
    // Aqui você faria a chamada dinâmica para buscar seus dados reais
    const projectsData = MOCK_PROJECTS; // Usando mockados por enquanto
    
    return <ProjectsSection projects={projectsData} />;
};