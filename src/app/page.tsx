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
                        Minha paixão está na intersecção entre a excelência técnica e a eficiência de processos. Adoro arquitetar o código com padrões modernos 
                        como Clean Architecture, TCA, VIPER e MVVM-C e, simultaneamente, buscar a evolução contínua. Por isso, me concentro em: 
                        Liderança Técnica: Atuar como referência e mentor para times, elevando o padrão de qualidade (via TDD e XCTest) e disseminando conhecimento.
                    </p>
                    <p>
                        Automação e Inovação: Usar o Fastlane para configurar CI/CD e, mais recentemente, desenvolver automações de geração de código em Swift usando 
                        ferramentas de IA (StackSpot/Copilot/Gemini) para aumentar drasticamente a produtividade. * Evolução de Produto: Modernizar a stack de analytics (GA4/DataDog) 
                        e garantir que o produto seja inclusivo, liderando frentes de Acessibilidade (WCAG 2.1 e UIAccessibility).
                    </p>
                    <p>
                        Seja refatorando um código legado no PagBank, iniciando um projeto do zero com DDD e SOLID, 
                        ou integrando fluxos com Flutter e Dart na Warren, sou movido por desafios que exigem visão 
                        estratégica e execução de alto nível. Acredito que um código bem arquitetado é a base para 
                        um produto de sucesso.
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