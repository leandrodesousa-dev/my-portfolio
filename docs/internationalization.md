# Internacionalização

O site oferece inglês (`en`, padrão) e português brasileiro (`pt-BR`). As URLs existentes continuam sendo `/`, `/about` e `/experiences/[slug]`.

## Como funciona

- `src/lib/i18n/locale.ts`: idiomas válidos e nome do cookie.
- `src/lib/i18n/server.ts`: resolve o idioma por requisição; valores inválidos usam inglês.
- `src/lib/i18n/actions.ts`: Server Action que valida e grava a preferência no cookie `portfolio-locale`, válido por um ano, com `HttpOnly`, `SameSite=Lax` e `Secure` em produção.
- `src/lib/i18n/dictionaries.ts`: textos da interface, metadados e página Sobre. O TypeScript exige as mesmas chaves nos dois idiomas.
- `src/components/Language`: contexto para os componentes cliente e formulário acessível para alternar o idioma. O Next.js renderiza novamente a página e o layout após atualizar o cookie.
- `src/lib/i18n/projects.ts`: traduções dos resumos e tags dos cards. Os dados originais permanecem em `src/data/myProjects.ts`.
- `content/experiences/en/`: traduções dos oito Markdown. Os arquivos originais em português permanecem no diretório pai.

A preferência é aplicada no servidor, inclusive ao atributo `html lang` e aos metadados. Ler cookies torna as páginas dinâmicas. Não há prefixos de idioma ou URLs separadas para indexação de cada tradução. A primeira visita usa inglês, independentemente do idioma do navegador. O seletor mantém a rota e o tema atuais.

## Manutenção

Ao incluir um texto, adicione a chave nas duas entradas do dicionário. Ao incluir uma experiência, mantenha o mesmo slug e forneça o Markdown em português, a tradução em inglês e o resumo em `projects.ts`. Preserve datas, nomes, tecnologias e fatos; traduções não devem adicionar realizações profissionais.

Os arquivos de CV e imagens existentes são compartilhados pelos dois idiomas. Textos incorporados às imagens não são traduzidos. A página Sobre ainda informa mais de 5 anos, enquanto a Home informa mais de 6; essa diferença preexistente deve ser revisada pelo responsável pelo conteúdo.

## Validação da etapa

- Lint, TypeScript e build de produção passaram.
- Chrome headless: inglês e português em 320, 375, 768 e 1440 px, nos dois temas, sem overflow horizontal.
- Troca por teclado, persistência após recarregar, manutenção da rota e do tema.
- Home, Sobre e oito experiências: conteúdo e metadados no idioma selecionado.
- Cookie inválido usa inglês; slug inexistente exibe a página 404 traduzida.
- Navegação por teclado, âncoras, movimento reduzido e CV continuam funcionando.
- Nenhuma exceção não tratada foi observada no navegador.

Para repetir manualmente: abra uma sessão nova (inglês), use Tab e Enter no botão PT, navegue por Sobre e pelas experiências, recarregue e alterne os temas. Repita com EN e com as larguras acima. Confira o atributo `lang` no HTML e o título da aba em cada idioma.

Referência: https://nextjs.org/docs/app/api-reference/functions/cookies
