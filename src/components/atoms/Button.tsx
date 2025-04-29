interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  variant?: "default" | "primary-outline";
}

export function Button({
  children,
  onClick,
  isActive = false,
  className = "",
  variant = "default",
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md border font-medium transition hover:cursor-pointer";

  const variants = {
    default: isActive
      ? "bg-primary text-white text-sm"
      : "bg-surface dark:bg-dark-surface text-primary text-sm hover:bg-primary-light hover:text-white",
    "primary-outline":
      "border border-primary text-primary hover:bg-primary-light hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-dark",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
