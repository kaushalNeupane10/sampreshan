import BrandShowcase from "@/components/landing/BrandShowCase";
import HeroSection from "@/components/landing/HeroSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <BrandShowcase />
      <TestimonialsSection />
    </>
  );
}
