export interface Project {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

export const MY_PROJECTS: Project[] = [
    {
        slug: 'itau-app-ios',
        title: 'CoreBanking - Itaú Empresas',
        description: 'Liderança técnica e arquitetura em iOS (MVVM-C/VIPER), modernização de analytics (GA4/DataDog) e otimização com Testes A/B.',
        imageUrl: '/experience/experience_itau.png',
        tags: ['Liderança Técnica', 'MVVM-C', 'VIPER', 'TDD', 'SOLID', 'Testes A/B', 'Analytics', 'Refatoração', 'Accessibility', 'CocoaPods', 'XCTest']
    },
    {
        slug: 'warren-app-ios',
        title: 'CoreBanking - Warren',
        description: 'Desenvolvimento em SwiftUI e arquiteturas modernas como The Composable Architecture (TCA).',
        imageUrl: '/experience/experience_warren.png',
        tags: ['SwiftUI', 'Clean Architecture', 'TDD', 'DDD', 'SOLID', 'SPM', 'TCA', 'XCTest']
    },
    {
        slug: 'pabbank2-app-ios',
        title: 'CoreBanking - Pagbank 2.0',
        description: 'Liderança técnica , mentoria de juniores/plenos , refatoração de legado e otimização do produto via Testes A/B.',
        imageUrl: '/experience/experience_pagbank_2.png',
        tags: ['Liderança', 'Mentoria', 'Modularização', 'CocoaPods', 'Testes A/B', 'Firebase']
    },
    {
        slug: 'shopper-app-ios',
        title: 'Ferramentas de Automação Interna',
        description: 'Desenvolvimento de features (incluindo IOT) , refatoração para MVVM-C e CI/CD com Fastlane e Semaphore CI.',
        imageUrl: '/experience/experience_shopper.png',
        tags: ['Fastlane', 'DevOps', 'CI/CD', 'MVVM-C', 'IOT', 'GitFlow', 'CocoaPods']
    },
    {
        slug: 'pagbank1-app-ios',
        title: 'CoreBanking - Pagbank 1.0',
        description: 'Desenvolvimento em Swift , aplicando MVVM-C , consumo de APIs Restful/JSON e testes unitários (XCTest).',
        imageUrl: '/experience/experience_pagbank_1.png',
        tags: ['APIs Restful', 'MVVM-C', 'XCTest', 'SwiftLint', 'CocoaPods', 'Kanban/Scrum']
    },
    {
        slug: 'alugue-app-ios',
        title: 'Alugue.com',
        description: 'Liderança técnica completa no desenvolvimento iOS do zero , aplicando Clean Architecture , DDD e TDD (XCTest).',
        imageUrl: '/experience/experience_alugue.png',
        tags: ['SwiftUI', 'Clean Architecture', 'TDD', 'DDD', 'SOLID', 'SPM']
    },
    {
        slug: 'communy-app-ios',
        title: 'Communy',
        description: 'Gestão do ciclo completo de distribuição (App Store/Firebase) , desenvolvimento de features e testes unitários (XCTest).',
        imageUrl: '/experience/experience_communy.png',
        tags: ['App Store', 'Firebase App Distribution', 'CI/CD', 'CocoaPods', 'XCTest', 'Firebase Analytics']
    },
];