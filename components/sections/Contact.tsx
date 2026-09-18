import { ArrowUpRight, Github, Linkedin, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { socialLinks } from "@/data/portfolio";

const contacts = [
  {
    label: "LinkedIn",
    detail: "Perfil profissional",
    href: socialLinks.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    detail: "Código e projetos",
    href: socialLinks.github,
    icon: Github,
  },
  {
    label: "WhatsApp",
    detail: "Conversa direta",
    href: socialLinks.whatsapp,
    icon: MessageCircle,
  },
];

export function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="shell contact-inner">
        <Reveal className="contact-copy">
          <p className="section-eyebrow">06 / Contato</p>
          <h2 id="contact-title">
            Tem um projeto, uma oportunidade ou uma boa ideia?
          </h2>
          <p>Vamos conversar sobre como transformar isso em produto.</p>
        </Reveal>

        <div className="contact-links">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Reveal key={contact.label} delay={index * 0.04}>
                <a href={contact.href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" />
                  <span>
                    <strong>{contact.label}</strong>
                    <small>{contact.detail}</small>
                  </span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
