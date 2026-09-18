import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { stackGroups } from "@/data/portfolio";

export function Stack() {
  return (
    <section className="section shell" aria-labelledby="stack-title">
      <SectionHeading
        id="stack-title"
        eyebrow="03 / Ferramentas"
        title="Tecnologia escolhida pelo problema."
        description="A stack é parte da solução — não o ponto de partida da conversa."
      />

      <div className="stack-grid">
        {stackGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <article className="stack-group">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
