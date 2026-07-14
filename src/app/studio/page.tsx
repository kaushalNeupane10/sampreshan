import StudioCard from "@/components/studio/StudioCard";
import StudioHero from "@/components/studio/StudioHero";
import { studioData } from "@/data/studio";

export default function page() {
  return (
    <>
      <StudioHero />
      <section className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {studioData.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </section>
    </>
  );
}
