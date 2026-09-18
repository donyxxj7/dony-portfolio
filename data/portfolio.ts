export type FeaturedProject = {
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  image: string;
  imageAlt: string;
  imageMode: "cover" | "contain";
  repositoryUrl: string;
  liveUrl?: string;
};

export const socialLinks = {
  github: "https://github.com/donyxxj7",
  linkedin: "https://www.linkedin.com/in/donyzete/",
  whatsapp:
    "https://wa.me/5547997051529?text=Ol%C3%A1%20Dony%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Meu Bairro Joinville",
    category: "Tecnologia cívica · Full-stack",
    summary:
      "Uma plataforma para registrar e visualizar ocorrências urbanas nos bairros de Joinville.",
    problem:
      "Problemas locais como buracos, iluminação e lixo precisam de um registro claro, visual e associado ao território.",
    solution:
      "A aplicação reúne mapa interativo, geolocalização, formulário de ocorrências, upload de imagens e notificações por e-mail.",
    role:
      "Construção do produto full-stack, da interface e integrações à API, persistência e publicação.",
    stack: ["Next.js", "Express", "PostgreSQL", "Cloudinary"],
    image: "/projects/meu-bairro.png",
    imageAlt:
      "Tela do Meu Bairro Joinville com mapa da cidade e formulário de ocorrência",
    imageMode: "cover",
    repositoryUrl: "https://github.com/donyxxj7/meu-bairro-joinville",
  },
  {
    name: "SweetFlow",
    category: "Operações · Produto full-stack",
    summary:
      "Um sistema para organizar demandas operacionais e acompanhar o trabalho entre diferentes equipes.",
    problem:
      "Demandas distribuídas entre setores perdem contexto, prioridade e visibilidade ao longo da execução.",
    solution:
      "O produto conecta autenticação, indicadores operacionais e um fluxo Kanban persistido em banco de dados.",
    role:
      "Arquitetura da aplicação, experiência do dashboard, API, autenticação e modelagem de dados.",
    stack: ["React", "TypeScript", "Fastify", "Neon + Drizzle"],
    image: "/projects/sweetflow.png",
    imageAlt: "Símbolo visual do produto SweetFlow",
    imageMode: "contain",
    repositoryUrl: "https://github.com/donyxxj7/SweetFlow",
  },
  {
    name: "Furduncinho047",
    category: "Eventos · Plataforma de ingressos",
    summary:
      "Uma plataforma de venda, gestão e validação de ingressos para um evento automotivo.",
    problem:
      "A operação precisava reunir compra, confirmação de pagamento e controle de acesso em um único fluxo.",
    solution:
      "O sistema cobre cadastro, pagamento via Pix, comprovantes, ingressos com QR Code e área administrativa para validação.",
    role:
      "Desenvolvimento da jornada do participante, painel administrativo, regras de validação e infraestrutura de dados.",
    stack: ["React", "Express", "tRPC", "Drizzle"],
    image: "/projects/furduncinho.webp",
    imageAlt: "Marca circular do projeto Furduncinho047",
    imageMode: "contain",
    repositoryUrl: "https://github.com/donyxxj7/furduncinho047",
  },
  {
    name: "Água Pura Joinville",
    category: "Negócio local · Experiência web",
    summary:
      "Um site comercial para apresentar catálogo, serviços e canais de atendimento de uma empresa local.",
    problem:
      "A presença digital precisava tornar produtos, manutenção e contatos comerciais fáceis de encontrar.",
    solution:
      "Uma experiência responsiva com catálogo, conteúdo institucional, contatos segmentados e imagens reais da operação.",
    role:
      "Estratégia da página, interface, estrutura de conteúdo, responsividade e publicação.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/agua-pura.jpeg",
    imageAlt: "Fachada da Água Pura Purificadores de Água em Joinville",
    imageMode: "cover",
    repositoryUrl: "https://github.com/donyxxj7/agua-pura-joinville",
  },
];

export const otherProjects = [
  {
    name: "Reuse Jlle",
    description:
      "Plataforma para doação e reutilização de itens em Joinville, aproximando disponibilidade e necessidade.",
    stack: ["JavaScript", "Produto social"],
    repositoryUrl: "https://github.com/donyxxj7/reuse-jlle",
  },
  {
    name: "Bagdz Unhas",
    description:
      "Presença digital para uma profissional de manicure, com portfólio de serviços e contato orientado a agendamento.",
    stack: ["JavaScript", "UX comercial"],
    repositoryUrl: "https://github.com/donyxxj7/bagdzunhas-projeto",
  },
  {
    name: "Alerta Inclusivo",
    description:
      "Projeto mobile voltado a acessibilidade e comunicação inclusiva, preservado como parte da evolução técnica.",
    stack: ["Dart", "Mobile"],
    repositoryUrl: "https://github.com/donyxxj7/alerta-inclusivo",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "UI responsiva"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Fastify", "APIs REST", "Autenticação"],
  },
  {
    title: "Dados",
    items: ["PostgreSQL", "Neon", "Drizzle", "SQLite", "MySQL"],
  },
  {
    title: "Entrega",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Integrações"],
  },
];
