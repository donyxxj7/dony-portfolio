import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects } from "@/data/portfolio";

export function FeaturedProjects() {
  return (
    <section className="section shell" id="projetos" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="01 / Trabalho selecionado"
        title="Projetos tratados como produtos, não exercícios."
        description="Uma seleção de aplicações em que interface, regras de negócio, dados e publicação fazem parte do mesmo problema."
      />

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.name}>
            <article className={`project-case ${index % 2 ? "project-case--reverse" : ""}`}>
              <div className={`project-visual project-visual--${project.imageMode}`}>
                <div className="project-visual__chrome" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
                <div className="project-visual__image">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 58vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>

                <dl className="project-details">
                  <div>
                    <dt>Problema</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Solução</dt>
                    <dd>{project.solution}</dd>
                  </div>
                  <div>
                    <dt>Atuação</dt>
                    <dd>{project.role}</dd>
                  </div>
                </dl>

                <ul className="project-stack" aria-label={`Tecnologias de ${project.name}`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Ver projeto <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : null}
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    <Github aria-hidden="true" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
