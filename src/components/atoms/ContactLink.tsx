interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}

export function ContactLink({
  href,
  icon,
  label,
  external = false,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="hover:text-primary-dark transition-colors"
    >
      {icon}
    </a>
  );
}
