import { PageContainer } from "@/components/atoms/PageContainer";
import { HomeHeader } from "./components/HomeHeader";
import { HomeCTA } from "./components/HomeCTA";
import { HomeSocial } from "./components/HomeSocial";

export default function Home() {
  return (
    <PageContainer>
      <HomeHeader />
      <HomeCTA />
      <HomeSocial />
    </PageContainer>
  );
}
