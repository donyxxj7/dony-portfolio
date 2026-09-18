# Portfólio — Endony Paradela

Portfólio pessoal de Endony Paradela, desenvolvido para apresentar projetos de software como produtos completos: do problema e da experiência de uso até backend, dados, integrações e deploy.

![Preview social do portfólio de Endony Paradela](./public/og-image-1200x630.png)

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Rodando localmente

Requisitos:

- Node.js 20 ou superior
- npm

Instale as dependências:

```bash
npm install
```

Crie o arquivo de ambiente:

```bash
Copy-Item .env.example .env.local
```

Atualize `NEXT_PUBLIC_SITE_URL` com a URL local ou pública desejada e inicie o projeto:

```bash
npm run dev
```

O site ficará disponível em [http://localhost:3000](http://localhost:3000).

## Qualidade e build

```bash
npm run check
npm run build
```

O comando `check` executa a verificação de tipos e o ESLint. O build usa o fluxo padrão do Next.js e gera a Home de forma estática.

## Estrutura

```text
app/                  página, layout, estilos e arquivos especiais de SEO
components/           componentes compartilhados
components/sections/  seções editoriais da Home
data/portfolio.ts     projetos, stack e links em uma fonte central
lib/site.ts           URL e descrição base do site
public/projects/      imagens reais ou marcas dos projetos apresentados
public/og-image-1200x630.png   imagem de compartilhamento social
```

## Conteúdo

Os projetos e links ficam centralizados em `data/portfolio.ts`. Para adicionar ou atualizar um projeto, edite esse arquivo sem precisar alterar os componentes de apresentação.

O site não publica métricas, depoimentos ou experiências profissionais não verificadas. Links de demonstração só devem ser adicionados quando estiverem ativos.

## SEO e compartilhamento

O projeto inclui:

- metadata do Next.js para title, description, canonical, Open Graph e Twitter/X;
- preview social em `public/og-image-1200x630.png`;
- favicon próprio em `app/icon.svg`;
- `robots.txt` e `sitemap.xml` gerados pelas convenções do App Router;
- dados estruturados do tipo `Person`.

Defina `NEXT_PUBLIC_SITE_URL` no ambiente de produção para que canonical, Open Graph, robots e sitemap usem o domínio correto.

## Deploy no Netlify

O arquivo `netlify.toml` define:

- build command: `npm run build`;
- runtime Node.js 20.

No Netlify, configure a variável `NEXT_PUBLIC_SITE_URL` com o domínio final do site. O framework é detectado automaticamente; não é necessário criar redirect de SPA para este projeto Next.js.
