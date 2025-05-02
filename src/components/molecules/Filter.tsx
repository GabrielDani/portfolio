import { Button } from "@/components/atoms/Button";

interface FilterProps {
  types: string[];
  current: string;
  onChange: (value: string) => void;
}

export function Filter({ types, current, onChange }: FilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      <Button onClick={() => onChange("all")} isActive={current === "all"}>
        Todos
      </Button>

      {types.map((type) => (
        <Button
          key={type}
          onClick={() => onChange(type)}
          isActive={current === type}
        >
          {type}
        </Button>
      ))}
    </div>
  );
}
