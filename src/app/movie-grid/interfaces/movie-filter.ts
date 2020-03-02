export interface MovieFilter {
  page: number;
  certificationCountry: string;
  certification: string;
  sortBy: string;
  includeAdult: boolean;
  movieRatingMinValue: number;
  movieRatingMaxValue: number;
}
