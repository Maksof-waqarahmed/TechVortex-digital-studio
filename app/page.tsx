

import { HeroSection } from "@/components/hero-section";
import { Header } from "@/components/nav-bar";
import Services from "@/components/services";

export default function Home() {
  return (<div>
    <Header />
    <HeroSection/>
    <Services />
  </div>);
}
