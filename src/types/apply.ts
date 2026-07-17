export interface CareerApplyPayload {
  full_name: string;
  email: string;
  phone_number: string;
  cover_letter: string;
  cv: File;
  website?: string;
}

export interface CareerApplication extends CareerApplyPayload {
  id: number;
  created_at: string;
  updated_at: string;
}

export type CareerApplicationList = CareerApplication[];
