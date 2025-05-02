import { Filter } from "@/components/molecules/Filter";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/variants";

interface ProjectsFilterProps {
  types: string[];
  current: string;
  onChange: (value: string) => void;
}

export function ProjectsFilter({
  types,
  current,
  onChange,
}: ProjectsFilterProps) {
  return (
    <motion.div {...fadeIn}>
      <Filter types={types} current={current} onChange={onChange} />
    </motion.div>
  );
}
