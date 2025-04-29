import { Button } from "@/components/atoms/Button";

interface FilterProps {
  techs: string[];
  current: string;
  onChange: (value: string) => void;
}

export function Filter({ techs, current, onChange }: FilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      <Button onClick={() => onChange("all")} isActive={current === "all"}>
        Todos
      </Button>

      {techs.map((tech) => (
        <Button
          key={tech}
          onClick={() => onChange(tech)}
          isActive={current === tech}
        >
          {tech}
        </Button>
      ))}
    </div>
  );
}
