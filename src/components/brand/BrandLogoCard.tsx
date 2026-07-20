import Image from "next/image";
import { Logo } from "@/types/logo";

interface Props {
  brand: Logo;
}

export default function BrandLogoCard({ brand }: Props) {
  return (
    <div className="flex justify-center">
      <div className="group relative inline-flex">
        <div
          className="shadow-sm hover:shadow-brand flex h-16 w-16 items-center justify-center rounded-full border border-border bg-bg-surface transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-brand focus-within:-translate-y-2 focus-within:border-brand focus-within:shadow-brand sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
          tabIndex={0}
          aria-label={brand.company_name}
        >
          <Image
            src={brand.logo}
            alt={brand.company_name}
            width={90}
            height={90}
            className="h-auto w-10 object-contain transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110 sm:w-12 md:w-14 lg:w-16"
          />
        </div>

        {/* Company Name Tooltip */}
        <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-max max-w-45 -translate-x-1/2 translate-y-2 rounded-lg bg-neutral-900 px-3 py-2 text-center text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          {brand.company_name}

          <span className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-neutral-900" />
        </div>
      </div>
    </div>
  );
}
