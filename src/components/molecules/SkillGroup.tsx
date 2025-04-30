interface SkillGroupProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

export function SkillGroup({ title, skills, icon }: SkillGroupProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg text-start font-semibold text-secondary mb-3 flex items-center gap-2">
        {icon || null}
        {title}
      </h3>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-surface dark:bg-dark-surface py-2 px-4 rounded-md shadow-sm text-sm text-on-secondary hover:shadow-md hover:scale-105 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
