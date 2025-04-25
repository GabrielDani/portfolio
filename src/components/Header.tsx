import { NavLink } from "react-router-dom";

export function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-muted hover:text-primary-dark transition-colors";

  return (
    <header className="bg-background text-body dark:bg-dark-surface dark:text-dark-text shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <nav className="space-x-4">
          <NavLink to="/" className={linkClass} end>
            Início
          </NavLink>
          <NavLink to="/sobre" className={linkClass}>
            Sobre
          </NavLink>
          <NavLink to="/projetos" className={linkClass}>
            Projetos
          </NavLink>
          <NavLink to="/contato" className={linkClass}>
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
