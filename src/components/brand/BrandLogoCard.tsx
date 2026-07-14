import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/data/brandData";

interface Props {
  brand: Brand;
}

export default function BrandLogoCard({ brand }: Props) {
  const content = (
    <div className="group flex justify-center items-center">
      <div className="relative flex items-center justify-center rounded-full border border-(--color-border) bg-(--color-bg-surface) shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-(--color-brand) hover:shadow-brand h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={90}
          height={90}
          className="h-auto w-14 object-contain transition-all duration-300 group-hover:scale-110 sm:w-12 md:w-14 lg:w-16"
        />
      </div>
    </div>
  );

  if (brand.website) {
    return (
      <Link
        href={brand.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={brand.name}
      >
        {content}
      </Link>
    );
  }

  return content;
}
