interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}

export function Button({
  children,
  onClick,
  isActive = false,
  className = "",
}: ButtonProps) {
  const base = "px-4 py-2 rounded-md border text-sm font-medium transition";
  const active = isActive
    ? "bg-primary text-white"
    : "bg-surface dark:bg-dark-surface text-primary hover:bg-primary-light hover:text-white";

  return (
    <button onClick={onClick} className={`${base} ${active} ${className}`}>
      {children}
    </button>
  );
}
