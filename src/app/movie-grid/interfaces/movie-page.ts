import { Movie } from './movie';

export interface MoviePage {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<Movie>;
}
