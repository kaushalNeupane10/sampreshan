"use client";

import { useQuery } from "@tanstack/react-query";
import { gettestimonials } from "@/services/testimonials.service";
import { TestimonialsData } from "@/types/testimonials";
import { QUERY_KEYS } from "@/lib/react-query/querykeys";

export default function useTestimonials(initialData?: TestimonialsData) {
  return useQuery<TestimonialsData>({
    queryKey: QUERY_KEYS.testimonials,
    queryFn: gettestimonials,
    initialData,
  });
}
