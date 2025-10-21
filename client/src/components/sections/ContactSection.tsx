import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const WhatsAppIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    className="w-5 h-5"
    {...props}
  >
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 12 12c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22a9.94 9.94 0 0 1-5.28-1.5l-5.67 1.48 1.52-5.5A9.97 9.97 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm4.93-7.37c-.26-.13-1.52-.75-1.75-.84-.23-.09-.4-.13-.57.13-.17.26-.65.84-.79 1-.15.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.23-1.48-1.38-1.74-.15-.26 0-.4.11-.52.12-.12.26-.3.38-.45.12-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.13-.57-1.35-.79-1.85-.2-.47-.41-.41-.57-.42h-.49c-.17 0-.44.06-.67.31s-.88.85-.88 2.07.9 2.4 1.02 2.57c.12.17 1.76 2.7 4.27 3.78.6.26 1.07.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-lg text-muted-foreground">
              Estou interessado em oportunidades freelance e aberto a novas
              colaborações. Entre em contato por um dos canais abaixo!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-green-600 hover:bg-green-700 text-white transition-transform hover:scale-105 flex items-center gap-2"
            >
              <a
                href="https://wa.me/5547997051529"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="text-white" />
                WhatsApp
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="mailto:endonyparadela2007@gmail.com" className="flex items-center gap-2">
                <Mail className="hover:shadow-md transition-transform hover:scale-105" />
                Enviar E-mail
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/donyxxj7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/endony-paradela-rodrigues-5770312ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/donyy.xxj7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
