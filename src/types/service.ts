export interface Service {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  icon: string | null;
  is_featured: boolean;
}

export type ServiceData = Service[];

export interface ServiceOption {
  id: number;
  name: string;
}

export type ServiceOptionData = ServiceOption[];
