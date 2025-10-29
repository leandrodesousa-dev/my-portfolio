# 🚀 Portfolio Pessoal - Leandro de Sousa

## Desenvolvedor iOS Sênior | Arquitetura & Liderança Técnica

[![Status](https://img.shields.io/badge/Status-Ativo-brightgreen.svg)](https://github.com/Seu-Usuario/Seu-Repo-Aqui)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-v14%2B-black)](https://nextjs.org/)

Este é o portfólio pessoal e técnico de Leandro de Sousa, Desenvolvedor iOS Sênior. O projeto foi construído com Next.js (App Router) para máxima performance, tipagem rigorosa via TypeScript e um design moderno com suporte a Dark/Light Mode.

## ✨ Destaques do Projeto

### 🖼️ Estrutura e Design

O site utiliza um layout clean e minimalista, focado na acessibilidade e na velocidade de carregamento.

* **Tema Dinâmico:** Implementação de Dark/Light Mode.
* **Design Responsivo:** Layout totalmente adaptável para dispositivos móveis (Mobile-First).
* **Seção de Projetos:** Exibição das experiências em um grid responsivo de cards.
* **Componente Otimizado de Imagem:** Uso do `next/image` para *lazy loading* e otimização de *assets*.

### ⚙️ Arquitetura Técnica

O projeto segue as melhores práticas do Next.js App Router para desempenho e manutenção:

* **Server Components & Client Components:** Separação de responsabilidades para otimizar o carregamento e manter o código modular.
* **Geração Estática (SSG):** Conteúdo das experiências (Markdown) é processado e as páginas são geradas em tempo de build, garantindo velocidade de acesso (zero latência).
* **Data Fetching:** Dados de conteúdo (`.md`) são lidos e processados no Server Component (`ProjectsSection.tsx`), seguindo a ordem definida manualmente (`MY_PROJECTS.ts`), e passados aos componentes de UI.

## 💻 Tech Stack Principal

| Categoria | Tecnologia | Justificativa / Uso |
| :--- | :--- | :--- |
| **Framework** | Next.js (v14+) | Performance, SSG e App Router. |
| **Linguagem** | TypeScript | Tipagem forte e prevenção de erros. |
| **Estilização** | CSS Modules | Encapsulamento de estilos e performance. |
| **Conteúdo** | Markdown | Gestão de conteúdo de experiências. |

## 💡 Expertise Técnica (Baseado no CV)

O desenvolvimento deste portfólio reflete a experiência profissional do autor, com foco nas seguintes áreas de especialização em iOS:

| Categoria | Tópicos de Especialização |
| :--- | :--- |
| **Arquiteturas** | MVVM-C, Clean Architecture, VIPER, The Composable Architecture (TCA), MVP. |
| **Metodologias** | TDD (Test-Driven Development), DDD (Domain-Driven Design), SOLID, Scrum, Kanban. |
| **DevOps/CI/CD** | Fastlane, Automação de pipelines, GitFlow. |
| **Qualidade/Dados** | Testes A/B (Firebase), Google/Firebase Analytics, XCTest. |
| **Ferramentas** | CocoaPods, Swift Package Manager (SPM), Firebase App Distribution. |
| **Outros Focos** | Refatoração de código legado, Acessibilidade (UlAccessibility, WCAG 2.1), Core Banking. |

## ⚙️ Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

* Node.js (versão LTS recomendada)
* npm ou yarn

### 1. Clonar o Repositório

```bash
git clone [https://github.com/Seu-Usuario/Seu-Repo-Aqui.git](https://github.com/Seu-Usuario/Seu-Repo-Aqui.git)
cd Seu-Repo-Aqui
```

### 2. Instalar Dependências
```bash
npm install
# ou
yarn install
```
### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
O projeto estará acessível em: http://localhost:3000

### 4. Build para Produção
Para gerar a versão otimizada e estática:
```bash
npm run build
# ou
yarn build
```

## ✍️ Autor
Leandro de Sousa - Desenvolvedor iOS Sênior