import type { Project } from "@/data/myProjects";
import type { Locale } from "./locale";

const descriptions: Record<string, string> = {
  "c6bank-app-ios":
    "Architectural evolution in iOS (MVP), modularization with Tuist, and stronger technical governance through tests (Quick/Nimble) and organizational best practices.",
  "itau-app-ios":
    "Technical leadership and iOS architecture (MVVM-C/VIPER), analytics modernization (GA4/DataDog), and optimization through A/B testing.",
  "warren-app-ios":
    "Development with SwiftUI and modern architectures such as The Composable Architecture (TCA).",
  "pabbank2-app-ios":
    "Technical leadership, mentoring of junior and mid-level developers, legacy refactoring, and product optimization through A/B testing.",
  "shopper-app-ios":
    "Feature development (including IOT), refactoring to MVVM-C, and CI/CD with Fastlane and Semaphore CI.",
  "pagbank1-app-ios":
    "Development in Swift using MVVM-C, consumption of RESTful/JSON APIs, and unit tests (XCTest).",
  "alugue-app-ios":
    "Full technical leadership in iOS development from scratch using Clean Architecture, DDD, and TDD (XCTest).",
  "communy-app-ios":
    "Management of the complete distribution lifecycle (App Store/Firebase), feature development, and unit tests (XCTest).",
};
const tags: Record<string, string> = {
  Modularização: "Modularization",
  "Governança Técnica": "Technical Governance",
  "Liderança Técnica": "Technical Leadership",
  Liderança: "Leadership",
  Mentoria: "Mentoring",
  "Testes A/B": "A/B Testing",
  Refatoração: "Refactoring",
  Automação: "Automation",
  Acessibilidade: "Accessibility",
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "pt-BR") return project;
  const description = descriptions[project.slug];
  if (!description)
    throw new Error(`Missing English experience: ${project.slug}`);
  return {
    ...project,
    description,
    tags: project.tags.map((tag) => tags[tag] ?? tag),
  };
}
