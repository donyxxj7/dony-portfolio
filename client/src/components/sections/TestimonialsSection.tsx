// Salve em: src/components/sections/TestimonialsSection.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            O Que Dizem Meus Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback de clientes satisfeitos com os projetos desenvolvidos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle>Ana Bagdzinski</CardTitle>
              <CardDescription>Cliente - Site Bagdzunhas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                "Minha experiência com o site que você criou foi muito boa, me
                ajudou a me organizar melhor, e também me deu mais flexibilidade
                na hora de agendar meus atendimentos."
              </p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle>Franklin</CardTitle>
              <CardDescription>Cliente - App Alerta Inclusivo</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                "O app 'Alerta Inclusivo' foi uma iniciativa incrível do Dony.
                Ele demonstrou não só capacidade técnica, mas também uma enorme
                empatia ao desenvolver uma ferramenta que pode realmente fazer a
                diferença para a segurança da comunidade surda."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
