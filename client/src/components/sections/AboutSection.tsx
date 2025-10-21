
export default function AboutSection() {
  return (
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
  );
}