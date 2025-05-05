import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-muted hover:text-primary-light transition-colors";

  return (
    <header className="bg-surface text-body dark:bg-dark-surface dark:text-dark-text shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Gabriel Dani | Portfólio</h1>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-4">
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

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface dark:bg-dark-surface px-4 pb-4 space-x-4 space-y-2 text-end">
          <NavLink
            to="/"
            className={linkClass}
            end
            onClick={() => setIsOpen(false)}
          >
            Início
          </NavLink>
          <NavLink
            to="/sobre"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </NavLink>
          <NavLink
            to="/projetos"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Projetos
          </NavLink>
          <NavLink
            to="/contato"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Contato
          </NavLink>
        </div>
      )}
    </header>
  );
}
