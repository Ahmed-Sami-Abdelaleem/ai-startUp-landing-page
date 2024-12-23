import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Testimonials } from "@/sections/Testimonials";
import { Header } from "../sections/Header";
import { LogoTicker } from "../sections/LogoTicker";
function page() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default page;
