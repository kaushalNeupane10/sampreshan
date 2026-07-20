export type PreferredContactMethod = "email" | "phone" | "whatsapp";

export interface ContactInquiryRequest {
  name: string;
  email: string;
  phone_number?: string;
  company_name?: string;
  service?: number | null;
  is_studio: boolean;
  budget_range?: string;
  preferred_contact_method?: PreferredContactMethod;
  message: string;
  source_page?: string;
  privacy_accepted: true;
  website?: string;
}

export interface ContactInquiryCreated {
  id: number;
  status: "new";
  created_at: string;
}

export interface ContactInquiryErrorResponse {
  success: false;
  status_code: number;
  message: string;
  data: null;
  errors?: Record<string, string | string[] | unknown> | null;
}
