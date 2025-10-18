import Link from 'next/link';
import React from 'react';
import { getSlugs } from '@/lib/md-utils';

export default async function LandingPage() {
    const slugs = getSlugs();

    return (
        <div id="main-content">
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
                <div style={{ marginTop: '30px' }}>
                    <h2>Minhas Experiências</h2>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        {slugs.map((slug) => (
                            <li key={slug} style={{ marginBottom: '10px' }}>
                                <Link
                                    href={`/experience/${slug}`}
                                    style={{ color: '#4f46e5', textDecoration: 'underline' }}
                                >
                                    {slug.replace(/-/g, ' ').toUpperCase()}
                                </Link>
                            </li>
                        ))}
                        {slugs.length === 0 && (
                            <p style={{ color: '#aaa' }}>Nenhuma experiência encontrada. Crie um arquivo Markdown em /content/experiences.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}