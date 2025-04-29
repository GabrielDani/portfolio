import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

interface CopyButtonProps {
  value: string;
  label?: string;
}

export function CopyButton({ value, label = "Copiar" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Falha ao copiar. Copie manualmente.");
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copiar ${label}`}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md text-primary border-primary hover:bg-primary-light hover:text-white transition-colors"
    >
      {copied ? <FaCheck /> : <FaCopy />}
      {copied ? "Copiado!" : label}
    </button>
  );
}
