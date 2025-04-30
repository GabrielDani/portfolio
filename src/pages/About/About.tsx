import { PageContainer } from "@/components/atoms/PageContainer";
import { Avatar } from "@/components/atoms/Avatar";
import { scaleIn } from "@/components/animations/variants";
import { motion } from "framer-motion";
import { AboutSkills } from "@/pages/About/components/AboutSkills";
import { AboutMainText } from "@/pages/About/components/AboutMainText";

export default function About() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center gap-8 md:flex-row lg:grid lg:grid-cols-3 lg:items-start w-full">
        <motion.div {...scaleIn} className="flex justify-center lg:justify-end">
          <Avatar imageSrc="aboutPhoto.jpg" alt="Gabriel Dani" />
        </motion.div>

        <AboutMainText />
      </div>

      <AboutSkills />
    </PageContainer>
  );
}
