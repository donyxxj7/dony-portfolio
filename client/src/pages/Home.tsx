import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Github, Linkedin, Instagram, Mail, ExternalLink, ArrowRight } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 md:pt-16 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="space-y-2">
                <p className="text-primary text-lg font-medium">Olá, eu sou</p>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="gradient-text">Dony</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                  Full-Stack Developer
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                Desenvolvedor especializado em criar soluções digitais completas, desde aplicações web com{" "}
                <span className="text-primary font-semibold">React</span> e{" "}
                <span className="text-primary font-semibold">Node.js</span> até aplicativos móveis com{" "}
                <span className="text-primary font-semibold">Flutter</span>, para resolver problemas reais e
                gerar impacto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection("#projects")} className="group">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("#contact")}>
                  Entrar em Contato
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/donyxxj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/endony-paradela-rodrigues-5770312ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/donyy.xxj7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/dony-photo.jpg"
                  alt="Dony"
                  className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border-2 border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação, focado em criar interfaces e aplicações
              que não apenas funcionam bem, mas também resolvem problemas estratégicos. Busco constantemente
              novos desafios para aplicar e expandir minhas habilidades, seja no desenvolvimento full-stack,
              mobile com Flutter, ou análise de dados.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meu objetivo é entregar projetos que gerem impacto positivo e resultados concretos para clientes e
              usuários. Estou sempre aberto a novas oportunidades e colaborações que me permitam crescer como
              profissional e contribuir com soluções inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projetos que demonstram minhas habilidades em desenvolvimento full-stack, mobile e resolução de
              problemas complexos do mundo real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: Meu Bairro Joinville */}
            <Card className="group hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/30">MBJ</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Meu Bairro Joinville
                </CardTitle>
                <CardDescription>Plataforma de Gestão Urbana Participativa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Plataforma web full-stack com mapa interativo onde cidadãos podem reportar problemas urbanos
                  com geolocalização, e a gestão pública pode gerenciar solicitações através de um painel de
                  controle.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2: Alerta Inclusivo */}
            <Card className="group hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent/30">AI</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Alerta Inclusivo</CardTitle>
                <CardDescription>App de Emergência Acessível</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Aplicativo móvel em Flutter que permite comunicação de emergência com um toque, enviando
                  mensagem pré-configurada com localização GPS para contatos de confiança. Solução crucial para
                  pessoas com deficiência auditiva ou de fala.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">Dart</Badge>
                  <Badge variant="secondary">Geolocation</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3: LinkHub */}
            <Card className="group hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src="/linkhub.png"
                  alt="LinkHub"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">LinkHub Full-Stack</CardTitle>
                <CardDescription>Agregador de Links Personalizado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Aplicação full-stack completa, inspirada no Linktree, que permite criar e gerenciar uma página
                  de links personalizada. Construído do zero com back-end em Node.js/Express, banco de dados
                  SQLite, e painel de administração seguro com autenticação.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">SQLite</Badge>
                  <Badge variant="secondary">Auth</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://linkhub-0xw2.onrender.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Site
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://github.com/donyxxj7/linkhub-fullstack-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4: Cine-Info */}
            <Card className="group hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src="/cine-info.png"
                  alt="Cine-Info"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Cine-Info</CardTitle>
                <CardDescription>Buscador de Filmes Interativo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Aplicação web interativa que consome a API do TMDB para permitir que usuários descubram,
                  pesquisem e vejam detalhes sobre filmes. Auditado com notas excelentes no Lighthouse (90+ em
                  Performance e 100 em Acessibilidade).
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TMDB API</Badge>
                  <Badge variant="secondary">Responsive</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://infocine.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Site
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/donyxxj7/cine-info" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 5: Bagdzunhas */}
            <Card className="group hover:border-primary transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src="/bagdzunhas.png"
                  alt="Bagdzunhas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Site Showcase para Manicure
                </CardTitle>
                <CardDescription>Portfólio Digital Profissional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Portfólio digital elegante para profissional autônoma, focado em exibir trabalhos e capturar
                  clientes através de formulários com integração ao WhatsApp. Design focado na identidade da
                  cliente.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">WhatsApp API</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://bagdzunhas.store/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Site
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href="https://github.com/donyxxj7/bagdzunhas-projeto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Minhas Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "HTML5", level: "Avançado" },
                { name: "CSS3", level: "Avançado" },
                { name: "JavaScript", level: "Avançado" },
                { name: "React", level: "Avançado" },
                { name: "Next.js", level: "Intermediário" },
                { name: "Node.js", level: "Avançado" },
                { name: "Express", level: "Avançado" },
                { name: "PostgreSQL", level: "Intermediário" },
                { name: "SQLite", level: "Intermediário" },
                { name: "Flutter", level: "Intermediário" },
                { name: "Dart", level: "Intermediário" },
                { name: "Python", level: "Básico" },
                { name: "Git", level: "Avançado" },
                { name: "Tailwind CSS", level: "Avançado" },
                { name: "REST APIs", level: "Avançado" },
                { name: "Responsive Design", level: "Avançado" },
              ].map((skill) => (
                <Card
                  key={skill.name}
                  className="text-center hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <CardDescription className="text-xs">{skill.level}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">O Que Dizem Meus Clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feedback de clientes satisfeitos com os projetos desenvolvidos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>Ana Bagdzinski</CardTitle>
                <CardDescription>Cliente - Site Bagdzunhas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "Minha experiência com o site que você criou foi muito boa, me ajudou a me organizar melhor, e
                  também me deu mais flexibilidade na hora de agendar meus atendimentos."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle>Franklin</CardTitle>
                <CardDescription>Cliente - App Alerta Inclusivo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">
                  "O app 'Alerta Inclusivo' foi uma iniciativa incrível do Dony. Ele demonstrou não só capacidade
                  técnica, mas também uma enorme empatia ao desenvolver uma ferramenta que pode realmente fazer a
                  diferença para a segurança da comunidade surda."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Vamos Trabalhar Juntos?</h2>
              <p className="text-lg text-muted-foreground">
                Estou interessado em oportunidades freelance e aberto a novas colaborações. Envie sua ideia ou
                proposta!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:contato@donydev.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/endony-paradela-rodrigues-5770312ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              <a
                href="https://github.com/donyxxj7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/endony-paradela-rodrigues-5770312ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="https://www.instagram.com/donyy.xxj7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Dony. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Desenvolvido com React, TypeScript e Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

