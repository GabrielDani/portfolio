import { Link } from "react-router-dom";
import { Project } from "@/types/project";
import { Paragraph } from "../atoms/Paragraph";

export function ProjectCard({
  title,
  description,
  techs,
  link,
  thumbnail,
}: Project) {
  const isInternal = link.startsWith("/");
  const wrapperClass =
    "block bg-surface dark:bg-dark-surface p-6 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1";

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isInternal ? (
      <Link to={link} className={wrapperClass}>
        {children}
      </Link>
    ) : (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        {children}
      </a>
    );

  return (
    <Wrapper>
      {thumbnail && (
        <img
          src={thumbnail}
          alt={`Preview do projeto ${title}`}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <Paragraph text={description} className="text-sm mb-4" />
      <ul className="flex flex-wrap gap-2 text-sm text-primary-dark">
        {techs.map((tech) => (
          <li
            key={tech}
            className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
