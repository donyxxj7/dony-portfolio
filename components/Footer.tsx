import { socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} Endony Paradela</p>
        <div>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#inicio">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  );
}
