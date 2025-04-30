interface ParagraphProps {
  text: string | React.ReactNode;
  className?: string;
}

export function Paragraph({ text, className = "" }: ParagraphProps) {
  return <p className={`max-w-xl text-muted ${className}`}>{text}</p>;
}
