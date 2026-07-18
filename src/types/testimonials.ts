export interface Testimonials {
  id: number;
  quote: string;
  person_name: string;
  job_title: string;
  company: string;
  avatar: string;
  client_logo: string | null;
  rating: number;
  source_url: string | null;
  service_slug: string | null;
  portfolio_id: number | null;
  is_studio: boolean;
  is_featured: boolean;
}

export type TestimonialsData = Testimonials[];
