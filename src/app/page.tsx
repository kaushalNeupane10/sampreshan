import BrandShowcase from "@/components/landing/BrandShowCase";
import HeroSection from "@/components/landing/HeroSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import ServicesSection from "@/components/landing/ServicesSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <BrandShowcase />
    </>
  );
}
