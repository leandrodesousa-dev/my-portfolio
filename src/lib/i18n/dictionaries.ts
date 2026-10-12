import type { Locale } from "./locale";

const en = {
  role: "Senior iOS Engineer",
  description:
    "Senior iOS Engineer with 6+ years of experience building native iOS applications using Swift, UIKit, and SwiftUI, primarily in banking and financial technology.",
  skip: "Skip to content",
  projects: "View Projects",
  cv: "Download CV",
  contact: "Contact",
  featured: "Featured Projects",
  projectsIntro: "Personal software projects.",
  pomodoro: "A native iOS application developed with SwiftUI.",
  repository: "View MyPomodoro on GitHub",
  experience: "Professional Experience",
  emptyExperience: "Professional experience will be available here soon.",
  about: "About Me",
  navigation: "Main navigation",
  switchLanguage: "Switch to Portuguese",
  theme: "Toggle Dark/Light Mode",
  newTab: "opens in a new tab",
  details: "View experience details:",
  cover: "Experience cover:",
  aboutTitle: "About Leandro de Sousa",
  aboutParagraphs: [
    "I am a Senior iOS Developer with more than 5 years of experience focused on robust, scalable architectures such as MVVM-C and Clean Architecture. My career includes work at major financial institutions (Core Banking), where I worked on optimizing highly complex systems.",
    "My passion lies at the intersection of technical excellence and process efficiency. I enjoy designing code with modern patterns such as Clean Architecture, TCA, VIPER, and MVVM-C while pursuing continuous improvement. I therefore focus on technical leadership: serving as a reference and mentor for teams, raising quality standards through TDD and XCTest, and sharing knowledge.",
    "Automation and Innovation: Using Fastlane to configure CI/CD and, more recently, developing Swift code generation automations with AI tools (StackSpot/Copilot/Gemini) to substantially increase productivity.",
    "Product Evolution: Modernizing the analytics stack (GA4/DataDog) and ensuring an inclusive product by leading accessibility initiatives (WCAG 2.1 and UIAccessibility).",
    "Whether refactoring legacy code, starting a project from scratch with DDD and SOLID, or integrating flows with Flutter, I am driven by challenges that require strategic vision and strong execution. I believe well-architected code is the foundation of a successful product.",
  ],
  experienceDetails: "Experience Details",
  notFound: "Page not found",
  backHome: "Back to Home",
};

type Dictionary = typeof en;

const pt: Dictionary = {
  role: "Engenheiro iOS Sênior",
  description:
    "Engenheiro iOS Sênior com mais de 6 anos de experiência no desenvolvimento de aplicativos iOS nativos usando Swift, UIKit e SwiftUI, principalmente nos setores bancário e de tecnologia financeira.",
  skip: "Ir para o conteúdo",
  projects: "Ver projetos",
  cv: "Baixar CV",
  contact: "Contato",
  featured: "Projetos em destaque",
  projectsIntro: "Projetos pessoais de software.",
  pomodoro: "Um aplicativo iOS nativo desenvolvido com SwiftUI.",
  repository: "Ver MyPomodoro no GitHub",
  experience: "Experiência profissional",
  emptyExperience:
    "As experiências profissionais estarão disponíveis aqui em breve.",
  about: "Sobre Mim",
  navigation: "Navegação principal",
  switchLanguage: "Mudar para inglês",
  theme: "Alternar modo claro/escuro",
  newTab: "abre em uma nova aba",
  details: "Ver detalhes da experiência:",
  cover: "Capa da experiência:",
  aboutTitle: "Sobre Leandro de Sousa",
  aboutParagraphs: [
    "Eu sou um Desenvolvedor iOS Sênior com mais de 5 anos de experiência focado em arquiteturas robustas e escaláveis, como MVVM-C e Clean Architecture. Minha trajetória inclui passagens por grandes instituições financeiras (Core Banking), onde atuei na otimização de sistemas de alta complexidade.",
    "Minha paixão está na intersecção entre a excelência técnica e a eficiência de processos. Adoro arquitetar o código com padrões modernos como Clean Architecture, TCA, VIPER e MVVM-C e, simultaneamente, buscar a evolução contínua. Por isso, me concentro em: Liderança Técnica: Atuar como referência e mentor para times, elevando o padrão de qualidade (via TDD e XCTest) e disseminando conhecimento.",
    "Automação e Inovação: Usar o Fastlane para configurar CI/CD e, mais recentemente, desenvolver automações de geração de código em Swift usando ferramentas de IA (StackSpot/Copilot/Gemini) para aumentar drasticamente a produtividade.",
    "Evolução de Produto: Modernizar a stack de analytics (GA4/DataDog) e garantir que o produto seja inclusivo, liderando frentes de Acessibilidade (WCAG 2.1 e UIAccessibility).",
    "Seja refatorando um código legado, iniciando um projeto do zero com DDD e SOLID, ou integrando fluxos com Flutter, sou movido por desafios que exigem visão estratégica e execução de alto nível. Acredito que um código bem arquitetado é a base para um produto de sucesso.",
  ],
  experienceDetails: "Detalhes da experiência",
  notFound: "Página não encontrada",
  backHome: "Voltar para a Home",
};

export const dictionaries: Record<Locale, Dictionary> = { en, "pt-BR": pt };
