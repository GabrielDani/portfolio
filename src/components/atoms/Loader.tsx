export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Carregando"
      />

      <p className="text-primary font-medium">Carregando...</p>
    </div>
  );
}
