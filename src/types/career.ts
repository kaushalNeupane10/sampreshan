export interface Careers {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  employment_type_display: string;
  short_description: string;
  description: string;
  application_deadline: string;
}

export type CareersData = Careers[];
