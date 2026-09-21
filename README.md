<div align="center">

# Endony Paradela — Portfolio

**Software developer building digital products from concept to deployment.**

A product-focused portfolio featuring real projects across frontend, backend, data, integrations and deployment.

[Portfolio](https://donydev.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/donyzete/) · [GitHub](https://github.com/donyxxj7)

<br />

![Endony Paradela portfolio preview](./public/og-image-1200x630.png)

</div>

---

## About this project

This repository contains my personal portfolio, rebuilt to present software projects as **products**, not just as technology showcases.

The experience is designed around the work itself: what problem each project addresses, how the solution was structured, what I was responsible for and which technologies supported the implementation.

The current version prioritizes:

- a clean, editorial interface;
- real project context instead of generic skill ratings;
- responsive and accessible UI;
- centralized portfolio data for easier maintenance;
- SEO and social sharing metadata;
- a lightweight production setup.

## Featured work

| Project | Focus | Main stack |
| --- | --- | --- |
| **Meu Bairro Joinville** | Civic technology platform for reporting and visualizing urban issues | Next.js, Express, PostgreSQL, Cloudinary |
| **SweetFlow** | Operational workflow and team demand management | React, TypeScript, Fastify, Neon, Drizzle |
| **Furduncinho047** | Ticket sales, management and validation for automotive events | React, Express, tRPC, Drizzle |
| **Água Pura Joinville** | Commercial web experience for a local business | Next.js, TypeScript, Tailwind CSS |

More projects and project metadata live in `data/portfolio.ts`.

## Tech stack

**Core**

`Next.js 16` · `React 19` · `TypeScript` · `Tailwind CSS 4`

**Interface**

Responsive UI · semantic HTML · accessibility-focused interactions · Lucide React

**Quality**

TypeScript type checking · ESLint · Next.js production build

**Delivery**

Netlify · GitHub · environment-based site URL configuration

## Architecture

```text
.
├── app/                    # App Router, layout, metadata and global styles
├── components/             # Shared interface components
│   └── sections/           # Home page sections
├── data/
│   └── portfolio.ts        # Projects, stack and social links
├── lib/
│   └── site.ts             # Site URL and shared description
├── public/
│   ├── projects/           # Project artwork and screenshots
│   └── og-image-1200x630.png
├── netlify.toml
└── package.json
```

One of the main goals of this structure is keeping content separate from presentation. Projects, links and stack information can be updated centrally without rewriting the UI components.

## Running locally

### Requirements

- Node.js 20+
- npm

Clone the repository and install dependencies:

```bash
git clone https://github.com/donyxxj7/dony-portfolio.git
cd dony-portfolio
npm install
```

Create your local environment file:

**Windows PowerShell**

```powershell
Copy-Item .env.example .env.local
```

**macOS / Linux**

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` and start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Next.js development server |
| `npm run check` | Runs TypeScript checks and ESLint |
| `npm run build` | Creates the production build |
| `npm run start` | Runs the production server |

Before shipping changes, the recommended validation flow is:

```bash
npm run check
npm run build
```

## SEO & social sharing

The portfolio includes:

- canonical metadata;
- Open Graph metadata;
- Twitter/X large-image cards;
- a 1200×630 social preview;
- favicon;
- `robots.txt`;
- `sitemap.xml`;
- `Person` structured data.

The production environment should define:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This keeps canonical URLs, social previews, robots and sitemap aligned with the deployed domain.

## Deployment

The project is prepared for **Netlify**.

`netlify.toml` currently defines:

- `npm run build` as the build command;
- Node.js 20 as the runtime.

Set `NEXT_PUBLIC_SITE_URL` in the Netlify environment variables before deploying to production.

## Content principles

The portfolio intentionally avoids unverified claims.

Project descriptions should only include technologies, responsibilities, links, metrics and results that can be supported by the actual project. Inactive demo links should not be published as working deployments.

---

<div align="center">

Built and maintained by **Endony Paradela (Dony)**.

[View portfolio](https://donydev.netlify.app/) · [LinkedIn](https://www.linkedin.com/in/donyzete/) · [GitHub](https://github.com/donyxxj7)

</div>
