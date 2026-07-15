export interface ApiResponse<T> {
  success: boolean;
  status_code: number;
  message: string;
  results: T;
  pagination: {
    count: number;
    current_page: number;
    page_size: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
  };
}
