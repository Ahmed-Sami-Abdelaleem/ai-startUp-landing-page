import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero";
import { Header } from "../sections/Header";
import { LogoTicker } from "../sections/LogoTicker";
import { Testimonials } from "../sections/Testimonials";
function page() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default page;
