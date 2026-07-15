export interface Logo {
  id: number;
  name: string;
  company_name: string;
  display_name: string;
  logo: string;
}

export type LogosData = Logo[];

export interface LogoApiResponse<T> {
  success: boolean;
  status_code: number;
  message: string;
  data: T;
}
