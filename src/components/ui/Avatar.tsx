export function Avatar({ icon }: { icon: string }) {
  return (
    <div
      role="img"
      aria-label="Avatar programador"
      className="w-32 h-32 bg-primary-light rounded-full flex items-center justify-center text-white text-5xl font-bold"
    >
      <span>{icon}</span>
    </div>
  );
}
