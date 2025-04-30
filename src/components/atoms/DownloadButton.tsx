interface DownloadButtonProps {
  file: string;
  label: string;
}

export function DownloadButton({ file, label }: DownloadButtonProps) {
  return (
    <a
      href={file}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-dark"
    >
      {label}
    </a>
  );
}
