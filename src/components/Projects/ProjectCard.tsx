"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { useTheme } from '../Theme/ThemeProvider';

interface ProjectCardProps {
    project: {
        slug: string;
        title: string;
        description: string;
        imageUrl: string;
        tags: string[];
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const projectLink = `/experiences/${project.slug}`; 

    return (
        <a 
            href={projectLink} 
            className={`${styles.card} ${isDark ? styles.cardDark : ''}`}
            aria-label={`Ver detalhes do projeto: ${project.title}`}
        >
            <div className={styles.imagePlaceholder}>
                <Image 
                    src={project.imageUrl}
                    alt={`Capa do projeto ${project.title}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.projectImage}
                />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.cardTags}>
                    {project.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;