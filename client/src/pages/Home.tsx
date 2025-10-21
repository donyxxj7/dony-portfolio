// Cole este código final em: src/pages/Home.tsx

import React, { useEffect, useState, Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Importa as seções com lazy loading
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

// Componente "esqueleto" para mostrar enquanto as seções carregam
const SectionLoader = () => (
  <div className="container py-20">
    <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
    <Skeleton className="h-4 w-3/4 mx-auto" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  </div>
);

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
                <a href="https://github.com/donyxxj7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Acessar meu perfil no GitHub"><Github className="h-6 w-6" /></a>
                <a href="https://www.linkedin.com/in/endony-paradela-rodrigues-5770312ba/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Acessar meu perfil no LinkedIn"><Linkedin className="h-6 w-6" /></a>
                <a href="https://www.instagram.com/donyy.xxj7/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Acessar meu perfil no Instagram"><Instagram className="h-6 w-6" /></a>
              </div>
            </div>
            <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img src="/dony-photo.webp" alt="Dony" className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border-2 border-primary/20" width="810" height="1080" loading="eager" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seções Carregadas sob Demanda */}
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </Suspense>

      {/* Rodapé */}
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