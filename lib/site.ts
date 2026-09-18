const fallbackUrl = "http://localhost:3000";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  fallbackUrl
).replace(/\/$/, "");

export const siteDescription =
  "Portfólio de Endony Paradela, desenvolvedor de software que transforma ideias em produtos digitais funcionais, do conceito ao deploy.";
