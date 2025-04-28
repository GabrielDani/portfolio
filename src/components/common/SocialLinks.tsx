import { Github, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex gap-4 text-primary">
      <a
        href="https://github.com/GabrielDaniAz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para GitHub"
      >
        <Github size={28} />
      </a>
      <a
        href="https://linkedin.com/in/gabriel-dani-de-azevedo-a69740288"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para LinkedIn"
      >
        <Linkedin size={28} />
      </a>
    </div>
  );
}
