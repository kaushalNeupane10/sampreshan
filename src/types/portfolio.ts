export interface Portfolio {
  id: number;
  title: string;
  category_name: string;
  client_name: string | null;
  client_logo: string | null;
  year: string;
  description: string;
  url: string;
  image: string | null;
  is_studio_project: boolean;
}

export type PortfolioData = Portfolio[];
