export function Paragraph({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <p className={`max-w-xl text-muted ${className}`}>{text}</p>;
}
