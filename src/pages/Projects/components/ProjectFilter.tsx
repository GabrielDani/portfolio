import { Filter } from "@/components/molecules/Filter";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/variants";

interface ProjectsFilterProps {
  techs: string[];
  current: string;
  onChange: (value: string) => void;
}

export function ProjectsFilter({
  techs,
  current,
  onChange,
}: ProjectsFilterProps) {
  return (
    <motion.div {...fadeIn} className="mt-6">
      <Filter techs={techs} current={current} onChange={onChange} />
    </motion.div>
  );
}
