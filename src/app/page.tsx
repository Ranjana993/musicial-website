import { CardHoverEffectDemo } from "@/components/FeatureCourse";
import { HeroSection } from "@/components/HeroSection";
import { Testimonial } from "@/components/Testimonial";
import UpcomingWbinar from "@/components/UpcomingWbinar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SparklesPreview } from "@/components/sparkles";


export default function Home() {
  return (
    <>
      <HeroSection />
      <CardHoverEffectDemo />
      <WhyChooseUs />
      <Testimonial />
      <UpcomingWbinar />
      <SparklesPreview />
    </>
  );
}
