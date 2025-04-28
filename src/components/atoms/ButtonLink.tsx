interface ButtonLinkProps {
  href: string;
  text: string;
  variant: "primary" | "outline";
}

export function ButtonLink({ href, text, variant }: ButtonLinkProps) {
  const baseClass = "font-semibold py-2 px-6 rounded-md transition-colors";
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    outline:
      "border border-primary text-primary hover:bg-primary-light hover:text-white",
  };

  return (
    <a
      href={href}
      className={`${baseClass} ${variants[variant]} focus:outline-none focus:ring-2 focus:ring-primary-dark`}
    >
      {text}
    </a>
  );
}
