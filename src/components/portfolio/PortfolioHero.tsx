import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/portfolio/portfolios.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-[75%_center] sm:object-center"
        />
      </div>

      {/* Gradient overlay for depth + contrast */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-black/20 to-black/60" />

      <div className="container-custom px-5">
        <div className="flex min-h-[70vh] items-center py-16 sm:min-h-[80vh] sm:py-20 lg:min-h-screen lg:py-24" />
      </div>
    </section>
  );
}
