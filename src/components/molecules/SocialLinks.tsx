import { github, linkedin } from "@/data/contacts";
import { Github, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex gap-4 text-primary">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para GitHub"
      >
        <Github size={28} />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para LinkedIn"
      >
        <Linkedin size={28} />
      </a>
    </div>
  );
}
