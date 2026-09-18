import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="section shell about" id="sobre" aria-labelledby="about-title">
      <Reveal className="about-heading">
        <p className="section-eyebrow">05 / Sobre</p>
        <h2 id="about-title">Código é só uma parte do produto.</h2>
      </Reveal>

      <Reveal className="about-copy" delay={0.08}>
        <p>
          Sou Endony Paradela, ou Dony. Estudo Engenharia de Software e gosto
          de construir projetos entendendo o caminho inteiro: o problema, a
          experiência de uso, as regras do sistema e o que precisa acontecer
          para colocar tudo no ar.
        </p>
        <p>
          Trabalho entre frontend e backend, conectando interfaces a APIs,
          autenticação, bancos de dados e integrações. Meu foco é transformar
          uma ideia em algo claro, funcional e simples de manter.
        </p>
        <a href="#contato">
          Vamos conversar <ArrowDownRight aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}
