"use client";

import type { MouseEvent } from "react";
import { Github, Linkedin } from "lucide-react";

import { socialLinks } from "@/data/portfolio";

const navigation = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Trajetória" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
    if (mobile) {
      event.currentTarget.closest("details")?.removeAttribute("open");
    }
  }

  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={mobile ? "mobile-link" : undefined}
          onClick={closeMobileMenu}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#inicio" aria-label="Ir para o início">
          Dony<span aria-hidden="true">.</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <NavigationLinks />
        </nav>

        <div className="header-social" aria-label="Redes sociais">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub de Dony">
            <Github aria-hidden="true" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Dony">
            <Linkedin aria-hidden="true" />
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu de navegação">
            <span />
            <span />
          </summary>
          <nav aria-label="Navegação mobile">
            <NavigationLinks mobile />
            <div className="mobile-social">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
