export interface ApiResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}
