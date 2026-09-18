import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { Stack } from "@/components/sections/Stack";
import { socialLinks } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Endony Paradela",
    alternateName: "Dony",
    url: siteUrl,
    jobTitle: "Desenvolvedor de software",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Joinville",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    sameAs: [socialLinks.github, socialLinks.linkedin],
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Desenvolvimento de produtos digitais",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <FeaturedProjects />
        <Journey />
        <Stack />
        <OtherProjects />
        <About />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
