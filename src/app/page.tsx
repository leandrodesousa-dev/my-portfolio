import React from 'react';
import { ProjectsSection } from '@/components/Projects/ProjectsSection';

export default async function LandingPage() {
    return (
        <div className="landing-content-container">
            <section className="profile-description">
                <p>
                    Eu sou o Leandro, e sou um Desenvolvedor iOS Sênior, especializado em criar soluções nativas robustas e escaláveis no ecossistema Apple.
                    Minha experiência em Core Banking (Itaú, PagBank, Warren) me deu uma base sólida na arquitetura de sistemas de alta complexidade.
                </p>
                <p>
                    Seja bem-vindo ao meu espaço!
                </p>
            </section>
            <div style={{ marginTop: '5px', marginBottom: '40px' }}> 
                <ProjectsSection />
            </div>
        </div>
    );
}