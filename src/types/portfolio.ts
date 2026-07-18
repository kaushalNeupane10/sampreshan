export interface Portfolio {
  id: number;
  title: string;
  category_name: string;
  client_name: string;
  client_logo: string;
  year: string;
  description: string;
  url: string;
  image: string;
  is_studio_project: boolean;
}

export type PortfolioData = Portfolio[];
