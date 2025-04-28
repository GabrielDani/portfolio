interface HeadingProps {
  level: 1 | 2;
  text: string;
  variant?: "subheading";
}

export function Heading({ level, text, variant }: HeadingProps) {
  const Tag = level === 1 ? "h1" : "h2";
  const classes =
    level === 1
      ? "text-4xl font-bold text-primary"
      : variant === "subheading"
      ? "text-lg text-muted"
      : "text-2xl text-primary";

  return <Tag className={classes}>{text}</Tag>;
}
