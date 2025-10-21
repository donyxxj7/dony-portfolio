// Salve em: src/components/sections/ProjectsSection.tsx

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos que demonstram minhas habilidades em desenvolvimento
            full-stack, mobile e resolução de problemas complexos do mundo real.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:border-primary transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src="/mbj.webp"
                alt="Meu Bairro Joinville"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width="1366"
                height="655"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Meu Bairro Joinville
              </CardTitle>
              <CardDescription>
                Plataforma de Gestão Urbana Participativa
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-sm text-muted-foreground flex-grow">
                Plataforma web full-stack com mapa interativo onde cidadãos
                podem reportar problemas urbanos com geolocalização, e a gestão
                pública pode gerenciar solicitações através de um painel de
                controle.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://meubairrojoinville.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Site
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://github.com/donyxxj7/meu-bairro-joinville"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Código
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:border-primary transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src="/alerta.webp"
                alt="Alerta Inclusivo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width="411"
                height="395"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Alerta Inclusivo
              </CardTitle>
              <CardDescription>App de Emergência Acessível</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-sm text-muted-foreground flex-grow">
                Aplicativo móvel em Flutter que permite comunicação de
                emergência com um toque, enviando mensagem pré-configurada com
                localização GPS para contatos de confiança. Solução crucial para
                pessoas com deficiência auditiva ou de fala.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">Dart</Badge>
                <Badge variant="secondary">Geolocation</Badge>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://github.com/donyxxj7/alerta-inclusivo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Código
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:border-primary transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src="/LinkHub.webp"
                alt="LinkHub"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width="1919"
                height="942"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                LinkHub Full-Stack
              </CardTitle>
              <CardDescription>
                Agregador de Links Personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-sm text-muted-foreground flex-grow">
                Aplicação full-stack completa, inspirada no Linktree, que
                permite criar e gerenciar uma página de links personalizada.
                Construído do zero com back-end em Node.js/Express, banco de
                dados SQLite, e painel de administração seguro com autenticação.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">SQLite</Badge>
                <Badge variant="secondary">Auth</Badge>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://linkhub-0xw2.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Site
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://github.com/donyxxj7/linkhub-fullstack-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Código
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:border-primary transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src="/cine-info.webp"
                alt="Cine-Info"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width="1920"
                height="1080"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Cine-Info
              </CardTitle>
              <CardDescription>Buscador de Filmes Interativo</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-sm text-muted-foreground flex-grow">
                Aplicação web interativa que consome a API do TMDB para permitir
                que usuários descubram, pesquisem e vejam detalhes sobre filmes.
                Auditado com notas excelentes no Lighthouse (90+ em Performance
                e 100 em Acessibilidade).
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TMDB API</Badge>
                <Badge variant="secondary">Responsive</Badge>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://infocine.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Site
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://github.com/donyxxj7/cine-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Código
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:border-primary transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src="/bagdzunhas.webp"
                alt="Bagdzunhas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width="1920"
                height="943"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Site Showcase para Manicure
              </CardTitle>
              <CardDescription>Portfólio Digital Profissional</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-sm text-muted-foreground flex-grow">
                Portfólio digital elegante para profissional autônoma, focado em
                exibir trabalhos e capturar clientes através de formulários com
                integração ao WhatsApp. Design focado na identidade da cliente.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">WhatsApp API</Badge>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://bagdzunhas.store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Site
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://github.com/donyxxj7/bagdzunhas-projeto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Código
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
