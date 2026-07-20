export interface PackageInquiryRequest {
  package: number;
  name: string;
  email: string;
  phone_number?: string;
  company_name?: string;
  message: string;
  website?: string;
}

export interface PackageInquiryCreated {
  id: number;
  package: number;
  status: "new";
  created_at: string;
}

export interface PackageInquiryErrorResponse {
  success: false;
  status_code: number;
  message: string;
  data: null;
  errors?: Record<string, string | string[] | unknown> | null;
}
