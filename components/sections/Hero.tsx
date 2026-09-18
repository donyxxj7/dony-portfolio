import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { socialLinks } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-meta">
        <span>Desenvolvedor de software</span>
        <span>Joinville, SC — Brasil</span>
      </div>

      <Reveal className="hero-copy">
        <p className="hero-kicker">Ideias precisam sair do rascunho.</p>
        <h1 id="hero-title">
          Eu transformo ideias em <em>produtos digitais</em> funcionais.
        </h1>
      </Reveal>

      <div className="hero-bottom">
        <Reveal className="hero-intro" delay={0.08}>
          <p>
            Da interface ao banco de dados, construo aplicações web completas
            com atenção à experiência, à arquitetura e à entrega.
          </p>
        </Reveal>

        <Reveal className="hero-actions" delay={0.14}>
          <a className="button button--primary" href="#projetos">
            Ver projetos <ArrowDownRight aria-hidden="true" />
          </a>
          <a
            className="button button--ghost"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin aria-hidden="true" /> LinkedIn
          </a>
          <a
            className="icon-button"
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir GitHub de Dony"
          >
            <Github aria-hidden="true" />
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      <div className="hero-rule" aria-hidden="true">
        <span>Conceito</span>
        <span>Produto</span>
        <span>Deploy</span>
      </div>
    </section>
  );
}
