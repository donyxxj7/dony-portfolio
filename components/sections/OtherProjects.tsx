import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { otherProjects } from "@/data/portfolio";

export function OtherProjects() {
  return (
    <section className="section shell" aria-labelledby="other-projects-title">
      <SectionHeading
        id="other-projects-title"
        eyebrow="04 / Arquivo"
        title="Outros projetos e explorações."
      />

      <div className="other-projects">
        {otherProjects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.04}>
            <a
              className="other-project"
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="other-project__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <ul aria-label={`Tecnologias de ${project.name}`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
