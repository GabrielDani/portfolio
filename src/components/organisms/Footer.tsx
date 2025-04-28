export function Footer() {
  return (
    <footer className="bg-surface text-muted dark:bg-dark-surface dark:text-dark-muted border-t border-border text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
