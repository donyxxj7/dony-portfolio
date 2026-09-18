import { SectionHeading } from "@/components/SectionHeading";

const journey = [
  {
    marker: "Agora",
    title: "Engenharia de Software",
    description:
      "Formação em andamento, aprofundando fundamentos de arquitetura, qualidade e desenvolvimento de sistemas.",
  },
  {
    marker: "Na prática",
    title: "Produtos web de ponta a ponta",
    description:
      "Projetos que atravessam descoberta, interface, backend, banco de dados, integrações e deploy.",
  },
  {
    marker: "Direção",
    title: "Decisões mais completas",
    description:
      "Evolução de páginas isoladas para aplicações com fluxos, regras de negócio e operação real.",
  },
];

export function Journey() {
  return (
    <section className="section shell journey" id="experiencia" aria-labelledby="journey-title">
      <SectionHeading
        id="journey-title"
        eyebrow="02 / Trajetória"
        title="Aprendizado aplicado em produtos reais."
      />

      <ol className="timeline">
        {journey.map((item) => (
          <li key={item.title}>
            <div className="timeline-entry">
              <span className="timeline-marker">{item.marker}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
