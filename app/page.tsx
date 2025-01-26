import { HeroSection } from "@/components/hero-section";
import { Industries } from "@/components/industries";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <Services />
      <Industries />
    </div>
  );
}
