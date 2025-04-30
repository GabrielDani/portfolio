// src/components/atoms/ButtonLink.tsx
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  text: string;
  variant: "primary" | "outline";
  download?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  text,
  variant,
  download = false,
  icon,
  className = "",
}: ButtonLinkProps) {
  const baseClass =
    "inline-flex items-center gap-2 font-semibold py-2 px-6 rounded-md transition-colors";
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    outline:
      "border border-primary text-primary hover:bg-primary-light hover:text-white",
  };

  return (
    <a
      href={href}
      download={download}
      target={download ? "_blank" : undefined}
      rel={download ? "noopener noreferrer" : undefined}
      className={`${baseClass} ${variants[variant]} ${className} focus:outline-none focus:ring-2 focus:ring-primary-dark`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </a>
  );
}
