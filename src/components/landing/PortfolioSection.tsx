import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { portfolioData } from "@/data/portfolioData";

export default function PortfolioSection() {
  return (
    <section className="bg-sunken relative overflow-hidden py-20 md:py-28">
      {/* Decorative Subtle Background Accents */}
      <div className="bg-brand-subtle absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="bg-accent-subtle absolute bottom-0 right-1/4 h-96 w-96 rounded-full blur-3xl pointer-events-none opacity-30" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <h2 className="mt-4 text-3xl font-black tracking-tight text-text-heading sm:text-4xl lg:text-5xl leading-tight text-pretty">
            Work That Speaks for Itself
          </h2>
        </div>

        {/* Portfolio Grid Layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {portfolioData.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
}
