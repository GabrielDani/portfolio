import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/variants";
import { SocialLinks } from "@/components/molecules/SocialLinks";

export function HomeSocial() {
  return (
    <motion.div {...fadeIn} className="mt-8">
      <SocialLinks />
    </motion.div>
  );
}
