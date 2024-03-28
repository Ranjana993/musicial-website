import { CardHoverEffectDemo } from "@/components/FeatureCourse";
import { HeroSection } from "@/components/HeroSection";
import { Testimonial } from "@/components/Testimonial";
import UpcomingWbinar from "@/components/UpcomingWbinar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// import { WhyChooseUs } from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <CardHoverEffectDemo />
      <WhyChooseUs />
      <Testimonial />
      <UpcomingWbinar/>
    </>
  );
}
