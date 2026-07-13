import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <Services />
      <WhyChoose />
    </>
  );
}