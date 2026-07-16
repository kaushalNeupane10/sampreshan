export interface teamMember {
  id: string;
  name: string;
  slug: string;
  job_title: string;
  business_area: string;
  business_area_display: string;
  short_bio: string;
  photo: string;
  linkedin_url: string;
  website_url: string;
  is_leadership: boolean;
  is_featured: boolean;
}

export type teamMemberData = teamMember[];
