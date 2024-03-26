import { CardHoverEffectDemo } from "@/components/FeatureCourse";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// import { WhyChooseUs } from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
    <HeroSection />
      <CardHoverEffectDemo/>
      <WhyChooseUs />
    </>
  );
}
