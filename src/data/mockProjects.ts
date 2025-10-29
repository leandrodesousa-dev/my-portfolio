export interface Project {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

export const MOCK_PROJECTS: Project[] = [
    {
        slug: 'itau-app-ios',
        title: 'App de Core Banking (Itaú)',
        description: 'Desenvolvimento e manutenção de módulos críticos de conta corrente, transferências e pagamentos via PIX, focando em segurança e alta disponibilidade.',
        imageUrl: '/experience/experience_itau.png',
        tags: ['Swift', 'MVVM-C', 'Security', 'TDD']
    },
    {
        slug: 'warren-app-ios',
        title: 'Carteira Digital (PagBank)',
        description: 'Implementação de serviços de carteira digital e integração com APIs de terceiros para pagamentos por QR Code e NFC. Foco em UX e acessibilidade.',
        imageUrl: '/experience/experience_warren.png',
        tags: ['SwiftUI', 'Clean Arch', 'NFC', 'Accessibility']
    },
    {
        slug: 'pabbank2-app-ios',
        title: 'Plataforma de Investimentos (Warren)',
        description: 'Criação de módulos de gestão de portfólio e compra/venda de ativos (renda fixa e variável), garantindo conformidade regulatória e performance.',
        imageUrl: '/experience/experience_pagbank_2.png',
        tags: ['UIKit', 'VIPER', 'GCD', 'Testing']
    },
    {
        slug: 'shopper-app-ios',
        title: 'Ferramentas de Automação Interna',
        description: 'Desenvolvimento de scripts e ferramentas Fastlane para automatizar CI/CD e integração contínua, reduzindo o tempo de build em 30%.',
        imageUrl: '/experience/experience_shopper.png',
        tags: ['Fastlane', 'Shell', 'CI/CD']
    },
    {
        slug: 'pagbank1-app-ios',
        title: 'Ferramentas de Automação Interna',
        description: 'Desenvolvimento de scripts e ferramentas Fastlane para automatizar CI/CD e integração contínua, reduzindo o tempo de build em 30%.',
        imageUrl: '/experience/experience_pagbank_1.png',
        tags: ['Fastlane', 'Shell', 'CI/CD']
    },
    {
        slug: 'alugue-app-ios',
        title: 'Ferramentas de Automação Interna',
        description: 'Desenvolvimento de scripts e ferramentas Fastlane para automatizar CI/CD e integração contínua, reduzindo o tempo de build em 30%.',
        imageUrl: '/experience/experience_alugue.png',
        tags: ['Fastlane', 'Shell', 'CI/CD']
    },
    {
        slug: 'communy-app-ios',
        title: 'Ferramentas de Automação Interna',
        description: 'Desenvolvimento de scripts e ferramentas Fastlane para automatizar CI/CD e integração contínua, reduzindo o tempo de build em 30%.',
        imageUrl: '/experience/experience_communy.png',
        tags: ['Fastlane', 'Shell', 'CI/CD']
    },
];