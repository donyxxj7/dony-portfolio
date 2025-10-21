// Salve em: src/components/sections/SkillsSection.tsx

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsSection() {
  const skills = [
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
  ];

  return (
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
            {skills.map((skill) => (
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
  );
}