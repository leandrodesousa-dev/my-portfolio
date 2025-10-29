export interface Project {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

export const MOCK_PROJECTS: Project[] = [
    {
        slug: 'core-banking-app',
        title: 'App de Core Banking (Itaú)',
        description: 'Desenvolvimento e manutenção de módulos críticos de conta corrente, transferências e pagamentos via PIX, focando em segurança e alta disponibilidade.',
        imageUrl: '/images/mock-banking-app.png',
        tags: ['Swift', 'MVVM-C', 'Security', 'TDD']
    },
    {
        slug: 'wallet-ios',
        title: 'Carteira Digital (PagBank)',
        description: 'Implementação de serviços de carteira digital e integração com APIs de terceiros para pagamentos por QR Code e NFC. Foco em UX e acessibilidade.',
        imageUrl: '/images/mock-wallet.png',
        tags: ['SwiftUI', 'Clean Arch', 'NFC', 'Accessibility']
    },
    {
        slug: 'invest-platform',
        title: 'Plataforma de Investimentos (Warren)',
        description: 'Criação de módulos de gestão de portfólio e compra/venda de ativos (renda fixa e variável), garantindo conformidade regulatória e performance.',
        imageUrl: '/images/mock-invest.png',
        tags: ['UIKit', 'VIPER', 'GCD', 'Testing']
    },
    {
        slug: 'dev-tools',
        title: 'Ferramentas de Automação Interna',
        description: 'Desenvolvimento de scripts e ferramentas Fastlane para automatizar CI/CD e integração contínua, reduzindo o tempo de build em 30%.',
        imageUrl: '/images/mock-tools.png',
        tags: ['Fastlane', 'Shell', 'CI/CD']
    },
];